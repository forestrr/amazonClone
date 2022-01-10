import Image from "next/image"
import {StarIcon} from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import {addToBasket,removeFromBasket} from "../src/slices/basketSlices"
import { useDispatch } from "react-redux"

function CheckoutProduct({
    id,
    price,
    image,
    description,
    category,
    rating,
    hasPrime,
    title,}) {
        const dispatch = useDispatch()
        const addItemToBasket=()=> {
            const product ={
                id,
                price,
                image,
                description,
                category,
                rating,
                hasPrime,
                title}
                //push item into redux store
                dispatch(addToBasket(product))
        } 
        const removeItemFromBasket=()=>{
            //remove the item from the redux store basket
            dispatch(removeFromBasket({id}))
        }
        return (
            <div className="grid grid-cols-5 ">
            <Image  src={image}
                    height={200}
                    width={200}
                    objectFit="contain" />
            {/* Middle  section   */}
            <div className="col-span-3 mx-5">
                <p className="">{title}</p>
                <div className="flex">
                {Array(rating)
                .fill()
                .map((_,i)=> (
                    <StarIcon key={i} className="h-5 text-yellow-500 "/>
                ))}
                </div>
                <p className="text-xs  line-clamp-3 mt-2 mb-2"> {description}
                    </p>
                    <Currency  quantity={price} currency="INR" />
                   
                    {hasPrime && (
                     <div className="flex items-center space-x-2 " >
                             <img loading='lazy'
                                className="w-12" 
                                src='https://links.papareact.com/fdw'
                                alt='' />
                            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                    )}    

            </div>
           {/*Right add or remove buttons  */}
           <div className="flex flex-col space-y-2 my-auto justify-self-end ">
               <button className="button" onClick={addItemToBasket} >Add to basket </button>
               <button className="button" onClick={removeItemFromBasket}>Remove from basket </button>
           </div>
       </div>
    )
}

export default CheckoutProduct
