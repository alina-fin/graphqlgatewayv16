# productssubgraph

This is ApolloGraphQL Federation Subgraph deployed on Serverless Lambda, created for https://github.com/apollographql/federation/issues/1523  

To deploy, you will need to have the following installed:
- NPM
- Serverless: https://www.serverless.com/framework/docs/getting-started

Also:
- Create a free AWS account and set up a named AWS Profile for Serverless to access it: https://www.serverless.com/framework/docs/providers/aws/guide/credentials/

Run the following commands:
1. npm install
2. serverless deploy --aws-profile=[PROFILE]
