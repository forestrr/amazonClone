import { useSession } from "next-auth/react"
import Image from "next/image"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../src/slices/basketSlices"
import Currency from 'react-currency-formatter'


function Checkout() {

    const { data: session ,status} = useSession()
    const total= useSelector(selectTotal)
    const items =useSelector(selectItems)
    return (
        <div className="bg-gray-100">
           <Header/>
           
           <main className="lg:flex max-w-screen-2xl mx-auto">
            <h1></h1>
            {/* Left */}
            <div className="flex-grow m-5 shadow-sm">
                <Image
                    src="http://links.papareact.com/ikj"
                    width={1100}
                    height={250}
                    objectFit="contain"/>
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">{items.length ===0 ?"Your Amazon Basket is Empty":
                        "Shopping Basket"}</h1>
                         {items.map((item,i)=>(
                             <CheckoutProduct key={i}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                price={item.price}
                                category={item.category}
                                hasPrime={item.hasPrime}
                                rating={item.rating}/>
                             
                         ))}   
                    </div>
            </div>
            {/*Right*/}
            <div className="flex flex-col bg-white p-10 shadow-md">
                {items.length>0 && (
                    <div>
                        <h2 className="whitespace-nowrap "> subtotal({items.length}items):
                        <span>
                            <Currency
                            quantity={total}
                            currency="INR"/>
                            </span></h2>
                            <button disabled={!session} className={`button mt-2 ${!session && 'from gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session?"Sing in to checkout ":"proceed tocheckout"}

                            </button>
                    </div>
                )}
            </div>
           </main>
        </div>
    )
}

export default Checkout
