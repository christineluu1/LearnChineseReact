import React from "react";
import styles from "../../style";

const AboutUs = () => {
  return (

   <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[30px] text-white ss:leading-[100.8px] leading-[75px]">
            Meet our team <br className="sm:block hidden" />{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
             {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[90%] mt-10`}>
        Welcome to our website! We are Inès, Léa, and Christine, and we are thrilled to introduce ourselves and share our passion for learning languages with you.
        </p>

        <p className={`${styles.paragraph} max-w-[90%] mt-10`}>
        As developers, we are dedicated to creating engaging and effective tools to help people learn new languages. Our team is composed of three talented individuals who have come together with a shared goal of making language learning more accessible and enjoyable for everyone.
        </p>
        
        <p className={`${styles.paragraph} max-w-[90%] mt-10`}>
        Inès is an experienced front-end developer with a keen eye for design. She is responsible for the look and feel of our website, ensuring that it is both user-friendly and visually appealing. Léa is a skilled back-end developer who specializes in database management and server-side programming. She is the brains behind our website's functionality, ensuring that it runs smoothly and efficiently. Christine is a full-stack developer with a passion for problem-solving. She is responsible for integrating all the different components of our website, ensuring that everything works together seamlessly.
        </p>

        <p className={`${styles.paragraph} max-w-[90%] mt-10`}>
        Together, we have put our skills and expertise to work to create this website to learn Chinese. We are all language enthusiasts who believe that learning a new language is a wonderful and enriching experience. That's why we created this website - to make learning Chinese easy, fun, and accessible to everyone.
        </p>

        <p className={`${styles.paragraph} max-w-[90%] mt-10`}>
        Our website offers a variety of lessons and exercises designed to help learners of all levels. Whether you are a complete beginner or have some prior knowledge of Chinese, we have something for you. Our lessons are interactive and engaging, and our exercises are designed to help you practice what you've learned and reinforce your understanding.
        </p>

        <p className={`${styles.paragraph} max-w-[90%] mt-10`}>
        We are passionate about what we do, and we believe that learning a new language should be an enjoyable and rewarding experience. That's why we have poured our hearts and souls into this project, and we hope that you will find it useful and enjoyable. We invite you to explore our website and start learning Chinese today!
        </p>
      </div>
  );
};

export default AboutUs;
