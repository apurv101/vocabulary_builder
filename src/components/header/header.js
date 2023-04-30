/** @jsx jsx */
import { jsx, Container, Flex, Button, Box } from "theme-ui";
import { keyframes } from "@emotion/core";
import { IoIosUnlock } from "react-icons/io";
import { NavLink, Link } from "components/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "components/logo";

import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";
import { useState } from "react";

export default function Header({ className }) {
  const [activeSublinks, setActiveSublinks] = useState(null);

  const handleLinkHover = (sublinksIndex) => {
    setActiveSublinks(sublinksIndex);
  };

  const handleLinkLeave = () => {
    setActiveSublinks(null);
  };

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label, sublinks }, i) => (
              <Box
                sx={styles.nav.navLink}
                activeClass="active"
                key={i}
                onMouseEnter={() => handleLinkHover(i)}
                onMouseLeave={() => handleLinkLeave()}
              >
                <Link path={path} key={i} label={label} />
                {sublinks.length > 0 && activeSublinks === i && (
                  <Box sx={styles.sublinksContainer}>
                    {sublinks.map((sublink, subindex) => (
                      <Link
                        key={subindex}
                        activeClass="active"
                        sx={styles.sublink}
                        path={sublink.path}
                        label={sublink.label}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Flex>

          {/* <Link
            path="/"
            ml={2}
            label="Try Now"
            sx={styles.headerBtn}
            variant="buttons.primary"
          /> */}

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    border: "2px solid",
    borderColor: "primary",
    color: "primary",
    padding: "8px 24px",
    display: ["none", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "25px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",

    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: [null, null, null, null, null, null, "1390px"],
    "@media screen and (max-width: 960px)": {
      justifyContent: "space-between",
    },
  },
  nav: {
    mx: "auto",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
    navLink: {
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      color: "#02073E",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      ":last-child": {
        mr: "0",
      },
      "&:hover, &.active": {
        color: "primary",
      },
      position: "relative",
      "&:hover $sublinksContainer": {
        display: "block",
      },
    },
  },
  sublinksContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "20px", // add a small margin between the box and the link
    width: "200px",
    left: 0,
    backgroundColor: "#fff",
    border: "1px solid #e2e2e2",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "10px",
    zIndex: 999, // ensure the box is above other elements
    sublink: {
      display: "block",
      fontSize: "14px",
      color: "#333",
      transition: "500ms",
      pb: "10px",
      pt: "10px",
      "&:hover, &.active": {
        color: "primary",
        backgroundColor: "#808080",
      },
    },
  },
};
