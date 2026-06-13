"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, Eye, Bold, Italic, Heading2, List, Link2, Image as ImageIcon, Code, Table as TableIcon, UploadCloud, X } from "lucide-react";
import { useArticle, useCreateArticle, useUpdateArticle } from "@/hooks/use-articles";
import { lookupService } from "@/services/dashboard.service";
import { slugify } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const TOOLBAR = [Bold, Italic, Heading2, List, Link2, ImageIcon, Code, TableIcon];
export function ArticleForm({
  mode,
  articleId
}) {
  const router = useRouter();
  const {
    data: article,
    isLoading
  } = useArticle(articleId ?? "");
  const {
    data: categories = []
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => lookupService.categories()
  });
  const {
    data: authors = []
  } = useQuery({
    queryKey: ["authors"],
    queryFn: () => lookupService.authors()
  });
  const create = useCreateArticle();
  const update = useUpdateArticle(articleId ?? "");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("draft");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  // Hydrate the form once the article loads (edit mode).
  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setSlug(article.slug);
      setExcerpt(article.excerpt);
      setStatus(article.status);
      setTags(article.tags.map(t => t.name));
      setBody(article.content.map(b => "value" in b ? b.value : "").join("\n\n"));
    }
  }, [article]);
  function addTag() {
    const t = tagInput.trim();
    if (t && !tags.includes(t)) setTags([...tags, t]);
    setTagInput("");
  }
  async function save(nextStatus) {
    const payload = {
      title,
      slug: slug || slugify(title),
      excerpt,
      content: [{
        type: "paragraph",
        value: body
      }],
      status: nextStatus,
      categoryId: categories[0]?.id ?? "c1",
      authorId: authors[0]?.id ?? "u1",
      tagIds: [],
      seo: {
        metaTitle: title,
        metaDescription: excerpt,
        keywords: tags
      }
    };
    if (mode === "create") await create.mutateAsync(payload);else await update.mutateAsync(payload);
    router.push("/articles");
  }
  if (mode === "edit" && isLoading) {
    return <Skeleton className="h-[600px] w-full rounded-xl" />;
  }
  const saving = create.isPending || update.isPending;
  return <div>
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" onClick={() => router.push("/articles")}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{mode === "create" ? "New Article" : "Edit Article"}</h1>
            <p className="text-sm text-muted-foreground">Draft and publish in one place.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Eye className="h-4 w-4" /> Preview</Button>
          <Button variant="outline" disabled={saving} onClick={() => save("draft")}>Save draft</Button>
          <Button disabled={saving} onClick={() => save("published")}>{saving ? "Saving..." : "Publish"}</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="space-y-4">
          <Card>
            <CardContent className="space-y-4 p-5">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={title} onChange={e => {
                setTitle(e.target.value);
                if (mode === "create") setSlug(slugify(e.target.value));
              }} placeholder="A compelling headline" />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">/blogs/</span>
                  <Input id="slug" value={slug} onChange={e => setSlug(e.target.value)} />
                </div>
              </div>
              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea id="excerpt" value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="A short summary..." />
              </div>
            </CardContent>
          </Card>

          {/* Rich text editor. Swap the textarea for TipTap/MDX — the toolbar and
              markdown value are already wired (see README › Rich text editor). */}
          <Card>
            <div className="flex items-center gap-1 border-b border-border p-2">
              {TOOLBAR.map((Icon, i) => <Button key={i} variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                  <Icon className="h-4 w-4" />
                </Button>)}
              <span className="ml-auto pr-2 text-xs text-muted-foreground">Markdown supported</span>
            </div>
            <Textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Write your article in Markdown..." className="min-h-[320px] resize-y rounded-none border-0 font-mono text-sm focus-visible:ring-0" />
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader><CardTitle className="text-sm">Publish</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label>Status</Label>
                <Select value={status} onValueChange={v => setStatus(v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {status === "scheduled" && <div>
                  <Label htmlFor="schedule">Schedule date</Label>
                  <Input id="schedule" type="datetime-local" />
                </div>}
              <Button className="w-full" disabled={saving} onClick={() => save(status)}>
                {status === "scheduled" ? "Schedule" : "Publish now"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm">Organize</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label>Category</Label>
                <Select defaultValue={article?.category.id}>
                  <SelectTrigger><SelectValue placeholder="Choose category" /></SelectTrigger>
                  <SelectContent>
                    {categories.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Author</Label>
                <Select defaultValue={article?.author.id}>
                  <SelectTrigger><SelectValue placeholder="Choose author" /></SelectTrigger>
                  <SelectContent>
                    {authors.map(a => <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => <Badge key={t} variant="secondary" className="gap-1">
                      {t}
                      <button onClick={() => setTags(tags.filter(x => x !== t))}><X className="h-3 w-3" /></button>
                    </Badge>)}
                </div>
                <Input className="mt-1.5" value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addTag())} placeholder="Add tag and press Enter" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm">Featured Image</CardTitle></CardHeader>
            <CardContent>
              <div className="grid place-items-center rounded-lg border border-dashed border-border p-6 text-center text-muted-foreground">
                <UploadCloud className="mb-2 h-6 w-6" />
                <span className="text-xs">Drop image or click to upload</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-sm">SEO</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label>Meta title</Label>
                <Input defaultValue={article?.seo.metaTitle} />
              </div>
              <div>
                <Label>Meta description</Label>
                <Textarea defaultValue={article?.seo.metaDescription} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
}
