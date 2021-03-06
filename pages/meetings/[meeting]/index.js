export default function MeetingPage({ link }) {
  console.log(link);
  return (
    <>
      <iframe
        width="100%"
        height="550px"
        src={link}
        allow="camera; microphone; fullscreen; speaker; display-capture"
        key={link}
      ></iframe>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const urlT = ctx.query.meeting;
  const meetingData = await fetch(
    "https://raw.githubusercontent.com/tetrex/meetings-creative-services-Json-file/main/data.json"
  );
  const { meetings } = await meetingData.json();
  const url = meetings.find((el) => el.urlTitle === urlT);

  return {
    props: {
      link: url.link,
    },
  };
};
