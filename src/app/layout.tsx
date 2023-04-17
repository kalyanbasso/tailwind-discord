import './globals.css'

export const metadata = {
  title: 'Discord',
  description: 'Discord is the easiest way to talk over voice, video, and text. Chat, hang out, and stay close with your friends and communities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
