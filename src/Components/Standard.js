import React,{useState} from 'react'
import Form from './Form'
import StandardList from './StandardList';
import {VscArrowLeft,VscArrowRight,VscEdit,VscTrash} from "react-icons/vsc";


function Standard({standards,removeStandard,updateStandard,addIndent,addOutdent}) {
    const [edit,setEdit] = useState({
        id:null,
        value:""
    });
    const submitUpdate = value => {
        updateStandard(edit.id,value)
        setEdit({
            id:null,
            value:""
        })
    }
    if(edit.id){
        return<Form  edit={edit} onSubmit={submitUpdate}/>
    }

    return standards.map((standard,index)=>(
    <div className="standard-container">
        <div className="standard-row" key={index}>
            <div className="icons">
                <VscArrowLeft
                     onClick={addOutdent()}
                    className="outdent-icon" 
                />
                <VscArrowRight 
                     onClick={addIndent()}
                    className="indent-icon" 
                />
                <VscEdit 
                    onClick={()=> setEdit({id:standard.id, value:standard.text})}
                    className="edit-icon"
                />
                <VscTrash
                    onClick={()=> removeStandard(standard.id)}
                    className="delete-icon"
                />
            </div>
            {/* <div className="in-1 in-11">-</div>
            <div className="in-2 in-22">-</div>
            <div className="in-3 in-33">-</div> */}
             
            <div className={ (standard.levels===1)? "in-11": "in-1" }>-</div> 
            <div className={ (standard.levels===2)? "in-22": "in-2" }>-</div>
            <div className={ (standard.levels===3)? "in-33": "in-3" }>-</div>        
             
            <div 
                className="standard-text-box"
                //className="standard-text-box"
                className={ 
                    (standard.levels==2) ?
                    "text-indent-2" : 
                    "" 
                }
                className={ 
                    (standard.levels==3) ?
                    "text-indent-3" : 
                    "" 
                }
                key={standard.id}>
                {standard.text}
            </div>
        </div>
    </div>

        
    ))
}

export default Standard;
