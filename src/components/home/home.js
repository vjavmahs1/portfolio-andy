import React, {Component} from 'react'
import './home.css'

import Header from '../header/header'


class Home extends Component {
    render  () {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Header />
            </div>
            
        )
    }
}

export default Home