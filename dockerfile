# Use an official Node.js runtime as a parent image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Install `serve` to serve the built application
RUN npm install -g serve

# Specify the command to run the application
CMD ["serve", "-s", "dist", "-l", "5000"]

# Expose the port that the app will run on
EXPOSE 5000
