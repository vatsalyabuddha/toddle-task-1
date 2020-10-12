import React,{useState,useEffect} from 'react';
import Standard from './Standard';
import Form from './Form';

function StandardList() {
    const [standards,setStandards] = useState([]);
    const [levels,setLevels] = useState([]);

    useEffect(()=>{
        getLocalStandards();
    },[]);

    useEffect(()=>{
        saveLocalStandards();
    },[standards]);

    const addOutdent = ()  => {
        if(standards.levels === 1)
        {
            standards.setLevels(2);
        }
        else if(standards.levels === 2)
        {
            standards.setLevels(3);
        }
    }
    const addIndent = () => {
        if(standards.levels === 3)
        {
            standards.setLevels(2);
        }
        else if(standards.levels === 2)
        {
            standards.setLevels(1);
        }
    }

    const addStandard = (standard) =>{
        if(!standard.text){
            return;
        }
        standard.levels=1;
        const newStandards = [...standards,standard]
        setStandards(newStandards)
    }
    const updateStandard = (standardId,newValue) => {
		if(!newValue.text){
            return;
		}
		setStandards(prev => prev.map (item=> (item.id===standardId ? newValue : item )))
    }  
	const removeStandard = id => {
		const removeArr = [...standards].filter(todo=>todo.id !== id)
		setStandards(removeArr);
    }

    const saveLocalStandards = () => {
        localStorage.setItem('stanndards',JSON.stringify(standards)); 
    };
    const getLocalStandards= () =>{
        if(localStorage.getItem('standards')===null){
            localStorage.setItem('standards',JSON.stringify([]));
        } else {
            let standardLocal = JSON.parse(localStorage.getItem('standards'));
            setStandards(standardLocal);
        }
    }

    return (
        <div>
            <div className="subject">
                MATHEMATICS
            </div>
            <div className="table-heading">
                <div className="action-heading">
                    <h3>Action</h3>
                    <p className="action-content">Outdent,Indent,Edit,Delete</p>
                </div>
                <div></div>
                <div></div>
                
                <div className="standard-heading">
                    <h3>Standard</h3>
                    <p className="standard-content">The text of the standard</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div><div></div>
                <div></div>
                
            </div>
            <Standard 
                standards={standards}
                removeStandard={removeStandard}
                updateStandard={updateStandard}
                levels={levels}
                addIndent={addIndent}
                addOutdent={addOutdent}
            />
            <Form 
                onSubmit={addStandard} 
            />
        </div>
    );
}

export default StandardList;
