import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        {/* Put your header or main layout here */}
        <Header />
      </header>
      <main style={{ marginTop: 60, backgroundColor: '#fff' }}>{children}</main>
       <footer>
        {/* Put your footer or main layout here */}
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
