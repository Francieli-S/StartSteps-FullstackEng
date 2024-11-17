# Use the official Node.js image as a base
# # FROM node:14 
# # It can be possible, depending on the use case, to build with node: 14, then below run with another version
FROM node:14 AS builder

# # Set the working directory
WORKDIR /app

# # Copy package.json and package-lock.json
COPY package*.json ./

# # Install dependencies
# # At this point the node_modules folder is created and it should be added to the .dockerignore, otherwise, in the
# # next step COPY . . the just installed folder will be replaced for the existed one.
RUN npm install

# # Copy the rest of the application code
COPY . .

# # Build the TypeScript application
# # RUN npx tsc 
# # Because I added script build in the package.json, here I can add:
RUN npm run build  

FROM node:14 AS runner

WORKDIR /app

# # For running layer, we have to say what we want to copy from builder layer and to where.

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# # Command to run the application
CMD ["node", "dist/index.js"]