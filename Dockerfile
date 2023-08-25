FROM node:20-alpine as build

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

FROM denoland/deno:latest as production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/server ./server
COPY --from=build /usr/src/app/dist ./dist

RUN deno install --allow-all --no-check -r -f https://deno.land/x/deploy/deployctl.ts

EXPOSE 3000

CMD ["deployctl", "deploy", "--project=empty-dove-51", "./server/entry.deno.js"]