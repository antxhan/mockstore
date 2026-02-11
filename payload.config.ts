import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

const normalizeDatabaseURL = (value: string): string => {
  if (!value) return value;

  try {
    const databaseURL = new URL(value);
    const sslMode = databaseURL.searchParams.get("sslmode")?.toLowerCase();

    if (
      sslMode === "prefer" ||
      sslMode === "require" ||
      sslMode === "verify-ca"
    ) {
      databaseURL.searchParams.set("sslmode", "verify-full");
    }

    return databaseURL.toString();
  } catch {
    return value;
  }
};

export default buildConfig({
  editor: lexicalEditor(),
  collections: [],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: normalizeDatabaseURL(process.env.DATABASE_URL || ""),
    },
  }),
  sharp,
});
