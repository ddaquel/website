const styles = {
  wrapper: "flex flex-col justify-center items-center p-[20px] mb-[10px]",
  title: "p-[20px] mb-[30px] bg-white text-black rounded-[20px]",
};

export interface ISectionProps {
  title: string;
  children?: React.ReactNode;
}

const Section = (props: ISectionProps) => {
  const { title, children } = props;
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}> {title} </h2>
        {children}
      </div>
    </>
  );
};

export default Section;
