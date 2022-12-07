# NESTJS BOILERPLATE WITH AUTENTIFICATION AND MIGRATIONS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Get started

```bash
# Install node_modules
$ npm install

# Run docker-compose
$ docker-compose up -d

# Run migrations
$ npm run typeorm:migrate:run

# Run the app 
$ npm run start 
or
$ npm run start:dev
```

### .env.dev

Create a `.env.dev` file including the following enviroment variables:

```bash
POSTGRES_HOST=
POSTGRES_PORT=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=

PORT=
MODE=DEV
RUN_MIGRATIONS=true

SWAGGER_ENABLED=true

AUTH_ACCESS_EXPIRE=
AUTH_REFRESH_EXPIRE=
AUTH_HASH_ROUNDS=
JWT_KEY=
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Migrations

```bash
# generate
$ npm run typeorm:migrate:gen src/migrations/migrationName

# run
$ npm run typeorm:migrate:run

# drop
$ npm run typeorm:migrate:drop
```

## Libraries

- [@nestjs/common](https://www.npmjs.com/package/@nestjs/common)
- [@nestjs/config](https://www.npmjs.com/package/@nestjs/config)
- [@nestjs/core](https://www.npmjs.com/package/@nestjs/core)
- [@nestjs/jwt](https://www.npmjs.com/package/@nestjs/jwt)
- [@nestjs/passport](https://www.npmjs.com/package/@nestjs/passport)
- [@nestjs/platform-express](https://www.npmjs.com/package/@nestjs/platform-express)
- [@nestjs/swagger](https://www.npmjs.com/package/@nestjs/swagger)
- [@nestjs/typeorm](https://www.npmjs.com/package/@nestjs/typeorm)
- [@nestjsx/crud](https://www.npmjs.com/package/@nestjsx/crud)
- [@nestjsx/crud-typeorm](https://www.npmjs.com/package/@vianneybr/nestjsx-crud-typeorm)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [class-transformer](https://www.npmjs.com/package/class-transformer)
- [class-validator](https://www.npmjs.com/package/class-validator)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [env-cmd](https://www.npmjs.com/package/env-cmd)
- [express-http-context](https://www.npmjs.com/package/express-http-context)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [passport](https://www.npmjs.com/package/passport)
- [passport-jwt](https://www.npmjs.com/package/passport-jwt)
- [passport-local](https://www.npmjs.com/package/passport-local)
- [pg](https://www.npmjs.com/package/pg)
- [reflect-metadata](https://www.npmjs.com/package/reflect)
- [rimraf](https://www.npmjs.com/package/rimraf)
- [rxjs](https://www.npmjs.com/package/rxjs)
- [typeorm](https://www.npmjs.com/package/typeorm)

## Documentation checked

- [Migrations fix](https://stackoverflow.com/questions/71740574/cannot-add-cli-parameters-to-datasourceoptions-in-typeorm)


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```