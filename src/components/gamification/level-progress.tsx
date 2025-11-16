'use client';

import { Star, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface LevelProgressProps {
  level: number;
  currentXP: number;
  xpForNextLevel: number;
  totalPoints: number;
}

export function LevelProgress({ level, currentXP, xpForNextLevel, totalPoints }: LevelProgressProps) {
  const progressPercent = (currentXP / xpForNextLevel) * 100;

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Level {level}</h3>
              <p className="text-sm text-muted-foreground">{totalPoints.toLocaleString()} total points</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-medium">Next Level</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {currentXP.toLocaleString()} / {xpForNextLevel.toLocaleString()} XP
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-xs text-center text-muted-foreground">
            {Math.floor(progressPercent)}% complete
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
