


          
# SoundBoard

## Project Description

SoundBoard is a collaborative music creation platform built on the MERN stack. It allows users to create, record, mix, and share audio tracks in real-time. Users can create virtual jam rooms, record audio loops, mix tracks with volume controls, and export final mixdowns in various formats.

Key features include:
- Real-time audio recording and playback
- Collaborative jam rooms for multiple users
- Track mixing with volume, mute, and solo controls
- Export functionality for WAV and MP3 formats
- User authentication and personalized track management

## Technologies Used

### Backend
- **MongoDB** - NoSQL database for storing user data, rooms, and track metadata
- **Express.js** - Web application framework for building the API
- **Node.js** - JavaScript runtime environment
- **Socket.io** - Real-time bidirectional event-based communication
- **Multer** - Middleware for handling file uploads

### Frontend
- **React** - JavaScript library for building the user interface
- **React Router** - Navigation and routing for the single-page application
- **React Toastify** - Toast notifications for user feedback
- **Web Audio API** - For audio recording, processing, and playback
- **IndexedDB** - Client-side storage for audio data

### Development Tools
- **Vite** - Frontend build tool and development server
- **ESLint** - Code linting and style enforcement
- **npm** - Package management

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)

### Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/soundboard.git
cd soundboard
```

2. Install dependencies for both backend and frontend
```bash
# Install backend dependencies
cd soundboard-backend
npm install

# Install frontend dependencies
cd ../soundboard-frontend
npm install
```

3. Set up environment variables
   - Create a `.env` file in the `soundboard-backend` directory with the following variables:
```
MONGO_URI=mongodb://localhost:27017/soundboard
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Initialize the database
```bash
# Make sure MongoDB is running on your system
# The application will create necessary collections on first run
```

## Usage

### Running the Application

1. Start the backend server
```bash
cd soundboard-backend
npm start
```

2. Start the frontend development server
```bash
cd soundboard-frontend
npm run dev
```

3. Access the application
   - Open your browser and navigate to `http://localhost:3000`
   - Register a new account or log in with existing credentials
   - Create a new jam room or join an existing one using a room code

### Development Mode

```bash
# Run backend with nodemon for auto-reloading
cd soundboard-backend
npm run dev

# Run frontend with Vite's development server
cd soundboard-frontend
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in an existing user
- `GET /api/auth/user` - Get current user information (requires authentication)

### Rooms
- `GET /api/rooms` - Get all public rooms
- `GET /api/rooms/:roomCode` - Get details of a specific room
- `POST /api/rooms` - Create a new room (requires authentication)
- `POST /api/rooms/:roomCode/tracks` - Upload a track to a room (requires authentication)

### Loops
- `GET /api/:roomCode/loops` - Get all loops for a specific room
- `POST /api/:roomCode/loops` - Save a loop to a room (requires authentication)

### Mixdowns
- `POST /api/mixdowns` - Save a mixdown export record (requires authentication)
- `GET /api/mixdowns/user` - Get all mixdowns for the current user (requires authentication)

## Frontend

The React frontend is organized into components, pages, contexts, and utility functions:

### Key Components
- `TrackMixer` - Handles mixing and exporting tracks
- `LoopRecorder` - Records audio loops with visualization
- `AudioRecorder` - Simple audio recording component
- `VolumeControl` - UI for controlling track volume

### Pages
- `Home` - Landing page with room listing
- `RoomDetails` - Main interface for a jam room
- `Login/Register` - Authentication pages
- `Profile` - User profile and track management

### Development

To modify the frontend:

1. Make changes to the React components in `soundboard-frontend/src`
2. The development server will automatically reload with your changes
3. For production build:
```bash
cd soundboard-frontend
npm run build
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Run tests if available
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature-name`)
7. Open a Pull Request

### Code Style Guidelines
- Follow the ESLint configuration
- Write meaningful commit messages
- Document new functions and components
- Add tests for new features when possible

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Your Name - [shashwatmahender2104@gmail.com](shashwatmahender2104@gmail.com)

- GitHub: [github.com/Shashwat2104](https://github.com/Shashwat2104)
- LinkedIn: [linkedin.com/in/shashwat-mahendra-214598163/](https://www.linkedin.com/in/shashwat-mahendra-214598163/)

---

© 2023 SoundBoard. All rights reserved.
        
