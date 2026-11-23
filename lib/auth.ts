export const VALID_ACCOUNTS = [
  { email: "admin@skatementor.com", password: "Skate 2026" },
  { email: "vidal@skatementor.com", password: "cuc2026" },
  { email: "mateo@skatementor.com", password: "cuc2026" },
] as const;

export function isValidAccountEmail(email: string) {
  return VALID_ACCOUNTS.some(
    (account) => account.email.toLowerCase() === email.trim().toLowerCase()
  );
}
