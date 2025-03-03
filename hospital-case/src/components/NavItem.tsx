import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useLocation } from 'react-router'

interface NavItemProps {
    title: string
    icon: React.JSX.Element
    link: string
}

const NavItem = ({ title, icon, link }: NavItemProps) => {
    const location = useLocation()
    const isActive = location.pathname === link

    return (
        <ListItemButton component="a" href={link} selected={isActive}>
            <ListItemIcon children={icon} />
            <ListItemText primary={title} />
        </ListItemButton>
    )
}

export default NavItem
