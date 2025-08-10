import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import ajwa from '../assets/images/project1.png';
import jkk from '../assets/images/project2.png';
import presensi from '../assets/images/project3.png';
import dbstore from '../assets/images/project4.png';
import kimo from '../assets/images/project5.png';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={kimo} className="zoom" alt="thumbnail" height="450px"/></a>
                       <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Kimo Cargo</h2></a>
                <p>Kimo Kargo Mobile is a mobile-based cargo booking application designed to make shipping arrangements faster, safer, and more convenient for users. Through this app, users can book cargo services anytime, choose service types according to their needs, track shipments in real time, and receive cost and delivery time estimates. With a simple and user-friendly interface, Kimo Kargo Mobile aims to provide an efficient and transparent cargo booking experience, supporting smooth goods distribution for both personal and business needs.
</p>
            </div>
              <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={ajwa} className="zoom" alt="thumbnail" height="450px"/></a>
    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Ajwa Tour Mobile</h2></a>
                <p>Create a comprehensive mobile-based Umrah management application for PT Ajwa Tour to streamline operational workflows, enhance customer service, and provide real-time information to pilgrims throughout their Umrah journey.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={jkk} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Jkk Taspen</h2></a>
                <p>Develop a user-friendly and secure web-based application for PT Taspen (Persero) Jambi to facilitate the submission and processing of work safety guarantee claims, enabling employees to easily upload required documents, track claim status, and receive timely updates throughout the verification process.</p>
            </div>
              <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={presensi} className="zoom" alt="thumbnail" height="450px"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Taspen Magang Presensi</h2></a>
                <p>  Create a mobile-based internship participant attendance application at PT Taspen with Springboot backend and web admin using Laravel.</p>
            </div>
             <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={dbstore} className="zoom" alt="thumbnail"  height="450px"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>JB Store</h2></a>
                <p> A modern e-commerce platform built with Flutter, used for my final project at MBKM. Designed for iOS and Android, it offers a smooth and responsive shopping experience with advanced search features, secure payments, and a scalable architecture. Thank you for all your support!.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;