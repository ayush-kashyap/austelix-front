"use client";

import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { articlesService } from "@/services/articles.service";

const keys = {
  all: ["articles"],
  list: (query) => ["articles", "list", query],
  detail: (id) => ["articles", "detail", id],
};

/** Paginated, filtered article list. */
export function useArticles(query = {}) {
  return useQuery({
    queryKey: keys.list(query),
    queryFn: () => articlesService.list(query),
    placeholderData: keepPreviousData,
  });
}

/** Single article by id (enabled only when id is truthy). */
export function useArticle(id) {
  return useQuery({
    queryKey: keys.detail(id),
    queryFn: () => articlesService.getById(id),
    enabled: !!id,
  });
}

export function useCreateArticle() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input) => articlesService.create(input),
    onSuccess: () => qc.invalidateQueries({ queryKey: keys.all }),
  });
}

export function useUpdateArticle(id) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input) => articlesService.update(id, input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: keys.all });
      qc.invalidateQueries({ queryKey: keys.detail(id) });
    },
  });
}

export function useDuplicateArticle() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => articlesService.duplicate(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: keys.all }),
  });
}

export function useDeleteArticle() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => articlesService.remove(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: keys.all }),
  });
}
