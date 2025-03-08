import MedicareLogo from '../assets/MedicareLogo.png'

const NavBar = () => {
    return (
        <div style={{ borderBottom: '1px solid lightgray' }}>
            <img src={MedicareLogo} style={{ width: 250 }}></img>
        </div>
    )
}

export default NavBar
