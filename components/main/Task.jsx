import React from "react"
import Link from "next/link"

const Task = ({ tasks }) => (
    
    <article className="s-radius-1 s-pxy-4 s-shadow-bottom course-card background s-shadow-card-micro s-transition white-color nowrap s-column s-mb-0">

        <h2>{tasks.id}</h2>
        <p>{tasks.state}</p>
        <span>{`Escrito por el usuario ${tasks.person}`}</span>
        <Link href={`/task/${tasks.id}`}><a>Leer más</a></Link>
    </article>
)

export default Task