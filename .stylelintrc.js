module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-standard-scss"
  ],
  "rules": {
    "selector-class-pattern": null,
    "max-nesting-depth": 4,
    "selector-max-id": 2,
    "indentation": 2,
    "function-name-case": null,
    "order/properties-alphabetical-order": null,
    "scss/at-import-no-partial-leading-underscore": null,
    "scss/at-import-partial-extension-blacklist": null,
    "scss/at-import-partial-extension": null,
    "selector-pseudo-element-no-unknown": null,
    "selector-max-compound-selectors": 5,
    "declaration-block-semicolon-newline-after": null,
    "keyframes-name-pattern": null,
    "custom-property-no-missing-var-function": null,
    "color-function-notation": "legacy",
    "selector-no-qualifying-type": null,
    "max-line-length": null,
    "alpha-value-notation": "number",
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "justify-content",
      "align-items",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "font-size",
      "font-family",
      "text-align",
      "text-justify",
      "text-indent",
      "text-overflow",
      "text-decoration",
      "white-space",
      "color",
      "background",
      "background-position",
      "background-repeat",
      "background-size",
      "background-color",
      "background-clip",
      "border",
      "border-style",
      "border-width",
      "border-color",
      "border-top-style",
      "border-top-width",
      "border-top-color",
      "border-right-style",
      "border-right-width",
      "border-right-color",
      "border-bottom-style",
      "border-bottom-width",
      "border-bottom-color",
      "border-left-style",
      "border-left-width",
      "border-left-color",
      "border-radius",
      "opacity",
      "filter",
      "list-style",
      "outline",
      "visibility",
      "box-shadow",
      "text-shadow",
      "resize",
      "transition"
    ]
  }
}