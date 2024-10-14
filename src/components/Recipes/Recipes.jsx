import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cook from "../Cook/Cook";
import Cooking from "../Cooking/Cooking";

const Recipes = () => {

    const [recipes,setRecipes]=useState([])
    const [cooks,setCooks]=useState([])
    const [cookings,setCookings]=useState([])


    useEffect(()=>{
        fetch("recipes.json")
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    const handleCook=(recipe)=>{
            setCooks([...cooks,recipe]);
      
        

    }

    const handleCooking=(item)=>{
       setCookings([...cookings,item]);
       const recipes= cooks.filter(cook=>cook.recipe_id!==item.recipe_id)
       setCooks(recipes);
    }
    return (
        <div className="mt-24 w-11/12 mx-auto ">
            <h2 className="font-semibold text-4xl text-center">Our Recipes:{recipes.length}</h2>
            <p className="text-center my-6">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
        <div className="flex gap-4 ">
           <div className="w-2/3 grid grid-cols-2 gap-4">
           {
                recipes.map(recipe=><Recipe key={recipe.recipe_id}
                     recipe={recipe}
                     handleCook={handleCook} ></Recipe>)
            }
          
           </div>
           <div className="w-1/3 border border-gray-600 rounded-2xl ">
           <h2 className="text-3xl text-center mt-4 border-b-2 p-2 w-2/3 mx-auto">Want to cook:{cooks.length}</h2>
           <table className="table-auto ml-4">
                <thead>
                    <tr>
                    <th className="mr-4">Name</th>
                    <th>...........Time..........</th>
                    <th>Calories</th>
                    </tr>
                </thead>
             </table>
                {
                    cooks.map((cook,idx)=><Cook key={idx} 
                    cook={cook}
                    handleCooking={ handleCooking}></Cook>)
                }
                 <h2 className="text-2xl font-bold text-center mt-4 border-b-2 p-2 w-2/3 mx-auto">Currently cooking:{cookings.length}</h2>
                 <table className="table-auto ml-4">
                <thead>
                    <tr>
                    <th className="mr-4">Name</th>
                    <th>.....................Time......................</th>
                    <th>Calories</th>
                    </tr>
                </thead>
             </table>
                 {
                    cookings.map((cooking,rdx)=><Cooking key={rdx} cooking={cooking}></Cooking>)
                 }
            </div>
        </div>
        
        </div>
    );
};

export default Recipes;