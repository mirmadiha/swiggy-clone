import { GoChevronDown, GoBriefcase,GoSearch } from "react-icons/go";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline ,IoPersonOutline} from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import {useState} from "react";
function Header(){
    const[toggle,setToggle]=useState(false);
    function handleClick(){
        setToggle(!toggle);
    }

    return (
        <>
        <div 
            className="black-overlay duration-500 cursor-pointer" 
            style={{
                opacity:toggle?1:0,
                visibility:toggle?"visible":"hidden"
            }} 
            onClick={() => setToggle(false)}
        >
            <div className="h-full w-48 bg-white shadow-lg"></div>
        </div>
        <header className="p-[15px] shadow-xl">
            <div className='border border-red-500 mx-30 flex items-center'>
                <div className='w-[60px]'>
                    <img src="/images/logo.png" alt="logo" className="w-full" />
                </div>
                <div className="flex items-center ml-10 cursor-pointer" onClick={handleClick}>
                    <div className="text-xl font-bold border-b-4 text-black hover:text-[#ef4444] cursor-pointer transition-colors duration-200"> other </div>
                    <span className="ml-2 text-[#ff5200] text-xl"> <GoChevronDown /> </span>
                </div>

                <div className="ml-60 flex items-center place-content-between w-full">
                    <div className="flex items-center justify-center">
                        <span className="mr-2"><GoBriefcase /> </span>
                        <div>Swiggy Corporate</div>
                    </div>

                    <div className="flex items-center justify-center">
                        <span className="mr-2"><GoSearch/></span>
                        Search
                    </div>

                    <div className="flex items-center justify-center">
                        <span className="mr-2"> <BiSolidOffer /></span>
                        Offers
                    </div>

                    <div className="flex items-center justify-center">
                        <span className="mr-2"> <IoHelpBuoyOutline /></span>
                        Help
                    </div>


                    <div className="flex items-center justify-center">
                        <span className="mr-2"> <IoPersonOutline /></span>
                        Sign In
                    </div>


                    <div className="flex items-center justify-center">
                        <span className="mr-2"> <CiShoppingCart /></span>
                        Cart
                    </div>
                </div>
            </div>

        </header>
        </>
    )
}

export default Header;