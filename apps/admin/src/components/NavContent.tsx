import { Link } from "@tanstack/react-router";

import { useAuth } from "@/context/useAuth";

export const NavContent = ({ onClick }: { onClick?: () => void }) => {
  const { logout } = useAuth();

  return (
    <>
      <Link
        to="/"
        onClick={onClick}
        activeOptions={{ includeSearch: true }}
        className="text-muted-foreground transition-colors hover:text-foreground"
        activeProps={{ className: "text-sky-600 hover:text-sky-600" }}
      >
        Home
      </Link>
      <Link
        to="/links"
        onClick={onClick}
        className="text-muted-foreground transition-colors hover:text-foreground"
        activeProps={{ className: "text-sky-600" }}
      >
        Linki
      </Link>
      <Link
        to="/media"
        onClick={onClick}
        className="text-muted-foreground transition-colors hover:text-foreground"
        activeProps={{ className: "text-sky-600" }}
      >
        Media
      </Link>
      <Link
        to="/login"
        onClick={onClick}
        className="text-muted-foreground transition-colors hover:text-foreground"
        activeProps={{ className: "text-sky-600" }}
      >
        Login
      </Link>
      <a onClick={logout}>Logout</a>
    </>
  );
};
