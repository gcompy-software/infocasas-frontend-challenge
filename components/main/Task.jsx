import React from "react"
import Moment from 'moment'
import Link from "next/link"

const Task = ({ tasks }) => (
    
    <article className="s-radius-1 s-pxy-4 s-shadow-bottom course-card background s-shadow-card-micro s-transition white-color nowrap s-column s-mb-0">
        <h2>#{tasks.id}</h2>
        <p>{tasks.title}</p>
        <p>{tasks.person}</p>
        <p>{tasks.deadline}</p>
    </article>
)

export default Task