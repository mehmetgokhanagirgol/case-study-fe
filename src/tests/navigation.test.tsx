import { render, screen } from '@testing-library/react'
import NavItem from '../components/NavItem'
import { LocalHospital } from '@mui/icons-material'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router'

test('navigation items navigate to according paths', () => {
    render(
        <MemoryRouter>
            <NavItem
                title="Hospital"
                icon={<LocalHospital />}
                link="hospital"
            />
        </MemoryRouter>
    )
    const linkElement = screen.getByRole('link', { name: /hospital/i })
    expect(linkElement).toHaveAttribute('href', 'hospital')
})
