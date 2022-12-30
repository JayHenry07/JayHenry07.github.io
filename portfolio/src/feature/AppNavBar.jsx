import { NavBar, NavItem, NavSection, NavLink } from '../component/nav';

export const AppNavBar = () => {
    return (
        <NavBar>
            <NavSection jc='flex-start'>
                <NavItem>
                    <h1 style={{marginTop: '0.5em'}}>Jamie Henry</h1>
                </NavItem>
            </NavSection>
            <NavSection jc='flex-end'>
                <NavItem>
                    <NavLink target='_blank' href='https://github.com/JayHenry07'>GitHub</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink target='_blank' href='https://www.linkedin.com/in/jamie-henry-8ba765154/'>LinkedIn</NavLink>
                </NavItem>
            </NavSection>
        </NavBar>
    );
}