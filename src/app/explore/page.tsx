'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Eye, MessageSquare, Heart, TrendingUp, Search, Filter } from 'lucide-react';

export const dynamic = 'force-dynamic';

const categories = [
  { name: 'All', count: 1247, active: true },
  { name: 'Design', count: 432, active: false },
  { name: 'Technology', count: 389, active: false },
  { name: 'Productivity', count: 267, active: false },
  { name: 'Business', count: 159, active: false },
];

const trendingPosts = [
  {
    id: '1',
    title: 'The Future of Sustainable Design in 2025',
    author: 'Sarah Martinez',
    authorUsername: 'sarah_design',
    excerpt: 'Exploring how eco-friendly practices are reshaping the design industry...',
    image: '/generated/design.jpg',
    views: 2847,
    likes: 342,
    comments: 67,
    readTime: '8 min',
    category: 'Design',
  },
  {
    id: '2',
    title: 'Building Scalable Microservices with Node.js',
    author: 'Mike Chen',
    authorUsername: 'mike_dev',
    excerpt: 'A comprehensive guide to architecting modern backend systems...',
    image: '/generated/workflow.jpg',
    views: 1923,
    likes: 289,
    comments: 43,
    readTime: '12 min',
    category: 'Technology',
  },
  {
    id: '3',
    title: 'Mastering Remote Work: A Complete Guide',
    author: 'Emma Wilson',
    authorUsername: 'emma_writes',
    excerpt: 'Tips and strategies for staying productive while working from anywhere...',
    image: '/generated/productivity.jpg',
    views: 1654,
    likes: 234,
    comments: 56,
    readTime: '6 min',
    category: 'Productivity',
  },
  {
    id: '4',
    title: 'The Art of Minimalist UI Design',
    author: 'Alex Johnson',
    authorUsername: 'alex_ui',
    excerpt: 'Less is more: creating beautiful interfaces with restraint...',
    image: '/generated/design.jpg',
    views: 1432,
    likes: 198,
    comments: 34,
    readTime: '7 min',
    category: 'Design',
  },
  {
    id: '5',
    title: 'TypeScript Best Practices for Large Codebases',
    author: 'David Park',
    authorUsername: 'david_ts',
    excerpt: 'Advanced patterns for maintaining type safety at scale...',
    image: '/generated/workflow.jpg',
    views: 1289,
    likes: 176,
    comments: 29,
    readTime: '10 min',
    category: 'Technology',
  },
  {
    id: '6',
    title: 'Building Better Habits Through Gamification',
    author: 'Lisa Anderson',
    authorUsername: 'lisa_habits',
    excerpt: 'How game mechanics can transform your daily routine...',
    image: '/generated/productivity.jpg',
    views: 1087,
    likes: 154,
    comments: 41,
    readTime: '5 min',
    category: 'Productivity',
  },
];

export default function ExplorePage() {
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
              <Link href="/explore" className="text-secondary-foreground hover:text-secondary-foreground/80 transition font-medium">
                Explore
              </Link>
              <Link href="/guides" className="text-secondary-foreground hover:text-secondary-foreground/80 transition">
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Explore Stories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover trending posts from writers around the world
          </p>
        </div>

        {/* Search Bar */}
        <Card className="max-w-3xl mx-auto mb-8">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search for topics, authors, or keywords..."
                  className="pl-10 h-12"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="flex items-center justify-center space-x-3 mb-12 flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? 'default' : 'outline'}
              className={category.active ? 'bg-primary text-primary-foreground' : ''}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </Button>
          ))}
        </div>

        {/* Trending Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Trending Now</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-lg transition h-full">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <span className="font-medium text-foreground">{post.author}</span>
                      </div>
                      <span>{post.readTime} read</span>
                    </div>

                    <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{post.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Heart className="w-3.5 h-3.5" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{post.comments}</span>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>
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
