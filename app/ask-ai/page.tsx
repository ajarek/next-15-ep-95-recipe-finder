'use client'

import { useCompletion } from '@ai-sdk/react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function AskAI() {
  const {
    completion,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    stop,
    setInput,
  } = useCompletion({
    api: '/api/streamText',
  })
  return (
    <div className=' pt-16  mx-auto max-w-6xl px-4   '>
      <div className='min-h-[calc(100vh-8rem)] flex flex-col justify-end w-full max-w-md  mx-auto stretch py-4'>
        {error && <div className='text-red-500 mb-4'>{error.message}</div>}
        {isLoading && !completion && <div>Loading...</div>}

        {completion && <div className='whitespace-pre-wrap'>{completion}</div>}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setInput('') // tymczasowa poprawka czyszcząca dane wejściowe po przesłaniu
            handleSubmit(e)
          }}
          className='w-full max-w-md mx-auto    '
        >
          <div className='flex items-center gap-2'>
            <Input
              className='flex-1 '
              value={input}
              onChange={handleInputChange}
              placeholder='How can I help you?'
            />
            {isLoading ? (
              <Button
                onClick={stop}
                className=' px-4 py-2 rounded  transition-colors'
              >
                Stop
              </Button>
            ) : (
              <Button
                type='submit'
                className=' px-4 py-2 rounded  transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                disabled={isLoading}
              >
                Send
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
