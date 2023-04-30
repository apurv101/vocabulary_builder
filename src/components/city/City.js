import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";
import { useState } from "react";

const City = (props) => {
  const inputChangeHandler = () => {
    setEnteredCity(e.target.value);
  };


  return (
    <Box sx={styles.boostAgencies}>
      <Container>
        <Grid>
          <Box as="form" sx={styles.form} onSubmit={props.cityHandler}>
            <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
              subscribe
            </Box>
            <Input
              // name="email"
              type="text"
              id="subscribe"
              placeholder="Enter the City"
              sx={styles.form.input}
              onChange={props.inputChangeHandler}
              value={props.enteredCity}
            />

            <Button type="submit" sx={styles.form.button}>
              save
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

const styles = {
  boostAgencies: {
    pt: ["70px", null, null, "80px", "120px", null, "130px"],
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
};
export default City;
