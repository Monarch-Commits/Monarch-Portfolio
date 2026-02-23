import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { AuthProvider } from './AuthProvider';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // optional
});

export const metadata: Metadata = {
  title: 'Monarch Portfolio',
  description: 'My Personal Portfolio Website',
  icons: {
    icon: 'https://drive.google.com/uc?export=view&id=1czPtHOnb06NAo-awhCgsOgO_uHXNEUVU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={` ${poppins.variable} antialiased`}>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </html>
    </AuthProvider>
  );
}
