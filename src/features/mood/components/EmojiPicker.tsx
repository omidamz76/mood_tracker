'use client';

import { useState } from 'react';
import { emojis, Emoji } from '../moodData';

interface EmojiPickerProps {
  onSelect: (emoji: Emoji) => void;
  selectedEmoji?: Emoji;
}

export default function EmojiPicker({ onSelect, selectedEmoji }: EmojiPickerProps) {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {emojis.map((emoji) => (
        <button
          key={emoji.id}
          onClick={() => onSelect(emoji)}
          className={`p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
            selectedEmoji?.id === emoji.id
              ? 'bg-blue-100 border-2 border-blue-500'
              : 'bg-gray-50 hover:bg-gray-100'
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <img src={emoji.svg} alt={emoji.label} className="w-12 h-12" />
            <span className="text-sm font-medium text-gray-700">{emoji.label}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
