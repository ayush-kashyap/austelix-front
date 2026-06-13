"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MoreHorizontal, Pencil, Eye, Copy, Trash2 } from "lucide-react";
import { DataTable } from "@/components/shared/data-table";
import { StatusBadge } from "@/components/shared/status-badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { useDeleteArticle, useDuplicateArticle } from "@/hooks/use-articles";
import { formatDate, formatNumber, initials } from "@/lib/format";

function RowActions({ article }) {
  const router = useRouter();
  const del = useDeleteArticle();
  const dup = useDuplicateArticle();
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Row actions">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => router.push(`/articles/${article.id}/edit`)}>
            <Pencil className="h-4 w-4" /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.open(`/blogs/${article.slug}`, "_blank")}>
            <Eye className="h-4 w-4" /> Preview
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => dup.mutate(article.id)}
            disabled={dup.isPending}
          >
            <Copy className="h-4 w-4" /> Duplicate
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onClick={() => setConfirmOpen(true)}
          >
            <Trash2 className="h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Delete this article?"
        description={`"${article.title}" will be permanently removed. This can't be undone.`}
        confirmLabel="Delete"
        destructive
        onConfirm={() => del.mutate(article.id)}
      />
    </>
  );
}

const columns = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const a = row.original;
      return (
        <div className="min-w-0">
          <p className="truncate font-medium">{a.title}</p>
          <p className="truncate text-xs text-muted-foreground">/blogs/{a.slug}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">{row.original.category.name}</span>
    ),
  },
  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => {
      const a = row.original.author;
      return (
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={a.avatar} alt={a.name} />
            <AvatarFallback className="text-[10px]">{initials(a.name)}</AvatarFallback>
          </Avatar>
          <span className="text-sm">{a.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "views",
    header: "Views",
    cell: ({ row }) => (
      <span className="tabular-nums text-sm">{formatNumber(row.original.views)}</span>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated",
    cell: ({ row }) => (
      <span className="whitespace-nowrap text-sm text-muted-foreground">
        {formatDate(row.original.updatedAt)}
      </span>
    ),
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => <RowActions article={row.original} />,
  },
];

/**
 * @param {{ data: any[], page: number, totalPages: number, total: number,
 *   onPageChange: (p: number) => void }} props
 */
export function ArticlesTable({ data, page, totalPages, total, onPageChange }) {
  return (
    <DataTable
      columns={columns}
      data={data}
      page={page}
      totalPages={totalPages}
      total={total}
      onPageChange={onPageChange}
    />
  );
}
