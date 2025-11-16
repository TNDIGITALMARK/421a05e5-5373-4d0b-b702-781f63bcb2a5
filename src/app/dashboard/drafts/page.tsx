'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  PenSquare,
  FileText,
  Clock,
  TrendingUp,
  MessageSquare,
  Trash2,
  Trophy
} from 'lucide-react';

export const dynamic = 'force-dynamic';

const mockDrafts = [
  {
    id: '3',
    title: 'Building Better User Experiences',
    excerpt: 'A comprehensive guide to UX principles and best practices...',
    wordCount: 743,
    lastEdited: '2024-11-11',
    createdAt: '2024-11-05',
  },
  {
    id: '6',
    title: 'Advanced React Patterns',
    excerpt: 'Exploring compound components, render props, and custom hooks...',
    wordCount: 512,
    lastEdited: '2024-11-09',
    createdAt: '2024-11-07',
  },
  {
    id: '7',
    title: 'The Art of Code Review',
    excerpt: 'Best practices for giving and receiving constructive feedback...',
    wordCount: 289,
    lastEdited: '2024-11-06',
    createdAt: '2024-11-04',
  },
];

export default function DraftsPage() {
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
              <Link href="/" className="text-secondary-foreground hover:text-secondary-foreground/80 transition text-sm">
                Home
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
        <aside className="w-64 bg-secondary text-secondary-foreground min-h-[calc(100vh-64px)] p-6 hidden md:block">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              href="/dashboard/posts"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">All Posts</span>
            </Link>
            <Link
              href="/dashboard/drafts"
              className="flex items-center space-x-3 px-4 py-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Drafts</span>
            </Link>
            <Link
              href="/dashboard/gamification"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">Achievements</span>
            </Link>
            <Link
              href="/dashboard/stats"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Stats</span>
            </Link>
            <Link
              href="/dashboard/help"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Help</span>
            </Link>
          </nav>

          <div className="mt-8">
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-button"
            >
              <Link href="/dashboard/editor" className="flex items-center space-x-2">
                <PenSquare className="w-4 h-4" />
                <span>New Post</span>
              </Link>
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-6xl">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Drafts</h1>
              <p className="text-muted-foreground">Continue working on your unpublished posts</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="bg-gradient-to-br from-orange-500/10 to-background border-orange-500/20">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Total Drafts</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500/10 to-background border-blue-500/20">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Total Words</p>
                  <p className="text-2xl font-bold text-foreground">1,544</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/10 to-background border-purple-500/20">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Last Updated</p>
                  <p className="text-2xl font-bold text-foreground">Today</p>
                </CardContent>
              </Card>
            </div>

            {/* Drafts List */}
            {mockDrafts.length > 0 ? (
              <div className="space-y-4">
                {mockDrafts.map((draft) => (
                  <Card key={draft.id} className="hover:shadow-md transition">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold text-foreground">{draft.title}</h3>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                              Draft
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{draft.excerpt}</p>

                          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <FileText className="w-4 h-4" />
                              <span>{draft.wordCount} words</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>Last edited {new Date(draft.lastEdited).toLocaleDateString()}</span>
                            </span>
                            <span className="text-xs">Created {new Date(draft.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href={`/dashboard/editor?id=${draft.id}`}>Continue Writing</Link>
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No drafts yet</h3>
                  <p className="text-muted-foreground mb-6">Start writing your first post to see it here</p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/dashboard/editor" className="flex items-center space-x-2">
                      <PenSquare className="w-4 h-4" />
                      <span>Create New Post</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
