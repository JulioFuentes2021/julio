import nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport
  export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'julyfuentes2002@gmail.com', // generated ethereal user
      pass: 'npau uhfq ryki oyvf', // generated ethereal password
    },
  });

  export const handleSubmit = async () => {
		// send mail with defined transport object
		try {
      await transporter.sendMail({
        from: '"Probando 👻" <julyfuentes2021@gmail.com>', // sender address
        to: "juliodddddd1234@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>",
      });
    } catch(error) {
      console.error('erorororo',error)
    }
	};

  // npau uhfq ryki oyvf

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
 });

 handleSubmit()

// exports.handleSubmit = handleSubmit;
 