import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/images/mlogo.png";

import { NavContent } from "./NavContent";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavContent onClick={() => setOpen(false)} />
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <div className="flex justify-between w-full md:hidden">
          <img src={logo} alt="" />
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
  );
};

export default Navbar;
