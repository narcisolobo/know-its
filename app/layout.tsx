import Shell from '@/components/layout/Shell';
import { rubik } from '@/fonts';
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { theme } from '@/mantine-theme/theme';

const metadata: Metadata = {
  title: 'Know-Its',
  description: 'A new note-taking web-application.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-mantine-color-scheme="dark">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={rubik.className}>
        <MantineProvider theme={theme} forceColorScheme="dark">
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}

export { metadata };
export default RootLayout;
