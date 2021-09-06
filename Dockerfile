# ================ #
#    Base Stage    #
# ================ #

FROM node:16-alpine as base

WORKDIR /usr/src/app

ENV HUSKY=0
ENV CI=true

RUN apk add --no-cache dumb-init

COPY --chown=node:node package.json .
COPY --chown=node:node yarn.lock .
COPY --chown=node:node tsconfig.base.json tsconfig.base.json
COPY --chown=node:node src/ src/
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node .yarn/ .yarn/

RUN sed -i 's/"prepare": "husky install .github\/husky"/"prepare": ""/' ./package.json

ENTRYPOINT ["dumb-init", "--"]

# ================ #
#   Runner Stage   #
# ================ #

FROM base as runner

ENV NODE_ENV="production"
ENV NODE_OPTIONS="--experimental-json-modules --enable-source-maps"

RUN yarn install --immutable

RUN yarn build

USER node

CMD [ "yarn", "run", "start"]
