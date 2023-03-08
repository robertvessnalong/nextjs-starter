import { builder, BuilderComponent } from '@builder.io/react';
import Layout from '@/components/Layout';

export const getStaticProps = async ({ params }) => {
  const page = await builder
    .get('404', {
      userAttributes: {
        urlPath: '/404' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
  };
};

const ErrorPage = ({ page }) => {
  return (
    <>
      <Layout>
        <BuilderComponent content={page} model="404" />
      </Layout>
    </>
  );
};
export default ErrorPage;
