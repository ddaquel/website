import { BRAND, EXPERIENCE, HOME, SOCIALS } from "src/helpers/content";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Image from "next/image";
import { Picture } from "./Picture";
import { ASPECT_RATIO_MY_PHOTO } from "src/helpers/aspectRatio";

export interface ILayoutProps {
  children?: React.ReactNode;
  page: string;
  switchPage: (newValue: number) => void;
}

const styles = {
  backgroundImage: "z-[-1]",
  header:
    "fixed top-0 left-0 p-[20px] h-[90px] w-full z-[9999] text-center bg-primary-gradient text-black",
  headerWrapper: "flex justify-center items-center h-full space-x-4",
  content:
    "fixed overflow-y-scroll overflow-x-hidden p-[20px] top-[90px] bottom-[56px] w-full bg-black/70 scrollbar",
  bottomNavigation: "fixed bottom-0 left-0 w-full z-[9999] bg-primary-gradient",
};

function Layout(props: ILayoutProps) {
  const convertPageToNavIndex = (page: string): number => {
    switch (page) {
      case SOCIALS:
        return 3;
        break;
      case BRAND:
        return 2;
        break;
      case EXPERIENCE:
        return 1;
        break;
      case HOME:
      default:
        return 0;
    }
  };

  return (
    <>
      <Image
        className={styles.backgroundImage}
        src="/assets/background.jpg"
        alt="Background image: Picture of Derek Daquel on his desk."
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      {/*HEADER */}
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Picture
            src="/assets/home/MyPhoto.svg"
            height={70}
            alt="Portrait of Derek Daquel"
            aspectRatio={ASPECT_RATIO_MY_PHOTO}
          />
          <h1 style={{ color: "#242526" }}>DEREK DAQUEL</h1>
        </div>
      </header>
      {/* MAIN CONTENT */}
      <main className={styles.content}>{props.children}</main>
      {/* BOTTOM NAVIGATION */}
      <BottomNavigation
        showLabels
        value={convertPageToNavIndex(props.page)}
        onChange={(_, newValue) => {
          props.switchPage(newValue);
        }}
        className={styles.bottomNavigation}
      >
        <BottomNavigationAction label="HOME" icon={<HomeIcon />} />
        <BottomNavigationAction label="EXPERIENCE" icon={<WorkIcon />} />
        <BottomNavigationAction label="BRAND" icon={<CodeIcon />} />
        <BottomNavigationAction label="SOCIALS" icon={<AccountTreeIcon />} />
      </BottomNavigation>
    </>
  );
}

export default Layout;
