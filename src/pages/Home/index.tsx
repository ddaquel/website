import type { NextPage } from "next";
import { Picture } from "src/components/Picture";
import Section from "src/components/Section";
import { ASPECT_RATIO_MY_PHOTO } from "src/helpers/aspectRatio";

const styles = {
  header:
    "mt-[30px] flex flex-col justify-center items-center text-center space-y-5",
  content: "p-[20px] pb-[50px]",
  section: "",
  experienceGrid: "grid grid-cols-3 gap-x-10 gap-y-5 text-center",
  socialGrid: "grid grid-cols-3 gap-10",
  link: "block p-[5px] rounded-[5px] border-white border-solid border-[1px] text-center",
  bold: "font-bold",
  footer: "",
};

const Home: NextPage = () => {
  return (
    <>
      {/* MY INFO  */}
      <header className={styles.header}>
        <div>
          <Picture
            src="/assets/home/Derek.svg"
            alt="Photo of Derek Daquel"
            aspectRatio={ASPECT_RATIO_MY_PHOTO}
            height={200}
          />
        </div>
        <h1>Derek Daquel</h1>
        <p>
          <span className={styles.bold}> Age: </span> 24
        </p>
        <p>
          <span className={styles.bold}> Current role/s: </span> Junior Software
          Engineer
        </p>
      </header>

      <main className={styles.content}>
        {/* EXPERIENCE */}
        <Section title="Experience">
          <div className={styles.experienceGrid}>
            <div className={styles.bold}> Company </div>
            <div className={styles.bold}> Job Title </div>
            <div className={styles.bold}> Duration </div>

            <div> OFX </div>
            <div> Junior Software Engineer</div>
            <div> Aug 2020 - Now</div>

            <div> Macquarie </div>
            <div> Co-op Intern</div>
            <div> Jan 2020 - Jul 2020</div>

            <div> Atlassian </div>
            <div> Co-op Intern</div>
            <div> Dec 2018 - Feb 2019</div>

            <div>Commonwealth Bank</div>
            <div> Co-op Intern</div>
            <div> Dec 2017 - Feb 2018</div>
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <a
            href="https://drkdql.com"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.link}
          >
            drkdql.com
          </a>
        </Section>

        {/* Projects */}
        <Section title="Socials">
          <div className={styles.socialGrid}>
            <a
              href="https://facebook.com/ddaquel"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              facebook
            </a>
            <a
              href="https://linkedin.com/in/ddaquel"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              linkedin
            </a>
            <a
              href="mailto:derekdaquel@gmail.com?subject=Enquiry%20-%20derekdaquel.com&body=Hi%20Derek%2C%0D%0A%0D%0A%7BReason%20for%20messaging%7D%0D%0A%0D%0AKind%20regards%2C%0D%0A%7BYour%20name%7D"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link}
            >
              gmail
            </a>
          </div>
        </Section>
      </main>
    </>
  );
};
export default Home;
