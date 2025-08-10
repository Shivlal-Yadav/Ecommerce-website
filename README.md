# Next.js Commerce

This is a starter kit for a high-performance e-commerce storefront built with Next.js, TypeScript, and Tailwind CSS. It is inspired by the Vercel `nextjs-commerce` template.

## Local Development Setup

These instructions will guide you through setting up the project on your local machine for development and testing.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/) (version 18 or higher recommended)
*   [Git](https://git-scm.com/)
*   [Visual Studio Code](https://code.visualstudio.com/)

### 1. Setting up Visual Studio Code

Visual Studio Code (VS Code) is a lightweight but powerful source code editor that works great with Next.js and TypeScript.

1.  **Download and Install:** Visit the [VS Code website](https://code.visualstudio.com/) and download the installer for your operating system (Windows, macOS, or Linux). Run the installer and follow the on-screen instructions.

2.  **Install Recommended Extensions:** Open VS Code and navigate to the Extensions view by clicking on the Extensions icon in the Activity Bar or by pressing `Ctrl+Shift+X`. For the best development experience with this project, we recommend installing:
    *   **ESLint:** Integrates ESLint into VS Code to help you find and fix problems in your code.
    *   **Prettier - Code formatter:** An opinionated code formatter that helps maintain consistent code style.
    *   **Tailwind CSS IntelliSense:** Provides intelligent autocompletion, linting, and hover previews for Tailwind CSS classes.

### 2. Cloning the Repository

To get the code on your local machine, you need to clone the repository.

1.  **Open a Terminal:** You can use the integrated terminal in VS Code (`View` -> `Terminal` or `Ctrl+\``) or any other terminal/command prompt.

2.  **Clone the code:** Run the following command, replacing `<repository-url>` with the actual URL of this GitHub repository:
    ```bash
    git clone <repository-url>
    ```

3.  **Navigate to the project directory:**
    ```bash
    cd <repository-directory-name>
    ```

4.  **Open in VS Code:** If you're not already in VS Code, you can open the project folder with the following command:
    ```bash
    code .
    ```

### 3. Running the Application

Once you have the code, you need to install the dependencies and start the development server.

1.  **Install Dependencies:** In the project's root directory (where `package.json` is located), run the following command to install all the necessary Node.js packages:
    ```bash
    npm install
    ```
    This will create a `node_modules` directory containing the project's dependencies.

2.  **Start the Development Server:** To run the application in development mode, execute the following command:
    ```bash
    npm run dev
    ```

3.  **View the Website:** You should see a message in the terminal indicating that the server is ready, like `✓ Ready in 5.2s on http://localhost:3000`. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to see the website in action. The page will auto-reload as you make changes to the code.

You are now all set up to run and modify the application locally!
