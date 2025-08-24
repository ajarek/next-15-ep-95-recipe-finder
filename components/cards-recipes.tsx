'use client'
import React from 'react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { motion } from "motion/react"
import Image from 'next/image';
import { Button } from './ui/button';



export default function CardsRecipes({ recipes }: { recipes: { recipes: { id: number; name: string; image: string; content: string; footer: string }[] } }) {
  
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
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='max-w-2xl text-center text-balance'>
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </motion.p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {recipes.recipes.map((recipe, index) => (
          <motion.div key={recipe.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
          <Card
            
            className='cursor-pointer hover:shadow-lg transition-shadow duration-300 p-2'
          >
            
              <div className='relative overflow-hidden rounded-lg h-60 w-full'>
              <Image src={recipe.image} alt={recipe.name} fill className='object-cover ' />
              </div>
            
            <CardContent>
              <h2>{recipe.name}</h2>
            </CardContent>
            <CardFooter>
              <Button>View Recipe</Button>
            </CardFooter>
          </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
