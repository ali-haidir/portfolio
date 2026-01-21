// src/config/nav.ts
export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export const resumeHref = "/Ali%20Haider.pdf"; // file inside /public
export const contactEmail = "mailto:khalihaider8@gmail.com";