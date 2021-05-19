import React from "react";
import "./Languages.css";

import Line from "../../Utils/Line";
import img1 from "./img/b.jpg";

const knownLanguage = [
  {
    src: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3",
  },
  {
    src: "https://img.shields.io/badge/-SASS-CC6699?style=flat-square&logo=sass&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap",
  },
  {
    src: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
  },
  {
    src: "https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Express-black?style=flat-square&logo=express&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Postman-F24E1E?style=flat-square&logo=Postman&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black",
  },
  {
    src: "https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-C++-00599C?style=flat-square&logo=c",
  },
  {
    src: "https://img.shields.io/badge/-C-F7DF1E?style=flat-square&logo=C&logoColor=black",
  },
  {
    src: "https://img.shields.io/badge/-Git-black?style=flat-square&logo=git",
  },
  {
    src: "https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github",
  },
  {
    src: "https://img.shields.io/badge/-Linux-black?style=flat-square&logo=Linux",
  },
  {
    src: "https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku",
  },
  {
    src: "https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Canva-20c4cb?style=flat-square&logo=canva&logoColor=white",
  },
];

const toLearnLanguage = [
  {
    src: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js",
  },
  {
    src: "https://img.shields.io/badge/-Angular-E10098?style=flat-square&logo=angular",
  },
  {
    src: "https://img.shields.io/badge/-PHP-8993be?style=flat-square&logo=php&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Laravel-b83b5e?style=flat-square&logo=Laravel&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Bulma-00D1B2?style=flat-square&logo=bulma&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-MaterialUI-0081CB?style=flat-square&logo=material-ui",
  },
  {
    src: "https://img.shields.io/badge/-Flutter-000000?style=flat-square&logo=flutter",
  },
  {
    src: "https://img.shields.io/badge/-Kotlin-F7DF1E?style=flat-square&logo=kotlin&logoColor=black",
  },
  {
    src: "https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Swift-f08a5d?style=flat-square&logo=swift&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=Django",
  },
  {
    src: "https://img.shields.io/badge/-Java-E34A86?style=flat-square&logo=java",
  },
  {
    src: "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql",
  },
  {
    src: "https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux",
  },
  {
    src: "https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql",
  },
  {
    src: "https://img.shields.io/badge/-Gatsby-663399?style=flat-square&logo=gatsby",
  },
  {
    src: "https://img.shields.io/badge/-GithubActions-2088FF?style=flat-square&logo=github-actions&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws",
  },
  {
    src: "https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-ReactNative-61DAFB?style=flat-square&logo=react&logoColor=black",
  },
  {
    src: "https://img.shields.io/badge/-FramerMotion-0055FF?style=flat-square&logo=framer&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black",
  },
  {
    src: "https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white",
  },
  {
    src: "https://img.shields.io/badge/-Dart-000000?style=flat-square&logo=dart",
  },
];
class Languages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      known: knownLanguage,
      learn: toLearnLanguage,
    };
  }
  render() {
    return (
      <div className="languages">
          <div className="languages-img">
              <img className="lang-img" src={img1} alt="languages" />
          </div>
        <div className="languages-head">Languages I Know</div>
        <div className="languages-known">
          {this.state.known.map((element) => {
            return (
              <img
                src={element.src}
                className="language-tag"
                alt="language-tag"
              />
            );
          })}
        </div>
        <Line></Line>
        <div className="languages-head">Languages To Explore</div>
        <div className="languages-learn">
          {this.state.learn.map((element) => {
            return (
              <img
                src={element.src}
                className="language-tag"
                alt="language-tag"
              />
            );
          })}
        </div>
        <Line></Line>
      </div>
    );
  }
}

export default Languages;
