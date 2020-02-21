import React from 'react';

export default function Item({tasks,handleDelete,handleEdit}){

    function CheckLevel(level){
        if(level === 1)
        {
            return {name : 'Small' , style :"badge badge-danger"};
        }else if(level === 2)
        {
            return {name:'Medium' , style : "badge badge-primary"};
        }
        return {name:'High', style :"badge badge-success"};

    }
    return(
        <tbody>
            {
                tasks.map(task => {
                    return <tr key={task.id}>
                                <td className="text-center">{task.id}</td>
                                <td>{task.name}</td>
                                <td className="text-center"><span className={CheckLevel(task.level).style}>{CheckLevel(task.level).name}</span></td>
                                <td>
                                    <button 
                                        type="button" className="btn btn-warning" 
                                        style={{marginRight:5}} onClick={()=>handleEdit(task.id)}
                                    >Edit</button>
                                    <button 
                                        type="button" className="btn btn-danger" 
                                        onClick={()=>{handleDelete(task.id)}}
                                    >Delete</button>
                                </td>
                            </tr>  
                })
            }      
        </tbody>
        
    )
}