/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ML based Solar Panel Energy Predictor",
    description:
      "Predicts Solar Panel Energy Output using weather data with 70% accuracy. Made with Google Colab, Python, various Machine Learning Algorithms.",
    url: "https://github.com/arunpranav-at/SolarOutputPredictor",
  },
  {
    title: "Veritrue.ai - Deepfake Detection Tool for Videos, Images and Audio",
    description:
      "Predicts whether the input Videos, Images, and Audio are deepfake with 85% accuracy. Made with Python Gradio, MTCNN, Resnet, Inception, and Librosa algorithms. Secured 4th place In Cyberhackathon 3.0 conducted by TN Police at SRMIST.",
    url: "https://github.com/arunpranav-at/Veritrue.ai_by_TrioBoys",
  },
  {
    title: "Avvai - AI integrated Voice-bot",
    description:
      "Engages in voice-based conversation on various topics with 2 second response time. Made with OpenAI API, Python, Tkinter, Speech Recognition, Py audio. One of the Top 7 Finalist Projects at the CIT Buildathon under Industry 5.0.",
    url: "https://github.com/arunpranav-at/avvaiaiintegratedvoicebot",
  },
  {
    title: "Spocal - Quiz Assistant using Voice Recognition",
    description:
      "Conducts a quiz contest that processes voice-based answers and outputs a score. Made with Python - Tkinter, Speech Recognition, Py audio. One of the Top Projects in the CITCOS Exhibition at CIT Chennai.",
    url: "https://github.com/arunpranav-at/SpocalQuizAssistantUsingVoice",
  },
  {
    title: "Course Lister - Fullstack project",
    description:
      "A complete full-stack project that involves frontend, backend, and database. Made with ReactJS, NodeJS, ExpressJS, MySQL, REST APIs, and Bootstrap.",
    url: "https://github.com/arunpranav-at/fullstackforpesuventures",
  },
  {
    title: "Profit's Movie Ticket Booking website",
    description:
      "A dynamic website that has a load time of 2.34 seconds and a performance grade of 97. Made with HTML, CSS, JavaScript, and Google's Firebase. Authorizes users, provides movie information, and books them ticket.",
    url: "https://github.com/arunpranav-at/Profits-Movie-Ticket-Booking",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
