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
    * [View in Postman](https://www.postman.com/cryosat-geoscientist-62068423/workspace/my-workspace/api/c44990c1-325b-4681-933c-8746353ebb6b)
    * [Raw OpenAPI JSON](https://github.com/jhchoi123/PnP.Web.MyLib.Backend/blob/master/document/openapi.json)
* DB Structure
    * [Entity Relationship Diagram](https://github.com/jhchoi123/PnP.Web.MyLib.Backend/blob/master/document/ERD.png)

## Project Structure

* `dist/`: JS Source Codes that Built from `src/` (`yarn run start` for Start Server)
* `document/`: Design Documents
* `.eslintrc.json`: ESList Configuration File (`yarn run lint:fix` for Lint `/src` Code)
* `clear-dist.js`: Delete `/dist` for Clean-Build (`yarn run clear-dist` for Delete `/dist`)
* `src/`: Typescript Source Codes (`yarn run build` for Build to JS)
    * `router/`: Express.js Routers
    * `util/`: Utility Functions
    * `type/`: Types/Interfaces for Typescript (This Will be Ignored When Runtime)
    * `db/`: Database Functions
    * `router-loader.ts`: Function for Load `router/`  Dynamically
    * `main.ts`: Main Function for Run Server
