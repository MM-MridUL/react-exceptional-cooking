import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
const Header = () => {
    return (
        <div className="flex justify-between items-center w-11/12 mx-auto mt-4">
            <div>
                <h2 className="text-4xl font-bold">Recipe Calories</h2>
            </div>
            <div>
                <ul className="text-[#150B2B] flex">
                    <li className="mr-4"><a href="">Home</a></li>
                    <li className="mr-4"><a href="">Recipes</a></li>
                    <li className="mr-4"><a href="">About</a></li>
                    <li className="mr-4"><a href="">Search</a></li>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <div className="">
                    <input className="text-[#150B2B] bg-slate-200 rounded-full pl-9 p-1" type="text" placeholder="Search" />
                    <CiSearch className="absolute top-7 right-70 text-xl text-[#150B2B] ml-2"></CiSearch>
                </div>
                <div>
                    <CgProfile className="text-3xl bg-green-600 rounded-full p-1"></CgProfile>
                </div>
            </div>
        </div>
    );
};

export default Header;