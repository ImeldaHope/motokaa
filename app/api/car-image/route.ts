import { NextRequest, NextResponse } from "next/server";

// CarImages backdrop preset behind the car. Options: sand · mint · light · dark ·
// graphite · slate · sky · black. "sand" suits the warm bone/paper palette.
const IMAGE_BACKDROP = "sand";

// Fully server-side image proxy. Signs the CarImages URL (secret in a header),
// then fetches the image bytes and streams them back — so the browser only ever
// sees this same-origin route: no api_key, no secret, no CarImages URL leak.
// Falls back to the neutral placeholder on any miss.
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const make = sp.get("make");
  const model = sp.get("model");
  const year = sp.get("year");
  const view = sp.get("view");

  const fallback = NextResponse.redirect(
    new URL("/car-placeholder.svg", req.nextUrl.origin)
  );

  const key = process.env.CARIMAGES_API_KEY;
  const secret = process.env.CARIMAGES_API_SECRET;

  if (!key || !secret || !make || !model) return fallback;

  try {
    // 1. Ask CarImages for a signed URL (server-side; secret in header).
    const signUrl = new URL("https://carimagesapi.com/api/v1/signed-url");
    signUrl.searchParams.set("api_key", key);
    signUrl.searchParams.set("make", make);
    signUrl.searchParams.set("model", model);
    if (year) signUrl.searchParams.set("year", year);
    if (view) signUrl.searchParams.set("view", view);
    signUrl.searchParams.set("backdrop", IMAGE_BACKDROP);

    const signRes = await fetch(signUrl, {
      headers: { "X-Api-Secret": secret },
      next: { revalidate: 86400 },
    });
    if (!signRes.ok) return fallback;

    const body = (await signRes.text()).trim();
    let signed = body;
    try {
      const json = JSON.parse(body);
      signed = json.url || json.signed_url || json.urls?.[0] || body;
    } catch {
      /* body was already a raw URL */
    }
    if (!/^https?:\/\//.test(signed)) return fallback;

    // 2. Fetch the image bytes server-side and stream them back.
    const imgRes = await fetch(signed, { next: { revalidate: 86400 } });
    if (!imgRes.ok) return fallback;

    const contentType = imgRes.headers.get("content-type") || "image/webp";
    const buf = await imgRes.arrayBuffer();
    return new NextResponse(buf, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, immutable",
      },
    });
  } catch {
    return fallback;
  }
}
