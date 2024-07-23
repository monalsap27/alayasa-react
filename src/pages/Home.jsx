

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Partners from '../components/Partners';
import Tutors from '../components/Tutors';
import { contactList } from '../data/ContactSection';
import { coursesSection } from '../data/CoursesSection';
import { homeSection  } from "../data/HomeSection";
import { partnerList, partnersSection } from "../data/PartnersSection";
import { tutorsSection, tutorsList } from '../data/TutorsSection';

import {  } from "../styles/Home.css";

import parse from "html-react-parser";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">

        {/* home */}
      <section id="home">
            <img src={homeSection.Image}/>
            <div className="kolom">
    {parse(homeSection.content)}
            </div>
        </section>

{/* online course */}
    
        <section id="courses">
            <div className="kolom">
                {parse(coursesSection.content)}
                </div>
            <img src={coursesSection.image}/>
        </section>

        {/* Tutors */}

        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorsSection.content)}
                   </div>

                   <Tutors tutorsListHome = {tutorsList} />            
            </div>
        </section>

{/* partners */}

<section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnersSection.content)}
                   </div>

                <Partners partnersListHome = {partnerList}/>
            </div>
</section>

{/* contact */}

<Contact contactListHome = {contactList} />

      </div>
      <Footer/>
    </>
  )
}

export default Home
