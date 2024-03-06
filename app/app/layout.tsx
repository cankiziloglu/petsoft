import AppFooter from '@/components/appFooter';
import AppHeader from '@/components/appHeader';
import BackgroundPattern from '@/components/background-pattern';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundPattern />
      <div className='flex flex-col max-w-[1200px] mx-auto px-4 min-h-screen'>
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
};

export default AppLayout;
