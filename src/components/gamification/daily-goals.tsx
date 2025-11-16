'use client';

import { Target, FileText, Type, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DailyGoalsProps {
  wordsGoal: number;
  wordsWritten: number;
  postsGoal: number;
  postsWritten: number;
}

export function DailyGoals({ wordsGoal, wordsWritten, postsGoal, postsWritten }: DailyGoalsProps) {
  const wordsProgress = (wordsWritten / wordsGoal) * 100;
  const postsProgress = (postsWritten / postsGoal) * 100;
  const allGoalsComplete = wordsProgress >= 100 && postsProgress >= 100;

  return (
    <Card className={allGoalsComplete ? 'border-success bg-success/5' : ''}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span>Today's Goals</span>
          </div>
          {allGoalsComplete && (
            <CheckCircle2 className="w-5 h-5 text-success" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Words Goal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Type className="w-4 h-4 text-primary" />
              <span className="font-medium">Words Written</span>
            </div>
            <span className="text-muted-foreground">
              {wordsWritten.toLocaleString()} / {wordsGoal.toLocaleString()}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                wordsProgress >= 100 ? 'bg-success' : 'bg-primary'
              }`}
              style={{ width: `${Math.min(wordsProgress, 100)}%` }}
            />
          </div>
        </div>

        {/* Posts Goal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-primary" />
              <span className="font-medium">Posts Published</span>
            </div>
            <span className="text-muted-foreground">
              {postsWritten} / {postsGoal}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                postsProgress >= 100 ? 'bg-success' : 'bg-primary'
              }`}
              style={{ width: `${Math.min(postsProgress, 100)}%` }}
            />
          </div>
        </div>

        {/* Call to Action */}
        {!allGoalsComplete ? (
          <Button className="w-full" variant="outline">
            Continue Writing
          </Button>
        ) : (
          <div className="text-center p-3 bg-success/10 rounded-lg">
            <p className="text-sm font-medium text-success">🎉 Goals completed!</p>
            <p className="text-xs text-muted-foreground mt-1">Keep the momentum going tomorrow</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
