import React from "react";
import "./AboutPage.css";
import aboutData from "../data/aboutData";

const AboutPage = () => (
  <div className="about-container">
      <div className="about-left">
        <h3 class="h3custom">About me</h3>
        {aboutData.titles.map((title, idx) => (
          <p key={idx}>{title}</p>
        ))}
        <h3>Contact and inquiries</h3>
        <p>{aboutData.enquiries}</p>
        {aboutData.selectedPress.length > 0 && (
          <>
            <h3>Selected press</h3>
            <ul>
              {aboutData.selectedPress.map((press, idx) => (
                <li key={idx}>
                  <a href={press.link} target="_blank" rel="noopener noreferrer">
                    {press.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="about-right">
        <div className="about-col">
          {aboutData.exhibitions.length > 0 && (
            <>
              <h3 class="h3custom">Exhibitions</h3>
              <ul>
                {aboutData.exhibitions.map((ex, idx) => (
                  <li key={idx}>
                    {ex.year} {ex.title} ({ex.location})
                  </li>
                ))}
              </ul>
            </>
          )}
          {aboutData.awards.length > 0 && (
            <>
              <h3>Awards</h3>
              <ul>
                {aboutData.awards.map((award, idx) => (
                  <li key={idx}>
                    {award.year} {award.result}, {award.title}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
  </div>
);

export default AboutPage;