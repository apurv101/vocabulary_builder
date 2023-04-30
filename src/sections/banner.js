//  npm run build && mv .next/ out/

import React, { useState } from "react";
import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";

import Image from "components/image";
import img1 from "assets/partner-1-1.png";
import img2 from "assets/partner-1-2.png";
import img3 from "assets/partner-1-3.png";
import { usePlacesWidget } from "react-google-autocomplete";

import bannerImg from "assets/banner-image-1-1.png";

import appSmaple from "assets/gif_2.gif";

const Banner = () => {
  const [inputField, setInputField] = useState({
    email: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("../pages/api/generateReport", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputField),
    });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    // setInputField((prev ) => ({...prev, [e.target.name] : e.target.value}))
    // console.log(name, value);
    setInputField({ ...inputField, [name]: value });
  };

  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey: "AIzaSyDKKpSE1qXqBrNKfclQadDFjMSz3zna3ik",
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options: {
      types: ["address"],
      componentRestrictions: { country: "us" },
    },
  });

  return (
    <Box sx={styles.banner} id="banner">
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading as="h3">Revolutionize Your Vocabulary Learning</Heading>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pt: "10px",
                width: "70%",
                height: "auto",
              }}
            >
              <Image src="data:image/png;base64,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" />
              <Image src="data:image/png;base64,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" />
            </Box>
          </Box>
          <Box sx={styles.image}>
            <Image src={appSmaple} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    pt: ["110px", null, null, null, "150px", "200px"],
    pb: ["50px", null, null, null, "60px", null, "0"],
    backgroundColor: "#F6F8FB",
    overflow: "hidden",
  },
  storeImage: {
    width: ["100%"],
    height: ["100%"],
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
  },
  content: {
    h3: {
      color: "black",
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "20px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "540px"],
      fontSize: [6, null, null, "36px", null, "50px", 9],
    },
    p: {
      fontSize: [1, null, null, 1, null, 2],
      lineHeight: ["26px", null, null, null, 2.33],
      color: "text_secondary",
      mb: ["20px", null, null, null, null, "30px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, null, null, "410px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
    },
  },
  form: {
    mb: ["30px", null, null, null, null, "60px"],
    display: ["flex"],
    flexDirection: ["column"],
    input: {
      borderRadius: ["4px"],
      backgroundColor: "#fff",
      width: ["auto", null, null, null, "315px", null, "375px"],
      height: ["45px", null, null, "55px", null, null, "65px"],
      padding: ["0 15px", null, null, "0 25px"],
      fontSize: [1, null, null, 2],
      border: "none",
      outline: "none",
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
      mb: ["30px", null, null, null, null, "10px"],
    },
    button: {
      fontSize: [1, null, null, null, 2, "20px"],
      borderRadius: ["4px"],
      padding: ["0 15px"],
      height: ["45px", null, null, "55px", null, null, "65px"],
      // ml: ["10px"],
      // width: ["auto", null, null, null, "180px"],
      width: ["auto", null, null, null, "315px", null, "375px"],
    },
  },
  image: {
    img: {
      display: "flex",
      mixBlendMode: "darken",
      position: "relative",
      top: ["0", null, null, null, null, "-40px"],
      maxWidth: ["100%", null, null, null, null, null, "none"],
    },
  },
  partner: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    mb: ["40px"],
    "> div + div": {
      ml: ["10px", null, null, "20px", null, "30px"],
    },
    img: {
      display: "flex",
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: "#566272",
      lineHeight: [1],
      opacity: 0.6,
      display: "block",
      mb: ["20px", null, null, null, "0px"],
      mr: [null, null, null, null, "20px"],
      flex: ["0 0 100%", null, null, null, "0 0 auto"],
    },
  },
};
