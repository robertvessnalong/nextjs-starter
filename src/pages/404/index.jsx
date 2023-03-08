import { builder, BuilderComponent } from '@builder.io/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const getStaticProps = async (context) => {
  const page = await builder
    .get('404', { url: context.resolvedUrl })
    .promise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
};

const ErrorPage = ({ page }) => {
  return (
    <>
      <Header />
      <BuilderComponent content={page} model="404" />
      <Footer />
    </>
  );
};
export default ErrorPage;
