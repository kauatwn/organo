import S from "./Banner.module.css";
import logo from "/images/banner.png";

// Files in the public directory are served at the root path.
// Instead of /public/images/banner.png, use /images/banner.png.
// import logo from "../../../public/images/banner.png";

export default function Banner() {
  return (
    <header className={S.banner}>
      <img src={logo} alt="Banner da página Organo" />
    </header>
  );
}
