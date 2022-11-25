import React,{ useContext } from 'react'
import {Pannellum} from "pannellum-react"
import './Shows360.css'
import { ThemeContext } from '../../../contexts/ThemeContext';
import {BrowserView, MobileView} from 'react-device-detect';

export default function Show360(props) {
  const { theme } = useContext(ThemeContext);
  return (
  <div className='Background'>
    <div className='Pannel360'>
      <BrowserView>
        <h2 className='labelPanorama' style={{color: theme.primary}}>Panorama 360º</h2>
        <Pannellum
          width="100%"
          height="30rem"
          image={props.image}
          pitch={10}
          yaw={180}
          hfov={120}
          autoLoad
          showZoomCtrl={false}
          >
        </Pannellum>
      </BrowserView>
      <MobileView>
        <h2 className='labelPanoramaMobile' style={{color: theme.primary}}>Panorama 360º</h2>
          <Pannellum
            width="100%"
            height="20rem"
            image={props.image}
            pitch={10}
            yaw={180}
            hfov={80}
            autoLoad
            showZoomCtrl={false}
            >
          </Pannellum> 
      </MobileView>
      </div>
    </div>
  )
}
