export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { emri, mbiemri, telefoni, email, service } = data;
    
    if (!emri || !mbiemri || !telefoni || !email || !service) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    // In a real implementation, you would send an email here
    // For now, we'll log the data and return success
    console.log('Form submission:', data);
    
    // You can integrate with email services like:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - etc.
    
    // Example email content
    const emailSubject = `PROvisa - Kërkesë e re: ${service}`;
    const emailBody = `
      Kërkesë e re nga website:
      
      Shërbimi: ${service}
      Emri: ${emri}
      Mbiemri: ${mbiemri}
      Telefoni: ${telefoni}
      Email: ${email}
      ${data['visa-type'] ? `Lloji i vizës: ${data['visa-type']}` : ''}
      ${data.mesazhi ? `Mesazhi: ${data.mesazhi}` : ''}
      
      Data: ${new Date().toLocaleString('sq-AL')}
    `;
    
    // TODO: Implement actual email sending
    // await sendEmail({
    //   to: 'provisa.agency@gmail.com',
    //   subject: emailSubject,
    //   text: emailBody,
    // });
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
