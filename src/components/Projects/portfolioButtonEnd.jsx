import React,{ useContext } from 'react'
import { headerData } from '../../data/headerData';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button } from '@material-ui/core';

export default function PortfolioButtonEnd() {
    const { theme, drawerOpen } = useContext(ThemeContext);
    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
    }));

    const classes = useStyles();
  return (
    <div style={{display:'flex', flexDirection:'column', background:'#eaeaea', textAlign: 'center'}}>
        <p style={{color: theme.primary, fontSize: '1rem'}}>Baixe o portfolio completo</p>
        <div>
            {headerData.resumePdf && (
                <a style={{margin:'0.3rem'}}
                    href={headerData.resumePdf}
                    download='resume'
                    target='_blank'
                    rel='noreferrer'
                >
                    <Button className={classes.resumeBtn}>
                        Portfolio
                    </Button>
                </a>
            )}
        </div>
    </div>
  )
}
