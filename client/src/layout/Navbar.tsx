import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/images/logo_mobile.png";

import { NavContent } from "./NavContent";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full h-16 px-4 md:px-6 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-full flex items-center justify-between gap-4 w-full mx-auto max-w-screen-lg">
        <Link to="/">
          <img width={169} height={29} src={logo} alt="small logo" />
        </Link>

        <nav className="hidden md:flex font-medium flex-row items-center justify-end gap-5 lg:gap-6">
          <NavContent onClick={() => setOpen(false)} />
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <div className="flex md:hidden">
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <NavContent onClick={() => setOpen(false)} />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
