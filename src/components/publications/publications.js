import React, {Component} from 'react';
import Header from '../header/header';
import './publications.css'
import Publication from './publication/publication'

class Publications extends Component {
    render () {
        return(
            <div>
                <Header/>
                <h1 className = "header">Publications</h1>

                <h3 className='sub-header'>In-press/Accepted-in-principle</h3>
                <div className ="root">
                    <Publication/>
                    <Publication/>
                    <Publication/>
                    <Publication/>
                </div>
                <h3 className='sub-header'>Published</h3>
                <div className ="root">
                    <Publication/>
                    <Publication/>
                    <Publication/>
                    <Publication/>
                    <Publication/>
                </div>

            </div>
        )
    }
}
export default Publications