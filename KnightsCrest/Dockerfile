# Base image for the container
FROM node:16-alpine

# Set the working directory for the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install required packages
RUN npm install --save react@18.1.0 react-dom@18.1.0 react-native-reanimated@~2.12.0 react-native-safe-area-context@4.4.1

# Copy the application code to the container
COPY . .


# Start the application
CMD [ "npm", "start" ]