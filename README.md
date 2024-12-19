# Image Prediction using Tenser Flow

# Images of the App :memo:
![Image 1](https://github.com/Neel-max-cpu/ImagePrediction/blob/main/public/image/1.png?raw=true)
![Image 2](https://github.com/Neel-max-cpu/ImagePrediction/blob/main/public/image/2.png?raw=true)
![Image 3](https://github.com/Neel-max-cpu/ImagePrediction/blob/main/public/image/3.png?raw=true)


# References
- **Chat GPT**
- **V0(by vercel)**
- **YouTube**
- **Shadcn documentation**
- **TenserFlow documentation**

## Overview
This project is an Ai/Ml - web based project where one can upload and image and will get the data on that image.

## Check the video for the brief of the project without running here  -> [Link](https://youtu.be/AnQMyPR-q2Y) ⭐

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [How to Run](#how-to-run)

## Features
- **Upload**:  Users can uplod their image.
- **View**: User can see their uploaded image and check the data that the model displays.
- **Responsive Design**: Optimized for various screen sizes, providing a seamless experience on both mobile and desktop devices.

## Technologies Used
- **Frontend**: React+TypeScript+vite
- **Api**: Tenser Flow Api
- **Styling**: Shadcn Ui and custom Tailwind CSS for responsive design
- **Version Control**: Git & GitHub

## Installation


### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v14 or later)
- npm (Node Package Manager)

### Step 1: Clone the Repository
```bash
git clone https://github.com/Neel-max-cpu/ImagePrediction.git
```

### Step 2: Navigate to the Project Directory
Change into the project directory:
```
cd [the folder name]
```

### Step 3: Install Dependencies
Run the following command to install the necessary dependencies for the frontend:
```
npm install
```


### Usage
After setting up, you can start the application.


## How to Run

### Step 1: Start the Frontend
In a new terminal window, navigate to the root directory and start the React application:
```
npm run dev
```

### Step 3: Access the Application
Open your web browser and go to http://localhost:5173/ to access the App.





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
