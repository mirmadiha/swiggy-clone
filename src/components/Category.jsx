import React from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
function Category(){
    return(
        <div className="ml-45 mr-45 p-[16px] flex justify-between items-center">
           <div>  
            What's on your mind?
           </div>

           <div className="flex items-center flex items-center ">
            <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center"><GoArrowLeft /></div>
            <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center"><GoArrowRight /></div>
           </div>
        </div>
    )
};

export default Category;