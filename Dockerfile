FROM node
ENV NODE_ENV=production
ENV PORT=8080
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node","app"]

