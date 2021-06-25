import React from 'react'

export const Title = props => {
    return (
        <div css={"min-width:100%;min-height:100vh;display:flex;justify-content:center;align-items:center;margin-top:-50px"}>
            <div>
                <h1 css={"text-align:center; font-size:7rem;"}>Michael Hegner</h1>
                <h2 css={"text-align:center; font-size:5rem;"}>Full Stack Developer</h2>
                <h3 css={"text-align:center; "}><a href="https://github.com/hegner123"css={"text-decoration:none;font-size:2rem;color:var(--text-color)"}>Git Hub</a></h3>
            </div>
        </div>
    )
}
