import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes/')
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the recipes!", error);
            });
    }, []);
    

    return (
        <div>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.instructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
