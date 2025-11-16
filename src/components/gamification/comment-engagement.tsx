'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Share2, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CommentEngagementProps {
  postId: string;
  initialLikes?: number;
  initialComments?: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

export function CommentEngagement({
  postId,
  initialLikes = 0,
  initialComments = 0,
  onLike,
  onComment,
  onShare,
}: CommentEngagementProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [showReward, setShowReward] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
      setShowReward(true);
      setTimeout(() => setShowReward(false), 2000);
      onLike?.();
    }
  };

  const handleComment = () => {
    onComment?.();
  };

  const handleShare = () => {
    onShare?.();
  };

  return (
    <div className="relative">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            {/* Engagement Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant={isLiked ? 'default' : 'ghost'}
                size="sm"
                onClick={handleLike}
                className={`flex items-center space-x-2 transition-all ${
                  isLiked ? 'bg-red-500 hover:bg-red-600 text-white' : ''
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
                <span>{likes}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleComment}
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{initialComments}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="flex items-center space-x-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </Button>
            </div>

            {/* Points Badge */}
            <div className="flex items-center space-x-1 text-xs text-primary font-medium">
              <Trophy className="w-3 h-3" />
              <span>+5 XP per like</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reward Popup */}
      {showReward && (
        <div className="absolute top-0 right-0 transform translate-y-[-120%] animate-bounce">
          <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg shadow-lg text-sm font-medium">
            +5 XP earned! 🎉
          </div>
        </div>
      )}
    </div>
  );
}
