//imports

import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyles } from "./ReusableStyles";

// the FAQ component
export default function FAQ() {
  //Array of objects i used

  const faqs = [
    {
      //this logo imported from react-icons
      icon: <AiFillCalendar />,
      text: "How to manage time and get good marks",
    },
    {
      //this logo imported from react-icons
      icon: <MdTimelapse />,
      text: "How to regulate transactions over time",
    },
    {
      //this logo imported from react-icons
      icon: <IoMdCash />,
      text: "Withdrawing money through an ATM",
    },
  ];
  return (
    // this Section deivided into 2 parts.. the first for the title.. the second for faqs
    <Section>
      {/* the first part*/}
      <div className="title">
        <h2>Information for drivers</h2>
      </div>
      {/* the second part*/}
      {/* in this part.. i am looping through the array objects to put them under each other*/}
      <div className="faqs">
        {faqs.map((faq) => {
          return (
            <div className="faq">
              <div className="info">
                {faq.icon}
                <h4>{faq.text}</h4>
              </div>
              {/*this logo imported from react-icons */}
              <IoIosArrowForward />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// this styled component imported from styled-components
const Section = styled.section`
  ${cardStyles};
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;
