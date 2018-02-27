## TypeScript React GraphQL Client POC with NextJS

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
