import '../styles/globals.css'
import Head from 'next/head'

function PulseUpApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PulseUp | Průvodce Energetickými Nápoji</title>
        <meta name="description" content="Moderní a vyvážený pohled na složení a účinky energetických nápojů." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Aplikace tmavého pozadí na celý web */}
      <div className="min-h-screen bg-dark-bg text-gray-100 font-sans">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default PulseUpApp