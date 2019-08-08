import React from 'react';

const Product = props => {
    console.log(props.product)
    return ( 
        <article>
            <h3>{props.name}</h3>
            <p>{`Autor: ${props.product.author}`}</p>
            <p>{props.product.description}</p>
        </article>
     );
}
 
export default Product;