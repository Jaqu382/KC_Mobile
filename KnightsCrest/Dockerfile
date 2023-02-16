# Use the official Node.js v14 image as a parent image
FROM node:14

# Install the Expo CLI globally
RUN npm install -g expo-cli

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the app source code into the container
COPY . .

# Expose the port used by Expo (typically 19000)
EXPOSE 19000

# Start the development server when the container starts
CMD [ "npm", "start" ]
