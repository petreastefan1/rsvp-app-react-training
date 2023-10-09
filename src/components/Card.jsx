import React, {useRef, useState} from "react";


function Card({user,remove}) {
    const [isEdit, setIsEdit] = useState(false)
    const inputName = useRef()


    let handleEdit =(event)=> {

        setIsEdit(true)

    }

    let handleSave =()=>{
        user.name = inputName.current.value;

        setIsEdit(false)
    }

    let handleRemove =() =>{

        remove(user.id)

    }


    let handleHide = ()=>{





    }

    return (
        <>
            {
                !isEdit && (
                    <div className="card-container"><p>{user.name}</p>
                        <div className="confirmed-container">
                            <label htmlFor="confirmed-box">Confirmed</label>
                            <input type="checkbox" id="confirmed-box " defaultChecked={user.confirmed}/>
                        </div>
                        <div className="card-buttons">
                            <button onClick={handleEdit} className="change-buttons edit-btn">Edit</button>
                            <button onClick={handleRemove} className="change-buttons remove-btn">Remove</button>
                        </div>
                    </div>
                )
            }
            {
                isEdit && (
                    <div className="card-container">
                        <input ref = {inputName} type="text" defaultValue={user.name}/>

                        <div className="confirmed-container">
                            <label htmlFor="confirmed-box">Confirmed</label>
                            <input type="checkbox" id="confirmed-box " defaultChecked={user.confirmed}/>
                        </div>
                        <div className="card-buttons">
                            <button onClick={handleSave} className="change-buttons save-btn">Save</button>
                            <button className="change-buttons remove-btn">Remove</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default Card