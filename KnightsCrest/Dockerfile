FROM node:16.10.0-alpine3.14

# Set the working directory
WORKDIR /app

# Install Expo globally
RUN npm install -g expo@latest

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files to the container
COPY . .

# Expose the port used by the app (optional)
EXPOSE 19000
EXPOSE 19006

# Start the development server
CMD ["npm", "start"]