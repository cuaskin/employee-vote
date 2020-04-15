require('dotenv').config();

module.exports = {
  env: {
    GRAPHQL_HOST: process.env.GRAPHQL_HOST,
    LOCAL_GRAPHQL_HOST: process.env.LOCAL_GRAPHQL_HOST,
  },
};
