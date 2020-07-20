import Head from 'next/head'
import Axios from 'axios'

const TaskDestail = ({ taskdet }) => (
    <div>
      <Head>
        <title>{taskdet.title} | {process.env.SITE_NAME} </title>
      </Head>
      
      <main>
        <div>
          <h2>{taskdet.id}</h2>
          <p>{taskdet.state}</p>
          <span>{`Escrito por el usuario ${taskdet.person}`}</span>
        </div>
      </main>
    
    </div>
    
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