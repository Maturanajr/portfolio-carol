import React, {useContext} from 'react'
import './OtherProjects.css'
import { ThemeContext } from '../../../contexts/ThemeContext';

export default function OtherProjects(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='OtherContainer'>
        <div className='OtherImage'>
        <h2 className='labelImage' style={{color: theme.primary}}>{props.label}</h2>
            <img
                src={props.src}
                />
        </div>
    </div>
  )
}
