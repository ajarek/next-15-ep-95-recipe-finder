
import CardsRecipes from '@/components/cards-recipes'
import { getRecipes } from '@/lib/getRecipes'


export default async function Recipes({searchParams}: {searchParams: Promise<{name?: string}>}) {
   const recipes = await getRecipes()
   const { name } = await searchParams
  return(
    <CardsRecipes recipes={recipes} name={name ?? null} />
  )

}
