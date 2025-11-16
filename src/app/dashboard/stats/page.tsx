'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PenSquare,
  FileText,
  Eye,
  MessageSquare,
  Heart,
  TrendingUp,
  Users,
  Trophy,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export const dynamic = 'force-dynamic';

const topPosts = [
  { title: 'The Future of Sustainable Design', views: 891, trend: 'up' },
  { title: 'Design Systems at Scale', views: 678, trend: 'up' },
  { title: 'Mastering JavaScript Async/Await', views: 543, trend: 'down' },
  { title: 'Getting Started with Remote Work', views: 247, trend: 'up' },
];

const weeklyViews = [
  { day: 'Mon', views: 234 },
  { day: 'Tue', views: 389 },
  { day: 'Wed', views: 512 },
  { day: 'Thu', views: 456 },
  { day: 'Fri', views: 678 },
  { day: 'Sat', views: 345 },
  { day: 'Sun', views: 233 },
];

export default function StatsPage() {
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
              className="flex items-center space-x-3 px-4 py-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground"
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
              <h1 className="text-3xl font-bold text-foreground mb-2">Statistics & Analytics</h1>
              <p className="text-muted-foreground">Track your content performance and audience engagement</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="bg-gradient-to-br from-blue-500/10 to-background border-blue-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Views</p>
                      <p className="text-2xl font-bold text-foreground">2,847</p>
                      <p className="text-xs text-success mt-1 flex items-center">
                        <ArrowUp className="w-3 h-3 mr-1" />
                        12% this month
                      </p>
                    </div>
                    <Eye className="w-8 h-8 text-blue-500/50" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-background border-purple-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Likes</p>
                      <p className="text-2xl font-bold text-foreground">358</p>
                      <p className="text-xs text-success mt-1 flex items-center">
                        <ArrowUp className="w-3 h-3 mr-1" />
                        8% this month
                      </p>
                    </div>
                    <Heart className="w-8 h-8 text-purple-500/50" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-background border-green-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Comments</p>
                      <p className="text-2xl font-bold text-foreground">115</p>
                      <p className="text-xs text-success mt-1 flex items-center">
                        <ArrowUp className="w-3 h-3 mr-1" />
                        15% this month
                      </p>
                    </div>
                    <MessageSquare className="w-8 h-8 text-green-500/50" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/10 to-background border-orange-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Followers</p>
                      <p className="text-2xl font-bold text-foreground">128</p>
                      <p className="text-xs text-destructive mt-1 flex items-center">
                        <ArrowDown className="w-3 h-3 mr-1" />
                        2% this month
                      </p>
                    </div>
                    <Users className="w-8 h-8 text-orange-500/50" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Weekly Views Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {weeklyViews.map((item) => (
                      <div key={item.day} className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-muted-foreground w-12">{item.day}</span>
                        <div className="flex-1 bg-muted rounded-full h-8 relative overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 bg-primary rounded-full flex items-center justify-end pr-3"
                            style={{ width: `${(item.views / 700) * 100}%` }}
                          >
                            <span className="text-xs font-medium text-primary-foreground">{item.views}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPosts.map((post, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground line-clamp-1">{post.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{post.views} views</p>
                        </div>
                        {post.trend === 'up' ? (
                          <ArrowUp className="w-5 h-5 text-success" />
                        ) : (
                          <ArrowDown className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Engagement Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Engagement Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Views by Source</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground">Direct</span>
                        <span className="font-medium text-foreground">45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary rounded-full h-2" style={{ width: '45%' }} />
                      </div>

                      <div className="flex items-center justify-between text-sm mt-3">
                        <span className="text-foreground">Social</span>
                        <span className="font-medium text-foreground">35%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary rounded-full h-2" style={{ width: '35%' }} />
                      </div>

                      <div className="flex items-center justify-between text-sm mt-3">
                        <span className="text-foreground">Search</span>
                        <span className="font-medium text-foreground">20%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary rounded-full h-2" style={{ width: '20%' }} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Reader Demographics</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Age 18-24</span>
                        <span className="text-sm font-medium text-foreground">22%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Age 25-34</span>
                        <span className="text-sm font-medium text-foreground">48%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Age 35-44</span>
                        <span className="text-sm font-medium text-foreground">22%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Age 45+</span>
                        <span className="text-sm font-medium text-foreground">8%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Top Categories</p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-sm text-foreground flex-1">Design</span>
                        <span className="text-sm font-medium text-foreground">35%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-sm text-foreground flex-1">Technology</span>
                        <span className="text-sm font-medium text-foreground">30%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm text-foreground flex-1">Productivity</span>
                        <span className="text-sm font-medium text-foreground">25%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        <span className="text-sm text-foreground flex-1">Other</span>
                        <span className="text-sm font-medium text-foreground">10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
