// import React, { useState } from 'react';
// import AddRecipe from './AddRecipe';
// import RecipeList from './RecipeList';

// const App = () => {
//     const [view, setView] = useState('add'); // Default view is 'read'

//     const handleRadioChange = (event) => {
//         setView(event.target.value);
//     };

//     return (
//         <div>
//             <h1>Recipe Manager</h1>
//             <div display="flex" justify-content="center" align-items="center">
//                 <label>
//                     <input
//                         type="radio"
//                         value="add"
//                         checked={view === 'add'}
//                         onChange={handleRadioChange}
//                     />
//                     Add Recipe
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         value="read"
//                         checked={view === 'read'}
//                         onChange={handleRadioChange}
//                     />
//                     Read Recipes
//                 </label>
//             </div>

//             <div>
//                 {view === 'add' && <AddRecipe />}
//                 {view === 'read' && <RecipeList />}
//             </div>
//         </div>
//     );
// };

// export default App;

import React, { useState } from 'react';
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

const App = () => {
    const [view, setView] = useState('add'); // Default view is 'add'

    const handleRadioChange = (event) => {
        setView(event.target.value);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Recipe Manager</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <label style={{ marginRight: '20px' }}>
                    <input
                        type="radio"
                        value="add"
                        checked={view === 'add'}
                        onChange={handleRadioChange}
                    />
                    Add Recipe
                </label>
                <label>
                    <input
                        type="radio"
                        value="read"
                        checked={view === 'read'}
                        onChange={handleRadioChange}
                    />
                    Read Recipes
                </label>
            </div>

            <div>
                {view === 'add' && <AddRecipe />}
                {view === 'read' && <RecipeList />}
            </div>
        </div>
    );
};

export default App;
