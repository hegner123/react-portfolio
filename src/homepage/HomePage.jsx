import React from 'react';
import { css } from 'styled-components';

import {About} from '../components/about';
import { Projects } from '../components/projects';
import { Main, NavBar, NavList, NavItem } from './style';


export function HomePage(props){

        return (
         <div >
            <header css={"font-family:Roboto;padding:20px 25px;"}>
                <nav>
                    <NavBar css={"display:flex;"}>
                        <div>
                            <a href="/" css={"color:var(--text-color);text-decoration:none;font-size:var(--font-size)"}>Michael Hegner</a>
                        </div>
                        <NavList css={"display:flex;"}>
                            <NavItem>
                                <a href="https://github.com/hegner123" target="_none" css={"color:var(--text-color);text-decoration:none;"}>Github</a>
                            </NavItem>
                            <NavItem>
                                <a href="https://www.linkedin.com/in/michaelhegner/" target="_none" css={"color:var(--text-color);text-decoration:none;"}>LinkedIn</a>
                            </NavItem>
                            <NavItem>
                                <a href="public/Resume.pdf" target="_none" css={"color:var(--text-color);text-decoration:none;"}>Resume</a>
                            </NavItem>
                            <NavItem>
                                <a href="mailto:hegner123@gmail.com" target="_none" css={"color:var(--text-color);text-decoration:none;"}>Email</a>
                            </NavItem>
                        </NavList>
                    </NavBar>
                </nav>
            </header>
            <Main css={"display:flex;width:100%"}>
                <About />
                <Projects/>
            </Main>
        </div>
        )
    }


// function mapState(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return { user, users };
// }

// const actionCreators = {
//     getUsers: userActions.getAll,
//     deleteUser: userActions.delete
// }

// const connectedHomePage = connect(mapState, actionCreators)(HomePage);
// export { connectedHomePage as HomePage };