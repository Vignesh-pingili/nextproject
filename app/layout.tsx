import '@/app/ui/global.css'  
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
