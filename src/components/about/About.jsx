import React from 'react';
import { css } from 'styled-components';
import profilePic from '../../../public/mlh-crop.jpg';


export function About(props){

        return (
            <section css={"width:50%; background:#f7f7f7;"}>
            <div css={"display:flex;"}>
                <div css={"display:flex; justify-content:center;"}>
                    <img src={profilePic} alt="Michael Hegner" css={"padding:25px;width:75%"} />
                </div>
                <div css={"padding:25px;"}>
                    <h2>Full Stack Developer</h2>
                    <h3>Audio Engineer</h3>
                </div>
            </div>
         </section>
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