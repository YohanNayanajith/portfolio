import React, { useEffect, useState, useContext } from "react";
import "./VolunteerTimeline.css";
import "../Services/Services.css";
// import { ReactComponent as LogoIcon } from "../img/intelli.svg";
// import { ReactComponent as ACM } from '../../assets/svg/logo/acm.png';
// import { ReactComponent as IEEE_Student } from '../../assets/svg/logo/ieee_student.png';
// import { ReactComponent as IEEE_CS_Chapter } from '../../assets/svg/logo/cs_chapter1.png';
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";

import timelineData from "../../data/timelineData";
import { ThemeContext } from "../../contexts/ThemeContext";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function VolunteerTimeline({ reference }) {
  let logoIconStyle = { background: "#fff", color: "black" };
  const { theme } = useContext(ThemeContext);

  const [animate, setanimate] = useState(false);
  useEffect(() => {
    updateSize();
  }, []);

  function updateSize() {
    // console.log(window.innerWidth);
    // console.log(10);
    if (window.innerWidth < 1350) {
      setanimate(false);
    } else {
      setanimate(true);
    }
  }
  window.addEventListener("resize", updateSize);

  return (
    <div
      className="services"
      id="volunteer"
      style={{ backgroundColor: theme.primary }}
    >
      <div ref={reference}>
        <div className="services-header">
          <h1 style={{ color: theme.secondary }}>Volunteering</h1>
        </div>
        <VerticalTimeline animate={animate}>
          {timelineData.map((element) => {
            return (
              <VerticalTimelineElement
                contentStyle={{
                  background: theme.secondary,
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  black",
                }}
                key={element.id}
                dateClassName="date"
                // date={element.date}
                iconStyle={logoIconStyle}
                className="volunteer-container"
                icon={<BsCodeSlash />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <ul
                  style={{
                    color: theme.tertiary80,
                    padding: element.position1 ? 20 : 0,
                    fontWeight: "bold",
                  }}
                >
                  {element.position1 ? (
                    <li style={{ marginBottom: 10 }}>{element.position1}</li>
                  ) : (
                    <></>
                  )}
                  {element.position2 ? <li>{element.position2}</li> : <></>}
                </ul>
                {element.event1 ? <h4>Events</h4> : <></>}
                <ul
                  style={{
                    color: theme.tertiary50,
                    padding: element.event1 ? 20 : 0,
                  }}
                >
                  {element.event1 ? (
                    <li style={{ marginBottom: 20 }}>{element.event1}</li>
                  ) : (
                    <></>
                  )}

                  {element.event2 ? <li>{element.event2}</li> : <></>}
                </ul>
                <p>{element.description}</p>
                {element.description1 ? <p>{element.description1}</p> : <></>}
              </VerticalTimelineElement>
            );
          })}
          {/* <VerticalTimelineElement
            iconStyle={logoIconStyle}
            //   icon={<LogoIcon />}
          /> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}
export default VolunteerTimeline;
