import React from 'react'
import { Link } from 'react-router-dom'
import '@fontsource/poppins'
import Header from './Header'
import Footer from './Footer'
import BungalowsImg from './images/bungalows.jpg'
import MaisonetteImg from './images/maisonettes.jpg'
import ApartmentsImg from './images/apartments.jpg'
import TinyHomesImg from './images/tinyhomes.jpg'

const style = {
    fontFamily: 'Poppins',
}

export default function ServiceSubCategory(){
    return(
        <div className="projects" style={style}>
            <Header />
            <h1 className='projects-title'>Residential Projects </h1>
                <div className='service-projects-container'>
                    <div className='project-box1'>
                        <Link to={`/residentials/bungalows`}>
                        <div className='project-img'>
                            <img src={BungalowsImg} alt='Bungalows' />
                        </div>
                        <h2>Bungalows</h2>
                        </Link>
                    </div>
                    <div className='project-box1'>
                        <Link to={`/residentials/maisonettes`}>
                        <div className='project-img'>
                            <img src={MaisonetteImg} alt='Maisonette' />
                        </div>
                        <h2>Maisonettes</h2>
                        </Link>
                    </div>
                    <div className='project-box1'>
                        <Link to={`/residentials/apartments`}>
                        <div className='project-img'>
                            <img src={ApartmentsImg} alt='Apartments' />
                        </div>
                        <h2>Apartments</h2>
                        </Link>
                    </div>
                    <div className='project-box1'>
                        <Link to={`/residentials/tiny-homes`}>
                        <div className='project-img'>
                            <img src={TinyHomesImg} alt='Tiny Homes' />
                        </div>
                        <h2>Tiny Homes</h2>
                        </Link>
                    </div>
                </div>
            <Footer />
        </div>
    )
}