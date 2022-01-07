import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

export default function Home(props) {
  const {products} =props
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="https://www.gfinityplc.com/wp-content/uploads/2020/08/amazon-logo-png.png" />
      </Head>
      {/* Header added below from the Header component */}
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner added below from the banner component */}
          <Banner/>
        {/* ProductFeed  from  the Product feed components */}
          <ProductFeed products={products} />
        
      </main>

      
    </div>
  )
}
export async function getServerSideProps(context){
  const products = await fetch('https://fakestoreapi.com/products').then(
    res=>res.json())
    return{
      props:
      {
        products,
      }
    }
}
//https://fakestoreapi.com/products