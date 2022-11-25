import React,{ useContext } from 'react'
import {Pannellum} from "pannellum-react"
import './Shows360.css'
import { ThemeContext } from '../../../contexts/ThemeContext';

export default function Show360(props) {
  const { theme } = useContext(ThemeContext);
  return (
  <div className='Background'>
    <div className='Pannel360'>
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
        <Pannellum.Hotspot
          type="custom"
          pitch={12.41}
          yaw={117.76}
          handleClick={(evt, name) => console.log(name)}
          name="image info"
          />
      </Pannellum>
      </div>
    </div>
  )
}
