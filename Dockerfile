# FROM node:20-alpine3.17
# WORKDIR /app
# COPY package.json /app
# RUN npm ci --only=production && npm cache clean --force
# COPY . /app
# CMD node index.js
# EXPOSE 8081

# Use the official Node.js image as the base image
FROM node:20-alpine3.17

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install -g @nestjs/cli
RUN npm install
RUN npm install sequelize sequelize-typescript tedious

# Copy all the application files to the container
COPY . .

# Expose the port your Node.js app is listening on
EXPOSE 3010

# Start the Node.js app
CMD ["npm", "run", "start"]