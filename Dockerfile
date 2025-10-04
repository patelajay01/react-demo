# Step 1: Node base image
FROM node:18

# Step 2: Work directory set karo
WORKDIR /app

# Step 3: package.json aur package-lock.json copy karo
COPY package*.json ./

# Step 4: Dependencies install karo
RUN npm install

# Step 5: Project files copy karo
COPY . .

# Step 6: Port expose karo (React dev server ke liye)
EXPOSE 3000

# Step 7: React app start karo
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
