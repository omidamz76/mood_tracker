'use client';

import EmojiPicker from '../features/mood/components/EmojiPicker';

export default function HomePage() {
  const handleEmojiSelect = (emoji: any) => {
    console.log('Selected emoji:', emoji);
  };

  return (
    <div className="p-4">
      <h1>Mood Tracker</h1>
      <EmojiPicker onSelect={handleEmojiSelect} />
    </div>
  );
}