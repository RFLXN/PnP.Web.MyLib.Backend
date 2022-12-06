# PnP Web Project Backend

## Development Objective

**Create My Library Web Application.**

1. Search Book or Movie
2. Add Review/Score About Book/Movie
3. Look Back All My Reviews at Once

## Stacks

* [Node.js](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [TypeORM](https://typeorm.io/)
* AND SOME RDB?

## Design Documents

* API Specification
    * [View in Postman](https://www.postman.com/cryosat-geoscientist-62068423/workspace/pnp-web-mylib-backend/api/c44990c1-325b-4681-933c-8746353ebb6b)
    * [Raw OpenAPI JSON](https://github.com/jhchoi123/PnP.Web.MyLib.Backend/blob/master/document/openapi.json)
    * or Run Script `yarpm run start:apidoc` for Local Hosted HTML API Document
* DB Structure
    * [Entity Relationship Diagram](https://github.com/jhchoi123/PnP.Web.MyLib.Backend/blob/master/document/ERD.png)
      ![Image](https://raw.githubusercontent.com/jhchoi123/PnP.Web.MyLib.Backend/master/document/ERD.png)
* Server Architecture
    * [Diagram](https://github.com/jhchoi123/PnP.Web.MyLib.Backend/blob/master/document/Server%20Architecture%20Diagram.png)
      ![Image](https://raw.githubusercontent.com/jhchoi123/PnP.Web.MyLib.Backend/master/document/Server%20Architecture%20Diagram.png)

## Project Structure

* `dist/`: JS Source Codes that Built from `src/` (`yarpm run start` for Start Server)
* `document/`: Design Documents
    * `openapi.json`: OpenAPI 3.1 JSON File
    * `api-docs/index.html`: HTML API Document (`yarpm run generate-api-docs` for Generate HTML from `openapi.json`)
* `.eslintrc.json`: ESList Configuration File (`yarpm run lint:fix` for Lint `/src` Code)
* `clear-dist.js`: Delete `/dist` for Clean-Build (`yarpm run clear-dist` for Delete `/dist`)
* `src/`: Typescript Source Codes (`yarpm run build` for Build to JS)
    * `router/`: Express.js Routers
    * `util/`: Utility Functions
    * `type/`: Types/Interfaces for Typescript (This Will be Ignored When Runtime)
    * `db/`: Database Functions
    * `router-loader.ts`: Function for Load `router/`  Dynamically
    * `main.ts`: Main Function for Run Server

## Dependencies

* concurrently: for package.json scripts
* yarpm: package.json scripts Executor (npm or yarn) Resolver
* express: Web Application Server
* node-fetch: fetch() API for Node.js
* typeorm: Relational Database Object Relation Mapper for Typescript
* typescript: Typescript
* eslint: Linter for TS/JS
