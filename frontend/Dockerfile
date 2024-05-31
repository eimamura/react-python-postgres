# Use an official Node.js LTS (Long Term Support) image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /workspace

# # Copy package.json and package-lock.json to the container
COPY package*.json ./

# # Install dependencies
RUN npm install

# # Copy the rest of the application code to the container
COPY . .

# # Build the Next.js application
RUN npm run build

# # Expose the port on which the Next.js application will run (default is 3000)
EXPOSE 3000

# # Define the command to start the Next.js application
# CMD ["npm", "start"]
# CMD [ "/bin/sh" ]
# CMD [ "sleep", "inifinity" ]
CMD ["npm", "run", "dev"]