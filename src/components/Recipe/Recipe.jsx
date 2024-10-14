
import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({recipe,handleCook}) => {

    const{recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=recipe
    return (
        <div className="  border border-gray-600 rounded-2xl p-4 flex justify-center">
            <div className='space-y-4'>
            <img className="w-68 h-64 bg-green-300 rounded-2xl" src={recipe_image} alt="" />
            <h2 className='text-2xl font-semibold'>{recipe_name}</h2>
            <p className='text-[#878787]'>{short_description}</p>
            <h2 className='text-xl font-medium text-[#282828]  border-t-2'>Ingredients: {ingredients.length}</h2>
            {
               
                ingredients.map((item,idx)=><li className='text-xl text-[#878787]' key={idx}>{item}</li>)
            }
            
           <div className='flex gap-4 border-t-2'>
           <h2 className='flex items-center gap-2 text-[#282828] mt-4'><CiClock2/>{preparing_time}:Minuites</h2>
           <h2 className='flex items-center gap-2 text-[#282828] mt-4'><AiOutlineFire />{calories} calories</h2>
           </div>
           <button onClick={()=>handleCook(recipe)} className='p-3 bg-green-500 rounded-3xl mr-4 font-bold hover:bg-white'>Want to Cook</button>
            </div>
           
        </div>
    );
};
Recipe.propTypes={
    recipe: PropTypes.object.isRequired,
    handleCook: PropTypes.func.isRequired
}

export default Recipe;