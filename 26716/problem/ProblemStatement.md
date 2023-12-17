# Title: Node.js Email Sender

# Introduction + Scenario:

Develop a Node.js application using the nodemailer library to facilitate the sending of emails from a user-provided address to the provided email address. This functionality is crucial for applications requiring automated email notifications or communication, such as sending password reset emails or order confirmations in a web application.

# Objectives:

1.  Implement User Input Handling:

    Utilize the provided readline interface to capture the user's email input.

2.  Configure Transporter Object:

    Create the transporter object with SMTP details for seamless email communication.

3.  Send Email with Defined Transport Object:

    Use the configured transport object to send an email to the user-provided address ans also handle error if sending email gets failed.

4.  Handle Email Sending Errors:

    Implement error handling to manage scenarios where sending the email fails.

# Expected Output:

The application should successfully send an email from 'codingninjas2k16@gmail.com' to the user-provided email address. The email subject should be "Coding Ninjas," and the message body must contain the text "The world has enough coders; be a coding ninja!". Refer to the provided links for sample screenshots illustrating the expected email appearance.
