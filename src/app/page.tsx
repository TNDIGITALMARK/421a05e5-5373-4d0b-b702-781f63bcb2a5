import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
            <h1 className="hero-heading text-foreground mb-4">
              Unlock Your Stories.<br />Effortlessly
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A clean, professional blog platform for writers to create, publish, and share content with beautiful presentation.
              Start blogging within minutes without technical complexity.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-button font-medium"
            >
              <Link href="/dashboard">Start Writing for Free</Link>
            </Button>
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
