'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Bold,
  Italic,
  Heading2,
  List,
  ListOrdered,
  Link as LinkIcon,
  Image as ImageIcon,
  Save,
  Eye
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function EditorPage() {
  const [title, setTitle] = useState('Your Blog Post Title Here');
  const [content, setContent] = useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

• Nested bullet
• Nested bullet
• Nested bullet

Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);
  const [wordCount, setWordCount] = useState(1247);
  const [lastSaved, setLastSaved] = useState('3:42 PM');

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    const words = e.target.value.trim().split(/\s+/).length;
    setWordCount(words);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary text-secondary-foreground shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="text-lg font-semibold">GhostWrite</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-secondary-foreground hover:text-secondary-foreground/80 transition text-sm">
                Dashboard
              </Link>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground text-sm font-medium">U</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-secondary text-secondary-foreground min-h-[calc(100vh-64px)] p-6 hidden lg:block">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <span className="text-sm font-medium">← Dashboard</span>
            </Link>
            <div className="pt-4 border-t border-sidebar-border mt-4">
              <p className="text-xs text-sidebar-foreground/60 mb-2">Post Status</p>
              <div className="text-sm">
                <p className="mb-1">Draft saved at {lastSaved}</p>
                <p className="text-xs text-sidebar-foreground/60">{wordCount} words</p>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Editor */}
        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Editor Column */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Title</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Save className="w-4 h-4 mr-2" />
                          Save Draft
                        </Button>
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="text-xl font-semibold border-0 focus-visible:ring-0 px-0"
                      placeholder="Your Blog Post Title Here"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2 flex-wrap">
                      <Button variant="ghost" size="sm">
                        <Bold className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Italic className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Heading2 className="w-4 h-4" />
                      </Button>
                      <div className="w-px h-6 bg-border mx-2" />
                      <Button variant="ghost" size="sm">
                        <List className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ListOrdered className="w-4 h-4" />
                      </Button>
                      <div className="w-px h-6 bg-border mx-2" />
                      <Button variant="ghost" size="sm">
                        <LinkIcon className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ImageIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={content}
                      onChange={handleContentChange}
                      className="min-h-[500px] font-mono text-sm border-0 focus-visible:ring-0 resize-none"
                      placeholder="Start writing your story..."
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Post Settings Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Post Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="slug" className="text-sm font-medium mb-2 block">
                        URL Slug
                      </Label>
                      <Input
                        id="slug"
                        placeholder="your-post-slug"
                        className="text-sm"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-sm font-medium mb-2 block">
                        Category
                      </Label>
                      <Input
                        id="category"
                        placeholder="Category"
                        className="text-sm"
                      />
                    </div>

                    <div>
                      <Label htmlFor="excerpt" className="text-sm font-medium mb-2 block">
                        Post Excerpt
                      </Label>
                      <Textarea
                        id="excerpt"
                        placeholder="Brief description..."
                        rows={3}
                        className="text-sm"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Publishing Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-center p-4 border border-border rounded-lg">
                        <div className="text-2xl font-bold text-foreground">38%</div>
                        <div className="text-xs text-muted-foreground mt-1">Readability Score</div>
                      </div>
                      <div className="text-center p-4 border border-border rounded-lg">
                        <div className="text-2xl font-bold text-foreground">4min</div>
                        <div className="text-xs text-muted-foreground mt-1">Estimated Read</div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">
                        Suggested Tags
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          productivity
                        </span>
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          workflow
                        </span>
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          tips
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-success text-success-foreground hover:bg-success/90 font-medium">
                      Publish Article
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
