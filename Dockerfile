FROM node:20-alpine as build

ENV NAMAGEN_API=https://full-duck-87-qfzve1n0y4s0.deno.dev \
    STARCROSSED_API=https://hungry-heron-21.deno.dev \
    AL_LUGHA_MISMA_API=https://brave-robin-143.deno.dev

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

CMD ["deno", "run", "-A", "./server/entry.deno.js"]