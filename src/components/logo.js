/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
// import logo from 'assets/logo.svg';
import logo from "assets/zencoder.png";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <Image
        src={logo}
        sx={{ display: "flex", width: "40%", height: "auto" }}
        alt="parcelini logo"
      />
    </Link>
  );
}
