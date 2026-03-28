import { cookies } from "next/headers";
import { translations, type Translations } from "./translations";

export async function getServerLocale(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get("learnai-locale")?.value || "fr";
}

export async function getServerTranslation(): Promise<Translations> {
  const locale = await getServerLocale();
  if (locale === "en") return translations.en;
  return translations.fr;
}
