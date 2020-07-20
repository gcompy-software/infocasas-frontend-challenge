import React from 'react'
import Task from '../main/Task'
import TaskForm from '../main/TaskForm'

const Dashboard = ({ tasks }) => (

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
                    <TaskForm />
                </div>
            </div>
    )

export default Dashboard

