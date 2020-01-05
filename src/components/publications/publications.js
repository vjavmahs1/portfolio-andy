import React, {Component} from 'react';
import Header from '../header/header';
import './publications.css'
import Publication from './publication/publication'

class Publications extends Component {
    render () {
        return(
            <div>
                <Header/>
                <div className ="root">
                    <Publication/>
                </div>

                <div className ="root">
                    <Publication/>
                </div>

            </div>
        )
    }
}
export default Publications