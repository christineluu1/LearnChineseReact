import React from "react";
import styles from "../../style";

const AboutUs = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.fullHeight}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ${styles.textCenter}`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[30px] text-white ss:leading-[100.8px] leading-[75px]">
            My Profile <br className="sm:block hidden" />{" "}
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
          Given name: LUU
        </p>

        <p className={`${styles.paragraph} max-w-[90%] mt-10`}>
          Surname: Christine
        </p>

        <p className={`${styles.paragraph} max-w-[90%] mt-10`}>
          Age: 23 years old
        </p>

        <p className={`${styles.paragraph} max-w-[90%] mt-10`}>
          Profession: student
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
