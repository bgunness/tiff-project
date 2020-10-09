import React, {Component} from 'react'
import  {ReactComponent as Logo} from '../film-icon.svg'

class Footer extends Component {
    render() {
        return(
            <div className='footer'>
                <div className='footer-logo'>
                    <a href='https://tiff.net/'><Logo /></a>
                </div>
                <div className='footer-name'>
                    <p>brandon gunness</p>
                </div>
            </div>
        )
    }
}

export default Footer