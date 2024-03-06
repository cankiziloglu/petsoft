import Image from 'next/image';
import Logo from '../../components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-emerald-400 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 p-5 lg:p-10'>
      <Image
        src='https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png'
        alt='app image'
        width={520}
        height={472}
      />
      <div className='flex flex-col gap-6 text-center lg:text-left'>
        <Logo />
        <h1 className='text-4xl lg:text-5xl lg:max-w-[500px] '>
          Manage your{' '}
          <span className='font-extrabold'>pet daycare business</span> with ease
        </h1>
        <p className='text-lg lg:max-w-[500px]'>
          Use PetSoft to easily keep track of pets under your care. Get lifetime
          access for only $299.
        </p>
        <div className='space-x-5'>
          <Button asChild>
            <Link href='/signup'>Get Started</Link>
          </Button>
          <Button variant='secondary' asChild>
            <Link href='/login'>Login</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
