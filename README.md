# React Snippet Project

Welcome to the React Snippet project, designed to streamline development practices and enhance code reusability.

## Folder Structure

The project follows a standardized folder structure for best practices:

1. **assets**: This folder is dedicated to storing images, CSS, JavaScript, and font files in their respective directories for easy access and management.

2. **components**: Common React components reside here to promote component reusability across the project.
3. **helpers**: Useful common functions are stored in this folder for repeated use throughout the codebase.
4. **hooks**: Custom React hooks are stored here, providing reusable logic across different components.
5. **pages**: This folder holds code for different routes within the application. Developers will spend a significant amount of time here, utilizing hooks, assets, and helpers to build out various pages.
6. **providers**: Different context providers are stored here, facilitating the management and sharing of application state.
7. **redux**: Redux slices and the main store file are stored in this folder, helping manage application-wide state.
8. **styles**: CSS files, including global styles, variable CSS, and route-specific styles, are organized within this folder.
9. **utils**: Small code snippets, static variables, and data files that are used throughout the application are stored here for easy access and management.

## Project Organization

- **router.js**: This file contains the application router, where routes from the pages folder are configured.
- **app.js**: Basic configurations such as defining Redux providers and themes are set up here. Additionally, the router from router.js is integrated into this file.

## File Imports

To simplify file imports, you can use absolute paths from the root directory instead of navigating through relative paths. For example:

```javascript
import { helperFunction } from 'helpers/helperFunction';
import { itemSlice } from 'redux/itemSlice';
```

## Getting Started

The `package.json` file contains all the necessary configurations for starting the server.

## Project Structure

To help developers familiarize themselves with the project's structure, dummy functions, hooks, and files have been provided. These resources are located within their respective folders in the project.

## Default Path Functionalities

Functionalities have been deployed at the default path ("/") to showcase and understand the practical usage of helpers, hooks, and utils. Developers can explore these functionalities to gain insights into their usage within the project.
