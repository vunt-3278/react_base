from node:20 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install the dependencies
# If you need yarn specifically, you can check if it's installed and install it if not
RUN if [ ! -x "$(command -v yarn)" ]; then npm install -g yarn; fi
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the React app using serve
CMD ["serve", "-s", "build", "-l", "3000"]