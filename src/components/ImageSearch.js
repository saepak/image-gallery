import React,{useState} from 'react'

const ImageSearch = ({searchText}) => {

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }

    return (
        <div className='pt-3 pb-0.5'>
            <div className='max-w-md rounded overflow-hidden my-10 mx-auto'>

                <h1 className='text-center font-black text-4xl md:text-6xl pb-4'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-indigo-400'>Search Images</span>
                </h1>

                <div className='m-2 bg-white rounded'>
                    <form onSubmit={onSubmit} className="w-full">
                        <div className="flex items-center border-teal-500 py-2 ">
                            <input 
                                onChange={e => setText(e.target.value)}
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                                type="text" 
                                placeholder="Search Image Term..." 
                            />
                            <button 
                                className="flex-shrink-0 bg-red-400 border-red-400 text-white text-sm border-4 py-1 px-2 rounded mr-3" 
                                type="submit">
                            Search
                            </button>      
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ImageSearch
