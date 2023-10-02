import React from "react";
import "./style.css";

const Card = ({ userData }) => {
  console.log(userData);
  return (
    <>
      <div className="main-container">
        {userData.map((curElement) => {
          console.log(curElement);
          const {
            id,
            img,
            name,
            stream,
            description,
            facebook,
            twitter,
            instagram,
            youtube,
            linkedin,
            skills,
          } = curElement;
          return (
            <div className="container" key={id}>
              <div className="Bio">
                <img src={img} alt="Mpanda" />
              </div>
              <div className="socialmedia">
                <div className="name">{name}</div>
                <p>{stream}</p>
                <p>{description}</p>
              </div>
              <div className="skill">
                <span className="btn">
                  <em> Skills</em>
                </span>
                <ul>
                  {skills.map((Elem) => {
                    return <li>{Elem}</li>;
                  })}
                </ul>
              </div>
              <div className="icons">
                <a href={facebook}>
                  <i className="fa fa-facebook"></i>
                </a>

                <a href={instagram}>
                  <i className="fa fa-instagram"></i>
                </a>
                <a href={twitter}>
                  <i className="fa fa-twitter"></i>
                </a>
                <a href={youtube}>
                  <i className="fa fa-youtube-play"></i>
                </a>
                <a href={linkedin}>
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
