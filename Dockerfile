FROM node:20-alpine as builder
RUN npm i -g pnpm@8.9.2

WORKDIR /src

COPY package.json .
COPY pnpm-lock.yaml .

RUN --mount=type=cache,id=pnpm,target=/root/.pnpm-store/v3 pnpm install --frozen-lockfile
COPY . .

RUN pnpm run build:ssr

FROM node:20-alpine
ENV APP_DIR=/app

COPY --from=builder /src/dist/m4rc3l /app

EXPOSE 4000

CMD ["node", "/app/server/main.js"]
