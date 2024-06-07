const path = require('path')
const dirSearchAlias = path.resolve(__dirname, 'template/js/lib/search-engine')
const pathDslAlias = path.resolve(dirSearchAlias, 'dsl')

module.exports = () => ({
  resolve: {
    alias: {
    /*   './lib/dsl': pathDslAlias,
      './../lib/dsl': pathDslAlias,
      '../lib/dsl': pathDslAlias, */
      './methods/set-search-term': path.resolve(dirSearchAlias, 'set-search-term'),
      './base-config': path.resolve(__dirname, 'template/js/netlify-cms/base-config'),/*
      './methods/set-search-term': path.resolve(dirSearchAlias, 'set-search-term'), */
      /* './html/ProductGallery.html': path.resolve(__dirname, 'template/js/custom-js/components/ProductGallery.html'),
      './js/ProductGallery.js': path.resolve(__dirname, 'template/js/custom-js/components/ProductGallery.js'),
      './scss/ProductGallery.scss': path.resolve(__dirname, 'template/js/custom-js/components/ProductGallery.scss'),
       */'./html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.html'),
      './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.js'),
      './js/ProductCard.js': path.resolve(__dirname, 'template/js/custom-js/components/ProductCard.js'),
      './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/components/APrices.html'),
      /* './html/SearchEngine.html': path.resolve(__dirname, 'template/js/custom-js/components/SearchEngine.html'),
      './js/SearchEngine.js': path.resolve(__dirname, 'template/js/custom-js/html/SearchEngine.js'),
      './html/CartItem.html': path.resolve(__dirname, 'template/js/custom-js/html/CartItem.html'),
      './js/CartItem.js': path.resolve(__dirname, 'template/js/custom-js/html/CartItem.js'),
      './html/AccountPoints.html': path.resolve(__dirname, 'template/js/custom-js/html/AccountPoints.html'),
      './js/AccountPoints.js': path.resolve(__dirname, 'template/js/custom-js/html/AccountPoints.js'),
      './js/TheAccount.js': path.resolve(__dirname, 'template/js/custom-js/html/TheAccount.js'),
      './html/TheAccount.html': path.resolve(__dirname, 'template/js/custom-js/html/TheAccount.html'),
      './html/LoginModal.html': path.resolve(__dirname, 'template/js/custom-js/html/LoginModal.html'),
      './js/LoginModal.js': path.resolve(__dirname, 'template/js/custom-js/html/LoginModal.js'),
      './html/TheCart.html': path.resolve(__dirname, 'template/js/custom-js/components/TheCart.html'),
      './js/TheCart.js': path.resolve(__dirname, 'template/js/custom-js/components/TheCart.js'),
      './html/EcSummary.html': path.resolve(__dirname, 'template/js/custom-js/components/EcSummary.html'),
      './Account.js': path.resolve(__dirname, 'template/js/custom-js/components/Account.js'),
      './Account.vue': path.resolve(__dirname, 'template/js/custom-js/components/Account.vue'),
      './js/EcSummary.js': path.resolve(__dirname, 'template/js/custom-js/components/EcSummary.js'),
      './html/QuantitySelector.html': path.resolve(__dirname, 'template/js/custom-js/html/QuantitySelector.html'),
      './js/QuantitySelector.js': path.resolve(__dirname, 'template/js/custom-js/html/QuantitySelector.js'),
      './html/CartQuickview.html': path.resolve(__dirname, 'template/js/custom-js/html/CartQuickview.html'),
      './js/CartQuickview.js': path.resolve(__dirname, 'template/js/custom-js/html/CartQuickview.js'),
      './js/PaymentMethods.js': path.resolve(__dirname, 'template/js/custom-js/components/PaymentMethods.js'),
      './js/APrices.js': path.resolve(__dirname, 'template/js/custom-js/components/APrices.js'),
      './html/ShippingLine.html': path.resolve(__dirname, 'template/js/custom-js/components/ShippingLine.html'),
      './html/ShippingCalculator.html': path.resolve(__dirname, 'template/js/custom-js/components/ShippingCalculator.html'),
      './js/ShippingLine.js': path.resolve(__dirname, 'template/js/custom-js/components/ShippingLine.js'),
      './js/ShippingCalculator.js': path.resolve(__dirname, 'template/js/custom-js/components/ShippingCalculator.js'),
      './html/PointsApplier.html': path.resolve(__dirname, 'template/js/custom-js/components/PointsApplier.html'),
      './js/PointsApplier.js': path.resolve(__dirname, 'template/js/custom-js/components/PointsApplier.js'),
      './html/EcCheckout.html': path.resolve(__dirname, 'template/js/custom-js/components/EcCheckout.html'),
      './js/EcCheckout.js': path.resolve(__dirname, 'template/js/custom-js/components/EcCheckout.js') */
    }
  }
})
