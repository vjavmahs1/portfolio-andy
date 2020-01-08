import React, {Component} from 'react'
import './home.css'

import Header from '../header/header'
import Profile from '../../profile.jpeg'

class Home extends Component {
    render  () {
        return(
            <div>
                <Header />
                <div>
                    <h1 className="header">Andy Jeesu Kim </h1>
                    <div className="wrapper">
                        <div className="pic">
                            <img src={Profile} />
                        </div>  

                        <div className="intro">
                            I am currently a Ph. D. Candidate in the Texas A&M Institute for Neuroscience (TAMIN) Department at Texas A&M University, expected to graduate in Spring 2021. In Dr. Brian Anderson’s Learning & Attention Lab, I have broadly investigated attentional capture in humans using behavioral and eye-tracking techniques and the associated neural networks via functional neuroimaging with concurrent eye-tracking and threat of shock methodologies. In addition, I have been trained to be a Level 2 fMRI operator by Dr. Vidya Sridhar (Texas A&M Translational Imaging Center). My research interests are how adaptive (threat of shock) and maladaptive anxiety influences attentional priority, whether other types of reward (e.g. social reward) resemble behavior and neural networks previously associated with attentional capture by monetary reward, and whether the behavior and neural correlates of visual attentional capture similarly translate to the auditory domain. Thank you for taking the time to look over my page!
                        </div>


                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home