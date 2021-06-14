import Navigation from '@/components/navigation';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />

      {children}
    </>
  );
};

export default MainLayout;
