import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />

      {children}

      <Footer />
    </>
  );
};

export default MainLayout;
