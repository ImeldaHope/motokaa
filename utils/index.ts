import { CarProps, FilterProps } from "@/types";
import { fleet } from "@/constants";

// Apply the search/filter params to a car list.
function applyFilters(cars: CarProps[], filters: FilterProps): CarProps[] {
  let out = cars;
  if (filters.manufacturer) {
    const make = filters.manufacturer.toLowerCase();
    out = out.filter((c) => c.make?.toLowerCase() === make);
  }
  if (filters.model) {
    const q = filters.model.toLowerCase();
    out = out.filter((c) => `${c.make} ${c.model}`.toLowerCase().includes(q));
  }
  if (filters.fuel) {
    const wantElectric = /elec/i.test(filters.fuel);
    out = out.filter(
      (c) => (c.fuel_type?.toLowerCase() === "electricity") === wantElectric
    );
  }
  if (filters.year) out = out.filter((c) => Number(c.year) === Number(filters.year));
  return out;
}

// Daily rental price, derived from the car's economy and age. mpg is capped so
// electric cars (which report a much higher MPGe) don't skew high.
export const calculateCarRent = (
  car: Pick<CarProps, "city_mpg" | "year">
) => {
  const base = 45;
  const mpgRate = Math.min(car.city_mpg ?? 24, 45) * 1.2;
  const age = Math.max(new Date().getFullYear() - car.year, 0);
  const ageDiscount = age * 1.5;
  return Math.max(Math.round(base + mpgRate - ageDiscount), 25);
};

// The catalogue. Sourced from the curated local fleet (no external API), then
// filtered by the search/filter params and paged by `limit` (Show more).
export async function fetchCars(filters: FilterProps): Promise<CarProps[]> {
  const matched = applyFilters(fleet, filters);
  return matched.slice(0, filters.limit || 12);
}

// Same-origin image path. The route handler (app/api/car-image) signs the real
// CarImages URL server-side (secret stays on the server) and proxies the bytes,
// or serves a local placeholder when keys/data are missing. Safe on the client.
export const carImagePath = (
  car: Pick<CarProps, "make" | "model" | "year">,
  view?: string
) => {
  const params = new URLSearchParams({
    make: car.make ?? "",
    model: car.model ?? "",
    year: String(car.year ?? ""),
  });
  if (view) params.set("view", view);
  return `/api/car-image?${params.toString()}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  return `${window.location.pathname}?${searchParams.toString()}`;
};
