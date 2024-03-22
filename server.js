const express = require('express');
const app = express();
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/contacto.html')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'luciano.aufieri@gmail.com',
            pass: 'bnfx egyi qqik ejou'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'luciano.aufieri@gmail.com',
        subject: ` Consulta de ${req.body.email}`,
        text: ` Telefono de contacto: ${req.body.telephone}
        ${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email enviado:' + info.response);
            res.send('exito')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})