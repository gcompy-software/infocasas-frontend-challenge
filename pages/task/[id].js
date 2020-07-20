import Head from 'next/head'
import Moment from 'moment'
import Axios from 'axios'

const TaskDestail = ({ taskdet }) => (
      <main>
        <div>
          <h1>#{taskdet.id}: {taskdet.title}</h1>
          <p>Status: {taskdet.state}</p>
          <p>Created: {Moment.unix(taskdet.created).format("DD/MM/YYYY")}</p>
          <p>Expire: {Moment.unix(taskdet.deadline).format("DD/MM/YYYY")}</p>
          <p>User: {taskdet.person}</p>
        </div>
      </main>
    
  )
  
  TaskDestail.getInitialProps = async function (context) {
    const { id } = context.query
    let taskdet = {}  
    await Axios.get(`${process.env.API_TODO}/tasks/${id}`)
                        .then( resp =>{taskdet = resp.data})

    return {
      taskdet
    }
  }

  export default TaskDestail