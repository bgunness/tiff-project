import React, {Component} from 'react'
import  {ReactComponent as Logo} from '../tiff-logo.svg'

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <div className='logo'>
                    <Logo />
                </div>
                <div className='subtitle'>
                    <p>Toronto International Film Festival</p>
                </div>
            </div>
        )
    }
}

export default Header