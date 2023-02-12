# Use Node.js as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json file to the container
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the code to the container
COPY . .

# Set the command to run when the container starts
CMD [ "npm", "start" ]