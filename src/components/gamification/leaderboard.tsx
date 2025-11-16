'use client';

import { Trophy, Medal, Crown, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  posts: number;
  avatar?: string;
  isCurrentUser?: boolean;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  currentUserRank?: number;
}

export function Leaderboard({ entries, currentUserRank }: LeaderboardProps) {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-primary" />
          <span>Leaderboard</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="week" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
            <TabsTrigger value="all">All Time</TabsTrigger>
          </TabsList>

          <TabsContent value="week" className="space-y-2">
            {entries.slice(0, 10).map((entry) => (
              <div
                key={entry.username}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  entry.isCurrentUser
                    ? 'bg-primary/10 border border-primary/20'
                    : 'bg-muted/30 hover:bg-muted/50'
                }`}
              >
                {/* Rank */}
                <div className="w-8 flex justify-center">{getRankIcon(entry.rank)}</div>

                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-medium text-sm">
                    {entry.username.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="font-semibold text-sm">
                    {entry.username}
                    {entry.isCurrentUser && (
                      <span className="ml-2 text-xs text-primary">(You)</span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">{entry.posts} posts</p>
                </div>

                {/* Points */}
                <div className="text-right">
                  <div className="font-bold text-primary">{entry.points.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">points</div>
                </div>
              </div>
            ))}

            {currentUserRank && currentUserRank > 10 && (
              <div className="pt-2 border-t border-border">
                <div className="text-center text-sm text-muted-foreground">
                  You're ranked #{currentUserRank}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="month">
            <div className="text-center py-8 text-muted-foreground">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Monthly rankings coming soon</p>
            </div>
          </TabsContent>

          <TabsContent value="all">
            <div className="text-center py-8 text-muted-foreground">
              <Trophy className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">All-time rankings coming soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
