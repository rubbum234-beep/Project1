import { useContent } from "../useContent";
import { useI18n } from "../useI18n";

export function Footer() {
  const { locale, t } = useI18n();
  const content = useContent();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        © {year} {content.name[locale]}. {t.footer.rights}
      </p>
    </footer>
  );
}
