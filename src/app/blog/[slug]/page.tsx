import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare, Heart, Share2, Bookmark } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Mock post data
  const post = {
    title: 'Getting Started with Remote Work',
    author: 'Sarah Writer',
    authorUsername: 'sarah_writer',
    publishedDate: 'November 10, 2024',
    readTime: '4 min read',
    views: 247,
    content: `
      <p class="mb-6">Working remotely has become increasingly common, and for good reason. It offers flexibility, eliminates commute time, and allows for better work-life balance. However, it also comes with its own set of challenges that need to be addressed.</p>

      <h2 class="text-2xl font-semibold mb-4 mt-8">Setting Up Your Workspace</h2>
      <p class="mb-6">The first step to successful remote work is creating a dedicated workspace. This doesn't necessarily mean having a separate room, but it should be a space that's distinct from your relaxation areas.</p>

      <ul class="list-disc list-inside mb-6 space-y-2 text-foreground/90">
        <li>Choose a quiet area with minimal distractions</li>
        <li>Invest in a comfortable chair and proper desk setup</li>
        <li>Ensure good lighting, preferably natural light</li>
        <li>Keep your workspace organized and clutter-free</li>
      </ul>

      <h2 class="text-2xl font-semibold mb-4 mt-8">Maintaining Productivity</h2>
      <p class="mb-6">One of the biggest challenges of remote work is staying productive without the structure of an office environment. Here are some strategies that can help:</p>

      <p class="mb-6">Start your day with a routine. Just because you're working from home doesn't mean you should roll out of bed and straight to your desk. Take time to get ready as if you were going to an office.</p>

      <p class="mb-6">Use time-blocking techniques to structure your day. Allocate specific time slots for different tasks and stick to them. This helps create a sense of rhythm and prevents work from bleeding into personal time.</p>

      <h2 class="text-2xl font-semibold mb-4 mt-8">Communication is Key</h2>
      <p class="mb-6">Remote work requires more intentional communication than office work. You can't just turn to your colleague and ask a quick question. Instead, you need to be proactive about staying connected.</p>

      <p class="mb-6">Schedule regular check-ins with your team, use video calls when possible, and don't hesitate to over-communicate. It's better to provide too much information than too little when working remotely.</p>
    `,
    tags: ['remote work', 'productivity', 'work-life balance'],
    comments: 12,
    likes: 45,
  };

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
              <Link href="/dashboard" className="text-secondary-foreground hover:text-secondary-foreground/80 transition text-sm">
                Dashboard
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <article className="max-w-3xl mx-auto">
          {/* Post Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {post.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {post.publishedDate} • {post.readTime}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4 mr-1" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src="/generated/productivity.jpg"
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-muted/80 transition"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Share */}
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="font-semibold text-foreground mb-4">Share this article</h3>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Comments ({post.comments})
            </h3>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-muted">U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <textarea
                      className="w-full min-h-[100px] p-3 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Share your thoughts..."
                    />
                    <div className="flex justify-end mt-3">
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Post Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sample Comments */}
            <div className="space-y-6">
              {[
                {
                  author: 'John Doe',
                  username: 'john_doe',
                  time: '2 hours ago',
                  content: 'Great article! These tips are really helpful for anyone starting remote work.',
                  likes: 5,
                },
                {
                  author: 'Jane Smith',
                  username: 'jane_smith',
                  time: '5 hours ago',
                  content: 'I especially appreciate the section on maintaining productivity. The time-blocking technique has been a game-changer for me.',
                  likes: 8,
                },
              ].map((comment, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/20 text-primary">
                          {comment.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <p className="font-medium text-foreground">{comment.author}</p>
                          <span className="text-muted-foreground text-sm">•</span>
                          <p className="text-sm text-muted-foreground">{comment.time}</p>
                        </div>
                        <p className="text-foreground/90 mb-3">{comment.content}</p>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition">
                            <Heart className="w-4 h-4" />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition">
                            <MessageSquare className="w-4 h-4" />
                            <span>Reply</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts Sidebar */}
        <aside className="max-w-3xl mx-auto mt-12">
          <h3 className="text-xl font-semibold text-foreground mb-6">Related Posts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'The Future of Sustainable Design', image: '/generated/workflow.jpg' },
              { title: 'Building Better User Experiences', image: '/generated/design.jpg' },
              { title: 'Productivity Tips for Developers', image: '/generated/productivity.jpg' },
            ].map((relatedPost, idx) => (
              <Link key={idx} href={`/blog/related-${idx}`} className="group">
                <Card className="overflow-hidden hover:shadow-md transition">
                  <div className="relative h-32">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h4 className="font-medium text-foreground group-hover:text-primary transition line-clamp-2">
                      {relatedPost.title}
                    </h4>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </aside>
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
