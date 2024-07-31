Sure! Here's a shorter version of the `README.md` file:

# News Articles

A React project to display news articles using Material-UI, Emotion, and Axios. Built with Vite.

## Installation

1. Clone the repository:

   git clone <repository-url>
   cd news-articles

2. Install dependencies:

   npm install

## Development

Start the development server:

npm run dev
Access the app at `http://localhost:5173`.

## Build

Create a production build:

npm run build

## Lint

Run ESLint:
npm run lint

## Docker

1. Build the Docker image:

   docker build -t news-articles .

2. Run the Docker container:

   docker run -p 5000:5000 news-articles

Access the app at `http://localhost:5000`.

## Dependencies

- `react`, `react-dom`
- `@emotion/react`, `@emotion/styled`
- `@mui/material`, `@mui/icons-material`
- `axios`, `react-hook-form`

## Dev Dependencies

- `@vitejs/plugin-react`
- `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- `vite`
