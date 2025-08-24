
import CardsRecipes from '@/components/cards-recipes'
import { getRecipes } from '@/lib/getRecipes'


export default async function Recipes() {
   const recipes = await getRecipes()
  return(
    <CardsRecipes recipes={recipes} />
  )

}
