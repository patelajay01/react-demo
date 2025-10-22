# Step 1: Base image
FROM node:18

# Step 2: Working directory
WORKDIR /app

# Step 3: Copy package files first (to leverage Docker cache)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy rest of the app files
COPY . .

# Step 6: Build React app (for production)
RUN npm run build

# Step 7: Expose the app port
EXPOSE 3000

# Step 8: Start the React app
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
