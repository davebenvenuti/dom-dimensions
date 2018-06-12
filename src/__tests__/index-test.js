import DOMDimensions from '../index';

import { JSDOM } from 'jsdom';

let domDimensions;

beforeAll(() => {
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          .test {
            border-top-width: 1px;
            border-right: 2px;
            border-bottom: 3px;
            border-left: 4px;
            padding: 5px 6px 7px 8px;
            margin: 9px 10px 11px 12px;
            height: 100px;
            width: 200px;
          }
        </style>
      </head>
      <body>
        <div class="test" id="theDiv">
          howdy
        </div>
      </body>
    </html>
  `);

  const { window } = dom;
  const { document } = window;
  const div = document.getElementById("theDiv");

  domDimensions = new DOMDimensions(div, window);
});

test("returns border", () => {
  const border = domDimensions.border();

  expect(border.top).toEqual(1);
  expect(border.right).toEqual(2);
  expect(border.bottom).toEqual(3);
  expect(border.left).toEqual(4);
});

test("returns padding", () => {
  const padding = domDimensions.padding();

  expect(padding.top).toEqual(5);
  expect(padding.right).toEqual(6);
  expect(padding.bottom).toEqual(7);
  expect(padding.left).toEqual(8);
});

test("returns margin", () => {
  const margin = domDimensions.margin();

  expect(margin.top).toEqual(9);
  expect(margin.right).toEqual(10);
  expect(margin.bottom).toEqual(11);
  expect(margin.left).toEqual(12);
});

test("returns inner width", () => {
  expect(domDimensions.width()).toEqual(200);
});

test("returns width including padding", () => {
  expect(domDimensions.width({ padding: true })).toEqual(214);
});

test("returns width including padding and margin", () => {
  expect(domDimensions.width({
    padding: true,
    margin: true
  })).toEqual(236);
});

test("returns width including padding, margin, and border", () => {
  expect(domDimensions.width({
    padding: true,
    margin: true,
    border: true
  })).toEqual(242);
});

test("returns inner height", () => {
  expect(domDimensions.height()).toEqual(100);
});

test("returns height including padding", () => {
  expect(domDimensions.height({ padding: true })).toEqual(112);
});

test("returns height including padding and margin", () => {
  expect(domDimensions.height({
    padding: true,
    margin: true
  })).toEqual(132);
});

test("returns height including padding, margin, and border", () => {
  expect(domDimensions.height({
    padding: true,
    margin: true,
    border: true
  })).toEqual(136);
});
