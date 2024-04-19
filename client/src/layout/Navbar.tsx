import { Link, NavLink } from "react-router-dom";
import { Menu, Newspaper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ROUTES } from "@/constants/routes";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Główna", href: ROUTES.HOME },
    { name: "Kontakt", href: ROUTES.CONTACT },
    { name: "Post", href: ROUTES.POST },
  ];

  return (
    <div className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Newspaper className="h-6 w-6" />
          <span className="sr-only">logo</span>
        </NavLink>

        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              `${isActive ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`
            }
          >
            {item.name}
          </NavLink>
        ))}

      </nav>
      
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Newspaper className="h-6 w-6" />
              <span className="sr-only">logo</span>
            </Link>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
