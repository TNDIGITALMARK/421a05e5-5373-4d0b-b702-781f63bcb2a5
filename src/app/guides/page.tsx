'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Book,
  PenTool,
  TrendingUp,
  Users,
  Target,
  Zap,
  Award,
  Search
} from 'lucide-react';

export const dynamic = 'force-dynamic';

const guides = [
  {
    title: 'Getting Started with GhostWrite',
    description: 'Learn the basics of creating your first post, understanding the editor, and publishing content.',
    icon: Book,
    duration: '10 min read',
    level: 'Beginner',
    color: 'blue',
  },
  {
    title: 'Writing Compelling Content',
    description: 'Master the art of storytelling, structure your posts effectively, and engage your readers.',
    icon: PenTool,
    duration: '15 min read',
    level: 'Intermediate',
    color: 'purple',
  },
  {
    title: 'SEO Best Practices for Bloggers',
    description: 'Optimize your content for search engines, use keywords effectively, and increase discoverability.',
    icon: TrendingUp,
    duration: '12 min read',
    level: 'Intermediate',
    color: 'green',
  },
  {
    title: 'Building Your Audience',
    description: 'Strategies for growing your follower base, engaging with readers, and building a community.',
    icon: Users,
    duration: '8 min read',
    level: 'Advanced',
    color: 'orange',
  },
  {
    title: 'Gamification System Guide',
    description: 'Understand XP, levels, achievements, streaks, and how to maximize your rewards.',
    icon: Target,
    duration: '7 min read',
    level: 'Beginner',
    color: 'pink',
  },
  {
    title: 'Advanced Editor Features',
    description: 'Explore markdown support, keyboard shortcuts, rich embeds, and formatting options.',
    icon: Zap,
    duration: '10 min read',
    level: 'Advanced',
    color: 'indigo',
  },
];

const quickTips = [
  'Write consistently - even 15 minutes a day builds momentum',
  'Use descriptive titles that clearly convey your post\'s value',
  'Add relevant tags to help readers discover your content',
  'Engage with comments to build community and loyalty',
  'Maintain your daily streak for bonus XP and achievements',
  'Share your posts on social media to increase reach',
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-secondary text-secondary-foreground shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="text-lg font-semibold">GhostWrite</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-secondary-foreground hover:text-secondary-foreground/80 transition">
                Home
              </Link>
              <Link href="/explore" className="text-secondary-foreground hover:text-secondary-foreground/80 transition">
                Explore
              </Link>
              <Link href="/guides" className="text-secondary-foreground hover:text-secondary-foreground/80 transition font-medium">
                Guides
              </Link>
              <Link href="/dashboard" className="text-secondary-foreground hover:text-secondary-foreground/80 transition">
                Dashboard
              </Link>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-button">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Level Up Your Writing</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Writing Guides & Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the platform, improve your writing, and grow your audience with our comprehensive guides
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {guides.map((guide, idx) => {
            const Icon = guide.icon;
            const colorClasses = {
              blue: 'bg-blue-500/10 text-blue-500',
              purple: 'bg-purple-500/10 text-purple-500',
              green: 'bg-green-500/10 text-green-500',
              orange: 'bg-orange-500/10 text-orange-500',
              pink: 'bg-pink-500/10 text-pink-500',
              indigo: 'bg-indigo-500/10 text-indigo-500',
            }[guide.color];

            return (
              <Card key={idx} className="hover:shadow-lg transition cursor-pointer group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${colorClasses} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full">
                      {guide.level}
                    </span>
                    <span className="text-muted-foreground">{guide.duration}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Tips Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Quick Tips for Success</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {quickTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-sm text-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20">
          <CardContent className="p-8 text-center">
            <Search className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Can't find what you're looking for?</h3>
            <p className="text-muted-foreground mb-6">
              Visit our help center or reach out to support for personalized assistance
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button variant="outline">
                <Link href="/dashboard/help">Visit Help Center</Link>
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">G</span>
            </div>
            <span className="text-lg font-semibold">GhostWrite</span>
          </div>
          <div className="text-center text-sm text-secondary-foreground/60">
            <p>Copyright © 2024 GhostWrite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
