# My Portfolio

![App Preview](https://imgix.cosmicjs.com/e0a05a10-7263-11f1-a87f-d72293b1048a-autopilot-photo-1461749280684-dccba630e2f6-1782590872102.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive developer portfolio built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Showcase your projects with screenshots, tech stacks, and live links, highlight your skills by category, and present your professional work experience timeline — all managed dynamically from your Cosmic bucket.

## Features

- 🎨 **Modern, responsive design** with smooth animations and dark hero section
- 💼 **Projects showcase** with screenshots, tech stack badges, live & GitHub links
- ⭐ **Featured projects** highlighted on the homepage
- 🛠️ **Skills section** grouped by category with proficiency indicators
- 🏢 **Work experience timeline** with company logos and roles
- 📱 **Fully mobile-optimized** with a sticky responsive navigation
- ⚡ **Server-rendered** content fetched directly from Cosmic for speed and SEO
- 🔍 **SEO-friendly** dynamic metadata per page

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a402d443086531a9e574b58&clone_repository=6a402e3f3086531a9e574ba3)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions: Meus trabalhos"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio". The content is managed in Cosmic CMS with the following object types: skills, projects, work-experience. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: Meus trabalhos

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account and bucket with `skills`, `projects`, and `work-experience` object types

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (these are provided automatically when deploying through Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all projects with depth for connected objects
const response = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

const projects = response.objects

// Fetch a single project by slug
const { object } = await cosmic.objects
  .findOne({ type: 'projects', slug: 'my-project' })
  .depth(1)
```

## Cosmic CMS Integration

This application reads content from three Cosmic object types:

- **Skills** (`skills`) — name, category, proficiency, icon
- **Projects** (`projects`) — title, descriptions, featured image, screenshots, tech stack, live & GitHub URLs, featured flag
- **Work Experience** (`work-experience`) — company, role, location, dates, description, company logo

All data is fetched server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs) for optimal performance and SEO. Learn more in the [Cosmic documentation](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import into [Netlify](https://netlify.com)
3. Add your environment variables in Site Settings
4. Deploy

<!-- README_END -->