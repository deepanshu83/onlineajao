import './globals.css';

export const metadata = {
  title: 'onlineajao — Aapka business, ab online',
  description: 'Website, Google Business Profile aur social media services for growing businesses.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
