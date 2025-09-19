import restaurantData from '../api/restaurantChains.json';
import Card from './Card';
import{useState,useEffect} from 'react';
function OnlineDelivery(){

    const[data,setData]=useState([]);

    const fetchTopRestaurant=()=>{
        setData(restaurantData);
    }

    useEffect(()=>{
        fetchTopRestaurant();
    },[])

    return (
        <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-between my-5">
           <div className="text-xl font-bold">  
           Restaurants with online food delivery in Jammu
           </div>
           <div className="grid grid-cols-4 gap-3">
           {data.map((restaurant, index) => (
                    <div key={index}>
                        <Card {...restaurant} />
                    </div>
                ))}
           </div>
           </div>
           <hr className="my-6 border-[1px] border-[#e2e2e7]"/>
           </div>
    )
}
export default OnlineDelivery;