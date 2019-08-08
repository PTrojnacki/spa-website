import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ProductsListPage.css';
import products from '../products';

// const products = [
//     {
//         id: 1,
//         title: 'Dementi - historia sukcesu',
//         author: 'P. Trojnacki, K. Draganek',
//         type: 'książka',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit modi sint repellat. Nemo quibusdam non nihil? Itaque labore nesciunt dolores minima quibusdam ipsam dolorum sunt placeat autem earum voluptatibus reiciendis animi a, mollitia quidem. Iusto culpa recusandae nobis molestiae exercitationem illum eos earum molestias nisi, quisquam esse fuga commodi similique illo ex libero officia doloremque aperiam tempore rerum ipsam temporibus odit. Nisi incidunt quis alias quos temporibus, commodi quidem!',
//     },
//     {
//         id: 2,
//         title: 'Marketing internetowy dla małych przedsiębiorstw',
//         author: 'P. Trojnacki',
//         type: 'kurs',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit modi sint repellat. Nemo quibusdam non nihil? Itaque labore nesciunt dolores minima quibusdam ipsam dolorum sunt placeat autem earum voluptatibus reiciendis animi a, mollitia quidem. Iusto culpa recusandae nobis molestiae exercitationem illum eos earum molestias nisi, quisquam esse fuga commodi similique illo ex libero officia doloremque aperiam tempore rerum ipsam temporibus odit. Nisi incidunt quis alias quos temporibus, commodi quidem!',
//     },
//     {
//         id: 3,
//         title: 'Język angielski dla programistów',
//         author: 'K. Draganek',
//         type: 'kurs',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit modi sint repellat. Nemo quibusdam non nihil? Itaque labore nesciunt dolores minima quibusdam ipsam dolorum sunt placeat autem earum voluptatibus reiciendis animi a, mollitia quidem. Iusto culpa recusandae nobis molestiae exercitationem illum eos earum molestias nisi, quisquam esse fuga commodi similique illo ex libero officia doloremque aperiam tempore rerum ipsam temporibus odit. Nisi incidunt quis alias quos temporibus, commodi quidem!',
//     },
// ]

const ProductsListPage = (props) => {
    const productsList = products.map(product => (
        <Link key={product.id} className="list__product" to={`product/${product.title}`}>
        <p className="product__title">{product.title}</p>
        <p className="product__author">{product.author}</p>
        <p className="product__type">{product.type}</p>
        </Link>
    ))

    return ( 
        <div className="products">
            <ul className="products__list">
                {productsList}
            </ul>
        </div>
     );
}
 
export default ProductsListPage;