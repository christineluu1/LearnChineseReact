import styles from "../style";
import GetStarted from "./GetStarted";
import Business from "./Business";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Chatmoody <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Your virtual friend for a happier mind</span>{" "}
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

        <h1 className="font-poppins font-semibold ss:text-[38px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Mental health care
        </h1>
        <p className={`${styles.paragraph} max-w-[100%] mt-10`}>
        In the fast-paced world we live in, mental health has become an increasingly important aspect of overall well-being. 
        Amidst the hustle and bustle of everyday life, many individuals find it challenging to prioritize their mental health needs. 
        This is where virtual assistants dedicated to mental health care step in as invaluable resources.
        Imagine having a supportive companion at your fingertips, available whenever you need guidance, comfort, or simply someone to listen. 
        Virtual assistants for mental health care offer precisely that and more. 
        
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