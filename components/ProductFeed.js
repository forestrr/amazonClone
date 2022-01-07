import Product from "./Product"
function ProductFeed({products}) {
    
    
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:cols-3 xl:grid-cols-4 -mt-52 mx-auto">
        
            {products.slice(0,4)
            .map(({id , title ,price ,image  ,description,category})=>(
            <Product
                key={id}
                title={title}
                price={price}
                image={image}
                description={description}
                category={category}
                
            />
            ))}
            <img className="md:col-span-full " 
                src="https://links.papareact.com/dyz"
                alt="" />

            <div className="md:col-span-2 "> 
            {products.slice(4,5)
            .map(({id , title ,price ,image  ,description,category})=>(
            <Product
                key={id}
                title={title}
                price={price}
                image={image}
                description={description}
                category={category}
                
            />
            ))}
            
            </div>
            {products.slice(5,products.length-1)  
            .map(({id , title ,price ,image ,description,category})=>(
            <Product
                key={id}
                title={title}
                price={price}
                image={image}
                description={description}
                category={category}
                
            />
            ))}
        </div>
    )
}

export default ProductFeed
