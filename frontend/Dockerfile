FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose Vite default port
EXPOSE 3000

# Start command (ensure your package.json has "dev": "vite --host")
CMD ["npm", "run", "dev", "--", "--host"]