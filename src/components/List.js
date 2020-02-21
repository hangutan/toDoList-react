import React from 'react';
import Item from './Item';

export default function List({tasks,handleDelete,handleEdit}){
    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th >#</th>
                        <th>Task</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <Item 
                    tasks = {tasks}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </table>
        </div>
    )
}