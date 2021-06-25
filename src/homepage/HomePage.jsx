import React from 'react';
import { About } from "../components/about";
import { Bio } from '../components/bio';
import { Footer } from "../components/footer";
import { Projects } from '../components/projects';
import { Resources } from '../components/resources';
import { Title } from '../components/title';



import { Main, NavBar, NavList, NavItem } from './style';


export function HomePage(){

        return (
         <div className="homepage">
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
                        </NavList>
                    </NavBar>
                </nav>
            </header>
            <Main css={"width:100%;display:block;"}>
            <Title/>
            <Bio/>
            <Projects/>
            <About/>
            <Resources/>
            <Footer/>
            </Main>
        </div>
        )
    }