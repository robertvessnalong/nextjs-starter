import { builder, BuilderComponent } from '@builder.io/react';
import Layout from '@/components/Layout';

const ErrorPage = ({ error }) => {
  return (
    <>
      <Layout>
        <BuilderComponent content={error} model="404" />;
      </Layout>
    </>
  );
};
export default ErrorPage;
