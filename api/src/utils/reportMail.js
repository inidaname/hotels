const nodemailer = require('nodemailer');
require("dotenv").config({ path: ".env" });

 const sendEmail = (name, mail, password) => {
  let transporter = nodemailer.createTransport({
      host: process.env.MAILHOST,
      port: process.env.MAILPORT,
      tls: {
          rejectUnauthorized: false
      },
      auth: {
          user: process.env.EMAIL,
          pass: process.env.EPASS
      }
  });


  const mailInfo = {
      from : `Goldensands  <${process.env.EMAIL}>`, // sender address
      to : `${mail}`, // list of receivers
      subject : `${name} Congratulations!, Your Park have been registered`, // Subject line
      html : `<html lang='en'>

      <head>
          <meta charset='utf-8'>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'>
          <meta name='viewport' content='width=device-width, initial-scale=1'>
          <title></title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

      <body>
              <div class='container'>
                  <div class='row'>
                      <div class='col-md-6 col-md-offset-3'>
                          <h1 class='display-2' style='font-weight: bold; font-variant: small-caps;'>
                              <img src="http://www.parkcrowdy.com/img/logo.png" height="50px" alt="" srcset="">
                              <span style='color: #4159B4; text-shadow: 2px 2px #ccc;'>Parkcrowdy</span>
                          </h1>
                          <small>Africa's pre-paid parking service</small><br>
                          <hr>
                          <h3>Hello ${name},</h3>

                          <p>
                              Parkcrowdy welcomes you to being a part of it Parking Experience!. <br>
                              We are excited to have you on board 
                          </p>

                          <p>Your login details are: <br>
                              Username: ${mail} <br>
                              Password: ${password}
                          </p>

                          <p>
                              Signed <br> Samuel <br> Co-Founder/CEO
                          </p>
                          <address class="">
                              29 Mambilla street, Off Aso drive, maitama, Abuja, Nigeria. <br>
                              Email: info@parkcrowdy.com. ,<br>
                              Phone: +234 (0) 8092792022
                          </address>

                      </div>
                  </div>
              </div>
              <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
              <!-- Include all compiled plugins (below), or include individual files as needed -->
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
          </body>
      </html>`
  }

  transporter.sendMail(mailInfo, (err, info) => {
      if (!err) {
          console.log('Message sent: %s', info.messageId);
      } else {
          console.log('Error sendng Message', err.message);
      }
  });
}

let mail=  'ahmad.abdulaziz37@gmail.com';
let name = 'amaz'
let password = 'amaz3638'
sendEmail(name, mail, password);
