export const metadata = {
  title: "DatingTales — Anonymous dating stories, delivered every Friday",
  description: "The funniest, cringiest, and cutest anonymous dating tales — curated and delivered to your inbox weekly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}