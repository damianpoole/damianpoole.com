## Relevant Files

- `src/app/layout.tsx` - Main layout component for the Next.js application.
- `src/app/page.tsx` - Homepage component.
- `src/app/about/page.tsx` - About Me page component.
- `src/app/about/about.test.tsx` - Unit tests for the About Me page.
- `src/app/projects/page.tsx` - Project portfolio listing page component.
- `src/app/projects/projects.test.tsx` - Unit tests for the Project portfolio page.
- `src/app/projects/[slug]/page.tsx` - Individual project detail page component.
- `src/app/projects/[slug]/project-detail.test.tsx` - Unit tests for individual project page.
- `src/app/blog/page.tsx` - Blog posts listing page component.
- `src/app/blog/blog.test.tsx` - Unit tests for the Blog listing page.
- `src/app/blog/[slug]/page.tsx` - Individual blog post page component.
- `src/app/blog/[slug]/blog-post.test.tsx` - Unit tests for individual blog post page.
- `src/components/Header.tsx` - Site header/navigation component.
- `src/components/Header.test.tsx` - Unit tests for Header component.
- `src/components/Footer.tsx` - Site footer component.
- `src/components/Footer.test.tsx` - Unit tests for Footer component.
- `src/components/ProjectCard.tsx` - Component for displaying a single project in a list.
- `src/components/ProjectCard.test.tsx` - Unit tests for ProjectCard component.
- `src/components/BlogPostPreview.tsx` - Component for displaying a blog post preview in a list.
- `src/components/BlogPostPreview.test.tsx` - Unit tests for BlogPostPreview component.
- `src/lib/markdownParser.ts` - Utility for parsing Markdown files (for blog posts, projects).
- `src/lib/markdownParser.test.ts` - Unit tests for markdownParser.
- `src/content/blog/` - Directory to store Markdown files for blog posts.
- `src/content/projects/` - Directory to store Markdown files/data for projects.
- `tailwind.config.js` - Tailwind CSS configuration file.
- `postcss.config.js` - PostCSS configuration file (for Tailwind CSS).
- `next.config.mjs` - Next.js configuration file.
- `public/` - Directory for static assets (images, fonts, etc.).

### Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use `npm test` or `npx jest [optional/path/to/test/file]` to run tests. Running without a path executes all tests found by the Jest configuration.
- The `src/app` directory structure reflects Next.js App Router conventions.

**IMPORTANT NOTE (Date: 2024-07-23): The Next.js project, initially created in a subdirectory `damianpoole-nextjs`, has been moved to the workspace root (`/Users/damianpoole/Git/damianpoole.com`). All file paths in this task list and in the project configuration should now be considered relative to this new root.**

## Tasks

- [x] 1.0 **Project Setup and Core Platform Configuration**
    - [x] 1.1 Initialize Next.js (v15) project if not already done (current repo is Gatsby).
    - [x] 1.2 Install and configure Tailwind CSS (v4) with PostCSS use Context7.
    - [x] 1.3 Set up basic project structure (folders for components, lib, content, app routes).
    - [x] 1.4 Configure ESLint, Prettier for code quality and consistency.
    - [x] 1.5 Set up Jest (or other testing framework) for unit testing.
    - [x] 1.6 Create initial `next.config.mjs`.

- [x] 2.0 **Basic Site Structure, Layout, and Navigation**
    - [x] 2.1 Create main `src/app/layout.tsx` with basic HTML structure (html, head, body).
    - [x] 2.2 Implement a responsive `Header` component (`src/components/Header.tsx`) with navigation links (e.g., Home, About, Projects, Blog).
    - [x] 2.3 Implement a `Footer` component (`src/components/Footer.tsx`) with copyright and potentially social links.
    - [x] 2.4 Integrate Header and Footer into the main layout.
    - [x] 2.5 Create basic placeholder pages for Home (`src/app/page.tsx`), About (`src/app/about/page.tsx`), Projects (`src/app/projects/page.tsx`), and Blog (`src/app/blog/page.tsx`).
    - [x] 2.6 Implement basic routing between these pages using Next.js App Router conventions.
    - [x] 2.7 Implement light/dark mode toggle functionality.

