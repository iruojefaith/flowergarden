import {CartIcon} from './icons'


const Navbar =  () => {

    return (
        <nav>
            <div className='nav-center'>
                <h3>Redux tookit</h3>
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>

                    </div>
                </div>
            </div>
        </nav>

    )
}
export default Navbar