# Foodie's 🍽️

**Foodie's** is a restaurant website where users can log in and post their food items, which are stored in MongoDB.

## Features 🛠️

- **Foods Page** 🍲: Displays a list of all food items with a search functionality to search by food name.
- **Gallery Page** 🖼️: Users can leave feedback on their favorite foods, which will be displayed in the gallery.
- **My Added Food Page** 🍴: Users can view, edit, and delete their own added food items.
- **My Ordered Food Page** 📋: Users can view the food items they have ordered.
- **Food Details Page** 📜: Shows detailed information about a specific food item.
- **Checkout Page** 💳: Facilitates the purchase process.
- **JWT Authentication** 🔒: Securely authenticates users using JSON Web Tokens, protecting routes that require user login.

## Technologies 🛠️

- **React** :gear: - A JavaScript library for building user interfaces.
- **MongoDB** :database: - A NoSQL database for storing data.
- **JWT** :key: - JSON Web Tokens for secure authentication and authorization.
- **React Icons** :octocat: - Provides popular icons for React applications.
- **Framer Motion** :sparkles: - A library for animations in React.
- **Lottie React** :star2: - A library for rendering Lottie animations in React.
- **React Helmet** :mag: - Manages changes to the document head in React applications.

## Responsive Design 📱

The website is fully responsive, ensuring a good experience on both mobile and desktop devices.

## JWT Authentication 🔒

This project uses JSON Web Tokens (JWT) for secure authentication and authorization. JWT ensures that only authenticated users can access protected routes.

### How JWT Works:

1. **User Login**: On login, a JWT is generated and sent to the client.
2. **Token Storage**: The token is stored on the client-side (e.g., localStorage or HTTP-only cookie).
3. **Authenticated Requests**: The JWT is included in the `Authorization` header for requests to protected routes.
4. **Token Verification**: The server verifies the JWT to confirm the user's identity and permissions.
5. **Logout**: On logout, the JWT is invalidated on the client-side.

## Setup 🚀

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:

    ```bash
    cd <project-directory>
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

## Contributing 🤝

If you would like to contribute, please create a pull request or report an issue.

## License 📜

This project is licensed under the [MIT License](LICENSE).
