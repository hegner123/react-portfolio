import React from 'react';
import { css } from 'styled-components';
import profilePic from '../../public/mlh-crop.jpg';
import homepagePic from '../../public/homepage.png';
import {About} from '../components/about';
import { Projects } from '../components/projects';


export function HomePage(props){

        return (
         <div css={"width:100%;"}>
             <header css={"width:100%;font-family:Roboto;padding:20px 0;margin-left:25px;"}>
                <a href="/" css={"text-decoration:none;"}>Michael Hegner</a>
                 </header>
             <main css={"display:flex; width:100%;"}>
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