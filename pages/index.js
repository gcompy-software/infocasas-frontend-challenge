import { NextSeo } from 'next-seo'
import Task from '../components/main/Task'

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
    
    <div>
      <h1>{process.env.SITE_NAME} </h1>
      <div className="ed-grid m-grid-3 row-gap">
        {
          tasks.map(p => <Task key={p.id} task={p} />)
        }
      </div>
    </div>
    <span>© 2020 gcompy software</span>
  </div>
)

export async function getStaticProps() {
  const resp = await fetch(`${process.env.API_TODO}/todos`)
  const tasks = await resp.json()
  
  return {
    props: {
      tasks
    }
  }
}

export default Home