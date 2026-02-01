FROM node:18-alpine

WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy remaining source code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
