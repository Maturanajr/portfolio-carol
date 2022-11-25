import React, {useContext} from 'react'
import './OtherProjects.css'
import { ThemeContext } from '../../../contexts/ThemeContext';
import {BrowserView, MobileView} from 'react-device-detect';

export default function OtherProjects(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='OtherContainer'>
        <div className='OtherImage'>
        <BrowserView>
          <h2 className='labelImage' style={{color: theme.primary}}>{props.label}</h2>
        </BrowserView>
        <MobileView>
          <h2 className='labelImageMobile' style={{color: theme.primary}}>{props.label}</h2>
        </MobileView>
            <img
                src={props.src}
                />
        </div>
    </div>
  )
}
