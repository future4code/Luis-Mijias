import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const AddRecipesPage = () => {
    useProtectedPage()
    return(
        <div>
            <h1>Adiciona Recietas na Lista</h1>
        </div>
    )
}

export default AddRecipesPage