'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  PenSquare,
  FileText,
  TrendingUp,
  MessageSquare,
  HelpCircle,
  Book,
  MessageCircle,
  Mail,
  Trophy,
  Search
} from 'lucide-react';

export const dynamic = 'force-dynamic';

const faqs = [
  {
    question: 'How do I publish my first post?',
    answer: 'Click the "New Post" button in your dashboard, write your content in the editor, and click "Publish Article" when you\'re ready. Your post will be live immediately!',
  },
  {
    question: 'How does the gamification system work?',
    answer: 'Earn XP by writing posts, maintaining daily streaks, and engaging with the community. Level up to unlock achievements and climb the leaderboard!',
  },
  {
    question: 'Can I schedule posts for later?',
    answer: 'Yes! In the post editor, go to Post Settings and select a publish date and time. Your post will automatically go live at the scheduled time.',
  },
  {
    question: 'How do I customize my profile?',
    answer: 'Go to Account Settings from the user menu to update your profile picture, bio, social links, and display preferences.',
  },
  {
    question: 'What happens to my drafts?',
    answer: 'All drafts are automatically saved and accessible from the Drafts page. They remain private until you publish them.',
  },
  {
    question: 'How can I increase my views?',
    answer: 'Use engaging titles, add relevant tags, share on social media, and maintain a consistent posting schedule. Quality content naturally attracts more readers!',
  },
];

export default function HelpPage() {
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
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Stats</span>
            </Link>
            <Link
              href="/dashboard/help"
              className="flex items-center space-x-3 px-4 py-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground"
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
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Help & Support</h1>
              <p className="text-muted-foreground">Find answers to common questions and get assistance</p>
            </div>

            {/* Search */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search for help topics..."
                    className="pl-10 h-12"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="hover:shadow-md transition cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Book className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground mb-1">Documentation</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive guides and tutorials</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition cursor-pointer">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground mb-1">Community Forum</h3>
                  <p className="text-sm text-muted-foreground">Connect with other writers</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Mail className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                  <p className="text-sm text-muted-foreground">Get personalized help</p>
                </CardContent>
              </Card>
            </div>

            {/* FAQs */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5" />
                  <span>Frequently Asked Questions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="pb-6 border-b border-border last:border-0 last:pb-0">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Still need help?</CardTitle>
                <p className="text-sm text-muted-foreground">Send us a message and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What do you need help with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Describe your issue or question in detail..."
                    />
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold text-foreground mb-3">Additional Resources</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <Link href="/guides" className="text-primary hover:underline">
                  • Getting Started Guide
                </Link>
                <Link href="/guides" className="text-primary hover:underline">
                  • Writing Best Practices
                </Link>
                <Link href="/guides" className="text-primary hover:underline">
                  • SEO Tips for Bloggers
                </Link>
                <Link href="/guides" className="text-primary hover:underline">
                  • Community Guidelines
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
