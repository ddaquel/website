import { Divider } from "@mui/material";
import Fade from "src/components/Fade";
import { jobs } from "src/helpers/content";
import { Picture } from "src/components/Picture";
import { ASPECT_JOB_LOGO } from "src/helpers/aspectRatio";
import { v4 as uuid } from "uuid";

export interface IExperienceProps {}

const styles = {
  wrapper: "mx-[15px]",
  title: "mb-[30px] text-center",
  divider: "border-grey border-solid border-[1px] my-[15px]",
  job: " mb-[30px]",
  company:
    "flex flex-row space-x-4 justify-center tablet:justify-start mb-[20px]",
  companyDetails: "",
  description: "mx-[20px] flex flex-col justify-center items-center",
  descriptionList: "w-full",
};

function Experience(props: IExperienceProps) {
  return (
    <Fade>
      <div className={styles.wrapper}>
        <h1 className={styles.title}> JOB EXPERIENCE </h1>
        {jobs.map((job, i) => {
          return (
            <div className={styles.job} key={uuid()}>
              <div className={styles.company}>
                <Picture
                  src={job.logo}
                  height={80}
                  alt={`Company logo for ${job.company}`}
                  aspectRatio={ASPECT_JOB_LOGO}
                  customWrapperClass="mb-[20px]"
                />
                <div className={styles.companyDetails}>
                  <h3> {job.company} </h3>
                  <p>
                    <span className="bold-blue"> {job.role} </span>
                  </p>
                  <p> {job.period} </p>
                </div>
              </div>
              <div className={styles.description}>
                <ul className={styles.descriptionList}>
                  {job.descriptions.map((item, i) => {
                    return <li key={uuid()}> {item} </li>;
                  })}
                </ul>
              </div>
              <Divider className={styles.divider} />
            </div>
          );
        })}
      </div>
    </Fade>
  );
}

export default Experience;
