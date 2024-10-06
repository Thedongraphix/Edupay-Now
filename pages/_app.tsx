import '../src/app/globals.css';

import type { ReactNode } from 'react';

interface MyAppProps {
  Component: React.ComponentType<{ pageProps: ReactNode }>;
  pageProps: ReactNode;
}

function MyApp({ Component, pageProps }: MyAppProps) {
    return <Component pageProps={pageProps} />;
  }

export default MyApp;