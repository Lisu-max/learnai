import { cookies } from "next/headers";
import { translations, type Translations } from "./translations";

export async function getServerTranslation(): Promise<Translations> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("learnai-locale")?.value;
  if (locale === "en") return translations.en;
  return translations.fr;
}
