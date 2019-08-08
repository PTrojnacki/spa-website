import React from 'react';

import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'Flexbox i CSS Grid',
        author: 'Kamil Draganek',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam repudiandae molestiae? Non rem sit iusto harum. Repudiandae quaerat quis voluptatibus similique iure ad harum velit porro hic sit voluptate, deserunt error eveniet. Dolore nihil enim quis, quam provident impedit optio illo sunt perspiciatis modi deserunt porro quas iure sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam repudiandae molestiae? Non rem sit iusto harum. Repudiandae quaerat quis voluptatibus similique iure ad harum velit porro hic sit voluptate, deserunt error eveniet. Dolore nihil enim quis, quam provident impedit optio illo sunt perspiciatis modi deserunt porro quas iure sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam repudiandae molestiae? Non rem sit iusto harum. Repudiandae quaerat quis voluptatibus similique iure ad harum velit porro hic sit voluptate, deserunt error eveniet. Dolore nihil enim quis, quam provident impedit optio illo sunt perspiciatis modi deserunt porro quas iure sapiente.'
    },
    {
        id: 2,
        title: 'Asynchroniczność w Java Script',
        author: 'Paweł Trojnacki',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam repudiandae molestiae? Non rem sit iusto harum. Repudiandae quaerat quis voluptatibus similique iure ad harum velit porro hic sit voluptate, deserunt error eveniet. Dolore nihil enim quis, quam provident impedit optio illo sunt perspiciatis modi deserunt porro quas iure sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam repudiandae molestiae? Non rem sit iusto harum. Repudiandae quaerat quis voluptatibus similique iure ad harum velit porro hic sit voluptate, deserunt error eveniet. Dolore nihil enim quis, quam provident impedit optio illo sunt perspiciatis modi deserunt porro quas iure sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam repudiandae molestiae? Non rem sit iusto harum. Repudiandae quaerat quis voluptatibus similique iure ad harum velit porro hic sit voluptate, deserunt error eveniet. Dolore nihil enim quis, quam provident impedit optio illo sunt perspiciatis modi deserunt porro quas iure sapiente.'
    },
    {
        id: 3,
        title: 'Dostępność i pozycjonownie - kwestie sporne czy elementy układanki?',
        author: 'Anna Annowska',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam repudiandae molestiae? Non rem sit iusto harum. Repudiandae quaerat quis voluptatibus similique iure ad harum velit porro hic sit voluptate, deserunt error eveniet. Dolore nihil enim quis, quam provident impedit optio illo sunt perspiciatis modi deserunt porro quas iure sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam repudiandae molestiae? Non rem sit iusto harum. Repudiandae quaerat quis voluptatibus similique iure ad harum velit porro hic sit voluptate, deserunt error eveniet. Dolore nihil enim quis, quam provident impedit optio illo sunt perspiciatis modi deserunt porro quas iure sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam repudiandae molestiae? Non rem sit iusto harum. Repudiandae quaerat quis voluptatibus similique iure ad harum velit porro hic sit voluptate, deserunt error eveniet. Dolore nihil enim quis, quam provident impedit optio illo sunt perspiciatis modi deserunt porro quas iure sapiente.'
    },
    
]

const ArticlesPage = () => {
    const articlesList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return ( 
        <>
        {articlesList}
        </>
     );
}
 
export default ArticlesPage;