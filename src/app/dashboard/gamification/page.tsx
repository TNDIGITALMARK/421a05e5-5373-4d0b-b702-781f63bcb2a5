'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PenSquare, FileText, TrendingUp, MessageSquare, ArrowLeft } from 'lucide-react';
import { AchievementBadge } from '@/components/gamification/achievement-badge';
import { WritingStreak } from '@/components/gamification/writing-streak';
import { DailyGoals } from '@/components/gamification/daily-goals';
import { Leaderboard } from '@/components/gamification/leaderboard';
import { ChallengeCard } from '@/components/gamification/challenge-card';
import { LevelProgress } from '@/components/gamification/level-progress';

export const dynamic = 'force-dynamic';

// Mock data for demonstration
const mockAchievements = [
  {
    icon: 'trophy',
    name: 'First Post',
    description: 'Publish your first blog post',
    earned: true,
    earnedDate: 'Nov 1, 2024',
  },
  {
    icon: 'flame',
    name: '7 Day Streak',
    description: 'Write for 7 consecutive days',
    earned: true,
    earnedDate: 'Nov 10, 2024',
  },
  {
    icon: 'star',
    name: '1000 Words',
    description: 'Write 1000 words in a single post',
    earned: false,
    progress: 743,
    requirement: 1000,
  },
  {
    icon: 'crown',
    name: 'Top 10',
    description: 'Reach top 10 on the leaderboard',
    earned: false,
    progress: 12,
    requirement: 10,
  },
  {
    icon: 'zap',
    name: 'Speed Writer',
    description: 'Publish 5 posts in one day',
    earned: false,
    progress: 2,
    requirement: 5,
  },
  {
    icon: 'medal',
    name: '10K Views',
    description: 'Reach 10,000 total views',
    earned: false,
    progress: 2847,
    requirement: 10000,
  },
];

const mockLeaderboard = [
  { rank: 1, username: 'ProWriter123', points: 8940, posts: 45, isCurrentUser: false },
  { rank: 2, username: 'ContentKing', points: 7820, posts: 38, isCurrentUser: false },
  { rank: 3, username: 'BlogMaster', points: 6550, posts: 32, isCurrentUser: false },
  { rank: 4, username: 'sarah_writer', points: 5720, posts: 28, isCurrentUser: true },
  { rank: 5, username: 'WordSmith', points: 5430, posts: 26, isCurrentUser: false },
  { rank: 6, username: 'TechWriter', points: 4890, posts: 24, isCurrentUser: false },
  { rank: 7, username: 'CreativeMin', points: 4320, posts: 21, isCurrentUser: false },
  { rank: 8, username: 'ThoughtLeader', points: 3950, posts: 19, isCurrentUser: false },
  { rank: 9, username: 'StoryTeller', points: 3680, posts: 18, isCurrentUser: false },
  { rank: 10, username: 'InkMaster', points: 3210, posts: 16, isCurrentUser: false },
];

const mockChallenges = [
  {
    title: 'Daily Dash',
    description: 'Write and publish 1 post today',
    type: 'daily' as const,
    progress: 0,
    requirement: 1,
    reward: 100,
    timeRemaining: '12h remaining',
    joined: true,
  },
  {
    title: 'Week Warrior',
    description: 'Publish 7 posts this week',
    type: 'weekly' as const,
    progress: 3,
    requirement: 7,
    reward: 500,
    timeRemaining: '4d remaining',
    joined: true,
  },
  {
    title: 'November NaNoWriMo',
    description: 'Write 50,000 words in November',
    type: 'monthly' as const,
    progress: 12430,
    requirement: 50000,
    reward: 2000,
    timeRemaining: '14d remaining',
    joined: false,
  },
  {
    title: 'Engagement King',
    description: 'Get 100 comments across all posts',
    type: 'special' as const,
    progress: 47,
    requirement: 100,
    reward: 750,
    timeRemaining: '30d remaining',
    joined: true,
  },
];

export default function GamificationPage() {
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
              href="/dashboard/gamification"
              className="flex items-center space-x-3 px-4 py-2 rounded-md bg-sidebar-accent text-sidebar-accent-foreground"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Achievements</span>
            </Link>
            <Link
              href="/dashboard/posts"
              className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">All Posts</span>
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
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Link href="/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Dashboard
            </Link>

            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Achievements & Progress</h1>
              <p className="text-muted-foreground">Track your writing journey and compete with the community</p>
            </div>

            {/* Level Progress */}
            <div className="mb-8">
              <LevelProgress
                level={12}
                currentXP={3420}
                xpForNextLevel={5000}
                totalPoints={5720}
              />
            </div>

            {/* Top Row - Streak and Goals */}
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

            {/* Active Challenges */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Active Challenges</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockChallenges.map((challenge, index) => (
                  <ChallengeCard key={index} {...challenge} />
                ))}
              </div>
            </div>

            {/* Two Column Layout - Achievements and Leaderboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Achievements */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockAchievements.map((achievement, index) => (
                    <AchievementBadge key={index} {...achievement} />
                  ))}
                </div>
              </div>

              {/* Leaderboard */}
              <div>
                <Leaderboard entries={mockLeaderboard} currentUserRank={4} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
