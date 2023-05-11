import {CartIcon} from './icons'
import logo from './logo.png'

const Navbar =  () => {

    return (
        <nav>
            <div className='nav-center'>
               <img src={logo} alt="nav logo"  />
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>0</p>
                    </div>

                </div>
            </div>
        </nav>

    )
}
export default Navbar