import { NextSeo } from 'next-seo'
import Task from '../components/main/Task'
import Axios from 'axios'

const Home = ({ tasks }) => (
  
  <div>
    <NextSeo
      title="InfoCasas: Alquiler y venta de departamentos y casas en Paraguay"
      description="Alquiler y venta de departamentos y casas en Paraguay"
      openGraph={{
        url: "https://infocasas.com.py",
        title: "Bienvenido a Todo-InfoCasas",
        description: "Todo-InfoCasas es una aplicación de prueba",
        images: [
          {
            url: "infocasas.com.py/logo.jpg",
            width: 1280,
            height: 720,
            alt: "Foto de perfil de InfoCasas"
          }
        ],
        site_name: "Todo-InfoCasas"
      }}
      twitter={{
        handle: "@infocasas",
        site: "@infocasas",
        cardType: "summary_large_image"
      }}
    />
    
      <div className="ed-grid m-grid-3 row-gap" id="todo" >
        <h1>TODO</h1>
        {
         tasks.map(p => p.state == "todo" && <Task key={p.id} tasks={p} />)
        }
      </div>

      <div className="ed-grid m-grid-3 row-gap" id="progress" >
        <h1>PROGRESS</h1>
        {
         tasks.map(p => p.state == "progress" && <Task key={p.id} tasks={p} />)
        }
      </div>

      <div className="ed-grid m-grid-3 row-gap" id="done">
        <h1>DONE</h1>
        {
         tasks.map(p => p.state == "done" && <Task key={p.id} tasks={p} />)
        }
      </div>
 
    <span>© 2020 gcompy software</span>
  </div>
)

export async function getStaticProps() {
  let tasks = {}
  await Axios.get(`${process.env.API_TODO}/tasks`)
                            .then(resp => {
                              tasks = resp.data
                            })
  return {
    props: {
      tasks
    }
  }
}

export default Home