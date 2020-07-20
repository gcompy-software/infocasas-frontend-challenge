import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Moment from 'moment'
import Task from '../main/Task'
import TaskForm from '../main/TaskForm'

export const DashboardContext = React.createContext()

const Dashboard = () => {
    let [tasks, setTasks] = useState([{}])

    useEffect(() => {
        const resp = Axios.get(`${process.env.API_TODO}/tasks`)
        .then(resp => {
            //addTask(resp.data) //Solución temporal no óptima
            //console.log(resp.data)
            setTasks(resp.data)
        })
    },[])


return(

        <div className="ed-grid m-grid-4" id="dashboard">
            <div id="todo" >
                <h1 className="center" id="todo">TODO</h1>
                {
                tasks.map(p => p.state == "todo" && <Task key={p.id} tasks={p} />)
                }
            </div>

            <div id="progress" id="progress">
                <h1 className="center" >PROGRESS</h1>
                {
                tasks.map(p => p.state == "progress" && <Task key={p.id} tasks={p} />)
                }
            </div>

            <div id="done">
                <h1 className="center" id="done">DONE</h1>
                {
                tasks.map(p => p.state == "done" && <Task key={p.id} tasks={p} />)
                }
            </div>

            <div>
                <DashboardContext.Provider value={{ tasks, setTasks }}>
                <TaskForm />   
                </DashboardContext.Provider>   
            </div>

        </div>

    )
}
export default Dashboard

    // const [id, setId] = useState(0)
    // const [title, setTitle] = useState("")
    // const [person, setPerson] = useState("")
    // const [state, Setstate] = useState("")
    // const [deadline, setDeatLine] = useState(Moment.now())
    // const [created, setCreated] = useState(Moment.now())
    // const tasks ={
    //     id,
    //     title,
    //     person,
    //     state,
    //     deadline,
    //     created
    // }   
    //"id": 3,
    //"title": "Escribir scripts",
    //"person": "Admin",
    //"state": "todo",
    //"deadline": 1591802130,
    //"created": 1591370128