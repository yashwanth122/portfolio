# Portfolio Website - Replit Configuration

## Overview

This is a modern full-stack portfolio website built with React (frontend) and Express.js (backend). The application showcases a personal portfolio for a motion graphics editor and creative developer, featuring sections for about, skills, projects, education, and contact information. The project uses modern UI components with shadcn/ui, animations with Framer Motion, and includes a PostgreSQL database setup with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom dark theme and motion graphics color scheme
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Custom Vite integration for seamless full-stack development
- **API Structure**: RESTful API with `/api` prefix
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request/response logging for API endpoints

### Data Storage
- **Database**: PostgreSQL (configured but not yet implemented)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: User management schema defined in shared directory
- **Migrations**: Drizzle Kit for database migrations
- **Current Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Animated landing section with floating elements
- **About Section**: Personal information with location and education cards
- **Skills Section**: Technical and soft skills with progress indicators
- **Projects Section**: Featured projects with hover animations
- **Education Section**: Academic background and certifications
- **Contact Section**: Contact form and information
- **Footer**: Social links and branding

### UI Component Library
- Complete shadcn/ui component set including buttons, forms, dialogs, tooltips, and more
- Custom animations and hover effects
- Responsive design patterns
- Dark theme optimized for motion graphics aesthetic

### Backend Structure
- Route registration system in `server/routes.ts`
- Storage interface with CRUD operations
- In-memory storage implementation for development
- Vite middleware integration for development

## Data Flow

### Client-Side Data Flow
1. React components use TanStack Query for server state
2. Form submissions handled by React Hook Form with Zod validation
3. API requests made through custom query client with error handling
4. Toast notifications for user feedback

### Server-Side Data Flow
1. Express middleware processes requests
2. Custom logging captures API request/response cycles
3. Storage interface abstracts data operations
4. Error middleware handles exceptions

### Development Flow
1. Vite serves React application in development
2. Express server handles API routes
3. Hot module replacement for fast development
4. TypeScript compilation for type safety

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe ORM
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **zod**: Schema validation

### UI Dependencies
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking
- **tsx**: TypeScript execution
- **esbuild**: Fast bundling for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied during deployment

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with Vite dev server
- **Production**: Compiled JavaScript with static file serving
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Scripts
- `dev`: Start development server with hot reloading
- `build`: Build both frontend and backend for production
- `start`: Run production server
- `db:push`: Apply database schema changes
- `check`: TypeScript type checking

### Replit Integration
- **Cartographer Plugin**: Development tooling for Replit environment
- **Runtime Error Overlay**: Enhanced error reporting
- **Development Banner**: Replit branding in development mode

### Database Setup
The application is configured to use PostgreSQL with Drizzle ORM. The current implementation uses in-memory storage for development, but the infrastructure is ready for PostgreSQL integration when the database is provisioned.