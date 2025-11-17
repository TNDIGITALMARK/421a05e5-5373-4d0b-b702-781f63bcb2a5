'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PenSquare, FileText, Eye, MessageSquare, Users, TrendingUp, Trophy, Star, Flame, Target } from 'lucide-react';
import { LevelProgress } from '@/components/gamification/level-progress';
import { WritingStreak } from '@/components/gamification/writing-streak';
import { DailyGoals } from '@/components/gamification/daily-goals';

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
      <header className="bg-secondary text-secondary-foreground shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-secondary/95">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="text-lg font-semibold">GhostWrite</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-secondary-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="text-secondary-foreground text-sm font-medium">U</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-secondary text-secondary-foreground min-h-[calc(100vh-64px)] p-6 hidden md:block border-r border-secondary-foreground/10">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 px-4 py-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              href="/dashboard/posts"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all hover:translate-x-1"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">All Posts</span>
            </Link>
            <Link
              href="/dashboard/drafts"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all hover:translate-x-1"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Drafts</span>
            </Link>
            <Link
              href="/dashboard/gamification"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all hover:translate-x-1"
            >
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">Achievements</span>
            </Link>
            <Link
              href="/dashboard/stats"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all hover:translate-x-1"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Stats</span>
            </Link>
            <Link
              href="/dashboard/help"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all hover:translate-x-1"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Help</span>
            </Link>
          </nav>

          <div className="mt-8">
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-button hover:shadow-lg transition-all hover:scale-105"
            >
              <Link href="/dashboard/editor" className="flex items-center justify-center space-x-2 w-full">
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

            {/* Level Progress */}
            <div className="mb-6">
              <LevelProgress
                level={12}
                currentXP={3420}
                xpForNextLevel={5000}
                totalPoints={5720}
              />
            </div>

            {/* Gamification Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <WritingStreak
                currentStreak={7}
                longestStreak={14}
                weekData={[true, true, false, true, true, true, true]}
              />
              <DailyGoals
                wordsGoal={500}
                wordsWritten={243}
                postsGoal={1}
                postsWritten={0}
              />
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="bg-gradient-to-br from-blue-500/10 to-background border-blue-500/20 hover:shadow-lg transition-all hover:-translate-y-1 cursor-default">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Views</p>
                      <p className="text-2xl font-bold text-foreground">2,847</p>
                      <p className="text-xs text-success mt-1 flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>↑ 12% this month</span>
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-background border-purple-500/20 hover:shadow-lg transition-all hover:-translate-y-1 cursor-default">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Posts</p>
                      <p className="text-2xl font-bold text-foreground">15</p>
                      <p className="text-xs text-muted-foreground mt-1">3 published this month</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-purple-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-background border-green-500/20 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Your Rank</p>
                      <p className="text-2xl font-bold text-foreground">#4</p>
                      <p className="text-xs text-green-600 mt-1 hover:underline">
                        <Link href="/dashboard/gamification" className="flex items-center space-x-1">
                          <span>View Leaderboard</span>
                          <span>→</span>
                        </Link>
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Posts */}
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground">Recent Posts</CardTitle>
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-all">
                    <Link href="/dashboard/posts">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPosts.map((post) => (
                    <div
                      key={post.id}
                      className="group flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 hover:shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
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
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-1">{post.excerpt}</p>
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
                      <div className="flex items-center space-x-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-all">
                          <Link href={`/dashboard/editor?id=${post.id}`}>Edit</Link>
                        </Button>
                        <Button variant="outline" size="sm" className="hover:bg-secondary hover:text-secondary-foreground transition-all">
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
