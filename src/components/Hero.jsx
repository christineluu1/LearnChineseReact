import styles from "../style";
import GetStarted from "./GetStarted";
import Business from "./Business";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Learn <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Chinese</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
             {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Prepare your HSK.
        </h1>
        <p className={`${styles.paragraph} max-w-[100%] mt-10`}>
        Discover the beauty and complexity of the Chinese language with our comprehensive learning program. 
        Whether you're a beginner or an advanced learner, our experienced instructors will guide you through every step of the way. 
        With interactive lessons, personalized feedback, and engaging cultural activities, 
        you'll be speaking, reading, and writing Chinese in no time. 
        Start your journey today and immerse yourself in the fascinating world of Chinese language and culture.
        </p>
        
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

      <div className={`${styles.flexBottom}`}>

        <Business />
      </div>
    </section>
    
  );
};

export default Hero;