import Product from "./Product"
function ProductFeed({products}) {
    
    
    return (
        <div>
            <p>products</p>
            {products.map(({id , title ,price ,image  ,description,category})=>(
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
