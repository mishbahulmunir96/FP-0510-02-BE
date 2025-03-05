export const forgotPasswordTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Your Password - RateHaven</title>
    <style>
      body { 
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333; 
        line-height: 1.6; 
        margin: 0; 
        padding: 0; 
        background-color: #f8f9fa; 
      }
      .container { 
        max-width: 600px; 
        margin: 40px auto; 
        padding: 30px; 
        border: 1px solid #e9ecef; 
        border-radius: 8px; 
        background-color: #fff; 
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
      }
      .logo {
        text-align: center;
        margin-bottom: 30px;
      }
      .logo img {
        max-width: 150px;
        height: auto;
      }
      h1 { 
        text-align: center; 
        color: #0056b3; 
        margin-bottom: 30px;
        font-size: 28px;
      }
      p { 
        margin: 15px 0;
        font-size: 16px;
      }
      .highlight { 
        font-weight: bold; 
        color: #0056b3; 
      }
      .button { 
        display: block;
        width: 200px;
        margin: 30px auto; 
        padding: 12px 24px; 
        font-size: 18px; 
        color: #fff; 
        background-color: #0056b3; 
        text-decoration: none; 
        border-radius: 5px; 
        text-align: center; 
        transition: background-color 0.3s ease;
      }
      .button:hover {
        background-color: #003d82;
      }
      .copyable-link {
        text-align: center;
        margin: 15px 0 30px;
        padding: 10px;
        background-color: #f5f5f5;
        border-radius: 4px;
        border: 1px solid #ddd;
        word-break: break-all;
        font-family: monospace;
        font-size: 14px;
      }
      .link-caption {
        text-align: center;
        color: #6c757d;
        font-size: 14px;
        margin-bottom: 5px;
      }
      .footer { 
        margin-top: 40px; 
        padding-top: 20px;
        border-top: 1px solid #e9ecef;
        font-size: 14px; 
        color: #6c757d; 
        text-align: center;
      }
      .footer p { 
        margin: 5px 0; 
      }
      .social-links {
        margin-top: 20px;
      }
      .social-links a {
        display: inline-block;
        margin: 0 10px;
        color: #0056b3;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">
        <img src="https://res.cloudinary.com/andikalp/image/upload/v1738209868/qdx0l3jzw4fsqoag71dl.png" alt="RateHaven Logo" />
      </div>
      <h1>Reset Your Password</h1>
      <p>Hello <span class="highlight">{{name}}</span>,</p>
      <p>
        We received a request to reset the password for your RateHaven account associated with <span class="highlight">{{email}}</span>. Don't worry, we've got you covered!
      </p>
      <p>
        To set a new password, simply click the button below:
      </p>
      <p>
        <a href="{{link}}" target="_blank" class="button">Reset My Password</a>
      </p>
      <p class="link-caption">If the button above doesn't work, copy and paste this link into your browser:</p>
      <div class="copyable-link">{{link}}</div>
      <p>
        This link will expire in 15 minutes for security reasons. If you didn't request this password reset, please ignore this email or contact our support team if you have any concerns.
      </p>
      <p>
        Remember, we will never ask for your password via email. Always be cautious and protect your account information.
      </p>
      <div class="footer">
        <p>RateHaven - Your trusted platform for Property Renting Web App.</p>
        <p>
          Need assistance? Our support team is here to help!<br>
          Contact us at <a href="mailto:support@ratehaven.com">support@ratehaven.com</a> or call us at +1 (800) 123-4567.
        </p>
        <p>
          Thank you for being a valued member of the <span class="highlight">RateHaven</span> community!
        </p>
      </div>
    </div>
  </body>
</html>
`;
