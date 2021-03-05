import React,{ useState, useEffect } from 'react'
import ImageCard from './ImageCard'
import ImageSearch from './ImageSearch'

const Images = () => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('cat');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&orientation=horizontal`)
          .then(res => res.json())
          .then(data => {
            setImages(data.hits);
            setIsLoading(false);
            console.log(data.hits)
          })
          .catch(err => console.log(err));
      }, [term]);


    return (
      <div>
        <ImageSearch searchText={(text) => setTerm(text)}/>

        <div className="container mx-auto px-3 xs:p-0">
            {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32 text-white'>No 
            images Found</h1>}

            {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32 text-white'>Loading..</h1> :
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
                  {images.map(image => (
                      <ImageCard key={image.id} image={image} />
                  ))}
              </div>
            }
        </div>
      </div>
    )
}

export default Images
