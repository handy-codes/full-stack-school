import { ReactNode } from 'react';

const HomeLayout = ({ children }: Readonly<{ children: ReactNode }>) => {

  
  return (
    <div className='h-full bg-[red]'>
      <main className="md:pl-56 pt-[80px] h-full">
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
