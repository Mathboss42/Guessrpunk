import styles from '@/styles/Home.module.css'
import { useEffect, useState, createRef, useRef, Fragment, useCallback } from 'react';
import dynamic from 'next/dynamic';
// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';


const ReactPhotoSphereViewer = dynamic(
    () =>
      import('react-photo-sphere-viewer').then(
        (mod) => mod.ReactPhotoSphereViewer
      ),
    {
      ssr: false,
    }
  );

export default function Photosphere(props){
    const photoSphereRef = useRef(null)
    
    
    
    function handleReady(e){
        if (photoSphereRef.current){

        }
        photoSphereRef.current=e
    }
    useEffect(() => {
        if (photoSphereRef.current){
            photoSphereRef.current.setPanorama(props.panoramaImage.url)
        }
    }, [props.panoramaImage])

    
    return(

            
      <ReactPhotoSphereViewer ref={photoSphereRef} onReady={(e) => handleReady(e)} navbar={false} src={props.panoramaImage.url} height={'100vh'} width={"100%"}>
        
      </ReactPhotoSphereViewer>

      )
}