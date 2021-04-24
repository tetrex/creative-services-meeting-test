import styles from "../../styles/Meeting.module.css";
import LinkIcon from "@material-ui/icons/Link";
import Link from "next/link";

export default function index({ meetings }) {
  // console.log(meetings);
  return (
    <div>
      <h1>Meetings? Here</h1>
      {meetings.map((meetings) => (
        <section className={styles.today_box} id="today-box">
          <span className={styles.breadcrumb}>{meetings.time}</span>
          <h3 className={styles.date_title}>{meetings.title}</h3>
          <h3>{meetings.link}</h3>
          <h3>{meetings.urlTitle}</h3>
          <div className={styles.plus_icon}></div>
          <Link
            href="/meetings/[meeting]"
            as={`/meetings/${meetings.urlTitle}`}
          >
            <LinkIcon className={styles.plus_icon} />
          </Link>
        </section>
      ))}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const meetingData = await fetch(
    "https://raw.githubusercontent.com/tetrex/meetings-creative-services/main/data.json"
  );
  const { meetings } = await meetingData.json();
  // console.log(meetings);

  return {
    props: {
      meetings,
    },
  };
};
