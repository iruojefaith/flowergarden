import {CartIcon} from './icons'


const Navbar =  () => {

    return (
        <nav>
            <div className='nav-center'>
                <h3>FlowerGarden</h3>
                <div className='nav-container'>
                    <CartIcon />
                </div>
            </div>
        </nav>

    )
}
export default Navbar