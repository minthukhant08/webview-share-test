# Use the official Node.js image as the base image
FROM node:alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and yarn.lock files
# COPY package.json yarn.lock ./

# Install dependencies using Corepack and Yarn
RUN yarn install 

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN yarn build

# Create a new stage for the final image
FROM node:alpine AS final

# Set the working directory
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./
COPY --from=builder /app/next.config.js ./next.config.js

# Expose the application's port
EXPOSE 3000

# Set the default command to start the application
CMD ["yarn", "start"]
