import React from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import './header.scss';
import {ReactComponent as Logo} from './crown.svg'
import {auth} from '../../firebase/Firebase.utils'
import CartIcon from '../Cart/Cart-Icon/Cart-Icon'
import CartDropdown from '../Cart/Cart-Dropdown/Cart-Dropdown'
import {currentUserSelect , cartVisibilitySelect} from '../../Selectors/Selectors'
import {createStructuredSelector} from 'reselect'
const Header = ({currentUser , visibility}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
            <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT US
                </Link>
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>SignOut</div>:
                    <Link className='option' to='/sign'>
                    SIGN IN
                </Link>
                }
                <CartIcon />
            </div>
            {
                visibility?<CartDropdown/>:null
            }

            
          

        </div>
    )


}
const mapStateToProps = createStructuredSelector(
    {
        currentUser:currentUserSelect,
        visibility:cartVisibilitySelect
    }
)

export default connect(mapStateToProps)(Header);
