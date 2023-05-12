import {CartIcon} from '../icons'
import logo from '../Assets/logo.png';
import { useSelector } from 'react-redux';

const Navbar =  () => {

    const {amount} = useSelector((store) => store.products)
    return (
        <nav>
            <div className='nav-center'>
               <img src={logo} alt="nav logo"  />
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>

                </div>
            </div>
        </nav>

    )
}
export default Navbar