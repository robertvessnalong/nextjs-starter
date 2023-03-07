import '@/styles/globals.css';
import '@/styles/App.css';
import { builder } from '@builder.io/react';

// Initialize the Builder SDK with your organization's API Key
// Find the API Key on: https://builder.io/account/settings
builder.init(process.env.NEXT_PUBLIC_BUILDER_KEY);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
