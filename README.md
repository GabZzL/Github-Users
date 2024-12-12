# GitHub Users

A React-based web application that leverages the GitHub API to fetch and display detailed information about GitHub users. This includes their profile details and repositories. The project is designed to demonstrate API integration, dynamic data rendering, and state management using modern React features.

## Features

- Fetch and display user profile information (e.g., name, avatar, bio).
- Retrieve and list repositories for a specified user.
- Clear and handle errors gracefully.
- Reset user data when needed.
- Manage state efficiently using `useContext` and `useReducer`.

## Technologies Used

- **JavaScript**: Core language for the project.
- **React**: Framework for building the user interface.
- **CSS Modules**: For styling components with scoped CSS.
- **GitHub API**: To fetch user and repository data.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repository-name
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm start
   ```

5. **Open the application in your browser:**

   Go to [http://localhost:3000](http://localhost:3000).

## Project Structure

The project is structured as follows:

```
├── src
│   ├── components    # React components
│   ├── store         # Context and reducer for state management
│   ├── UI            # Reusable and custom components
│   ├── utils         # Utility functions (e.g., API requests)
│   └── App.js        # Main application component
│
├── public            # Public assets
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## Key React Features Implemented

- **`useContext`**: Provides a centralized context for managing user data, errors, and loading states across the application.
- **`useReducer`**: Simplifies state management by consolidating all state transitions into a single reducer function.

## API Integration

This application uses the [GitHub REST API](https://docs.github.com/en/rest) to fetch:

- User profile information: `https://api.github.com/users/{username}`
- User repositories: `https://api.github.com/users/{username}/repos`

### Handling API Requests

The project includes utility functions for making API requests and managing errors gracefully.

For any questions or feedback, feel free to reach out:

- GitHub: [GabZzL](https://github.com/GabZzL)
- Email: armandogabrieljl@gmail.com
