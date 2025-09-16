import React, { useState, useEffect } from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import categoryData from '../api/category.json';

function Category(){
    const[slide,setSlide]=useState(0);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        setCategory(categoryData);
    }, []);

    const nextSlide=()=>{
        if(category.length-5==slide){
            return false;
        }
        setSlide(slide+3);
    }

    const prevSlide=()=>{
        if(category.length-5==slide){
            return false;
        }
        setSlide(slide-3);
    }

    return(
        <div className="ml-45 mr-45 p-[16px]">
        <div className="flex justify-between items-center">
           <div>  
            What's on your mind?
           </div>

           <div className="flex items-center flex items-center ">
            <div onClick={prevSlide} className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"><GoArrowLeft /></div>
            <div onClick={nextSlide} className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"><GoArrowRight /></div>
           </div>
           </div>


           <div className="flex border border-red-600 overflow-hidden">
           {category.map((cat, index) => {
                return (
                    <div style={{
                        transform:`translateX(-${slide*100}%)`
                    }} key={index} className="w-[151px] shrink-0"> 
                        <img src={`/images/${cat.image}`}  
                        alt={cat.path}
                        />
                    </div>
                )
           })}
           </div>
        </div>
    )
};

export default Category;