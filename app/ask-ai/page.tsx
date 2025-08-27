'use client'

'use client'

import { useState } from 'react'
import { experimental_useObject as useObject } from '@ai-sdk/react'
import { recipeSchema } from '@/app/api/structuredData/schema'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function StructuredDataPage() {
  const [dishName, setDishName] = useState('')

  const { submit, object, isLoading, error, stop } = useObject({
    api: '/api/structuredData',
    schema: recipeSchema,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit({ dish: dishName })
    setDishName('')
  }

  return (
     <div className='min-h-[calc(100vh-64px)] flex flex-col justify-end w-full max-w-md  mx-auto stretch pt-18 pb-4'>
      {error && <div className='text-red-500 mb-4 px-4'>{error.message}</div>}
      {object?.recipe && (
        <div className='space-y-6 px-4 mb-6'> 
          <h2 className='text-2xl font-bold'>{object.recipe.name}</h2>

          {object?.recipe?.ingredients && (
            <div>
              <h3 className='text-xl font-semibold mb-4'>Ingredients</h3>
              <div className='grid grid-cols-2 gap-4'>
                {object.recipe.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className='bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg'
                  >
                    <p className='font-medium'>{ingredient?.name}</p>
                    <p className='text-zinc-600 dark:text-zinc-400'>
                      {ingredient?.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {object?.recipe?.steps && (
            <div>
              <h3 className='text-xl font-semibold mb-4'>Steps</h3>
              <ol className='space-y-4'>
                {object.recipe.steps.map((step, index) => (
                  <li
                    key={index}
                    className='bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg'
                  >
                    <span className='font-medium mr-2'>{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md mx-auto'
      >
        <div className='flex items-center gap-2'>
          <Input
            type='text'
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            placeholder='Enter a dish name...'
            className='flex-1'
          />
          {isLoading ? (
            <Button
              type='button'
              variant={'destructive'}
              onClick={stop}
              className=' transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Stop
            </Button>
          ) : (
            <Button
              type='submit'
              disabled={isLoading || !dishName}
              className=' transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}