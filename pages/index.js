import { NextSeo } from 'next-seo'
import Dashboard from '../components/main/Dashboard'
import Axios from 'axios'
import TaskForm from '../components/main/TaskForm'

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

    <Dashboard tasks={ tasks } />
    
    <TaskForm />

    <span>© 2020 gcompy software</span>
  </div>
)

export async function getStaticProps() {
  let tasks = {}
  await Axios.get(`${process.env.API_TODO}/tasks`)
                            .then(resp => {
                              tasks = resp.data.filter(resp => resp.person = "Admin" )
                            })
  return {
    props: {
      tasks
    }
  }
}

export default Home