module.exports = [
  // "strapi::cors",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://futr.gg",
        "https://futr-web-frontend-env-staging-mobii-ph.vercel.app",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      enabled: true,
      header: "*",
      keepHeaderOnError: true,
    },
  },
  "strapi::logger",
  "strapi::errors",
  "strapi::security",

  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
]
