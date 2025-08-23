import React from 'react'
import { getRecipes } from '@/lib/getRecipes'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default async function Recipes() {
  const recipes = await getRecipes()
  return (
    <div className='relative pt-16 md:pt-24 mx-auto max-w-6xl px-4 space-y-4'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className=' font-bold text-balance text-xl md:text-2xl xl:text-3xl'>
          Explore our simple, healthy recipes
        </h1>
        <p className='max-w-2xl text-center text-balance'>
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {recipes.recipes.map((recipe) => (
          <Card
            key={recipe.id}
            className='w-full flex  items-center'
          >
            <CardHeader>
              <CardTitle>{recipe.name}</CardTitle>
              <CardDescription>{recipe.description}</CardDescription>
              <CardAction>View Recipe</CardAction>
            </CardHeader>
            <CardContent>
              <p>{recipe.content}</p>
            </CardContent>
            <CardFooter>
              <p>{recipe.footer}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
