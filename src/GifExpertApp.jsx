import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = ({ title }) => {

    const [ categories, setCategories] = useState([])

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories])
    } 

    return (
        <>
            <h1>{ title }</h1>
            <AddCategory 
                onNewCategory={ onAddCategory }
            />
            <ol>
                {
                    categories.map( (category) => (
                        <GifGrid 
                            key={ category } 
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}

GifExpertApp.defaultProps = {
    title: 'Gif Expert App'
}
