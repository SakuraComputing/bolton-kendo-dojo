# Bolton Kendo Dojo

Official club website. Written using React JS / Redux. Node API layer. Not yet connected to Mongo Cloud
Copyright all code owned by Bolton Kendo Club

## Quickstart

```
git clone git@github.com:SakuraComputing/bolton-kendo-dojo.git
yarn install
```

## Testing

TDD using Jest and Enzyme

```
yarn run test
```

## Mongo Setup

```
Create prod_keys.js file in config directory.
Add mongoURI and secretOrKey
```

## Deployment

```
master is linked to netlify https://app.netlify.com/

```

## React Map GL

For the map the wrapper below is being used for Uber MapBox API

[React Map GL](https://uber.github.io/react-map-gl/#/Documentation/api-reference/geolocate-control)

`Obtain an API Key and add this to apiMapKey in prod_keys.js`
