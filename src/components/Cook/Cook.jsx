
import PropTypes from 'prop-types';
const Cook = ({cook, handleCooking}) => {
    const {recipe_name,preparing_time,calories}=cook;
    return (
        <div className=''>
             <table className="table-auto border-b-2 bg-slate-100 mb-4 mt-2 w-full text-center">
                    <tr>
                        <td className='w-24'>{recipe_name}</td>
                        <td>{preparing_time} <br /> minutes</td>
                        <td>{calories} <br />calories</td>
                        <td><button onClick={()=>handleCooking(cook)} className='px-2 py-1 bg-green-500 rounded-3xl mr-4 font-bold'>Preparing</button></td>
                    </tr>
             </table>
             
        </div>
        
    );
};
Cook.propTypes={
    cook: PropTypes.object,
    handleCooking: PropTypes.func.isRequired
    
}

export default Cook;