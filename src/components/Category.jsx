import React from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
function Category(){
    return(
        <div className="ml-45 mr-45 p-[16px] flex justify-between items-center">
           <div>  
            What's on your mind?
           </div>

           <div className="flex items-center">
           <GoArrowLeft className="w-5 h-5 bg-blue-500 rounded-full"/>
           <GoArrowRight />
           </div>
        </div>
    )
};

export default Category;