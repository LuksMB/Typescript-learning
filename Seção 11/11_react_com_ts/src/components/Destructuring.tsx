import React from 'react'

interface Props {
    title: string
    content: string
    commentsQnt: number
    tags: string[]
    category: Category
}

export enum Category {
  JS = "Javascript",
  TS = "Typescript", 
  Py = "Python"
}

function Destructuring({title, content, commentsQnt, tags, category}: Props) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários: {commentsQnt}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))} 
        </div>
        <p>Categoria: {category}</p>
    </div>
  )
}

export default Destructuring