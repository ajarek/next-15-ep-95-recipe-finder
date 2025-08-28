import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className='py-4 md:py-8'>
      <div className='mx-auto max-w-5xl px-6 rounded-lg shadow-lg p-8'>
        <div className='text-center'>
          <h2 className='text-balance text-4xl font-semibold lg:text-5xl'>
            Ready to cook smarter
          </h2>
          <p className='mt-4'>
            Hit the button, pick a recipe and get dinner on the table-fast.
          </p>

          <div className='mt-12 flex flex-wrap justify-center gap-4'>
            <Button
              asChild
              size='lg'
            >
              <Link href='/recipes'>
                <span>Browse recipes</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
