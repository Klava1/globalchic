import React from 'react';
import './AboutUs.css';
import alexanderPhoto from './images/people/alexander.jpg';
import marinaPhoto from './images/people/marina.jpg';
import annaPhoto from './images/people/anna.jpg';

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <section className="intro">
        <p>British Chic is a vibrant and diverse community dedicated to Russian speakers living in London and the UK. Established with the vision of creating a supportive and informative environment, our group has grown into a dynamic platform for exchanging insights, experiences, and advice on a wide range of topics that matter most to our members.</p>
      </section>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to foster a close-knit community where members can freely discuss and share information about the challenges and opportunities of living in the UK. We aim to provide valuable resources and a supportive network to help our members navigate various aspects of life in a foreign country.</p>
      </section>
      
      <section className="offer">
        <h2>What We Offer</h2>
        <h3>Social and Cultural Life</h3>
        <p>Our group is a hub for discussions about the rich cultural tapestry of London and the UK. Whether you're looking for the best cultural events, exhibitions, or local traditions, our members share their experiences and recommendations to help you immerse yourself in the vibrant social scene.</p>
        
        <h3>Tourism</h3>
        <p>Discover the hidden gems of the UK through our community's collective knowledge. From the best tourist attractions to off-the-beaten-path destinations, we provide insights into exploring the beauty and history of the UK. Our members share travel tips, itineraries, and personal experiences to enhance your adventures.</p>
        
        <h3>Medicine</h3>
        <p>Navigating the healthcare system in a new country can be daunting. British Chic offers a platform for discussing medical services, finding trusted healthcare providers, and sharing advice on accessing medical care. Our members provide valuable information on everything from general practitioners to specialized medical treatments.</p>
        
        <h3>Education</h3>
        <p>The UK offers a wealth of educational opportunities, and our community is here to help you make the most of them. Whether you're seeking information about schools, universities, or professional courses, our members share their experiences and insights to guide you through the educational landscape.</p>
      </section>
      
      <section className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={alexanderPhoto} alt="Alexander Kann" />
            <h3>Alexander Kann - Founder</h3>
            <p>Alexander Kann is the visionary founder of British Chic. With a deep passion for building communities and connecting people, Alexander established British Chic to create a space where Russian speakers could share their experiences and find support. His leadership and dedication have been instrumental in shaping the community into what it is today.</p>
          </div>
          
          <div className="team-member">
            <img src={marinaPhoto} alt="Marina Zhuravleva" />
            <h3>Marina Zhuravleva - Administrator</h3>
            <p>Marina Zhuravleva is the heart of our community, serving as the administrator of British Chic. Her organizational skills and attention to detail ensure that our platform runs smoothly. Marina is always ready to assist members, manage discussions, and enforce community guidelines to maintain a respectful and welcoming environment.</p>
          </div>
          
          <div className="team-member">
            <img src={annaPhoto} alt="Anna Tokareva" />
            <h3>Anna Tokareva - Event Coordinator</h3>
            <p>Anna Tokareva is our talented event coordinator. With a keen eye for detail and a passion for bringing people together, Anna organizes a variety of events for our community. From cultural outings to social gatherings, Anna's events provide opportunities for members to connect, share experiences, and enjoy the rich cultural life of London and the UK.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;