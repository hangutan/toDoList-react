import React from 'react';
import Sort from './Sort';
import Search from './Search';

export default function Control({
    handleClear, 
    handleSearch,
    searchString,
    handleNameASC,
    handleNameDESC,
    handleLevelASC,
    handleLevelDESC
}){
    return(
        <div className="col-12 col-lg-6">
            <div className="row">
                <div className="col-12">
                    <Sort 
                        handleNameASC={handleNameASC} 
                        handleNameDESC={handleNameDESC}
                        handleLevelASC={handleLevelASC}   
                        handleLevelDESC={handleLevelDESC} 
                    />
                </div>
                <div className="col-12">
                    <Search 
                    searchString={searchString}
                        handleSearch={handleSearch}
                        handleClear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}