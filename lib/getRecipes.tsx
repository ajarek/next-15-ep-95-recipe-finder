import React from 'react'

export async  function getRecipes() {
  const res = await fetch('https://dummyjson.com/recipes', {
    next: { revalidate: 1 },
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
