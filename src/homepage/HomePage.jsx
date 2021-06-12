import React from 'react';
import { css } from 'styled-components';

import {About} from '../components/about';
import { Projects } from '../components/projects';


export function HomePage(props){

        return (
         <div >
            <header css={"font-family:Roboto;padding:20px 25px;"}>
                <div css={"display:flex;"}>
                    <div>
                        <a href="/" css={"color:var(--text-color);text-decoration:none;font-size:var(--font-size)"}>Michael Hegner</a>
                    </div>
                    <ul css={"display:flex;"}>
                        <li css={"margin-left:20px;"}>
                            <a href="https://github.com/hegner123" target="_none" css={"color:var(--text-color);text-decoration:none;font-size:var(--font-size)"}>Github</a>
                        </li>
                        <li css={"margin-left:20px;"}>
                            <a href="https://www.linkedin.com/in/michaelhegner/" target="_none" css={"color:var(--text-color);text-decoration:none;font-size:var(--font-size)"}>LinkedIn</a>
                        </li>
                        <li css={"margin-left:20px;"}>
                            <a href="public/Resume.pdf" target="_none" css={"color:var(--text-color);text-decoration:none;font-size:var(--font-size)"}>Resume</a>
                        </li>
                    </ul>
                </div>
            </header>
            <main css={"display:flex;"}>
                <About/>
                <Projects/>
            </main>
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