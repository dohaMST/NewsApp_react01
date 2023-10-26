import React from 'react'

function Card({article}) {
  return (
    <div className='card'>
      <div className="cardContainer">
        <img src={article.urlToImage} alt="#" />
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <button><a href={article.url} target='_blank'>read more</a></button>
        {/* <div className="tags">#tag</div> */}
      </div>
    </div>
  )
}

export default Card