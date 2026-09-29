import Assi from './Assi3.jsx'
import { useState } from 'react'
import "./form.css";
export default function Render(){
   let [info, setinfo] = useState([])
    let newinfo = (data)=>{
        setinfo((currdata)=>[...currdata, data])
    }
    return<>
        <h1>Registration Form</h1>
        <div className="container">
            <div className="left">
                <Assi addnewinfo={newinfo}></Assi>
            </div>
            <div className="right">
                {info.map((infos,idx)=>(
                    <div key={idx} className="card">
                        <h3>Name :{infos.username}</h3>
                        <h3>Email :{infos.email}</h3>
                        <h3>Mob No. :{infos.mob}</h3>
                        <h3>Tech Stack :{infos.tech}</h3>
                        <p>Reason To Join : {infos.text}</p>
                    </div>
                ))}
                </div>
            </div>
    </>
}