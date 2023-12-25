import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NextClever</title>
      </Head>
      <main>
        <Header title="Welcome to NextCelver!" />
      </main>
    </div>
  )
}
