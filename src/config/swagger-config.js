/* eslint max-len: ["error", { "ignoreComments": true, "ignoreStrings": true }] */
import swaggerJSDoc from "swagger-jsdoc"

/**
 * @constant {object} swaggerDefinition - OpenAPI specification details
 */
const swaggerDefinition = {
  openapi: "3.0.3",
  info: {
    title: "Movie QA Test",
    version: "1.0.0",
    description:
      "Movie APIs with `Node.js Express` framework using `Sequelize` with `PostgreSQL` database.",
    contact: {
      name: "Ayasi Bahifatih Priyoda",
      url: "https://github.com/Ayasibp",
    },
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
}

/**
 * @constant {object} options - object holding swaggerDefintion and apis paths required for JSDoc parsing
 */
const options = {
  definition: swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["src/routes/**/*.route.js"],
}

/**
 * @constant {object} swaggerSpec - swaggerJSDoc parsed specifications
 */
const swaggerSpec = swaggerJSDoc(options)

export { swaggerSpec }
