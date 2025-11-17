'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Trophy, Flame, Target, Users, TrendingUp, Star } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
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
              <Link href="/guides" className="text-secondary-foreground hover:text-secondary-foreground/80 transition">
                Guides
              </Link>
              <Link href="/dashboard" className="text-secondary-foreground hover:text-secondary-foreground/80 transition">
                Dashboard
              </Link>
              <Link href="/account" className="text-secondary-foreground hover:text-secondary-foreground/80 transition">
                Account
              </Link>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-button">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
              <Trophy className="w-4 h-4" />
              <span>Join 10,000+ Writers Earning Points & Badges</span>
            </div>
            <h1 className="hero-heading text-foreground mb-4">
              Write. Compete. Win.<br />Your Writing Journey Gamified
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Transform your writing into an adventure! Earn XP, unlock achievements, climb the leaderboard, and compete in challenges while building your blog. Make every word count.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-button font-medium"
              >
                <Link href="/dashboard">Start Your Quest</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium"
              >
                <Link href="/dashboard/gamification">View Leaderboard</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/generated/hero-illustration.png"
              alt="Person writing on laptop"
              width={400}
              height={400}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Gamification Features Section */}
      <section className="bg-gradient-to-br from-primary/5 to-background py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Level Up Your Writing</h2>
            <p className="text-muted-foreground text-lg">Turn your creative passion into an exciting journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Flame className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Daily Streaks</h3>
              <p className="text-sm text-muted-foreground">Build momentum with daily writing goals and maintain your streak for maximum rewards</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Trophy className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Achievements</h3>
              <p className="text-sm text-muted-foreground">Unlock badges and earn XP as you hit milestones and complete challenges</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Leaderboards</h3>
              <p className="text-sm text-muted-foreground">Compete with writers worldwide and climb the ranks to become #1</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Challenges</h3>
              <p className="text-sm text-muted-foreground">Join weekly and monthly challenges to push your limits and earn exclusive rewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-sm text-secondary-foreground/80">Active Writers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">250K+</div>
              <p className="text-sm text-secondary-foreground/80">Posts Published</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <p className="text-sm text-secondary-foreground/80">XP Earned</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-secondary-foreground/80">Achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Featured Highlights</h2>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Join Thousands of Writers</span>
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Sign Up
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Featured Post 1 */}
            <Link href="/blog/productivity" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow hover:shadow-md transition">
                <div className="relative h-48">
                  <Image
                    src="/generated/productivity.jpg"
                    alt="Productivity workspace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition">
                    Productivity
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Getting Started with Remote Work
                  </p>
                  <div className="text-xs text-muted-foreground">
                    sarah_writer • 247 views
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Post 2 */}
            <Link href="/blog/workflow" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow hover:shadow-md transition">
                <div className="relative h-48">
                  <Image
                    src="/generated/workflow.jpg"
                    alt="Modern architecture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition">
                    Master Your Workflow
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    The Future of Sustainable Design
                  </p>
                  <div className="text-xs text-muted-foreground">
                    mike_creative • 891 views
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Post 3 */}
            <Link href="/blog/design" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow hover:shadow-md transition">
                <div className="relative h-48">
                  <Image
                    src="/generated/design.jpg"
                    alt="Design workspace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition">
                    Master Your Workflow
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Building Better User Experiences
                  </p>
                  <div className="text-xs text-muted-foreground">
                    jenny_ux • 445 views
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">G</span>
            </div>
            <span className="text-lg font-semibold">GhostWrite</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/press">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/security">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/guides">Guides</Link></li>
                <li><Link href="/support">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Terms</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="/terms">Terms</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/cookies">Cookies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="/twitter">Twitter</Link></li>
                <li><Link href="/linkedin">LinkedIn</Link></li>
                <li><Link href="/github">GitHub</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
            <p>Copyright © 2024 GhostWrite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
