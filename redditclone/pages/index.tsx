import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import Header from '../components/Header.tsx'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Reddit 2.0 Clone</title>
        <link rel='icon' href='reddit-icon.png' />
      </Head>
      <Header />
    </div>
  )
}

export default Home