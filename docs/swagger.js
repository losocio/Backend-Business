const swaggerJsdoc = require("swagger-jsdoc")

const options = {
    definition: {
      openapi: "3.0.3",
      info: {
        title: "Backend-business",
        version: "0.1.0",
        description:
          "This is a CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "u-tad",
          url: "https://u-tad.com",
          email: "alvaro.ocio@live.u-tad.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
      components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer"
            },
        },
        schemas:{
            business: {
                type: "object",
                required: ["name", "cif", "address", "email", "phone", "city"],
                properties: {
                    name: {
                        type: "string",
                        example: "Alvaro de Ocio"
                    },
                    cif: {
                        type: "string",
                        example: "67"
                    },
                    address: {
                        type: "string",
                        example: "C/ Urano, 23"
                    },
                    email: {
                        type: "string",
                        example: "alvaro.ocio@live.u-tad.com"
                    },
                    phone: {
                        type: "string",
                        example: "6789045234"
                    },
                    city: {
                        type: "string",
                        example: "Madrid"
                    },
                    activity: {
                        type: "string",
                        example: "Technology and Software"
                    },
                    title: {
                        type: "string",
                        example: "NSS2006 Software"
                    },
                    summary: {
                        type: "string",
                        example: "We make software"
                    },
                    images: {
                        type: ["string"],
                        example: ["http://dummyimage.com/152x100.png/cc0000/ffffff"]
                    },
                    texts: {
                        type: ["string"],
                        example: ["dummie text"]
                    },
                    votes: {
                        type: "number",
                        example: 100
                    },
                    votesPositive: {    
                        type: "number",
                        example: 88
                    },
                    score: {
                        type: "number",
                        example: "88"
                    },
                    reviews: {
                        type: ["string"],
                        example: "Great business"
                    }
                },
            },
            user: {
                type: "object",
                required: ["name", "email", "age", "password", "city", "interests", "receivesOffers"],
                properties: {
                    name: {
                        type: "string",
                        example: "Juan de Ocio"
                    },
                    email: {
                        type: "string",
                        example: "juandeocio@gmail.com"
                    },
                    age: {
                        type: "number",
                        example: "20"
                    },
                    password: {
                        type: "string",
                        example: "terriblepassword"
                    },
                    city: {
                        type: "string",
                        example: "Madrid"
                    },
                    interests: {
                        type: "string",
                        example: "Retail"
                    },
                    receivesOffers: {
                        type: "boolean",
                        example: "false"
                    }
                }
            }
        },
      },
    },
    apis: ["./routes/*.js"],
  };
  
module.exports = swaggerJsdoc(options)