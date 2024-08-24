// import React, { useState } from 'react';
// import axios from 'axios';

// const AddRecipe = () => {
//     const [title, setTitle] = useState('');
//     const [ingredients, setIngredients] = useState('');
//     const [instructions, setInstructions] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
        
//         const recipe = {
//             title: title,
//             ingredients: ingredients,
//             instructions: instructions
//         };

//         axios.post('http://localhost:8000/api/recipes/', recipe)
//             .then(response => {
//                 console.log('Recipe added:', response.data);
//                 // Optionally, clear the form or update the list of recipes
//             })
//             .catch(error => {
//                 console.error('There was an error adding the recipe!', error);
//             });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Title:</label>
//                 <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//             </div>
//             <div>
//                 <label>Ingredients:</label>
//                 <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
//             </div>
//             <div>
//                 <label>Instructions:</label>
//                 <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
//             </div>
//             <button type="submit">Add Recipe</button>
//         </form>
//     );
// };

// export default AddRecipe;


import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const recipe = {
            title: title,
            ingredients: ingredients,
            instructions: instructions
        };

        axios.post('http://localhost:8000/api/recipes/', recipe)
            .then(response => {
                console.log('Recipe added:', response.data);
                // Clear the form fields after successful submission
                setTitle('');
                setIngredients('');
                setInstructions('');
            })
            .catch(error => {
                console.error('There was an error adding the recipe!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Instructions:</label>
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;
