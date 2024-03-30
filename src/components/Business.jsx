import { layout } from "../style";
import appliImage from "../assets/appli.png"; // Import the image file

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionImg} flex-col`}>
      {/* Render the image with adjusted size */}
      <img src={appliImage} alt="appli" style={{ width: "300px", height: "400px", marginRight: "50px" }} />
    </div>
  </section>
);

export default Business;