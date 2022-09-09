import * as React from "react";

import { socials } from "src/helpers/content";
import { Stack } from "@mui/material";
import Fade from "src/components/Fade";
import Button from "src/components/Button";
import { v4 as uuid } from "uuid";

export interface ISocialsProps {}

const styles = {
  wrapper:
    "flex flex-col justify-center items-center h-full text-center space-y-5",
  buttons: "flex flex-col space-y-4 pt-[10px]",
};

function Socials(props: ISocialsProps) {
  return (
    <Fade fullHeight>
      <div className={styles.wrapper}>
        <h1> CONNECT WITH ME! </h1>
        <div>
          <h2> Click the icons below to get in touch 🤙 </h2>
          <p>
            <span className="bold-pink"> Note: </span> If you would like to add
            or connect me, please state your reason in doing so just as a
            precaution if I haven{`'`}t met you. Thanks!
          </p>
        </div>
        <div className={styles.buttons}>
          {socials.map((item, i) => {
            return (
              <Button key={uuid()} href={item.href}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  {item.logo}
                  <h3> {item.text} </h3>
                </Stack>
              </Button>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}

export default Socials;