- [x] 3.0 **Implement MVP Content Sections (About Me, Project Portfolio, Blog)**
    - [x] 3.1 **About Me Page (`src/app/about/page.tsx`)**
        - [x] 3.1.1 Design and implement layout for the About Me page based on PRD and inspirations.
        - [x] 3.1.2 Allow content to be easily updatable (e.g., from Markdown or directly in component for MVP).
        - [x] 3.1.3 Integrate text, images, and links to profiles (GitHub, LinkedIn).
    - [x] 3.2 **Project Portfolio (`src/app/projects/`)**
        - [x] 3.2.1 Define data structure for project entries (title, description, tech, images, links).
        - [x] 3.2.2 Create utility functions in `src/lib/projectsApi.ts` to get all projects and a single project by ID from `projectsData.ts`.
        - [x] 3.2.3 Implement `ProjectCard` component (`src/components/ProjectCard.tsx`) for displaying individual projects in a list.
        - [x] 3.2.4 Implement the project listing page (`src/app/projects/page.tsx`) to display `ProjectCard`s.
        - [x] 3.2.5 Implement dynamic route for individual project details (`src/app/projects/[slug]/page.tsx`).
        - [x] 3.2.6 Design and implement layout for the single project detail page.
    - [x] 3.3 **Blog Functionality (`src/app/blog/`)**
        - [x] 3.3.1 Define data structure for blog posts (title, date, tags, content - from Markdown frontmatter).
        - [x] 3.3.2 Create utility (`src/lib/markdownParser.ts`) to fetch and parse blog posts from Markdown files in `src/content/blog/`.
        - [x] 3.3.3 Implement `BlogPostPreview` component (`src/components/BlogPostPreview.tsx`) for list items.
        - [x] 3.3.4 Implement the blog listing page (`src/app/blog/page.tsx`) displaying posts in reverse chronological order.
        - [x] 3.3.5 Implement dynamic route for individual blog posts (`src/app/blog/[slug]/page.tsx`).
        - [x] 3.3.6 Implement code syntax highlighting for Markdown content.
        - [ ] 3.3.7 (Optional for MVP) Implement filtering/sorting by tags/categories.

- [x] 4.0 **Styling, UI Implementation, and Responsiveness**
    - [x] 4.1 Apply global styles and Tailwind CSS base configuration, drawing inspiration from `ryancarson.com` and `joshwcomeau.com`.
    - [x] 4.2 Style the Header, Footer, and navigation elements.
    - [x] 4.3 Style the Homepage, About Me page, Project Portfolio (list & detail), and Blog (list & detail) pages.
    - [x] 4.4 Style common components (`ProjectCard`, `BlogPostPreview`).
    - [x] 4.5 Ensure all pages and components are fully responsive across desktop, tablet, and mobile devices.
    - [x] 4.6 Implement consistent visual language (colors, fonts, spacing) as per PRD.
    - [x] 4.7 Test and refine light/dark mode styles.

- [ ] 5.0 **Deployment, SEO Basics, and Final Polish**
    - [ ] 5.1 Set up deployment environment (e.g., Vercel, Netlify).
    - [ ] 5.2 Implement basic SEO: unique titles and meta descriptions for pages.
    - [ ] 5.3 Generate a `sitemap.xml` and `robots.txt`.
    - [ ] 5.4 (Optional for MVP) Set up basic analytics (e.g., Vercel Analytics, Plausible, or Google Analytics).
    - [ ] 5.5 Conduct thorough testing across browsers and devices.
    - [ ] 5.6 Perform Lighthouse audit and address major performance, accessibility, and best practices issues.
    - [ ] 5.7 Review all content for accuracy and completeness.
    - [ ] 5.8 Prepare for initial launch.
