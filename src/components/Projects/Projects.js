import React,{ useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import Show360 from './Show360/Shows360'
import OtherProjects from './OtherProjects/OtherProjects'
import PortfolioButtonEnd from './portfolioButtonEnd'
import './Projects.css'

import jantar from '../../assets/png/projects/jantar1.png'
import lazer from '../../assets/png/projects/lazer1.png'
import fachada from '../../assets/png/projects/fachada1.png'
import quartobebe from '../../assets/png/projects/quarto1.png'
import banheiro from '../../assets/png/projects/banheiro1.png'
import comercial from '../../assets/png/projects/comercial.png'

function Projects() {
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                <div className="projects--header">
                    <h1 style={{color: theme.primary}}>Projetos</h1>
                </div>
            </div>
            <div>
                <Show360 image='360image.jpg' />
                <OtherProjects src={fachada} label='Fachada' />
                <OtherProjects src={lazer} label='Area de lazer' />
                <OtherProjects src={jantar} label='Sala de jantar' />
                <OtherProjects src={quartobebe} label='Quarto do bebe' />
                <OtherProjects src={banheiro} label='Banheiro/Lavabo' />
                <OtherProjects src={comercial} label='Ambiente comercial' />
                <PortfolioButtonEnd/>
                
            </div>
        </div>
    )
}

export default Projects
