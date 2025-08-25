import CardSingleRecipe from "@/components/card-single-recipe";

import {getRecipeDetails} from "@/lib/getRecipes";


export default async function RecipesDetails({ params }: {params: Promise<{ id: string }>}) {
  const { id } = await(params)
  const recipe=await getRecipeDetails(id)
  return(
    <CardSingleRecipe {...recipe} />
  )

}
