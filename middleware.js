// middleware.js
export { default } from "next-auth/middleware";

// Optionally protect certain routes
export const config = {
  matcher: ["/dashboard", "/api/me"], // 👈 protect this
};
