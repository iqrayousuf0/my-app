import React from "react";
import styles from "./team.module.css";

const teamMembers = [
  {
    name: "Richards Mills",
    role: "Sales Consultant",
    imgSrc: "/images/team1.png",
    description: "The government they survive as soldiers of fortune.",
  },
  {
    name: "Mike Hussey",
    role: "Founder, CEO",
    imgSrc: "/images/team2.png",
    description: "Leading the way towards excellence.",
  },
  {
    name: "Jenilia D’sosa",
    role: "Marketing Lead",
    imgSrc: "/images/team3.png",
    description: "Marketing strategies that make a difference.",
  },
  {
    name: "David Warner",
    role: "SEO Analyst",
    imgSrc: "/images/team4.png",
    description: "Optimizing digital performance.",
  },
  {
    name: "David Warner",
    role: "SEO Analyst",
    imgSrc: "/images/team4.png",
    description: "Optimizing digital performance.",
  },
  {
    name: "David Warner",
    role: "SEO Analyst",
    imgSrc: "/images/team3.png",
    description: "Optimizing digital performance.",
  },
  {
    name: "David Warner",
    role: "SEO Analyst",
    imgSrc: "/images/team2.png",
    description: "Optimizing digital performance.",
  },
  {
    name: "David Warner",
    role: "SEO Analyst",
    imgSrc: "/images/team1.png",
    description: "Optimizing digital performance.",
  },
];

function Teamdata() {
  return (
    <div className={styles["team-container"]}>
      <h2 className={styles["team-title"]}>Meet Our Team</h2>
      <div className={styles["team-grid"]}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles["team-card"]}>
            <div className={styles["team-image-wrapper"]}>
              <img
                src={member.imgSrc}
                alt={member.name}
                className={styles["team-image"]}
              />
              <div className={styles["overlay"]}>
                <p className={styles["description"]}>{member.description}</p>
                <div className={styles["social-icons"]}>
                  <a href="#">
                    <i className="fab fa-facebook-f"><img src="/images/fbb.png"/></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"><img src="/images/tw.png"/></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p"><img src="/images/ln.png"/></i>
                  </a>
                </div>
              </div>
            </div>
            <h3 className={styles["team-name"]}>{member.name}</h3>
            <p className={styles["team-role"]}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teamdata;
