export const CONTACT_ALLOWED_ORIGINS_ENV_KEY = "CONTACT_ALLOWED_ORIGINS";

export function parseAllowedOrigins(value?: string): string[] {
  return (value ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}
