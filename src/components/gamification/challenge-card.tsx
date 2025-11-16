'use client';

import { Calendar, Target, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ChallengeCardProps {
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'monthly' | 'special';
  progress: number;
  requirement: number;
  reward: number;
  timeRemaining: string;
  joined: boolean;
  onJoin?: () => void;
}

export function ChallengeCard({
  title,
  description,
  type,
  progress,
  requirement,
  reward,
  timeRemaining,
  joined,
  onJoin,
}: ChallengeCardProps) {
  const progressPercent = (progress / requirement) * 100;
  const isComplete = progress >= requirement;

  const typeColors = {
    daily: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    weekly: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    monthly: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    special: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
  };

  return (
    <Card className={`${isComplete ? 'border-success bg-success/5' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <span
              className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${typeColors[type]}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Challenge
            </span>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-primary font-bold">
              <Award className="w-4 h-4" />
              <span>+{reward}</span>
            </div>
            <div className="text-xs text-muted-foreground">points</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>

        {joined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Progress</span>
              <span className="text-muted-foreground">
                {progress} / {requirement}
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full transition-all ${
                  isComplete ? 'bg-success' : 'bg-primary'
                }`}
                style={{ width: `${Math.min(progressPercent, 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{timeRemaining}</span>
          </div>

          {!joined ? (
            <Button size="sm" onClick={onJoin}>
              Join Challenge
            </Button>
          ) : isComplete ? (
            <div className="flex items-center space-x-1 text-sm font-medium text-success">
              <Target className="w-4 h-4" />
              <span>Completed!</span>
            </div>
          ) : (
            <Button size="sm" variant="outline">
              View Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
