import {
  LayoutDashboard,
  FileText,
  FolderTree,
  Tags,
  Image,
  MessageSquare,
  Users,
  Search,
  Settings,
} from "lucide-react";

export const DEFAULT_PAGE_SIZE = 10;

/** Primary sidebar navigation. */
export const NAV_ITEMS = [
  { label: "Dashboard", href: "/cms/dashboard", icon: LayoutDashboard },
  { label: "Articles", href: "/cms/articles", icon: FileText },
  { label: "Categories", href: "/cms/categories", icon: FolderTree },
  { label: "Tags", href: "/cms/tags", icon: Tags },
  { label: "Media Library", href: "/cms/media", icon: Image },
  { label: "Comments", href: "/cms/comments", icon: MessageSquare },
  { label: "Users", href: "/cms/users", icon: Users },
  { label: "SEO", href: "/cms/seo", icon: Search },
  { label: "Settings", href: "/cms/settings", icon: Settings },
];

/** @type {Record<string, string>} */
export const ROLE_LABELS = {
  admin: "Admin",
  editor: "Editor",
  writer: "Writer",
  viewer: "Viewer",
};

export const ARTICLE_STATUS_OPTIONS = [
  { value: "all", label: "All statuses" },
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
  { value: "scheduled", label: "Scheduled" },
];

export const SORT_OPTIONS = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "most-viewed", label: "Most viewed" },
  { value: "title", label: "Title A–Z" },
];

/** Tailwind token map for status pills, keyed by domain status. */
export const STATUS_TONE = {
  published: "emerald",
  draft: "zinc",
  scheduled: "amber",
  approved: "emerald",
  pending: "amber",
  spam: "red",
  active: "emerald",
  invited: "sky",
  suspended: "red",
};
