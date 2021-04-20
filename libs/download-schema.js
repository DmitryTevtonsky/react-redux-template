/* eslint-disable */

const axios = require("axios");
const { printSchema } = require("graphql");
const {
  introspectSchema,
  makeRemoteExecutableSchema
} = require("apollo-server");
const fs = require("fs");

require("dotenv-flow").config({ path: "." });

const fetcher = async () => {
  try {
    return await axios.get(
        `${process.env.PROXY}/${process.env.GRAPHQL_SCHEMA}`
    );
  } catch (e) {
    console.log(e);
  }
};

(async function getSchema() {
  const schema = makeRemoteExecutableSchema({
    schema: await introspectSchema(fetcher),
    fetcher
  });

  fs.writeFileSync("schema.graphql", printSchema(schema));
})();
