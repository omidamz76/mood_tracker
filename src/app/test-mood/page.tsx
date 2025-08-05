'use client';

import { useState } from 'react';
import EmojiPicker from '../../features/mood/components/EmojiPicker';
import { Emoji } from '../../features/mood/moodData';

export default function TestMoodPage() {
  const [selectedEmoji, setSelectedEmoji] = useState<Emoji | undefined>();

  const handleEmojiSelect = (emoji: Emoji) => {
    setSelectedEmoji(emoji);
    console.log('Selected emoji:', emoji);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Test EmojiPicker</h1>
        
        <EmojiPicker 
          onSelect={handleEmojiSelect}
          selectedEmoji={selectedEmoji}
        />
        
        {selectedEmoji && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h2 className="font-semibold">Selected:</h2>
            <p>{selectedEmoji.label}</p>
          </div>
        )}
      </div>
    </div>
  );
}
