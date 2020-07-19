import Head from 'next/head'
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contacto | {process.env.SITE_NAME} </title>
      </Head>
      <main>
        <h1>Contacto</h1>
        <span>Lorem ipsum ...</span>
      </main>
    </div>
  )
}