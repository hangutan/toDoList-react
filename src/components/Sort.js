import React from 'react';

export default function Sort({
    handleNameASC,
    handleNameDESC,
    handleLevelASC,
    handleLevelDESC
}){
    return(
        <div className="form-group">
            <span className="badge badge-success badge-medium" onClick={handleNameASC}>Name ASC</span>
            <span className="badge badge-primary badge-medium" onClick={handleNameDESC}>Name DESC</span>
            <span className="badge badge-danger badge-medium" onClick={handleLevelASC}>Level ASC</span>
            <span className="badge badge-dark badge-medium" onClick={handleLevelDESC}>Level DESC</span>
        </div>
    )
}