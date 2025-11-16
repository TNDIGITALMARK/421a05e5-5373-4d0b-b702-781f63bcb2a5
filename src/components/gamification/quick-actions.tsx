'use client';

import Link from 'next/link';
import { PenSquare, Trophy, Target, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/dashboard/editor" className="flex items-center space-x-2">
            <PenSquare className="w-4 h-4" />
            <span>Write New Post</span>
          </Link>
        </Button>

        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/dashboard/gamification" className="flex items-center space-x-2">
            <Trophy className="w-4 h-4" />
            <span>View Achievements</span>
          </Link>
        </Button>

        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/dashboard/gamification#challenges" className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span>Active Challenges</span>
          </Link>
        </Button>

        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/dashboard/gamification#leaderboard" className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>Check Leaderboard</span>
          </Link>
        </Button>

        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/community" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Community</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
