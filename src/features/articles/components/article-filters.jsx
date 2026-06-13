"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDebounce } from "@/hooks/use-debounce";
import { lookupService } from "@/services/dashboard.service";
import { ARTICLE_STATUS_OPTIONS, SORT_OPTIONS } from "@/lib/constants";

/**
 * @param {{ query: any, onChange: (patch: any) => void }} props
 */
export function ArticleFilters({ query, onChange }) {
  const [search, setSearch] = useState(query.search ?? "");
  const debounced = useDebounce(search, 350);

  useEffect(() => {
    onChange({ search: debounced, page: 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () => lookupService.categories(),
  });
  const { data: authors = [] } = useQuery({
    queryKey: ["authors"],
    queryFn: () => lookupService.authors(),
  });

  return (
    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
      <div className="relative min-w-[200px] flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search articles…"
          className="pl-9"
        />
      </div>

      <Select
        value={query.status ?? "all"}
        onValueChange={(v) => onChange({ status: v, page: 1 })}
      >
        <SelectTrigger className="w-full sm:w-[150px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {ARTICLE_STATUS_OPTIONS.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={query.categoryId ?? "all"}
        onValueChange={(v) => onChange({ categoryId: v, page: 1 })}
      >
        <SelectTrigger className="w-full sm:w-[160px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All categories</SelectItem>
          {categories.map((c) => (
            <SelectItem key={c.id} value={c.id}>
              {c.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={query.authorId ?? "all"}
        onValueChange={(v) => onChange({ authorId: v, page: 1 })}
      >
        <SelectTrigger className="w-full sm:w-[150px]">
          <SelectValue placeholder="Author" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All authors</SelectItem>
          {authors.map((a) => (
            <SelectItem key={a.id} value={a.id}>
              {a.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={query.sort ?? "newest"}
        onValueChange={(v) => onChange({ sort: v, page: 1 })}
      >
        <SelectTrigger className="w-full sm:w-[150px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          {SORT_OPTIONS.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
