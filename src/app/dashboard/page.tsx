'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PenSquare, FileText, Eye, MessageSquare, Users, TrendingUp } from 'lucide-react';

export const dynamic = 'force-dynamic';

const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with Remote Work',
    excerpt: 'Tips and strategies for staying productive while working from home...',
    status: 'published',
    views: 247,
    comments: 12,
    createdAt: '2024-11-10',
  },
  {
    id: '2',
    title: 'The Future of Sustainable Design',
    excerpt: 'Exploring eco-friendly approaches to modern design practices...',
    status: 'published',
    views: 891,
    comments: 28,
    createdAt: '2024-11-08',
  },
  {
    id: '3',
    title: 'Building Better User Experiences',
    excerpt: 'A comprehensive guide to UX principles and best practices...',
    status: 'draft',
    views: 445,
    comments: 19,
    createdAt: '2024-11-05',
  },
];

export default function DashboardPage() {
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
              className="flex items-center space-x-3 px-4 py-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground"
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
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Drafts</span>
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
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Manage your posts and track performance</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                    Total Views
                    <Eye className="w-4 h-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">2,847</div>
                  <p className="text-xs text-success mt-1">↑ 12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                    Total Posts
                    <FileText className="w-4 h-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">15</div>
                  <p className="text-xs text-success mt-1">3 published this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                    Followers
                    <Users className="w-4 h-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">128</div>
                  <p className="text-xs text-success mt-1">↑ 8% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Posts</CardTitle>
                  <Button variant="outline" size="sm">
                    <Link href="/dashboard/posts">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-foreground">{post.title}</h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              post.status === 'published'
                                ? 'bg-success/10 text-success'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {post.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views} views</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MessageSquare className="w-3 h-3" />
                            <span>{post.comments} comments</span>
                          </span>
                          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Link href={`/dashboard/editor?id=${post.id}`}>Edit</Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Link href={`/blog/${post.id}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
