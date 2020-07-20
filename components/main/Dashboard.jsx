import React from 'react'
import Task from '../main/Task'

const Dashboard = ({ tasks }) => (

            <div className="ed-grid m-grid-3"> 
                <div id="todo" >
                    <h1 className="center">TODO</h1>
                    {
                    tasks.map(p => p.state == "todo" && <Task key={p.id} tasks={p} />)
                    }
                </div>

                <div id="progress" >
                    <h1 className="center" >PROGRESS</h1>
                    {
                    tasks.map(p => p.state == "progress" && <Task key={p.id} tasks={p} />)
                    }
                </div>

                <div id="done">
                    <h1 className="center">DONE</h1>
                    {
                    tasks.map(p => p.state == "done" && <Task key={p.id} tasks={p} />)
                    }
                </div>
            </div>
    )

export default Dashboard

