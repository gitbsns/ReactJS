FROM:Node 18-Alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
