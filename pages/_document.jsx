import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="relative dark:bg-neutral-900 transition-colors ">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
