'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EmojiPicker from '../features/mood/components/EmojiPicker';
import { Emoji } from '../features/mood/moodData';

export default function HomePage() {
  const router = useRouter();
  const [selectedEmoji, setSelectedEmoji] = useState<Emoji | undefined>(undefined);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmojiSelect = (emoji: Emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleSubmit = async () => {
    if (!selectedEmoji) return;
    setLoading(true);
    try {
      // Assumption: no auth yet, send userId = 0
      const payload = { userId: 0, mood: selectedEmoji.value, note };
      const res = await fetch('/api/mood', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        // navigate to activities (placeholder page) and pass mood via localStorage
        try {
          localStorage.setItem('pendingMood', JSON.stringify({ mood: selectedEmoji }));
        } catch {}
        router.push('/activities');
      } else {
        console.error('Failed to save mood:', data);
        alert('خطا در ثبت مود. مجدداً تلاش کنید.');
      }
    } catch (err) {
      console.error(err);
      alert('خطا در ارتباط با سرور.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-center">امروز چطوری؟</h1>

      <EmojiPicker onSelect={handleEmojiSelect} selectedEmoji={selectedEmoji} />

      {/* report box */}
      <div className="mt-4">
        <label className="block text-sm mb-2">گزارش کوتاه از امروز (اختیاری)</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full rounded-md border p-2 text-base"
          rows={3}
          placeholder="مثلاً: امروز سرحال بودم یا استرس داشتم..."
        />
      </div>

      {/* submit button - fixed on small screens */}
      <div>
        <button
          onClick={handleSubmit}
          disabled={!selectedEmoji || loading}
          className="px-4 py-2 rounded-md bg-primary text-white disabled:opacity-50 w-full mt-4 sm:mt-6"
          aria-disabled={!selectedEmoji || loading}
        >
          {loading ? 'در حال ثبت...' : 'ثبت و ادامه'}
        </button>
      </div>

      <div className="sm:hidden" aria-hidden>
        {/* mobile fixed action */}
        <div className="fixed bottom-4 left-4 right-4">
          <button
            onClick={handleSubmit}
            disabled={!selectedEmoji || loading}
            className="w-full px-5 py-3 rounded-lg bg-primary text-white shadow-lg disabled:opacity-50"
          >
            {loading ? 'در حال ثبت...' : 'ثبت و ادامه'}
          </button>
        </div>
      </div>
    </div>
  );
}