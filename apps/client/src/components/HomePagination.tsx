import { Link, useRouterState } from "@tanstack/react-router";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@packages/ui";

export const HomePagination = () => {
  const { search } = useRouterState({ select: (s) => s.location });
  const page = search?.page || 1;
  const category = search?.category || "all";

  return (
    <Pagination>
      <PaginationContent>
        {page <= 2 ? (
          <Link
            disabled={page === 1}
            to="/news"
            search={{ page: page - 1, category }}
          >
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
          </Link>
        ) : (
          <Link to="/news" search={{ page: page - 1, category }}>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
          </Link>
        )}

        {page === 1 ? (
          <Link to="/">
            <PaginationItem>
              <PaginationLink isActive>{page}</PaginationLink>
            </PaginationItem>
          </Link>
        ) : (
          <Link to="/news" search={{ page: page, category }}>
            <PaginationItem>
              <PaginationLink isActive>{page}</PaginationLink>
            </PaginationItem>
          </Link>
        )}
        <Link
          disabled={page > 2}
          to="/news"
          search={{ page: page + 1, category }}
        >
          <PaginationItem>
            <PaginationLink>{page + 1}</PaginationLink>
          </PaginationItem>
        </Link>
        <Link
          disabled={page > 2}
          to="/news"
          search={{ page: page + 2, category }}
        >
          <PaginationItem>
            <PaginationLink>{page + 2}</PaginationLink>
          </PaginationItem>
        </Link>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>
            <Link
              disabled={page > 2}
              to="/news"
              search={{ page: page + 1, category }}
            >
              <PaginationNext />
            </Link>
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
