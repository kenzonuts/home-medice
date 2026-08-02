export const SITE_NAME = "Rumah Sunat Modern Jati" as const;

export const SITE_DESCRIPTION =
  "Website resmi Rumah Sunat Modern Jati." as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Short display name for compact logo contexts */
export const SITE_NAME_SHORT = "RSM Jati" as const;