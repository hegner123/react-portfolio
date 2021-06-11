import React from 'react';
import { css } from 'styled-components';

import homepagePic from '../../../public/homepage.png';


export function Projects(props){

        return (
                 <section css={"width:50%;background:#f7f7f7;"}>
                    <div  css={"padding:25px"}>
                        <div css={"display:flex; flex:1; "}>
                            <h3>Current Projects</h3>
                        </div>
                        <div css={"display:flex; flex:1;"}>
                            <img src={homepagePic} alt="ProProject Studio" css={"width:500px"} />
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