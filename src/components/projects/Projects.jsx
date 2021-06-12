import React from 'react';
import { render } from 'react-dom';
import { css } from 'styled-components';

import homepagePic from '../../../public/homepage.png';


export function Projects(props){

        return (
                 <section css={"width:50%;background:var(--bg);"}>
                    <div  css={"padding:25px"}>
                        <div >
                            <h3 css={"font-size:30px;padding-left:50px"}>Current Projects</h3>
                        </div>
                        <div css={"display:flex;width:100%; padding:50px;"}>
                            <div>
                                <a css={"text-decoration:none;color:var(--text-color)"}href="https://proprojectstudio.com">
                                <h3 css={"font-size:30px;"}>ProProject Studio</h3>
                                </a>
                                <p css={"margin-top:10px;"}>ProProject Studio (PPS) is a project management tool created for recording engineers, mixing engineers, mastering engineers, and their respective clients. PPS focuses on three main asspects of the recording or mixing process. These steps are Pre-production, Tracking, and Mixing.</p>
                            </div>

                            <div css={"padding:0 100px;"}>
                                <img src={homepagePic} alt="ProProject Studio" css={"width:100%;border-radius:5px;overflow:hidden"} />
                            </div>
                        </div>
                    </div>
                 </section>
        )
    }