import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import restaurantData from '../api/restaurantChains.json';
import Card from './Card';
import{useState,useEffect} from 'react';
function TopRestaurants(){
    const[data,setData]=useState([]);
    const[slide,setSlide]=useState(0);

    const fetchTopRestaurant=()=>{
        setData(restaurantData);
    }

    useEffect(()=>{
        fetchTopRestaurant();
    },[])

    const nextSlide=()=>{
        const maxSlide = Math.max(0, data.length - 4);
        if(slide >= maxSlide){
            return false;
        }
        setSlide(slide+1);
    }

    const prevSlide=()=>{
        if(slide <=0){
            return false;
        }
        setSlide(slide-1);
    }

    return(
        <div className="max-w-[1200px] ml-45 mr-45 p-[16px] mb-[100px]">
        <div className="flex justify-between items-center my-5">
           <div className="text-xl font-bold">  
            Top restaurant chains in Jammu
           </div>

           <div className="flex items-center flex items-center ">
            <div onClick={prevSlide} className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"><GoArrowLeft /></div>
            <div onClick={nextSlide} className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"><GoArrowRight /></div>
           </div>
           </div>

           <div className="flex gap-8 overflow-hidden">
                {data.map((restaurant, index) => (
                    <div
                        key={index}
                        style={{ transform: `translateX(-${slide*100}%)` }}
                        className="w-[273px] shrink-0"
                    >
                        <Card restaurant={restaurant} />
                    </div>
                ))}
           </div>
           </div>
)}

export default TopRestaurants;