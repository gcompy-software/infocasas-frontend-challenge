import Head from 'next/head'

const TaskDestail = ({ taskdet }) => (
    <div>
      <Head>
        <title>{taskdet.title} | {process.env.SITE_NAME} </title>
      </Head>
      
      <main>
        <div>
          <h1>{taskdet.title}</h1>
          <p>{taskdet.completed}</p>
        </div>
      </main>
    
    </div>
    
  )
  
  TaskDestail.getInitialProps = async function (context) {
    const { id } = context.query  
    const resp = await fetch(`${process.env.API_TODO}/todos/${id}`)
    const taskdet = await resp.json()

    return {
      taskdet
    }
  }

  export default TaskDestail