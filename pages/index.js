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
  </Head>
    <div className="container">
      <nav className="row">
        <div className="col-12">
          <div className="logo">
             <h3>Michael Hegner</h3>
          </div>
        </div>
      </nav>


            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="row">
              <div className="col-12 col-lg-6">
                </div>
                <div className="col-12 col-lg-6">
                  <h1>Michael Hegner</h1>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo corporis error suscipit quaerat autem vitae nisi nulla maiores dignissimos similique consequatur, atque officiis dolor aperiam itaque fugiat saepe accusantium voluptatem earum dolorum sed veritatis! Illum provident, quae deleniti illo eligendi sunt eaque quasi! Rem harum consequatur voluptatem fuga voluptatibus mollitia inventore qui, dolor, exercitationem eveniet enim distinctio hic. Aperiam magnam culpa ad possimus repellat? Aut magni saepe delectus sunt cumque nobis, nesciunt voluptas cum. </p>
                </div>
                </div>
                </div>

            <div className="col-12 col-lg-6">
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
