'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  PenSquare,
  FileText,
  Eye,
  MessageSquare,
  TrendingUp,
  Search,
  Filter,
  MoreVertical,
  Trophy
} from 'lucide-react';

export const dynamic = 'force-dynamic';

const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with Remote Work',
    excerpt: 'Tips and strategies for staying productive while working from home...',
    status: 'published',
    views: 247,
    comments: 12,
    likes: 45,
    createdAt: '2024-11-10',
    updatedAt: '2024-11-10',
  },
  {
    id: '2',
    title: 'The Future of Sustainable Design',
    excerpt: 'Exploring eco-friendly approaches to modern design practices...',
    status: 'published',
    views: 891,
    comments: 28,
    likes: 124,
    createdAt: '2024-11-08',
    updatedAt: '2024-11-09',
  },
  {
    id: '3',
    title: 'Building Better User Experiences',
    excerpt: 'A comprehensive guide to UX principles and best practices...',
    status: 'draft',
    views: 0,
    comments: 0,
    likes: 0,
    createdAt: '2024-11-05',
    updatedAt: '2024-11-11',
  },
  {
    id: '4',
    title: 'Mastering JavaScript Async/Await',
    excerpt: 'Deep dive into modern asynchronous programming patterns...',
    status: 'published',
    views: 543,
    comments: 34,
    likes: 87,
    createdAt: '2024-11-03',
    updatedAt: '2024-11-03',
  },
  {
    id: '5',
    title: 'Design Systems at Scale',
    excerpt: 'How to build and maintain design systems for large organizations...',
    status: 'published',
    views: 678,
    comments: 41,
    likes: 102,
    createdAt: '2024-10-28',
    updatedAt: '2024-10-29',
  },
];

export default function AllPostsPage() {
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
              className="flex items-center space-x-3 px-4 py-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">All Posts</span>
            </Link>
            <Link
              href="/dashboard/drafts"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
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
              <h1 className="text-3xl font-bold text-foreground mb-2">All Posts</h1>
              <p className="text-muted-foreground">Manage and organize all your published and draft posts</p>
            </div>

            {/* Search and Filter Bar */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search posts..."
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Total Posts</p>
                  <p className="text-2xl font-bold text-foreground">15</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Published</p>
                  <p className="text-2xl font-bold text-success">12</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Drafts</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Total Views</p>
                  <p className="text-2xl font-bold text-primary">2.8K</p>
                </CardContent>
              </Card>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
              {mockPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{post.title}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              post.status === 'published'
                                ? 'bg-success/10 text-success'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {post.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>

                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views} views</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{post.comments} comments</span>
                          </span>
                          <span>Updated {new Date(post.updatedAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Link href={`/dashboard/editor?id=${post.id}`}>Edit</Link>
                        </Button>
                        {post.status === 'published' && (
                          <Button variant="outline" size="sm">
                            <Link href={`/blog/${post.id}`}>View</Link>
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
