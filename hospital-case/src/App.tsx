import { Outlet } from 'react-router'
import SideMenu from './components/SideMenu'
import NavBar from './components/NavBar'

function App() {
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            <NavBar />
            <div style={{ display: 'flex', flex: 1 }}>
                <SideMenu />
                <Outlet />
            </div>
        </div>
    )
}

export default App
