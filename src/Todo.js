import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function TodoList() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState();

    function btnAddValue() {
        if(inputValue.trim()){
            setList([...list, inputValue])
            setInputValue('')
        }
    }
    function deleteItem(index){
        var newList = list.filter((_,i) => i !== index); 
        setList(newList);
    }
    return (
        <>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <textarea id="todo" placeholder="Start Typing ........." value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></textarea>
                                </div>
                                <div>
                                    <button className="addBtn" onClick={btnAddValue}><FontAwesomeIcon icon={faCirclePlus} style={{ color: "#63E6BE" }} />  Add To List</button>
                                </div>
                            </td>
                            <td>
                                <div id="listContainer">
                                    <ul className="unOrderList">
                                        {list.map((li,index) => (
                                            <li key={index}>
                                                <div className="todoListItem">
                                                    <i className="fa-solid fa-trash" style={{color:' #e7084b',cursor:'pointer',padding:'0px 5px'}} onClick={() => deleteItem(index)}></i>
                                                    <label className="itemLabel">{li}</label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TodoList