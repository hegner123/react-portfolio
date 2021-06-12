import React from 'react';
import { css } from 'styled-components';
import profilePic from '../../../public/mlh-crop.jpg';


export function About(props){
        return (
        <section css={"width:50%;"}>
            <div css={"display:flex;"}>
                <div css={"padding:25px;width:50%;"}>
                    <img src={profilePic} alt="Michael Hegner" css={"width:100%; border-radius:5px;overflow:hidden"} />
                </div>
                <div css={"width:50%;padding:25px;"}>
                    <div>
                        <h1 css={"font-size:30px;"}>Michael Hegner</h1>
                        <h2 css={"font-size:20px;margin-top:10px;"}>Full Stack Developer</h2>
                        <h3 css={"font-size:20px;margin-top:10px;"}>Audio Engineer</h3>
                    </div>
                    <div css={"margin-top:10px;"}>
                        <p>MERN Full Stack Web Developer with a background in Audio Engineering and a passion for problem solving. Experienced with creative troubleshooting under pressure. Valued for a detailed approach to learning new skills and an adaptable mindset, switching between tasks quickly and efficiently.</p>
                    </div>
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