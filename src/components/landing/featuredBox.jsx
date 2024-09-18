import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

// Array of featured work data
const featuredWork = [
  {
    id: 1,
    title: "Lightric Motors",
    subtitle: "Photography",
    date: "2024",
    imageUrl:
      "https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/work-1.png",
    link: "https://wpriverthemes.com/bronx/work-detail/",
  },
  {
    id: 2,
    title: "Positive Energy",
    subtitle: "Branding",
    date: "2023",
    imageUrl:
      "https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/work-2.png",
    link: "https://wpriverthemes.com/bronx/work-detail1-dark/",
  },
  {
    id: 3,
    title: "Xiong Wall",
    subtitle: "Marketplace",
    date: "2023",
    imageUrl:
      "https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/work-3.png",
    link: "https://wpriverthemes.com/bronx/work-detail2-dark/",
  },
  {
    id: 4,
    title: "Hideway",
    subtitle: "Web Design",
    date: "2022",
    imageUrl:
      "https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/work-4.png",
    link: "https://wpriverthemes.com/bronx/work-detail/",
  },
  {
    id: 5,
    title: "Califfo",
    subtitle: "Branding",
    date: "2022",
    imageUrl:
      "https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/work-5.png",
    link: "https://wpriverthemes.com/bronx/work-detail1-dark/",
  },
  {
    id: 6,
    title: "Louis Martin",
    subtitle: "Portfolio",
    date: "2024",
    imageUrl:
      "https://wpriverthemes.com/bronx/wp-content/uploads/2024/05/work-6.png",
    link: "https://wpriverthemes.com/bronx/work-detail2-dark/",
  },
];

// FeaturedWork component
const FeaturedBox = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".featured-card", {
      stagger: 0.2,
      ease: "none",
      duration: 1,
      delay: 1.5,
      clipPath: "inset(0% 0% 100% 0%)",
      scrollTrigger: {
        trigger: ".featured-work-lists",
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });
  });
  return (
    <div className="featured-work-lists">
      {featuredWork.map((work) => (
        <div key={work.id} className="featured-card">
          <a className="link-overlay" href={work.link}></a>
          <div className="img-box">
            <img
              decoding="async"
              loading="lazy"
              id="image-cursor"
              src={work.imageUrl}
              alt={work.title}
            />
          </div>
          <div className="content">
            <div className="left">
              <p className="title">{work.title}</p>
              <p className="subtitle">{work.subtitle}</p>
            </div>
            <div className="right">
              <span className="date">{work.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedBox;
