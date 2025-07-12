# StacKIT 🚀

A modern, full-stack Q&A platform inspired by Stack Overflow, built with Next.js, TypeScript, and Node.js.
#### Hosted on :- https://stackit-tawny.vercel.app/

#### StackIt Wireframe and prototype :- https://app.visily.ai/projects/225a3190-915d-4a26-8ee8-821c7f9eb9de/boards/2038743
![StacKIT](https://img.shields.io/badge/StacKIT-Q%26A%20Platform-blue?style=for-the-badge&logo=stackoverflow)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-18-green?style=for-the-badge&logo=node.js)

## ✨ Features

### 🔐 Authentication & User Management
- User registration and login with JWT authentication
- Role-based access control (User/Admin)
- Secure password hashing with bcrypt
- Protected routes and API endpoints

### 📝 Questions & Answers
- Create, edit, and delete questions
- Rich text editor for question content
- Tag-based categorization system
- Search functionality with filters
- Pagination for better performance
- View count tracking

### 💬 Answer System
- Post answers to questions
- Rich text editor for answer content
- Vote system (upvote/downvote)
- Accept best answers
- Answer editing and deletion

### 🏷️ Tag Management
- Create and manage tags
- Tag-based question filtering
- Popular tags sidebar
- Tag suggestions

### 🎯 Advanced Features
- Real-time search with debouncing
- Multiple filter options (newest, popular, unanswered, etc.)
- Responsive design for all devices
- User statistics dashboard
- Admin panel for basic management

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form + Zod validation
- **Rich Text Editor**: Custom implementation
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with TypeORM
- **Authentication**: JWT + bcrypt
- **File Upload**: Cloudinary + Multer
- **Validation**: class-validator
- **Security**: Helmet, CORS

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Database**: PostgreSQL
- **API Testing**: Postman

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 12+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stackit.git
   cd stackit
   ```

2. **Install frontend dependencies**
   ```bash
   pnpm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   pnpm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create `.env.local` in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```
   
   Create `.env` in the backend directory:
   ```env
   PORT=8000
   DATABASE_URL=postgresql://username:password@localhost:5432/stackit
   JWT_SECRET=your_jwt_secret_here
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

5. **Set up the database**
   ```bash
   cd backend
   # Create database
   createdb stackit
   
   # Run migrations
   pnpm typeorm migration:run
   
   # Seed the database (optional)
   pnpm seed
   cd ..
   ```

6. **Start the development servers**

   Terminal 1 (Backend):
   ```bash
   cd backend
   pnpm dev
   ```

   Terminal 2 (Frontend):
   ```bash
   pnpm dev
   ```

7. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api

## 📁 Project Structure 
 ```
stackit/
├── app/ # Next.js app directory
│ ├── admin/ # Admin panel pages
│ ├── ask/ # Ask question page
│ ├── question/[id]/ # Individual question pages
│ └── globals.css # Global styles

├── backend/ # Express.js API server
│ ├── src/
│ │ ├── controllers/ # Route controllers
│ │ ├── entities/ # TypeORM entities
│ │ ├── middlewares/ # Express middlewares
│ │ ├── routes/ # API routes
│ │ └── services/ # Business logic
│ └── package.json # Backend dependencies and scripts

├── components/ # React components
│ ├── answers/ # Answer-related components
│ ├── auth/ # Authentication components
│ ├── common/ # Shared components
│ ├── editor/ # Rich text editor
│ ├── questions/ # Question-related components
│ └── ui/ # shadcn/ui components

├── lib/ # Utility libraries
│ ├── api.ts # API client configuration
│ └── services/ # API service functions

├── stores/ # Zustand state stores

└── types/ # TypeScript type definitions
 ```
## 🔧 Available Scripts

### Frontend
bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint


### Backend
bash
cd backend
pnpm dev          # Start development server with nodemon
pnpm build        # Build TypeScript to JavaScript
pnpm start        # Start production server
pnpm seed         # Seed database with sample data


## 📚 API Documentation

The API documentation is available in the backend directory: backend/API_DOCUMENTATION.md

### Key Endpoints
- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- GET /api/questions - Get all questions
- POST /api/questions - Create a question
- GET /api/questions/:id - Get single question
- POST /api/answers - Create an answer
- GET /api/tags - Get all tags

## 🎨 UI Components

StacKIT uses a custom component library built on top of shadcn/ui and Radix UI:

- *Responsive Design*: Mobile-first approach
- *Accessibility*: WCAG 2.1 compliant
- *Custom Components*: Rich text editor, tag selector, vote buttons

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Helmet.js security headers
- Input validation and sanitization
- SQL injection prevention with TypeORM

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Render)
1. Connect your GitHub repository
2. Set environment variables
3. Configure PostgreSQL database
4. Deploy

### Environment Variables for Production
env
# Frontend
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api

# Backend
PORT=8000
DATABASE_URL=your_production_db_url
JWT_SECRET=your_secure_jwt_secret
NODE_ENV=production


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Stack Overflow
- Built with Next.js and Express.js
- UI components from shadcn/ui
- Icons from Lucide React

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

---

*Made with ❤ by the StacKIT team[Yash Sharma - yashsharma37158@gmail.com, Jainex Patel - jainexp017@gmail.com, Shubam Nanda - Shubhamnanda637@gmail.com, Sakshi Pawar - titikshashahajipawar2002@gmail.com]*
