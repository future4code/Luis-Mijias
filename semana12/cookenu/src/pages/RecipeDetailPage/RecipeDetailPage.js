import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { RecipeContainer, RecipeImage, ScreenContainer } from './styled'
import { Typography } from '@material-ui/core'
import Loading from "../../components/Loading/Loading"


const RecipeDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
    
    return (
        <ScreenContainer>
                {recipe ?
                <RecipeContainer>
                <RecipeImage src={recipe.image} />                                     
                <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe && recipe.title}</Typography>
                <Typography align={'center'}>{recipe.description}</Typography> 
                </RecipeContainer>
                :
                <Loading/>
                }
        </ScreenContainer>
    )
}

export default RecipeDetailPage