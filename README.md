# Personal Portfolio

A modern, responsive personal portfolio website for **Avinash Potnuru** (React.js / Frontend Developer). Built with **Next.js (App Router)**, **React**, **Tailwind CSS**, **Framer Motion**, and **Redux Toolkit**.

## Features

- **Home** – Hero section with text animations and quick links to projects, skills, and about.
- **About** – Personal details, education timeline, and professional experience.
- **Skills** – Tech stack displayed with icons and categories.
- **Projects** – Filterable project gallery (JavaScript, React/Next.js, Full Stack, Android/iOS) with a dedicated detail page per project.
- **Course Certificates** – Certificate cards with details.
- **Contact** – Contact form wired to EmailJS, with client details optionally persisted via a Next.js API + MongoDB Atlas.
- **Full SEO** – Metadata, Open Graph, and Twitter cards configured in the root layout.
- **Animations** – Framer Motion powered fade/scroll transitions.
- **Responsive** – Mobile-first Tailwind layout.

## Tech Stack

| Area        | Technology                                             |
| ----------- | ------------------------------------------------------ |
| Framework   | Next.js 13 (App Router), React 18                       |
| Styling     | Tailwind CSS 3                                          |
| State       | Redux Toolkit, React Redux                              |
| Animation   | Framer Motion                                           |
| Forms       | React Hook Form + EmailJS                               |
| Database    | MongoDB Atlas (Mongoose)                                |
| Icons       | React Icons                                             |
| Package Mgr | pnpm                                                    |

## Getting Started

Install dependencies and run the development server with pnpm:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the project root:

```env
# MongoDB connection string for storing contact form details
MONGODB_URI=your_mongodb_atlas_connection_string

# EmailJS credentials for sending contact form emails
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── app/                     # Next.js App Router pages & API routes
│   ├── api/
│   │   ├── add-client-details/   # POST – save contact form data to MongoDB
│   │   └── client-details/       # GET  – fetch saved client details
│   ├── about/
│   ├── contact-us/
│   ├── course-certificates/
│   ├── projects/[id]/            # Dynamic project detail page
│   ├── layout.js                 # Root layout, fonts, SEO metadata
│   └── page.js                   # Home page
├── components/              # Reusable UI components (Header, Footer, ProjectCard, etc.)
├── Data/                    # Static data (projects, skills, experience)
├── lib/db.js                # MongoDB / Mongoose connection helper
├── model/model.js           # Mongoose schema (client details)
├── store/                   # Redux store & slices
└── styles/globals.css       # Global Tailwind styles
```

## Scripts

| Script         | Description                                     |
| -------------- | ----------------------------------------------- |
| `pnpm dev`     | Start the development server                    |
| `pnpm build`   | Build the application for production            |
| `pnpm start`   | Start the production server                     |
| `pnpm lint`    | Run ESLint                                      |
| `pnpm analyze` | Build with bundle analyzer (set `ANALYZE=true`) |

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Netlify

This project is configured to deploy on Netlify via `netlify.toml`.

> **Important:** Before deploying, add the environment variables listed in [Environment Variables](#environment-variables) (especially the `NEXT_PUBLIC_EMAILJS_*` values) in the **Netlify dashboard → Site settings → Environment variables**, then redeploy. `NEXT_PUBLIC_*` values are inlined into the client bundle **at build time**. If they are missing, the contact form's email request will fail with "Failed to send details" even though everything works locally.