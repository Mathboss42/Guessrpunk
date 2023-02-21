import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from "next/dynamic";
import Photosphere from '../components/photosphere';
import { useState, createRef, useEffect, useCallback } from 'react';


const MapWithNoSSR = dynamic(() => import("../components/map"), {
  ssr: false
});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [panoramaImage, setPanoramaImage] = useState("/beach.jpg")
  const [background, setBackground] = useState("/beach.jpg")
  const wrapperSetPanoramaImage = useCallback(val => {
    setPanoramaImage(val);
  }, [setPanoramaImage]);



  return (
    <>
      <Head>
        <title>CyberGuessr</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
        <MapWithNoSSR setPanoramaImage={wrapperSetPanoramaImage} panoramaImage={panoramaImage} />
        <Photosphere panoramaImage={panoramaImage} />
      </main>

    </>
  )
}
