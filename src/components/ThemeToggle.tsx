import { useI18n } from "../useI18n";

type ThemeToggleProps = {
  theme: "dark" | "light";
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const { t } = useI18n();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isLight ? t.theme.toDark : t.theme.toLight}
      title={isLight ? t.theme.toDark : t.theme.toLight}
    >
      {isLight ? t.theme.dark : t.theme.light}
    </button>
  );
}
