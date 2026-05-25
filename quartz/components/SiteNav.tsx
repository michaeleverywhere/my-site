import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SiteNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const current = fileData.slug

  const links = [
    { href: "/", label: "Home", slug: "index" },
    { href: "/ideas", label: "Ideas", slug: "ideas" },
    { href: "/book-recs", label: "Book Recs", slug: "book-recs" },
  ]

  return (
    <nav class={classNames(displayClass, "site-nav")}>
      <ul>
        {links.map(({ href, label, slug }) => (
          <li class={current === slug ? "active" : ""}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

SiteNav.css = `
.site-nav ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}
.site-nav ul li {
  padding: 0.25rem 0;
}
.site-nav ul li a {
  color: var(--dark);
  text-decoration: none;
  font-size: 0.95rem;
}
.site-nav ul li a:hover {
  text-decoration: underline;
}
.site-nav ul li.active a {
  font-weight: 600;
}
`

export default (() => SiteNav) satisfies QuartzComponentConstructor
