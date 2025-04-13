# Gmail SMTP Setup Instructions

To enable email sending from your application using Gmail SMTP, follow these steps:

## 1. Add to your .env.local file

Add the following line to your `.env.local` file:

```
GMAIL_APP_PASSWORD=your_app_password_here
```

## 2. Create a Gmail App Password

If you don't already have a Gmail app password:

1. Go to your Google Account > Security
2. Enable 2-Step Verification if not already enabled
3. Scroll down to "App passwords"
4. Create a new app password for your application
5. Copy the generated password and paste it in your .env.local file

## 3. Test the email functionality

Once you've set up the app password, your application should be able to send emails from ayhrotech@gmail.com.

## Note

Keep your app password secure and never commit it to version control.
