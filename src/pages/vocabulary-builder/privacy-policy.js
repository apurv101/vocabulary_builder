import React from "react";
/** @jsx jsx /
/* @jsx jsx */
import { jsx, Heading, Text, Box } from "theme-ui";

const VocabularyLearningApp = () => {
  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", px: 3 }} pt={6}>
      <Heading as="h1" variant="headline">
        Privacy Policy
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          At our vocabulary learning app, we take your privacy very seriously.
          We are committed to protecting your personal information and providing
          you with a safe and secure learning experience.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Collection and Use of Data
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          We do not require signups to use our app. Therefore, we do not collect
          any personal information such as your name, email address, or phone
          number. However, we do collect and store your progress and history on
          the app anonymously. This data helps us to improve the app and provide
          you with a better learning experience.
        </Text>
        <Text>
          We may also use cookies and similar technologies to track your usage
          of the app and improve its functionality. These cookies do not contain
          any personal information and are used only to enhance your experience.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Privacy Policy
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          We do not collect any personal data from our users. We store only
          anonymous progress and history data on our app to help users track
          their learning. We do not share any data with third-party services.
        </Text>
      </Box>
      <Heading as="h2" variant="subheadline">
        Sharing of Data
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          We do not share your personal information with any third parties. Your
          progress and history data is stored anonymously and is not shared with
          anyone outside of our team.
        </Text>
      </Box>

      <Heading as="h2" variant="subheadline">
        Security Measures
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          We take all necessary measures to ensure the security of your data.
          Our app is protected by industry-standard encryption and we use strict
          access controls to safeguard your information. We also regularly
          monitor our systems for any potential security breaches.
        </Text>
      </Box>

      <Heading as="h2" variant="subheadline">
        Changes to Privacy Policy
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          We reserve the right to update this privacy policy at any time. Any
          changes will be posted on this page and will take effect immediately.
        </Text>
      </Box>

      <Heading as="h2" variant="subheadline">
        Contact Us
      </Heading>
      <Box sx={{ my: 4 }}>
        <Text>
          If you have any questions or concerns about our privacy policy, please
          don't hesitate to contact us at apoorvagarwal00@gmail.com. We are
          committed to protecting your privacy and ensuring a safe and secure
          learning experience.
        </Text>
      </Box>
    </Box>
  );
};

export default VocabularyLearningApp;
