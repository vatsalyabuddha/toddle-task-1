import React,{useState,useEffect,useRef} from 'react'

function Form(props) {
    const [input,setInput] = useState(props.edit ? props.edit.value:(''));

    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id:Math.random()*10000,
            text:input
        });

        setInput('');
    }


    return (
        <div className="">
            <form onSubmit={handleSubmit} className="standard-form" >
            {props.edit ? (
                    <div>
                        <input 
                            type="text" 
                            placeholder="Update standard" 
                            value={input}
                            name="text" 
                            levels='1'
                            className="standard-input edit" 
                            onChange={handleChange}
                            ref = {inputRef}
                        />
                        <button className="standard-button edit">
                            Update standard
                        </button>
                    </div>
                ) :
                (
                    <div>
                        <input 
                            type="text" 
                            placeholder="Add a standard" 
                            value={input}
                            name="text" 
                            levels='1'
                            className="standard-input" 
                            onChange={handleChange}
                            ref = {inputRef}
                        />
                        <button className="standard-button">
                           + Add a standard
                        </button>
                    </div>
                )
                }
            </form>
            
        </div>
    )
}

export default Form;
