async function generateReport(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const { email, address } = req.body;
    console.log(email, address);
  }
}
//     const content = {
//       to: "chandrabhanepsoft@gmail.com",
//       from: email,
//       subject: `New Message From - ${emailAddress}`,
//       text: emailAddress,
//       html: `<p>${emailAddress}</p>`,
//     };
//     await sendgrid.send(content);
//     res.status(200).send("Message sent successfully.");
//   } else {
//     // Handle any other HTTP method
//     console.log("ERROR", error);
//     res.status(400).send("Message not sent.");
//   }

// try {

// } catch (error) {
//   console.log("ERROR", error);
//   res.status(400).send("Message not sent.");
// }

export default generateReport;
