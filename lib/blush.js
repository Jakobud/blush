'use strict';

;(function(){

  // Constants
  const REGEX_HEX = /^[0-9a-f]{6}$/;
  const REGEX_HEX_ALPHA = /^[0-9a-f]{8}$/;
  const REGEX_HEX_SHORT = /^[0-9a-f]{3}$/;
  const REGEX_HEX_SHORT_ALPHA = /^[0-9a-f]{4}$/;
  const REGEX_RGB_DEC = /^rgb\(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
  const REGEX_RGBA_DEC = /^rgba\(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),(0?(\.\d+)?|1(\.0+)?)\)$/;
  const REGEX_HSL = /^hsl\(([0-9]|[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|360),([0-9]|[1-9][0-9]|100)%,([0-9]|[1-9][0-9]|100)%\)$/;
  const REGEX_HSLA = /^hsla\(([0-9]|[1-9][0-9]|[1-2][0-9][0-9]|3[0-5][0-9]|360),([0-9]|[1-9][0-9]|100)%,([0-9]|[1-9][0-9]|100)%,(0?(\.\d+)?|1(\.0+)?)\)$/;
  const SYNTAX_ERROR_INVALID_FORMAT = "Invalid value format";

  // Object constructor
  var Blush = function(value) {

    // Is object already a Blush object
    if (value instanceof Blush) {
      return value;
    }

    if (!(this instanceof Blush)) {
      return new Blush(value);
    }

    // No value specified
    if (typeof(value) === 'undefined') {
      value = '#000000FF';
    }

    // If value is not a string
    if (typeof(value) !== 'string') {
      throw new SyntaxError(SYNTAX_ERROR_INVALID_FORMAT);
    }

    // Normalize input (to lowercase, remove whitespace)
    value = value.toLowerCase().replace(/\s+/g, '').replace('#','');

    // Hex format (#RRGGBB)
    if (value.match(REGEX_HEX)) {
      console.log('REGEX_HEX');

    // Hex alpha format - #RRGGBBAA
    } else if (value.match(REGEX_HEX_ALPHA)) {
      console.log('REGEX_HEX_ALPHA');

    // Short hex format - #RGB
    } else if (value.match(REGEX_HEX_SHORT)) {
      console.log('REGEX_HEX_SHORT');

    // Short hex alpha format - #RGBA
    } else if (value.match(REGEX_HEX_SHORT_ALPHA)) {
      console.log('REGEX_HEX_SHORT_ALPHA');

    // RGB format - rgb(255,255,255)
    } else if (value.match(REGEX_RGB_DEC)) {
      console.log('REGEX_RGB_DEC');

    // RGBA format - rgba(255,255,255,1.0)
    } else if (value.match(REGEX_RGBA_DEC)) {
      console.log('REGEX_RGBA_DEC');

    // HSL format - hsl(360,100%,100%)
    } else if (value.match(REGEX_HSL)) {
      console.log('REGEX_HSL');

    // HSLA format - hsla(360,100%,100%,1)
    } else if (value.match(REGEX_HSLA)) {
      console.log('REGEX_HSLA');

    // No matching format
    } else {
      throw new SyntaxError(SYNTAX_ERROR_INVALID_FORMAT);
    }
  }

  module.exports = Blush;

})();
