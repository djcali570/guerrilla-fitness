import { PRIVATE_EMAIL_ADDRESS, PRIVATE_EMAIL_HOST, PRIVATE_EMAIL_PASSWORD, PRIVATE_EMAIL_USERNAME } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export const POST: RequestHandler = async (event) => {
    const data = await event.request.formData();

    /**
     * Send email
     */
    const transporter = nodemailer.createTransport(
        {
            host: PRIVATE_EMAIL_HOST,
            secure: false,
            port: 587,
            auth: {
                user: PRIVATE_EMAIL_USERNAME,
                pass: PRIVATE_EMAIL_PASSWORD
            }
        }
    );

    const options = {
        from: PRIVATE_EMAIL_USERNAME,
        to: PRIVATE_EMAIL_ADDRESS,
        subject: 'New Website Contact',
        text: 'New website contact',
        html:
            `<table width="100%" cellspacing="0" border="0">
            <tbody>
            <tr><td><p>Hello,</p></td></tr>
            <tr><td><p>You have a new conact via website form</p></td></tr>            
            <tr><td><p>Thanks,</p></td></tr>
            <tr><td><p></p></td></tr>
            </tbody>
        </table>`

    }

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return new Response(JSON.stringify({ success: false, message: 'Unknown error occurred. Unable to send contact message.' }), { status: 500 })
        }
    })

    return new Response(JSON.stringify({ success: true, message: 'Request sent successfully.' }), { status: 200 })
}