import nodemailer from 'nodemailer';

const SendMail = async (req, res) => {
let transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port : 587,
    secure : false,
    auth : {
        user : 'rm.mahady@gmail.com',
        pass : 'mahady1906-janoary2021'
    }
})

try {
    await transporter.sendMail({
        from : '"Admin Go-Inside" - <noreply@go-inside.com>',
        to : req.body.email,
        subject : 'Email verification - Go Inside',
        html : `<p>Hello ${req.body.firstname} ${req.body.lastname.substring(0,1).toUpperCase()},<br/>To activate your account copy/paste the code bellow.<br/>
        <br/>Your activation code : <b>${req.body.code}</b><br/>
        Thank you for your registration.`
    })
    return res.status(200).json({message : 'ok'})
} catch (error) {
    return res.json({error : error})
}

}
export default SendMail;
