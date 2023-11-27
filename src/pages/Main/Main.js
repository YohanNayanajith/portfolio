import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import VolunteerTimeline from '../../components/Volunteer/VolunteerTimeline'
import { headerData } from '../../data/headerData'
import FooterWithThree from '../../components/Footer/FooterWithThree'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            
            <Skills />
            
            <Projects />
            <Education />
            {/* <Experience /> */}
            {/* cetification */}
            <Achievement /> 
            <VolunteerTimeline />
            {/* <Services /> */}
            <Blog />
            <Testimonials />
            
            <Contacts />
            {/* <Footer /> */}
            <FooterWithThree />
        </div>
    )
}

export default Main
