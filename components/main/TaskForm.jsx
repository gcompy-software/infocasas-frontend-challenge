import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Moment from 'moment'
import Axios from 'axios'
import Task from './Task'

const TaskForm = () => {

    const [title, setTitle] = useState("")
    const [person, setPerson] = useState("")
    const [deadline, setDeatLine] = useState("")

    const data = {
        title,
        person,
        deadline
    }

    async function  sendForm(e) {
        e.preventDefault()

        await Axios.post(`${process.env.API_TODO}/tasks`, {data})
                .then(resp => addTask(resp.data))
    }

    function addTask(data){
        ReactDOM.render(
            <Task tasks={data} />,
            document.getElementById('todo')
          );
        
                
    }
    // function addTask(data){
    //     //console.log(data)
    //     data.map(d => {
    //       let newTask = document.createElement("article")

    //       let taskId = docume  
    //       let taskTitle = document.createElement("h3")
    //       taskTitle.innerHTML = d.title
          
    //       let taskExpired = document.createElement("p")
    //       taskExpired.innerHTML = d.deadline

    //     })
    //}

    return (
                <aside className="" id="formElement">
                    <div className="aside-container">
                        <h2>Nueva Tarea</h2>
                        <div className="form-container">
                            <form id="formTask">
                                <div className="input-container">
                                    <label htmlFor="titleTask">Título</label>
                                    <input name="titleTask" id="titleTask" onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Escriba un título descriptivo" required></input>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="personTask">Responsable</label>
                                    <select name="personTask" id="personTask" onChange={(e)=> setPerson(e.target.value)} required>
                                    <option value="">-Seleccionar-</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Guido Miranda">Guido Miranda</option>
                                    </select>
                                </div>
                                <div className="input-container">
                                    <label htmlFor="deadlineTask">Plazo de entrega</label>
                                    <select name="deadlineTask" id="deadlineTask" onChange={(e)=> setDeatLine(Moment().add(e.target.value,'d'))} required>
                                    <option value="">-Seleccionar-</option>
                                    <option value="1">1 día</option>
                                    <option value="7">1 semana</option>
                                    <option value="30">1 mes</option>
                                    </select>
                                </div>
                                <div className="action-container">
                                    <button type="submit" onClick={(e)=> sendForm(e)}>Guardar</button>
                                    <button type="reset" id="cancelForm">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </aside>
            )
}

export default TaskForm