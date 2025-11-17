'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Trophy, Flame, Target, Users, TrendingUp, Star, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-secondary text-secondary-foreground shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-secondary/95">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="text-lg font-semibold">GhostWrite</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-secondary-foreground hover:text-primary transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/explore" className="text-secondary-foreground hover:text-primary transition-colors relative group">
                Explore
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/guides" className="text-secondary-foreground hover:text-primary transition-colors relative group">
                Guides
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/dashboard" className="text-secondary-foreground hover:text-primary transition-colors relative group">
                Dashboard
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/account" className="text-secondary-foreground hover:text-primary transition-colors relative group">
                Account
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-button hover:shadow-lg transition-all hover:scale-105 hidden md:inline-flex">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-secondary-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-in slide-in-from-bottom-5">
              <Link href="/" className="block text-secondary-foreground hover:text-primary transition-colors py-2">
                Home
              </Link>
              <Link href="/explore" className="block text-secondary-foreground hover:text-primary transition-colors py-2">
                Explore
              </Link>
              <Link href="/guides" className="block text-secondary-foreground hover:text-primary transition-colors py-2">
                Guides
              </Link>
              <Link href="/dashboard" className="block text-secondary-foreground hover:text-primary transition-colors py-2">
                Dashboard
              </Link>
              <Link href="/account" className="block text-secondary-foreground hover:text-primary transition-colors py-2">
                Account
              </Link>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-button mt-4">
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-in slide-in-from-bottom-5">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20 hover:border-primary/40 transition-colors cursor-default">
              <Trophy className="w-4 h-4" />
              <span>Join 10,000+ Writers Earning Points & Badges</span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </div>
            <h1 className="hero-heading text-foreground mb-6 leading-tight">
              Write. Compete. Win.<br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Your Writing Journey Gamified
              </span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
              Transform your writing into an adventure! Earn XP, unlock achievements, climb the leaderboard, and compete in challenges while building your blog. Make every word count.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-button font-medium group hover:shadow-lg transition-all hover:scale-105"
              >
                <Link href="/dashboard" className="flex items-center space-x-2">
                  <span>Start Your Quest</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium hover:bg-primary/5 hover:border-primary/50 transition-all"
              >
                <Link href="/dashboard/gamification" className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4" />
                  <span>View Leaderboard</span>
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-purple-500/80 border-2 border-background flex items-center justify-center text-white text-xs font-medium">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">10,000+ Active Writers</p>
                <p className="text-muted-foreground">Join the community today</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center animate-in slide-in-from-bottom-5 [animation-delay:200ms]">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl animate-pulse-glow"></div>
              <Image
                src="/generated/hero-illustration.png"
                alt="Person writing on laptop"
                width={500}
                height={500}
                className="w-full max-w-md relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Features Section */}
      <section className="bg-gradient-to-br from-primary/5 via-purple-500/5 to-background py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-in slide-in-from-bottom-5">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Level Up Your Writing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Turn your creative passion into an exciting journey with powerful gamification features</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all group hover:-translate-y-2 cursor-default animate-in slide-in-from-bottom-5 [animation-delay:100ms]">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Daily Streaks</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Build momentum with daily writing goals and maintain your streak for maximum rewards</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all group hover:-translate-y-2 cursor-default animate-in slide-in-from-bottom-5 [animation-delay:200ms]">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Achievements</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Unlock badges and earn XP as you hit milestones and complete challenges</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all group hover:-translate-y-2 cursor-default animate-in slide-in-from-bottom-5 [animation-delay:300ms]">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Leaderboards</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Compete with writers worldwide and climb the ranks to become #1</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all group hover:-translate-y-2 cursor-default animate-in slide-in-from-bottom-5 [animation-delay:400ms]">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Challenges</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Join weekly and monthly challenges to push your limits and earn exclusive rewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/95 text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-110 transition-transform cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-2">10K+</div>
              <p className="text-sm md:text-base text-secondary-foreground/80">Active Writers</p>
            </div>
            <div className="hover:scale-110 transition-transform cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">250K+</div>
              <p className="text-sm md:text-base text-secondary-foreground/80">Posts Published</p>
            </div>
            <div className="hover:scale-110 transition-transform cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">1M+</div>
              <p className="text-sm md:text-base text-secondary-foreground/80">XP Earned</p>
            </div>
            <div className="hover:scale-110 transition-transform cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">500+</div>
              <p className="text-sm md:text-base text-secondary-foreground/80">Achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">Featured Highlights</h2>
              <p className="text-muted-foreground">Discover inspiring content from our community</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 hover:bg-primary hover:text-primary-foreground transition-all">
              <Link href="/explore" className="flex items-center space-x-2">
                <span>Explore All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Post 1 */}
            <Link href="/blog/productivity" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/generated/productivity.jpg"
                    alt="Productivity workspace"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs font-medium mb-3">
                    Productivity
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    Getting Started with Remote Work
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    Essential tips and strategies for staying productive while working from home
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-medium">sarah_writer</span>
                    <span className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      <span>247 views</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Post 2 */}
            <Link href="/blog/workflow" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/generated/workflow.jpg"
                    alt="Modern architecture"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-xs font-medium mb-3">
                    Design
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    The Future of Sustainable Design
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    Exploring eco-friendly approaches to modern design practices
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-medium">mike_creative</span>
                    <span className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      <span>891 views</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Post 3 */}
            <Link href="/blog/design" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/generated/design.jpg"
                    alt="Design workspace"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-xs font-medium mb-3">
                    UX Design
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    Building Better User Experiences
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    A comprehensive guide to UX principles and best practices
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-medium">jenny_ux</span>
                    <span className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      <span>445 views</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Writing Adventure?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of writers who are already earning XP, unlocking achievements, and building their creative legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group hover:scale-105 transition-all">
                <Link href="/dashboard" className="flex items-center space-x-2">
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-all">
                <Link href="/guides">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 border-t border-secondary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">G</span>
            </div>
            <span className="text-lg font-semibold">GhostWrite</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm mb-12">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Company</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="/press" className="hover:text-primary transition-colors">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Product</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/security" className="hover:text-primary transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Resources</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/guides" className="hover:text-primary transition-colors">Guides</Link></li>
                <li><Link href="/support" className="hover:text-primary transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Terms</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Connect</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link href="/twitter" className="hover:text-primary transition-colors">Twitter</Link></li>
                <li><Link href="/linkedin" className="hover:text-primary transition-colors">LinkedIn</Link></li>
                <li><Link href="/github" className="hover:text-primary transition-colors">GitHub</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
            <p>Copyright © 2024 GhostWrite. All rights reserved. Made with ❤️ for writers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
