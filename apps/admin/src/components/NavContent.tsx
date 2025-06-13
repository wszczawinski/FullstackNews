import { Link } from "@tanstack/react-router";

import { useAuth } from "@/context/useAuth";

export const NavContent = ({ onClick }: { onClick?: () => void }) => {
  const { logout } = useAuth();

  return (
    <>
      <Link
        to="/panel"
        onClick={onClick}
        activeOptions={{ includeSearch: true, exact: true }}
        className="text-muted-foreground transition-colors hover:text-foreground"
        activeProps={{ className: "text-sky-600 hover:text-sky-600" }}
      >
        News
      </Link>
      <Link
        to="/panel/create"
        onClick={onClick}
        activeOptions={{ includeSearch: true }}
        className="text-muted-foreground transition-colors hover:text-foreground"
        activeProps={{ className: "text-sky-600 hover:text-sky-600" }}
      >
        Create
      </Link>
      <Link
        to="/panel/media"
        onClick={onClick}
        className="text-muted-foreground transition-colors hover:text-foreground"
        activeProps={{ className: "text-sky-600" }}
      >
        Media
      </Link>
      <a onClick={logout}>Logout</a>
    </>
  );
};
