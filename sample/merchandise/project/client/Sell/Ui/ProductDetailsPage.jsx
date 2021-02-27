"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDetailsPage = void 0;

var _entityArchetype = require("@autonomy-design-sample/entity-archetype");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const productGateway = (0, _entityArchetype.use)();

class ProductDetailsPage extends _entityArchetype.Widget {
  theProduct = productGateway.getProduct(this.props.productId);

  constructor(props) {
    super();
    this.props = props;
  }

  render(a) {
    const ProductBasics = this.renderProductBasics.bind(this);
    const Xszk = this.renderXszk.bind(this);
    return <div>
        <ProductBasics />
        <Xszk />
      </div>;
  }

  renderProductBasics() {
    return <div>{this.theProduct.name}</div>;
  }

  renderXszk() {
    return <div>限时折扣</div>;
  }

}

exports.ProductDetailsPage = ProductDetailsPage;