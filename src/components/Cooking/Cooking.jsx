import PropTypes from 'prop-types';
const Cooking = ({cooking}) => {
    const {recipe_name,preparing_time,calories}=cooking;
    return (
        <div>
             <table className="table-auto border-b-2 bg-slate-100 mb-4 mt-2 w-full text-center">
                    <tr>
                        <td className='w-24'>{recipe_name}</td>
                        <td>{preparing_time} <br /> minutes</td>
                        <td>{calories} <br />calories</td>
                        
                    </tr>
             </table>
        </div>
    );
};

Cooking.propTypes={
    cooking: PropTypes.object
}

export default Cooking;