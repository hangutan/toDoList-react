import React,{useState} from 'react';

export default function Form({
    edit,
    form,
    name,
    level,
    handleName,
    handleLevel,
    handleSubmit,
    handleToggleForm
}){

    return (
        <div className="col-12 col-lg-6">
            <div className="form-group add-task">
                <button 
                    type="button" 
                    className="btn btn-info btn-block"
                    onClick={handleToggleForm}
                >{form ?'Close Form' : 'Open add form'}</button>
            </div>

            {
                form &&  <form onSubmit={handleSubmit} className="form-inline justify-content-between">
                <div className="form-group">
                    <label className="sr-only">label</label>
                    <input
                        value={name} 
                        type="text" 
                        className="form-control" 
                        placeholder="Task Name" 
                        name="nameTask"
                        onChange={handleName}
                    />
                </div>
                <div className="form-group">
                    <label className="sr-only" >label</label>
                    <select
                        value={level}
                        name="ds" 
                        className="form-control" 
                        required="required"
                        onChange={handleLevel}
                        >
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">{edit?'Edit':'Submit'}</button>
            </form>
            }

            
        </div>
    )
}