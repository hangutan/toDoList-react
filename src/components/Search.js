import React from 'react';

export default function Search({handleSearch,handleClear,searchString}){
    return(
        <div className="input-group">
            <input type="text" className="form-control" value={searchString} placeholder="Search for..." onChange={handleSearch}/>
            <span className="input-group-append">
                <button className="btn btn-info" type="button" onClick={handleClear}>Clear!</button>
            </span>
        </div>
    )
}