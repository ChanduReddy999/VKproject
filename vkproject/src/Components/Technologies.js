import React from 'react'
import './Technologies.css'
import HTML from '../Images/html5.ico'
import CSS from '../Images/css3.webp'
import JS from '../Images/js.png'
import Python from '../Images/Python.webp'
import NodeJS from '../Images/nodejs.png'
import SQL from '../Images/sql.png'
import TABLEAU from '../Images/tableau.png'
import GCP from '../Images/gcp.png'
import ReactJS from '../Images/reactjs.png'
import ExpressJS from '../Images/expressjs.png'


const Technologies = () => {
    return (
        <>
            <div id='technologies' className='TechnologiesMain'>
                <div className='techFirstDiv'>
                    <h1 className='techFirstDivHeading'>My Skills</h1>
                </div>
                <div className='techSecondDiv absc'>
                    <div className=''>
                        <div className='skillsAnimationDiv'>
                            <img src={HTML} className='skillsImg' alt='HTML Pic' />
                        </div>
                        <h2 className='techSecondDivH2'>HTML5</h2>
                    </div>
                    <div className=''>
                        <div className='skillsAnimationDiv'>
                            <img src={CSS} className='skillsImg' alt='CSS Pic' />
                        </div>
                        <h2 className='techSecondDivH2'>CSS3</h2>
                    </div>
                    <div className=''>
                        <div className='skillsAnimationDiv'>
                            <img src={JS} className='skillsImg' alt='Javascript Pic' />
                        </div>
                        <h2 className='techSecondDivH2'>JAVASCRIPT</h2>
                    </div>
                    <div className=''>
                        <div className='skillsAnimationDiv'>
                            <img src={SQL} className='skillsImg' alt='SQL Pic' />
                        </div>
                        <h2 className='techSecondDivH2'>MYSQL</h2>
                    </div>
                    <div className=''>
                        <div className='skillsAnimationDiv'>
                            <img src={TABLEAU} className='skillsImg' alt='Tableau Pic' />
                        </div>
                        <h2 className='techSecondDivH2'>TABLEAU</h2>
                    </div>
                </div>
                <div className='mySkillsThirdDiv'>
                    <div>
                        <div className='skillsAnimationDiv'>
                            <img src={Python} className='skillsImg' alt='Python Pic' />
                        </div>
                        <h2 className='techSecondDivH2'>PYTHON</h2>
                    </div>
                    <div>
                        <div className='skillsAnimationDiv'>
                            <img src={NodeJS} className='skillsImg' alt='NodeJS Pic' />
                        </div>
                        <h2 className='techSecondDivH2'>NODEJS</h2>
                    </div>
                    <div>
                        <div className='skillsAnimationDiv'>
                            <img src={GCP} className='skillsImg' alt='GCP Pic' />
                        </div>
                        <h2 className='techSecondDivH2'>GCP</h2>
                    </div>
                    <div>
                        <div className='skillsAnimationDiv'>
                            <img src={ReactJS} className='skillsImg' alt='ReactJS Pic' />
                        </div>
                        <h2 className='techSecondDivH2'>REACTJS</h2>
                    </div>
                    <div>
                        <div className='skillsAnimationDiv'>
                            <img src={ExpressJS} className='skillsImg' alt='ExpressJS Pic' />
                        </div>
                        <h2 className='techSecondDivH2'>EXPRESSJS</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technologies
