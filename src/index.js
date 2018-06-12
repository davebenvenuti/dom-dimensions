function parsed(object) {
  let ret = {};

  for(const attr in object) {
    ret[attr] = parseFloat(object[attr]) || 0;
  }

  return ret;
}

function style(domElement, windowOverride = null) {
  let w = (windowOverride || (typeof window === "undefined" ? null : window));
  if((typeof w !== "undefined") && !!w.getComputedStyle) {
    return w.getComputedStyle(domElement, null)
  } else {
    return domElement.currentStyle;
  }
}

export default class DOMDimensions {
  constructor(domElement, windowOverride = null) {
    this.domElement = domElement;
    this.style = style(domElement, windowOverride);
  }

  margin() {
    const {
      marginLeft,
      marginRight,
      marginTop,
      marginBottom
    } = this.style;

    return parsed({
      left: marginLeft,
      right: marginRight,
      top: marginTop,
      bottom: marginBottom
    })
  }

  border() {
    const {
      borderLeftWidth,
      borderRightWidth,
      borderTopWidth,
      borderBottomWidth
    } = this.style;

    return parsed({
      left: borderLeftWidth,
      right: borderRightWidth,
      top: borderTopWidth,
      bottom: borderBottomWidth
    });
  }

  padding() {
    const {
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
    } = this.style;

    return parsed({
      left: paddingLeft,
      right: paddingRight,
      top: paddingTop,
      bottom: paddingBottom
    });
  }

  width(options={}) {
    let width = parseFloat(this.style.width) || 0;

    for(const option of ["padding", "margin", "border"]) {
      if(!!options[option]) {
        const value = this[option]();

        width = width + value.left + value.right;
      }
    }

    return width;
  }

  height(options = {}) {
    let height = parseFloat(this.style.height) || 0;

    for(const option of ["padding", "margin", "border"]) {
      if(!!options[option]) {
        const value = this[option]();

        height = height + value.top + value.bottom;
      }
    }

    return height;
  }
}
