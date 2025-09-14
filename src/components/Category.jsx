import React, { useState, useEffect } from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import categoryData from '../api/category.json';

function Category(){
    const [category, setCategory] = useState([]);

    useEffect(() => {
        setCategory(categoryData);
    }, []);
    return(
        <div className="ml-45 mr-45 p-[16px] flex justify-between items-center">
           <div>  
            What's on your mind?
           </div>

           <div className="flex items-center flex items-center ">
            <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"><GoArrowLeft /></div>
            <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"><GoArrowRight /></div>
           </div>

           {category.map((cat, index) => {
                return (
                    <div key={index} className="w-[100px] h-[100px]"> 
                        <img src=""
                        />
                    </div>
                )
           })}
        </div>
    )
};

export default Category;