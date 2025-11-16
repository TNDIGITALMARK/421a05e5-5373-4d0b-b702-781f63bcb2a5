'use client';

import { Trophy, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AchievementToastProps {
  achievementName: string;
  achievementDescription: string;
  pointsEarned: number;
  onClose: () => void;
}

export function AchievementToast({
  achievementName,
  achievementDescription,
  pointsEarned,
  onClose,
}: AchievementToastProps) {
  return (
    <Card className="fixed bottom-6 right-6 z-50 w-96 bg-gradient-to-br from-primary/20 to-background border-primary shadow-lg animate-in slide-in-from-bottom-5">
      <div className="p-4">
        <div className="flex items-start space-x-3">
          {/* Trophy Icon */}
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <Trophy className="w-6 h-6 text-primary-foreground" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-1">
              <h4 className="font-bold text-foreground">Achievement Unlocked!</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-6 w-6 p-0 hover:bg-muted"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm font-semibold text-primary mb-1">{achievementName}</p>
            <p className="text-xs text-muted-foreground mb-2">{achievementDescription}</p>
            <div className="flex items-center space-x-1 text-xs font-medium text-success">
              <Trophy className="w-3 h-3" />
              <span>+{pointsEarned} XP earned</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
