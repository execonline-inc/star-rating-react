## star-rating-react
> A React star rating component.

## Install
```
$ npm install --save star-rating-react
```

![react-range-slider-demo](https://github.com/execonline-inc/star-rating-react/raw/master/demo.gif)

## Usage
```javascript
import StarRating from 'star-rating-react';

<StarRating
  size={15}
  value={3}
  onChange={function(val){console.log(val)}}
/>,
```

## Props

| Name | Type | Description |
|------|------|-------------|
| size | `Number` | Max Rating (number of possible stars)|
| value | `Number` | Number of star highlighted |
| onChange | `Function` | Invoked when user selects a rating|

## Locally serve example
```
$ npm run dev-server
```
> NOTE: Navigate to [http://localhost:8080/examples/](http://localhost:8080/examples/)

## Build
```
$ npm run build
```

## Test
```
$ npm test
```

## License
MIT
