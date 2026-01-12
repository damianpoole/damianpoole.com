# Product Requirements Document: Personal Website Rebuild

## 1. Introduction/Overview

This document outlines the requirements for rebuilding Damian Poole's personal website. The current website will be overhauled to better align with modern technologies Damian uses daily, making it easier to maintain and update, both manually and with AI assistance. The new site will transition from a simple blog to a more comprehensive personal platform, serving as a showcase for projects, a space for sharing thoughts, a playground for technological experiments, and a tool for personal branding. The design will be significantly updated, drawing inspiration from sites like `ryancarson.com` and `joshwcomeau.com`.

**Goal:** To create a modern, maintainable, and extensible personal website that effectively showcases Damian Poole's skills, projects, and thoughts, while also serving as a platform for ongoing technological exploration.

## 2. Goals

- Develop a new website using Next.js (v15), React, Tailwind CSS (v4), and Markdown for content.
- Create a platform that is easy to update and maintain.
- Effectively showcase Damian's professional projects and technical skills.
- Provide a space for Damian to share thoughts and articles (blog).
- Build a "playground" section for experimenting with new technologies and showcasing interactive demos.
- Establish a strong personal brand presence online.
- Ensure the design is modern, user-friendly, and inspired by `ryancarson.com` and `joshwcomeau.com`.
- Initial launch (MVP) to include a detailed "About Me" page and a "Project Portfolio" section, alongside the core blog functionality.

## 3. User Stories

- **As a Potential Employer:** I want to easily find Damian's resume, view his project portfolio with clear descriptions of his roles and technologies used, and understand his technical expertise so that I can assess his suitability for a role.
- **As a Collaborator/Tech Enthusiast:** I want to read Damian's blog posts, explore his project experiments, and understand his technical interests so that I can learn from his work or identify opportunities for collaboration.
- **As Damian (Site Owner):** I want to easily create, publish, and manage blog posts using Markdown.
- **As Damian (Site Owner):** I want to be able to add new projects to my portfolio with descriptions, images/videos, links, and associated technologies.
- **As Damian (Site Owner):** I want to update my "About Me" page with new information and experiences.
- **As a Future Customer (of potential products):** I want to learn more about Damian, his expertise, and his values to build trust before considering a purchase.
- **As a Site Visitor:** I want to easily navigate the website and find the information I'm looking for.
- **As a Site Visitor:** I want the website to load quickly and be responsive across different devices (desktop, tablet, mobile).

## 4. Functional Requirements

### 4.1. Core Platform

1.  The website MUST be built using Next.js (v15) and React.
2.  Styling MUST be implemented using Tailwind CSS (v4).
3.  The website MUST be responsive and accessible on common screen sizes (desktop, tablet, mobile).
4.  The website MUST have a clear and intuitive navigation structure.
5.  Basic SEO principles MUST be applied (e.g., proper meta tags, sitemap).

### 4.2. Blog

1.  The system MUST allow Damian to create, edit, and publish blog posts.
2.  Blog posts MUST be written in Markdown.
3.  Each blog post MUST support a title, publication date, tags/categories, and content.
4.  The system MUST display a list of blog posts, likely in reverse chronological order.
5.  The system MUST allow users to view individual blog posts.
6.  The system SHOULD support code syntax highlighting within blog posts.
7.  The system SHOULD allow for filtering or searching blog posts by tags/categories.

### 4.3. Project Portfolio

1.  The system MUST allow Damian to add, edit, and display projects.
2.  Each project entry MUST support a title, description, technologies used, images/videos (optional), and a link to the live project or source code (if applicable).
3.  The system MUST display a gallery or list of projects.
4.  The system MUST allow users to view detailed information for each project.

### 4.4. About Me Page

1.  The system MUST display a dedicated "About Me" page.
2.  The content of the "About Me" page MUST be easily updatable by Damian.
3.  The page SHOULD allow for a mix of text, images, and links to relevant profiles (e.g., LinkedIn, GitHub).

### 4.5. Playground (Future Iteration, initial setup considered)

1.  The system SHOULD provide a section where Damian can embed or link to interactive experiments or small applications.
2.  The structure SHOULD be flexible enough to accommodate different types of experiments.

### 4.6. Design & UI

1.  The overall design aesthetic SHOULD be clean, modern, and professional, drawing inspiration from `ryancarson.com` and `joshwcomeau.com`.
2.  Key design elements to consider from `ryancarson.com`:
    - Clean typography.
    - Simple, clear navigation.
    - Focus on content.
3.  Key design elements to consider from `joshwcomeau.com`:
    - Potentially more vibrant or playful elements (user can decide how much to incorporate).
    - Excellent readability and code presentation.
    - Interactive elements (if applicable to the "playground" or other sections).
4.  A consistent visual language (colors, fonts, spacing) MUST be used throughout the site.
5.  The site MUST have a light and dark mode option. (Assumption, common for dev sites)

## 5. Non-Goals (Out of Scope for MVP)

- User registration and comments on blog posts (can be considered for future iterations).
- Complex backend database for content management (Markdown files preferred for simplicity initially).
- E-commerce functionality for selling products directly (the site might link to external platforms if products exist).
- Advanced interactive "playground" features requiring significant backend integration (simple embeds or client-side demos are fine for MVP).
- Full migration of _all_ old blog content if it's extensive and not relevant (Damian to decide what to migrate).

## 6. Design Considerations

- **Inspiration:** `https://www.ryancarson.com/` and `https://www.joshwcomeau.com/`.
- **Style:** A blend of professionalism (Ryan Carson) with potential for engaging, modern UI elements (Josh Comeau). Emphasis on readability, clean typography, and good use of whitespace.
- **Branding:** The design should reflect Damian Poole's personal brand.
- **UI Mockups:** Pending. Initial development will focus on structure and layout based on inspirations.
- **Key Pages for Initial Design Focus:** Homepage, About Me, Blog Listing, Single Blog Post, Project Portfolio, Single Project Page.

## 7. Technical Considerations

- **Frontend:** Next.js 15, React, Tailwind CSS 4.
- **Content:** Primarily Markdown files for blog posts and potentially project descriptions.
- **Deployment:** To be determined (e.g., Vercel, Netlify, or other Next.js friendly platform).
- **Version Control:** Git (repository already exists).
- **Analytics:** Basic analytics (e.g., Google Analytics or a privacy-focused alternative) should be considered.
- **Performance:** Aim for high Lighthouse scores, particularly for performance, accessibility, and SEO.
- **Ease of Update:** Structure content and components to be easily maintainable and updatable by Damian.

## 8. Success Metrics

- Damian can successfully add, edit, and publish blog posts and project entries.
- The new website is live and accessible.
- Positive feedback from Damian on the ease of use and alignment with his vision.
- Increased engagement (e.g., page views, time on site) compared to the old blog (if metrics are available).
- The website accurately reflects Damian's skills and projects to potential employers/collaborators.
- Lighthouse scores for key pages (Homepage, Blog, Project Page) meet agreed-upon targets (e.g., >90 for Performance, Accessibility, Best Practices, SEO).

## 9. Open Questions

- Specific blog posts to migrate from the old site?
- Prioritization of "playground" features beyond the initial setup?
- Specific details for the "About Me" page content (Damian to provide).
- Preferred analytics solution?
- Detailed list of projects for the portfolio with their content (Damian to provide).

---

This PRD aims to be a living document and can be updated as the project progresses and new information becomes available.
