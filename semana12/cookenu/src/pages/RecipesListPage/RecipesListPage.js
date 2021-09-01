
import React from 'react'
import RecipeCard from '../../components/RecipedCard/RecipedCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { AddRecipeButton, RecipeListContainer } from './style'
import { Add } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { goToAddRecipes, goToRecipeDetail } from '../../routes/coodinator'

const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

    const onClickCard = (id) => {
        goToRecipeDetail(history, id)
   
}
    const recipeCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClickCard(recipe.recipe_id)}
            />
        )
    })
    return (
        <RecipeListContainer>
            {recipeCards}
            <AddRecipeButton
            color={'primary'}
            onClick={()=>goToAddRecipes(history)}
            >
                <Add></Add>
            </AddRecipeButton>
        </RecipeListContainer>
        
    )
}

export default RecipesListPage