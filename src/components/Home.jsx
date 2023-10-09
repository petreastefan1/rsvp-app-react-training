import React,{useRef,useState} from "react";
import Card from "./Card"


function Home() {

    const inputRef =useRef()

    let [users,setUsers] = useState([
        {
            name:"test1",
            id:1,
            confirmed:true
        },
        {
            name:"test2",
            id:2,
            confirmed:false
        },
        {
            name:"test3",
            id:3,
            confirmed:true
        },
        {
            name:"test4",
            id:4,
            confirmed:false
        }
    ])

    function handleAdd(){
        let newUser = {
            name:inputRef.current.value,
            id:Math.floor(Math.random()*100),
            confirmed:false
        }
        setUsers((users)=>{
            return [...users,newUser]
        })

    }

    function handleRemove(id){

        let aux = users.filter(user=>user.id!=id);

        setUsers(aux)
    }



    return(
        <section className="page-container">
            <div className="header-container">
                <div className="top-colour">
                    <h1>RSVP</h1>
                    <p>My school app</p>
                </div>
                <div className="title-checkbox-container">
                    <div className="invitees-title">
                        <p>Invitees</p>
                    </div>
                    <div className="hide-checkbox">
                        <label htmlFor="hide-box">Hide those who haven't responded</label>
                        <input type="checkbox" id="hide-box"/>
                    </div>
                </div>
                <div className="search-container">
                    <input ref={inputRef} type="textbox" placeholder="Invite someone" id="name-inpt"/>
                        <button id="submit-btn" onClick ={handleAdd}>Submit</button>
                </div>
            </div>
            <section className="invitees-container">

                {
                    users.map(user=> {
                        return <Card user={user} key ={user.id} remove={handleRemove}/>
                            })

                }


            </section>

        </section>
    )
}

export default Home;
