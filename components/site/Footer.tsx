import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-col gap-10 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted">
            {copy.footer.disclaimer}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <div className="flex gap-6">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-medium text-muted transition-colors duration-200 hover:text-ink"
              >
                {s.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-muted transition-colors duration-200 hover:text-ink"
            >
              Email
            </a>
          </div>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.fullName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
