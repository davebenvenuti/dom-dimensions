# dom-dimensions

dom-dimensions is a small library that makes DOM element dimension calculation easier.

## Installation

```
yarn add dom-dimensions
```

or

```
npm install dom-dimensions
```

## Usage

```
import DOMDimensions from 'dom-dimensions';

const el = document.getElementById("someElement"); // etc

const dimensions = new DOMDimensions(el);

const border = dimensions.border(); // { top: ..., right: ..., bottom: ..., left: ... } as floats
const margin = dimensions.margin(); // ditto
const padding = dimensions.padding(); // ditto

const innerHeight = dimensions.height();
const heightIncludingPadding = dimensions.height({ padding: true });
const heightIncludingPaddingAndMargin = dimensions.height({ padding: true, margin: true });
const heightIncludingPaddingMarginAndBorder = dimensions.height({ padding: true, margin: true, border: true }):

const innerWidth = dimensions.width();
const widthIncludingPadding = dimensions.width({ padding: true });
const widthIncludingPaddingAndMargin = dimensions.width({ padding: true, margin: true });
const widthIncludingPaddingMarginAndBorder = dimensions.width({ padding: true, margin: true, border: true }):
```

## API

### class DOMDimensions

- constructor(domElement, [window]);

  The constructor accepts a domElement and an optional `window`, defaults to the global `window`, if it exists

- border()

  Returns an object with attributes `top`, `right`, `bottom`, and `left`, each of which is the corresponding value as a float

- margin()

  Returns an object with attributes `top`, `right`, `bottom`, and `left`, each of which is the corresponding value as a float

- padding()

  Returns an object with attributes `top`, `right`, `bottom`, and `left`, each of which is the corresponding value as a float

- height(options={})

  By default, returns the inner height of the element, not including margin, border, or padding.  Options accepts any combination of `padding`, `margin`, and/or `border`, where if the value is truthy, will be included in height calculation

- width(options={})

  By default, returns the inner width of the element, not including margin, border, or padding.  Options accepts any combination of `padding`, `margin`, and/or `border`, where if the value is truthy, will be included in width calculation

## License

MIT
