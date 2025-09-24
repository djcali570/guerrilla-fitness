import { PRIVATE_EMAIL_ADDRESS, PRIVATE_EMAIL_HOST, PRIVATE_EMAIL_PASSWORD, PRIVATE_EMAIL_USERNAME } from '$env/static/private';
import { Validation } from '$lib/validation';
import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export const POST: RequestHandler = async (event) => {
    const formData = await event.request.formData();
    const data = formData.get('data');
    const dataJson = JSON.parse(data as string);

    // Validation

    if (Validation.isEmpty(dataJson.name)) {
        return new Response(JSON.stringify({ success: false, message: 'Please enter your full name' }), { status: 500 })
    }

    if (Validation.isEmpty(dataJson.email)) {
        return new Response(JSON.stringify({ success: false, message: 'Please enter your email address' }), { status: 500 })
    }

    if (!Validation.isValidEmail(dataJson.email)) {
        return new Response(JSON.stringify({ success: false, message: 'Please enter a valid email address' }), { status: 500 })
    }

    if (Validation.isEmpty(dataJson.phone)) {
        return new Response(JSON.stringify({ success: false, message: 'Please enter your phone number' }), { status: 500 })
    }

    if (Validation.isEmpty(dataJson.selectedGym)) {
        return new Response(JSON.stringify({ success: false, message: 'Please select a gym location' }), { status: 500 })
    }

    if (Validation.isEmpty(dataJson.experience)) {
        return new Response(JSON.stringify({ success: false, message: 'Please enter your fitness experience' }), { status: 500 })
    }

    /**
     * Send email
     */
    const transporter = nodemailer.createTransport({
        host: PRIVATE_EMAIL_HOST, // Use Gmail SMTP host
        port: 587, // Use port 587 for TLS
        secure: false, // False for port 587 (uses STARTTLS)
        auth: {
            user: PRIVATE_EMAIL_USERNAME, // Your Gmail or Google Workspace email
            pass: PRIVATE_EMAIL_PASSWORD // Use App Password here
        }
    });

    const options = {
        from: PRIVATE_EMAIL_USERNAME,
        to: PRIVATE_EMAIL_ADDRESS,
        subject: 'New Nutrition Contact',
        text: 'New Nutrition Contact',
        html: `
            <table width="100%" cellspacing="0" border="0">
                <tbody>
                    <tr><td><p>Hello,</p></td></tr>
                    <tr><td><p>You have a new contact via website form for nutrition coaching</p></td></tr>
                    <tr><td><p>Name: ${dataJson.name}</p></td></tr>
                    <tr><td><p>Email: ${dataJson.email}</p></td></tr>
                    <tr><td><p>Phone: ${dataJson.phone}</p></td></tr>
                    <tr><td><p>Location: ${dataJson.selectedGym}</p></td></tr>
                    <tr><td><p>Experience: ${dataJson.experience}</p></td></tr>     
                    <tr><td><p></p></td></tr>
                    <tr><td><p>Please respond as soon as possible</p></td></tr>
                    <tr><td><p></p></td></tr>
                </tbody>
            </table>`
    };

    try {
        await transporter.sendMail(options);
        console.log('success')
        return new Response(JSON.stringify({ success: true, message: 'Form submitted successfully. A team member will reach out in the next 24 hours' }), { status: 200 });
    } catch (err) {
        console.error('Error sending email:', err);
        return new Response(JSON.stringify({ success: false, message: 'Oops-something went wrong with the form. You can reach us at info@guerrillafitness.net instead. We\'re sorry for the inconvenience.' }), { status: 500 });
    }
};