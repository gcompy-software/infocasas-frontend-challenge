import React from "react"
import Link from "next/link"

const Task = ({ task }) => (
    <article className="s-radius-1 s-pxy-4 s-shadow-bottom course-card background s-shadow-card-micro s-transition white-color nowrap s-column s-mb-0">
        
        <h2>{task.title}</h2>
        <p>{task.completed}</p>
        <span>{`Escrito por el usuario ${task.userId}`}</span>
        <Link href={`/task/${task.id}`}><a>Leer más</a></Link>
    </article>
)

export default Task