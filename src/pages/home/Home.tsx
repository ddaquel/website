import type { NextPage } from "next";

import { useState } from "react";
import { BRAND, EXPERIENCE, HOME, SOCIALS } from "src/helpers/content";
import Layout from "src/components/Layout";
import Brand from "./Brand";
import Experience from "./Experience";
import Socials from "./Socials";
import { Picture } from "src/components/Picture";
import { ASPECT_RATIO_CURRENT_WORK_LOGO } from "src/helpers/aspectRatio";
import Fade from "src/components/Fade";

const styles = {
  wrapper:
    "flex flex-col justify-center items-center h-full text-center space-y-4",
  title: "mb-[10px]",
};

const Home: NextPage = () => {
  const [page, setPage] = useState(HOME);

  const switchPage = (newValue: number) => {
    switch (newValue) {
      case 3:
        setPage(SOCIALS);
        break;
      case 2:
        setPage(BRAND);
        break;
      case 1:
        setPage(EXPERIENCE);
        break;
      case 0:
      default:
        setPage(HOME);
    }
  };

  return (
    <Layout page={page} switchPage={switchPage}>
      {page === HOME && (
        <Fade fullHeight>
          <div className={styles.wrapper}>
            <h1 className={styles.title}> WELCOME TO MY PERSONAL WEBSITE </h1>
            <p>
              I am
              <span className="bold-blue"> 24 years old </span>
              and my current role is a
              <span className="bold-pink"> Junior Software Engineer </span>
              at:
            </p>
            <Picture
              src="/assets/home/WorkLogo.png"
              width={200}
              alt="Logo of where I currently work. Currently OFX"
              aspectRatio={ASPECT_RATIO_CURRENT_WORK_LOGO}
            />
            <p>
              This website will serve as my
              <span className="bold-pink"> Online Portfolio. </span>
            </p>
          </div>
        </Fade>
      )}
      {page === EXPERIENCE && <Experience />}
      {page === BRAND && <Brand />}
      {page === SOCIALS && <Socials />}
    </Layout>
  );
};
export default Home;
