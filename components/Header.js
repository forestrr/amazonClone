import Image from "next/image"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"
import {useSession, signIn, signOut} from 'next-auth/react'

function Header() {
    const { data: session ,status} = useSession()
    // const [session,loading]=useSession();
   
    return (
        <header>
            {/* TopNav */}
        <div className=" flex items-center bg-slate-900 p-1 flex-grow ">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
                <Image
                    src='https://links.papareact.com/f90'
                    width={150}
                    height={40}
                    objectFit="contain" 
                    className="cursor-pointer "
                    />
            </div>
            {/* Search */}
            <div className=" hidden sm:flex items-center flex-grow cursor-pointer rounded-md h-10 bg-yellow-400 hover:bg-yellow-500" >
                <input className="p-2 h-full w-6 flex-shrink rounded-md focus:outline-none px-4 flex-grow"type="text"/>
                <SearchIcon className="h-12 p-4"/>
            </div>
            {/* Right */}
                <div className="p-2 text-white whitespace-nowrap flex items-center text-xs space-x-6">
                <div onClick={signIn} className="link">
                     <p>{session ? `Hello ,${session.user.name}`:"SignIn"}</p> 
                    <p className="font-extrabold md:text-sm">Account and lists</p>
                    
                </div>
            
                <div className="link">
                    <p>returns</p>
                    <p className="font-extrabold md:text-sm">orders</p>
                </div>
                <div className="relative flex item-center link">
                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">4</span>
                     <ShoppingCartIcon className="h-10"/> 
                     <p className="hidden mt-2 md:inline font-extrabold md:text-sm">Basket</p>   
                </div>
            </div>
        </div>
 
            {/* BottomNav */}
        <div className="flex items-center space-x-3 p-2 pl-6 text-white bg-slate-500">
            <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1"/>
                All</p>
            <p className="link" > Prime videos</p>
            <p className="link" > amazon Buisness</p>
            <p className="link" > Today's Deals </p>
            <p className="link hidden md:inline-flex" > Electronics </p>
            <p className="link hidden md:inline-flex" >Food and Groceries</p>
            <p className="link hidden md:inline-flex" > Prime</p>
            <p className="link hidden md:inline-flex" > Buy Again</p>
            <p className="link hidden md:inline-flex" > Shopper toolkit </p>
            <p className="link hidden md:inline-flex" > Health & personal </p>
        </div>
        </header>
    )
}

export default Header