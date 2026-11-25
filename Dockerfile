
# Use Node.js 24 Alpine image
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY app.js .

# Expose application port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
