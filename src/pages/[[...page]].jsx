import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import Header from '@/components/Header';
import Head from 'next/head';
import React from 'react';
import {
  BuilderComponent,
  builder,
  useIsPreviewing,
  Builder,
} from '@builder.io/react';
import Footer from '@/components/Footer';

// Initialize the Builder SDK with your organization's API Key
// Find the API Key on: https://builder.io/account/settings
builder.init(process.env.NEXT_PUBLIC_BUILDER_KEY);

export async function getStaticProps({ params }) {
  // Fetch the first page from Builder that matches the current URL.
  // Use the `userAttributes` field for targeting content.
  // For more, see https://www.builder.io/c/docs/targeting-with-builder
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  //  Fetch all published pages for the current model.
  //  Using the `fields` option will limit the size of the response
  //  and only return the `data.url` field from the matching pages.
  const pages = await builder.getAll('page', {
    fields: 'data.url', // only request the `data.url` field
    options: { noTargeting: true },
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({ page }) {
  console.log(page)
  const router = useRouter();
  //  This flag indicates if you are viewing the page in the Builder editor.
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  //  Add your error page here to return if there are no matching
  //  content entries published in Builder.
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>{page?.data.title}</title>
        <meta name="description" content={page?.data.descripton} />
      </Head>
      <header>
        {/* Put your header or main layout here */}
        <Header />
      </header>

      {/* Render the Builder page */}
      <main>
        <BuilderComponent model="page" content={page} />
      </main>

      <footer>
        {/* Put your footer or main layout here */}
        <Footer />
      </footer>
    </>
  );
}



//  This is a minimal example of a custom component, you can view more complex input types here:
//  https://www.builder.io/c/docs/custom-react-components#input-types
Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'I am a React component!' },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'Find my source in /pages/[...page].js',
    },
  ],
});

// Register a custom insert menu to organize your custom componnets
// https://www.builder.io/c/docs/custom-components-visual-editor#:~:text=than%20this%20screenshot.-,organizing%20your%20components%20in%20custom%20sections,-You%20can%20create
Builder.register('insertMenu', {
  name: 'My Components',
  items: [{ item: 'Header', name: 'My React Component' }],
});
