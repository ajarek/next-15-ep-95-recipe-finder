import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
  return (
    <section className='w-full @container mx-auto max-w-5xl  grid grid-cols-1 lg:grid-cols-2 gap-4 py-8 place-items-center px-8  '>
      <div className='flex flex-col items-center'>
        <h2 className='relative z-10 max-w-xl text-4xl font-medium lg:text-5xl'>
          Built for real life.
        </h2>

        <div className='w-full grid grid-cols-2 gap-3 pt-6 sm:gap-4 place-items-center'>
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <Zap className='size-4' />
              <h3 className='text-sm font-medium'>Fast</h3>
            </div>
            <p className='text-muted-foreground text-sm'>
              Cooking shouldn't be complicated. These recipes take less than 30
              minutes and taste delicious.
            </p>
          </div>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <Cpu className='size-4' />
              <h3 className='text-sm font-medium'>Simplicity</h3>
            </div>
            <p className='text-muted-foreground text-sm'>
              Whether you're just starting your culinary journey or just need
              some new ideas, we're here to help.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full h-[316px] relative rounded-2xl shadow-lg p-2 border-border/50 border border-dotted '>
        <div
          aria-hidden
          className='w-full bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-70%  '
        ></div>
        <div className=' w-full h-[300px]   relative overflow-hidden   rounded-2xl'>
          <Image
            src='/images/content-image.jpg'
            className='object-cover object-center'
            alt='payments illustration light'
            fill
          />
        </div>
      </div>
    </section>
  )
}
