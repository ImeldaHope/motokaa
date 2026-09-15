/** @type {import('next').NextConfig} */
const nextConfig = {
    // Next 16 auto-generates AGENTS.md/CLAUDE.md on build; opt out to keep the repo clean.
    agentRules: false,
    // Car images are served via the /api/car-image route (a same-origin redirect
    // to a signed CarImages URL), so no remote image host needs allowlisting here.
}

module.exports = nextConfig
