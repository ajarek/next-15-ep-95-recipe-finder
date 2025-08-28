'use client'

import React from 'react'

import { Card, CardContent, CardFooter } from '@/components/ui/card'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Button } from './ui/button'
import { AlarmClock, ConciergeBell, User } from 'lucide-react'
import Link from 'next/link'
import SelectName from './select-name'

export default function CardsRecipes({
  recipes,
  name,
}: {
  recipes: {
    recipes: {
      id: number
      name: string
      image: string
      caloriesPerServing: number
      servings: number
      prepTimeMinutes: number
      cookTimeMinutes: number
      ingredients: string[]
    }[]
  }
  name: string | null
}) {
  return (
    <div className='relative pt-16 md:pt-24 mx-auto max-w-6xl px-4 space-y-4'>
      <div className='flex flex-col items-center gap-4'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=' font-bold text-balance text-xl md:text-2xl xl:text-3xl'
        >
          Explore our simple, healthy recipes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-2xl text-center text-balance text-sm'
        >
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </motion.p>
      </div>

      <SelectName query='name' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {recipes.recipes
          .filter((item) =>
            name
              ? item.name.toLowerCase().includes(name.toLowerCase()) ||
                item.ingredients.some((ingredient) =>
                  ingredient.toLowerCase().includes(name.toLowerCase())
                )
              : true
          )

          .map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <Card className='cursor-pointer shadow-xl  p-2'>
                <div className='relative overflow-hidden rounded-lg h-80 w-full'>
                  <Image
                    src={recipe.image}
                    alt={recipe.name}
                    fill
                    className='object-cover object-center'
                  />
                </div>

                <CardContent className='p-2 space-y-2'>
                  <h2 className='text-lg font-semibold'>{recipe.name}</h2>
                  <p>Calories Per Serving: {recipe.caloriesPerServing}</p>
                  <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-2'>
                      <User />
                      Servings: {recipe.servings}
                    </p>
                    <p className='flex items-center gap-2'>
                      <AlarmClock />
                      Prep: {recipe.prepTimeMinutes} minutes
                    </p>
                  </div>
                  <p className='flex items-center gap-2'>
                    <ConciergeBell />
                    Cook: {recipe.cookTimeMinutes} minutes
                  </p>
                </CardContent>
                <CardFooter className='p-2'>
                  <Button
                    className='w-full rounded-full'
                    asChild
                  >
                    <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
      </div>
    </div>
  )
}
