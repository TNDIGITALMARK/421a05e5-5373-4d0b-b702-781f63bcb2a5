'use client';

import { Flame, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WritingStreakProps {
  currentStreak: number;
  longestStreak: number;
  weekData: boolean[]; // Last 7 days
}

export function WritingStreak({ currentStreak, longestStreak, weekData }: WritingStreakProps) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Flame className="w-5 h-5 text-orange-500" />
          <span>Writing Streak</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Current Streak */}
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">{currentStreak}</div>
            <p className="text-sm text-muted-foreground">Day{currentStreak !== 1 ? 's' : ''} in a row</p>
          </div>

          {/* Weekly View */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              Last 7 Days
            </p>
            <div className="flex justify-between gap-2">
              {days.map((day, index) => (
                <div key={day} className="flex flex-col items-center space-y-1">
                  <div
                    className={`w-8 h-8 rounded-md flex items-center justify-center ${
                      weekData[index]
                        ? 'bg-success text-success-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {weekData[index] ? '✓' : '·'}
                  </div>
                  <span className="text-xs text-muted-foreground">{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Longest Streak */}
          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-2 text-sm">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Personal Best</span>
            </div>
            <div className="text-lg font-bold text-foreground">{longestStreak} days</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
