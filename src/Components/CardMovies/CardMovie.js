import React from 'react';
import {Link} from 'react-router-dom';
import {img_300, img_not_available} from '../../Config';


const CardMoviesComponents = ({data,mediaType})=>{
    //console.log(data)
    

    const title = data.original_title || data.name;
    const id = data.id;
    const ImageURL =  data.poster_path ? img_300 + data.poster_path : img_not_available;
    const media_type = data.media_type ? data.media_type : data.type ? data.type : mediaType;
    const vote_average = parseInt(data.vote_average);
    return (
        <>
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6'>
                <Link to={`/details/${id}/${media_type}`} className='video-thumb'>
                    <figure className="video-image"> 
                        <span>
                            <img src={ImageURL} alt={title} />
                        </span>
                    </figure>
                    <div className="video-content"> 
                        <ul className="tags">
                            <li>Rating : </li>
                        </ul>
                        <small className="range">{vote_average}</small>
                        <h3 className="name">
                            {title}
                        </h3>
                    </div>
                </Link>
            </div>
            
        </>
    )
}

export default CardMoviesComponents;