import { Stack } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Fade from "src/components/Fade";
import Image from "next/image";
import Button from "src/components/Button";
import { Picture } from "src/components/Picture";
import { ASPECT_BRAND_LOGO } from "src/helpers/aspectRatio";

export interface IBrandProps {}

const styles = {
  wrapper: "mx-[15px] text-center tablet:text-start",
  title: "mb-[30px] text-center",
  brandLogo: "flex justify-center tablet:justify-start mb-[40px]",
  section: "flex flex-col space-y-2 mb-[20px]",
};

function Brand(props: IBrandProps) {
  return (
    <Fade>
      <div className={styles.wrapper}>
        <h1 className={styles.title}> PERSONAL BRAND </h1>
        <div className={styles.brandLogo}>
          <Picture
            src="/assets/brand/DRKDQL.svg"
            height={50}
            alt="DRKDQL brand logo"
            aspectRatio={ASPECT_BRAND_LOGO}
          />
        </div>
        <div className={styles.section}>
          <h2> About My Brand </h2>
          <p>
            During June of 2022, I created a personal brand to attach to any
            project and content I create online. With most of my current
            experience as a Software Engineer being in frontend web development,
            I am interested in working on fun and hands-on projects in a wide
            range of areas. I will be taking an unstructured, agile approach to
            my project development where I will quickly develop plans but will
            learn mostly from pushing out content or code as quick as I can and
            will adapt to new goals and mistakes.
          </p>
        </div>
        <div className={styles.section}>
          <h2> Projects </h2>
          <p>
            {" "}
            Click the link below to view my past, present and future projects!
          </p>
          <Button href="https://drkdql.com">
            <LanguageIcon />
            <h3> DRKDQL.com </h3>
          </Button>
        </div>
        <div className={styles.section}>
          <h2> Technologies, Frameworks and Tools I have Learnt So Far </h2>
          <div>
            <p className="bold-blue"> WEB {"&"} MOBILE APP DEVELOPMENT </p>
            <li className="bold-pink">
              NextJS, Netlify, Github Pages/Actions, Firebase
            </li>
          </div>
          <div>
            <p className="bold-blue"> DESIGN AND ANIMATION </p>
            <li className="bold-pink"> Figma, Photoshop </li>
          </div>
          <div>
            <p className="bold-blue"> VIDEO EDITING </p>
            <li className="bold-pink"> Davinci Resolve, OBS Studio, CapCut </li>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Brand;
