// مدل‌های داده
export interface Emoji {
  id: number;
  label: string;
  emoji: string;
  value: string;
}

export interface Mood {
  id: number;
  userId: number;
  mood: string;
  note?: string;
  date: Date;
  createdAt: Date;
}

// لیست اموجی‌ها با کد یونیکد
export const emojis: Emoji[] = [
  { id: 1, label: "Rad", emoji: "\uD83E\uDD29", value: "rad" }, // 🤩
  { id: 2, label: "Good", emoji: "\uD83D\uDE0A", value: "good" }, // 😊
  { id: 3, label: "Meh", emoji: "\uD83D\uDE10", value: "meh" }, // 😐
  { id: 4, label: "Bad", emoji: "\uD83D\uDE1E", value: "bad" }, // 😞
  { id: 5, label: "Awful", emoji: "\uD83D\uDE2D", value: "awful" }, // 😭
];
