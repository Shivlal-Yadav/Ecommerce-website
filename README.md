# Sample Node.js E-commerce Website

This is a sample e-commerce website built with Node.js, Express, and EJS.

## Local Development Setup

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/) (which includes npm)
*   [Git](https://git-scm.com/)
*   [Visual Studio Code](https://code.visualstudio.com/)

### 1. Setting up Visual Studio Code

Visual Studio Code (VS Code) is a lightweight but powerful source code editor.

1.  **Download and Install:** Visit the [VS Code website](https://code.visualstudio.com/) and download the installer for your operating system (Windows, macOS, or Linux). Run the installer and follow the on-screen instructions.

2.  **Install Recommended Extensions:** Open VS Code and navigate to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`. Here are some recommended extensions for Node.js development:
    *   **ESLint:** Integrates ESLint into VS Code to help you find and fix problems in your JavaScript code.
    *   **Prettier - Code formatter:** An opinionated code formatter that helps maintain consistent code style.
    *   **DotENV:** Support for `dotenv` file syntax.

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

Once you have the code, you need to install the dependencies and start the server.

1.  **Install Dependencies:** In the project's root directory (where `package.json` is located), run the following command to install all the necessary Node.js packages:
    ```bash
    npm install
    ```
    This will create a `node_modules` directory containing the project's dependencies.

2.  **Start the Server:** To run the application, execute the following command:
    ```bash
    node index.js
    ```

3.  **View the Website:** You should see a message in the terminal indicating that the server is running, like `Server is running on http://localhost:3000`. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to see the website in action.

You are now all set up to run and modify the application locally!
