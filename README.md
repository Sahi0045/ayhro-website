# Agency Website

A modern agency website built with Next.js, featuring a responsive design and interactive components.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion
- Email Integration

## Features

- Responsive Design
- Interactive Animations
- Contact Form
- Email Integration
- Modern UI/UX
- SEO Optimized

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/seepanachaitanya/agency-website.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with the following variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
RESEND_API_KEY=your_resend_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on:
- Netlify
- AWS (S3 + CloudFront)

## License

MIT 