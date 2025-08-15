export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body dir="rtl">{children}</body>
    </html>
  )
}