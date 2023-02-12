# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the remaining source code
COPY . .

# Specify the command to run the development environment
CMD ["npm", "run", "start"]