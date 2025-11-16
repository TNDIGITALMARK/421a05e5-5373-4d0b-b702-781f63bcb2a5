'use client';

import { Trophy, Star, Award, Target, Flame, Zap, Crown, Medal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface AchievementBadgeProps {
  icon: string;
  name: string;
  description: string;
  earned: boolean;
  earnedDate?: string;
  progress?: number;
  requirement?: number;
}

const iconMap = {
  trophy: Trophy,
  star: Star,
  award: Award,
  target: Target,
  flame: Flame,
  zap: Zap,
  crown: Crown,
  medal: Medal,
};

export function AchievementBadge({
  icon,
  name,
  description,
  earned,
  earnedDate,
  progress = 0,
  requirement = 100,
}: AchievementBadgeProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Trophy;
  const progressPercent = (progress / requirement) * 100;

  return (
    <Card
      className={`transition-all hover:shadow-md ${
        earned ? 'bg-primary/5 border-primary/20' : 'bg-muted/30 opacity-70'
      }`}
    >
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div
            className={`p-3 rounded-lg ${
              earned ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">{name}</h4>
            <p className="text-sm text-muted-foreground mb-2">{description}</p>

            {earned ? (
              <div className="flex items-center text-xs text-success">
                <Trophy className="w-3 h-3 mr-1" />
                Earned {earnedDate}
              </div>
            ) : (
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>{progress}/{requirement}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
