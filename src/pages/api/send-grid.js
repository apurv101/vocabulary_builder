// import sgMail from "@sendgrid/mail";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(
  "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"
);

async function send(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { email, emailAddress } = req.body;
    console.log(email, emailAddress);
    const content = {
      to: "chandrabhanepsoft@gmail.com",
      from: email,
      subject: `New Message From - ${emailAddress}`,
      text: emailAddress,
      html: `<p>${emailAddress}</p>`,
    };
    await sendgrid.send(content);
    res.status(200).send("Message sent successfully.");
  } else {
    // Handle any other HTTP method
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }

  // try {

  // } catch (error) {
  //   console.log("ERROR", error);
  //   res.status(400).send("Message not sent.");
  // }
}

export default send;
