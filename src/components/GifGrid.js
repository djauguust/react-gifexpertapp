import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
// useState es para cambiar los valores de mi constante sin tener problemas
// useEffect es para que no rendericemos siempre todo, y podamos darle un orden a las cosas

export const GifGrid = ({ category }) => {

    /* const [images, setImages] = useState([])
    
    useEffect(() => {
        getGifs( category )
            .then ( imgs => setImages(imgs))
    }, [ category ]) */

   const { data, loading} = useFetchGifs( category );
   
   
    

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'> {category} </h3>

        { loading && <p className='animate__animated animate__flash'>Loading</p> }

        <div className='card-grid'>
            
                {
                    data.map( img => (
                        <GifGridItem 
                        key={img.id}
                        { ...img }
                        />
                    ))
                }
            
        </div>
        </>
    )
}
