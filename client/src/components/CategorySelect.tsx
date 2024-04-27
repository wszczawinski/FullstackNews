import { FilterX } from "lucide-react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { POST_CATEGORIES } from "@/constants";
import { Button } from "./ui/button";

export const CategorySelect = () => {
  const navigate = useNavigate();
  const { search } = useRouterState({ select: (s) => s.location });
  const category = search?.category || "all";

  return (
    <div className="flex flex-row-reverse sm:flex-row gap-2 w-full sm:w-auto">
      {category !== "all" && (
        <Button
          className="animate-fade-in"
          size={"icon"}
          variant={"outline"}
          onClick={() =>
            navigate({
              to: "/",
            })
          }
        >
          <FilterX size={16} />
        </Button>
      )}
      <Select
        defaultValue={category || "all"}
        onValueChange={(value) =>
          value === "all"
            ? navigate({
                to: "/",
              })
            : navigate({
                to: "/news",
                search: { category: value, page: 1 },
              })
        }
      >
        <SelectTrigger className="flex-1 focus:ring-0 focus:ring-offset-0 w-full sm:w-[220px]">
          <SelectValue placeholder="Wybierz kategorie" />
        </SelectTrigger>
        <SelectContent>
          {POST_CATEGORIES?.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
