import { LocalHospital, People } from '@mui/icons-material'
import NavItem from './NavItem'
import { List } from '@mui/material'

const navigationItems = [
    { title: 'Hospital', icon: <LocalHospital />, link: '/hospital' },
    { title: 'Patient', icon: <People />, link: '/patient' },
]

const NavList = () => {
    return (
        <List style={{ width: 250, paddingTop: 0 }}>
            {navigationItems.map((navItem) => (
                <NavItem
                    key={navItem.title}
                    title={navItem.title}
                    icon={navItem.icon}
                    link={navItem.link}
                />
            ))}
        </List>
    )
}

export default NavList
