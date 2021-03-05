import React from 'react';

const ImageCard = ({ image }) => {

  const tags = image.tags.split(',')
  const views = image.views.toLocaleString()
  const downloads = image.views.toLocaleString()
  const likes = image.likes.toLocaleString()

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img src={image.webformatURL} alt={image.tags} className="w-full"/>
      <div className="px-6 py-4 ">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tags.map((tag, index)=>(
          <span key={index} className='inline-block mb-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #{tag}
          </span>
        ))

        }
      </div>
    </div>
  )
}

export default ImageCard;