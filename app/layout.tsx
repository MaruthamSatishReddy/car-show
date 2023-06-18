import NavBar from '@/components/NavBar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cars Hub',
  description: 'Discovers the Best Car',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
