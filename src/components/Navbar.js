import {CartIcon} from '../icons'
import logo from '../Assets/logo.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar =  () => {
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    return (
        <nav>
            <div className='nav-center'>
            <Link to="/">
                   <img src={logo} alt="nav logo"  />
            </Link>

                <div className='nav-container'>
                <Link to="/cart">
                    <CartIcon />
                </Link>
                    <div className='amount-container'>
                        <p className='total-amount'>{cartTotalQuantity}</p>
                    </div>

                </div>
            </div>
        </nav>

    )
}
export default Navbar;