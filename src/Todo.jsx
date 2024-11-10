import React , {useState} from "react";
function Todo(){
    const  [fvalue,fir] = useState([])
    const  [addValue,scnd] = useState()

    function valueOfFirst(event){
        scnd(event.target.value)
    }
    function Adding(){
        if(addValue.trim() !== ""){
            fir( f => [...fvalue,addValue])
        }
    }
    function deleteButton(index){
        const newOne = fvalue.filter((element, i)=> i !== index)
        fir(newOne)
    }
    function aboving(index){
        if (index > 0){
            let upping = [...fvalue];
            [upping[index],upping[index - 1]] = [upping[index - 1],upping[index]]
            console.log(upping)
            fir(upping)
        }     
    }
    function downing(index){
        if( index < fvalue.length - 1){
            let upping = [...fvalue];
            [upping[index],upping[index + 1]] = [upping[index + 1],upping[index]]
            console.log(upping)
            fir(upping)
        }
    }



    return(
        <div className="container">
             <h1 className="head">TO-DO-LIST</h1>
             <input type="text" placeholder="Enter Tasks" className="bar" onChange={valueOfFirst}/>
             <button className="add-button" onClick={Adding}>+</button>
                <ul>
                    {fvalue.map((value,index)=>
                        <li className="text" key={index}>
                            <span>{value}</span>
                            <button className="delete" onClick={()=>deleteButton(index)}>
                             DELETE
                            </button>
                            <button className="up" onClick={()=>aboving(index)}>
                                UP
                            </button>
                            <button className="down" onClick={()=>downing(index)}>
                                DOWN
                            </button>
                        </li>
                    ) }
                </ul>
        </div>
        

        
    )
}
export default Todo