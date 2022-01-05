import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

export default function Home() {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header added below from the Header component */}
      <Header/>
      <main className='max-w-screen-xl mx-auto'>
        {/* Banner added below from the banner component */}
          <Banner/>
        {/* ProductFeed  from  the Product feed components */}
          <ProductFeed/>
      </main>

      
    </div>
  )
}
