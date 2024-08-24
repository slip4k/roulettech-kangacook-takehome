'use client';

import { Button } from '@/components/ui/button';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div
        id="Hero"
        className="flex flex-col justify-center items-center mt-10 mb-10"
      >
        <div className="flex flex-col justify-center items-center pt-20">
          <h1 className="md:text-7xl text-5xl text-center font-bold lg:text-start">
            Share your thoughts with{' '}
            <p className="h-full text-center bg-gradient-to-r from-[#9bafd9] to-[#103783] bg-clip-text text-transparent pb-4">
              Everyone
            </p>
          </h1>
          <h1 className="text-xl text-wrap text-center font-normal lg:max-w-[85%] lg:text-start mb-4">
            Write, share, and most importantly,{' '}
            <p className="inline-flex font-bold">be heard.</p>
          </h1>
          <div className="flex">
            <Button
              onClick={() => {
                router.push('/posts');
              }}
              className="bg-secondary-foreground text-secondary mt-2 border-2 border-black hover:border-solid hover:border-black hover:bg-white hover:text-black active:text-black dark:hover:text-white dark:hover:bg-black dark:hover:border-white rounded-3xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <ContainerScroll>
        <div></div>
      </ContainerScroll>
    </main>
  );
}
