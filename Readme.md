## TypeScript React GraphQL Client POC with NextJS

Adapted from Jonas Helfer's [Full-stack React & GraphQL Tutorial](https://dev-blog.apollodata.com/react-graphql-tutorial-part-2-server-99d0528c7928). Updated to use TypeScript, styled components, & next.js.

First tab in your terminal:

```
$ git clone git@github.com:lilybarrett/typescript-graphql-client-poc.git
$ npm i
$ npm run build
$ npm run dev
```

Second tab in your terminal:

```
$ git clone git@github.com:lilybarrett/typescript-graphql-server-poc.git
$ npm i
$ npm run dev
```

Note: You will need to create a `.env` file with your Postgres DB_NAME, DB_PASSWORD and DB_USERNAME.

Sample `.env` file content:

```
DB_NAME=database
DB_PASSWORD=password
DB_USERNAME=username
```

Navigate to `localhost:4000/graphiql` and add this mutation into the graphiql interface:

```
mutation {
  createChannel(name: "Dev"){
    id
    name
  }
}
```

Open a new tab in your browser and navigate to `localhost:3000`. You should see a list item for "Dev".
