export const VALID_ACCOUNTS = [
  { email: "admin@skatementor.com", password: "Skate 2026" },
  { email: "vidal@skatementor.com", password: "cuc2026" },
  { email: "mateo@skatementor.com", password: "cuc2026" },
] as const;

export const DEFAULT_CONTACT_ACCOUNT = {
  email: "estudiante@skatementor.com",
  password: "skater2026",
  name: "Estudiante SkateMentor",
  role: "student",
} as const;

export interface StoredContactAccount {
  email: string;
  password: string;
  name: string;
  role: "student";
}

export function getValidAccounts() {
  const accounts: Array<{
    email: string;
    password: string;
    name?: string;
    role?: "student" | "admin";
  }> = [
    ...VALID_ACCOUNTS.map((account) => ({ ...account, role: "admin" as const })),
    { ...DEFAULT_CONTACT_ACCOUNT, role: "student" as const },
  ];

  if (typeof window === "undefined") return accounts;

  try {
    const stored = window.localStorage.getItem("skatementor_contact_accounts");
    if (stored) {
      accounts.push(...(JSON.parse(stored) as StoredContactAccount[]));
    }
  } catch {
    // Local storage can be unavailable in private browsing or restricted hosts.
  }

  return accounts;
}

export function isAdminEmail(email: string) {
  return VALID_ACCOUNTS.some(
    (account) => account.email.toLowerCase() === email.trim().toLowerCase()
  );
}

export function isValidAccountEmail(email: string) {
  return getValidAccounts().some(
    (account) => account.email.toLowerCase() === email.trim().toLowerCase()
  );
}
