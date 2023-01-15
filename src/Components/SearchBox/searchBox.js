import React from 'react';
import './style.css';
const SearchBarCardComponents = ({searchValue, setSearchValue, filterData})=>{
    
    const changeSearchHandle = (e)=>{
        setSearchValue(e.target.value)
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        filterData()
    }
    return (
        <>
            <div className='searchBox'>
                <div className="container">
                    
                    <div className='checkBoxSec'>
                      
                        <h3>
                            Movies 
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="search" value={searchValue} onChange={changeSearchHandle} placeholder="Search Movie" />
                        <input type="submit"  value="FIND" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchBarCardComponents;