'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { emojis, Emoji } from '../moodData';

interface EmojiPickerProps {
  onSelect: (emoji: Emoji) => void;
  selectedEmoji?: Emoji;
}

export default function EmojiPicker({ onSelect, selectedEmoji }: EmojiPickerProps) {
  return (
    <div className="p-2">
      <div className="flex gap-3 overflow-x-auto py-2 px-2 sm:grid sm:grid-cols-5 sm:gap-3">
        {emojis.map((emoji) => (
        <Card
          key={emoji.id}
          role="button"
          tabIndex={0}
          aria-pressed={selectedEmoji?.id === emoji.id}
          aria-label={`${emoji.label} مود`}
          className={`cursor-pointer transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex-shrink-0 min-w-[88px] w-24 h-28 rounded-xl p-3 flex flex-col items-center justify-center text-4xl ${
            selectedEmoji?.id === emoji.id
              ? 'bg-primary text-white ring-2 ring-primary/60 scale-105'
              : 'bg-white hover:bg-gray-50'
          }`}
          onClick={() => onSelect(emoji)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(emoji);
            }
          }}
        >
          <CardContent className="p-0 flex flex-col items-center space-y-2 w-full">
            <div className="text-4xl select-none" aria-hidden>
              {emoji.emoji}
            </div>
            <Badge
              variant={selectedEmoji?.id === emoji.id ? "default" : "outline"}
              className="text-xs mt-2 px-3 py-1"
            >
              {emoji.label}
            </Badge>
            <span className="sr-only">{emoji.label}</span>
          </CardContent>
        </Card>
      ))}
      </div>
    </div>
  );
}