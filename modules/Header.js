import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/meetings")}>Meetings</div>
      <div>EOM</div>
      <div>Twitter</div>
    </div>
  );
}
