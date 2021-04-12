import React from 'react'
import Head from 'next/head'
import Project from '../Components/project'
import Projects from '../public/assets/projects/projects.json'

export default function Home() {

  return (
    <div>
    <Head>
    <title>Michael Henger</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
  </Head>
  <nav className="row">
        <div className="col-12">
          <div className="logo">
             <h3>Michael Hegner</h3>
          </div>
        </div>
      </nav>
    <div className="container">
            <div className="row content">
              <div className="col-12 col-lg-7 bio">
                <div className="row">
              <div className="col-12 col-lg-6">
                <img className="img" src="https://firebasestorage.googleapis.com/v0/b/michael-hegner-portfolio.appspot.com/o/mlh-crop.jpg?alt=media&token=774be91a-afde-437e-b962-5add2f0c876b"/>
                </div>
                <div className="col-12 col-lg-6 bio-text">
                  <h1>Michael Hegner</h1>
                  <p> MERN Full Stack Web Developer with a background in Audio Engineering and a passion for problem solving. Experienced with creative troubleshooting under pressure. Valued for a detailed approach to learning new skills and an adaptable mindset, switching between tasks quickly and efficiently.  </p>
                </div>
                </div>
                </div>

            <div className="col-12 col-lg-5 projects">
              <div className="row">
                <div className="col-12"> 
                  <h2>My Work</h2>
                  <div className="row">
                  <div className="col-12 col-lg-6">
                    <Project
                    projectName={Projects.project1.projectName}
                    projectUrl ={Projects.project1.projectUrl}
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                  <Project
                    projectName={Projects.project1.projectName}
                    projectUrl ={Projects.project1.projectUrl}
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                  <Project
                    projectName={Projects.project1.projectName}
                    projectUrl ={Projects.project1.projectUrl}
                    />
                  </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
            </div>
          </div>
  )
}
