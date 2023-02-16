# Base image for the container
FROM node:16-alpine

# Set the working directory for the container
WORKDIR /app

# Install the specified version of NPM
RUN npm install -g npm@7.24.0

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install required packages
RUN npm install --save react@16.10.0 react-dom@16.10.0 react-native-reanimated@~2.12.0 react-native-safe-area-context@4.4.1

# Install Expo globally
RUN npm install -g expo-cli

# Copy the application code to the container
COPY . .

# Expose port if necessary
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Start the application
CMD [ "npm", "start" ]