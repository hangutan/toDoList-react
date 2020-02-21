import React,{useState, useEffect} from 'react';
import Control from './Control';
import Form from './Form';
import List from './List';

export default function MainContent(){
    const data = [
        {
            id : 1,
            name :'Học Lập Trình FrontEnd thầy Lực',
            level : 1 
        },
        {
            id : 2,
            name :'Lập Trình Reactjs thầy Lực',
            level : 2 
        },
        {
            id : 3,
            name :'BackEnd thầy Lực',
            level : 3 
        }
    ];

    const [tasks,setTask] = useState(data);
    const [name,setName] = useState('');
    const [level,setLevel] = useState(1);
    const [id,setId]= useState(3);
    const [form,setForm] = useState(false);
    const[edit,setEdit] = useState(false);
    const [searchString, setSearchString]=useState('');

    const[sortNameASC, setSortNameASC]= useState('');

    const handleNameASC = ()=>{
        let sorttask =[...tasks.sort((a,b)=>{
            if(a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            else return 0;
        })]
        setTask(sorttask);
    }

    const handleNameDESC = ()=>{
        let sorttask =[...tasks.sort((a,b)=>{
            if(a.name > b.name) return -1;
            else if (a.name < b.name) return 1;
            else return 0;
        })]
        setTask(sorttask);
    }

    const handleLevelASC =()=>{
        let sorttask=[...tasks.sort((a,b)=>{
            if(a.level > b.level) return 1;
            else if (a.level < b.level) return -1;
            else return 0;
        })]
        setTask(sorttask);
    }

    const handleLevelDESC =()=>{
        let sorttask=[...tasks.sort((a,b)=>{
            if(a.level > b.level) return -1;
            else if (a.level < b.level) return 1;
            else return 0;
        })]
        setTask(sorttask);
    }

    const handleSearch = (e)=>{      
      setSearchString(e.target.value);
    }

    const handleClear = ()=>{
        setSearchString('');
    }

    const handleToggleForm = ()=>{
        if(form === false){
            setForm(true)
        }else{
            setForm(false)
        }
    }

    const handleName = (e)=>{
        setName(e.target.value);
    }
    const handleLevel = (e)=>{
        setLevel(e.target.value);
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(edit){
            let newEditTask = tasks.map(item=>{
                return item.id===id ? {...item,name,level} : item
            })
            setTask(newEditTask);
            setEdit(false);
        }else{
            const newTask = {
                id : id+1,
                name,
                level : parseInt(level)
            }
            console.log(newTask);
            setTask([...tasks,newTask]);
            setId(newTask.id);
        }
        setName('');
        setLevel('');
        
    }

    const handleDelete = id =>{
        let task = tasks.filter(item =>{
            return item.id !== id
        })
        console.log(task);
        setTask(task);
    }

    const handleEdit = id =>{
        setForm(true);
        let eTask = tasks.find(item=>{
            return item.id === id
        });
       let { name , level} = eTask ;
       setName(name);
       setLevel(level);
       setEdit(true);
    }

    return (
        <>
            <div className="row">
                <Control 
                    handleSearch={handleSearch}
                    searchString={searchString}
                    handleClear={handleClear}
                    handleNameASC={handleNameASC}
                    handleNameDESC={handleNameDESC}
                    handleLevelASC={handleLevelASC}
                    handleLevelDESC={handleLevelDESC}
                />
                <Form 
                    edit={edit}
                    form={form}
                    name={name}
                    level={level}
                    handleName={handleName}
                    handleLevel={handleLevel}
                    handleSubmit={handleSubmit}
                    handleToggleForm={handleToggleForm}
                />
            </div>
            <List 
                tasks={tasks.filter(item=>{
                    return item.name.toLowerCase().indexOf(searchString) !== -1;
                })}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </>
    )
}