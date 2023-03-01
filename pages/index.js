import Head from 'next/head'
import React from 'react'
import Slider from '../components/Slider'

export default function HomePage() {
  return (
    <>
    <Head>
      <title>Best of Adidas</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
      <section id='best-of-adidas-slider'>
        <Slider />
      </section>
    </>
  )
}
