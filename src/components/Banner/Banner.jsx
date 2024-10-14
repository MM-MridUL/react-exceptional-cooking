import Cooking from '../../assets/images/Cooking.jpg'
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto mt-24'>
            <div className='relative'>
            <img className='rounded-2xl h-[700px] w-full' src={Cooking} alt="" />  

            <div className='text-center w-9/12 mx-auto absolute top-80 left-40 space-y-9'>
                <h2 className='font-bold text-5xl text-white'>Discover an exceptional cooking class tailored for you!</h2>
                <p className='text-xl text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div>
                    <button className='p-3 bg-green-500 rounded-3xl mr-4 font-bold hover:bg-white'>Explore Now</button>
                    <button className='p-3 text-white border border-white rounded-3xl font-bold hover:bg-green-500'>Our Feedback</button>
                </div>
            </div>

            </div>
           
        </div>
    );
};

export default Banner;