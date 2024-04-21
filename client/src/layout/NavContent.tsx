import { NavLink } from "react-router-dom";

import { ROUTES } from "@/constants/routes";

export const NavContent = ({ onClick }: { onClick?: () => void }) => {
  const navItems = [
    { name: "Główna", href: ROUTES.HOME },
    { name: "Kontakt", href: ROUTES.CONTACT },
    { name: "Linki", href: ROUTES.LINKS },
  ];
  return (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          onClick={onClick}
          className={({ isActive }) =>
            `${
              isActive ? "text-primary" : "text-muted-foreground"
            } transition-colors hover:text-foreground md:text-lg`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
};
