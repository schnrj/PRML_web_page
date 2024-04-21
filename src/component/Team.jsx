import React from 'react';
import { ImGithub } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";
import test from '../Image/test.jpg';

function Team() {
    const teams = [
        {
            name: "Sachin Raj",
            // img: ,
            linkedin: "www.linkedin.com/in/sachin-raj-202a55256",
            github: "https://github.com/schnrj"
        },
        {
            name: "Rohan Lambture",
            // img: test,
            linkedin: "",
            github: "https://github.com/RohanLambture"
        },
        {
            name: "Anuj Patil",
            // img: test,
            linkedin: "",
            github: "https://github.com/AnujPatil110377"
        },
        {
            name: "Ritesh Fageria",
            // img: test,
            linkedin: "",
            github: "https://github.com/riteshfageriya"
        },
        {
            name: "Yashraj",
            // img: test,
            linkedin: "",
            github: "https://github.com/yshrjnpm"
        },
    ];

    return (
        <div>
            <p className='header_Problem'>Team</p>
            <div className='container'>
                {teams.map((team, index) => (
                    <div key={index} className='profile_container'>
                        <div className="profile_pic_wrapper">
                            <img src={team.img} alt={team.name} className='profile_pic' width="100" height="100" />
                        </div>
                        <h4>{team.name}</h4>
                        {team.github && (
                            <a href={team.github} target="_blank" rel="noopener noreferrer">
                                <ImGithub size={30} color='black' style={{ marginRight: "15px" }} />
                            </a>
                        )}
                        {team.linkedin && (
                            <a href={`https://${team.linkedin}`} target="_blank" rel="noopener noreferrer">
                                <IoLogoLinkedin size={30} color='black' />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
