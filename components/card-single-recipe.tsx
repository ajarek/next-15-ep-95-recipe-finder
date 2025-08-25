'use client'

import { AlarmClock, ChefHat, Globe, Hamburger, User } from 'lucide-react'
import Image from 'next/image'

type PropsCard = {
  id: string
  name: string
  image: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number
  mealType: string[]
}

export default function CardSingleRecipe(props: PropsCard) {
  return (
    <div className=' pt-16 md:pt-24 mx-auto max-w-6xl px-4 pb-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='relative h-120 w-full rounded-lg overflow-hidden shadow-xl'>
          <Image
            src={props.image}
            alt={props.name}
            fill
            className='object-cover object-center hover:saturate-150 hover:scale-110 transition-all delay-150 duration-400 ease-in-out'
          />
        </div>
        <div className='flex flex-col gap-4 px-4'>
          <h1 className='text-xl font-semibold'>{props.name}<span className='text-sm font-normal text-gray-500'>{' '}
            {props.mealType.join(', ')}
            </span></h1>
          <div className='flex items-center gap-4 '>
                  <p className='flex items-center gap-2'><User />Servings: {props.servings}</p>
                  <p className='flex items-center gap-2'><AlarmClock />Prep: {props.prepTimeMinutes} minutes</p>
                  <p className='flex items-center gap-2'><AlarmClock />Cook: {props.cookTimeMinutes} minutes</p>

                </div>
          <div className='flex items-center gap-4 '>
                  <p className='flex items-center gap-2'><ChefHat />Difficulty: {props.difficulty}</p>
                  <p className='flex items-center gap-2'><Globe />Cuisine: {props.cuisine} </p>
                  <p className='flex items-center gap-2'><Hamburger />Calories: {props.caloriesPerServing} </p>

                </div>
          <div>
            <h2 className='text-lg font-semibold'>Ingredients:</h2>
            <ul className='list-disc px-4 '>
              {props.ingredients.map((ing) => (
                <li
                  key={ing}
                  className=''
                >
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-lg font-semibold'>Instructions:</h2>
            <ul className='list-disc px-4 '>
              {props.instructions.map((ing) => (
                <li
                  key={ing}
                  className=''
                >
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
