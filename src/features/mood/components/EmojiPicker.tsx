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
    <div className="grid grid-cols-5 gap-3 p-4">
      {emojis.map((emoji) => (
        <Card 
          key={emoji.id}
          className={`cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg ${
            selectedEmoji?.id === emoji.id
              ? 'ring-2 ring-blue-500 bg-blue-50'
              : 'hover:bg-gray-50'
          }`}
          onClick={() => onSelect(emoji)}
        >
          <CardContent className="p-3 flex flex-col items-center space-y-2">
            <div className="text-4xl">
              {emoji.emoji}
            </div>
            <Badge 
              variant={selectedEmoji?.id === emoji.id ? "default" : "secondary"}
              className="text-xs"
            >
              {emoji.label}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}