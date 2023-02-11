FROM node:16


WORKDIR /app

# Copy the package.json file to the container
COPY package.json .

# Install the required dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Specify the command to run when the container starts
CMD ["npm", "start"]