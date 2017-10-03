(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AntecipacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AntecipacaoResponse model module.
   * @module model/AntecipacaoResponse
   * @version 2.38.1
   */

  /**
   * Constructs a new <code>AntecipacaoResponse</code>.
   * @alias module:model/AntecipacaoResponse
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>AntecipacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AntecipacaoResponse} obj Optional instance to populate.
   * @return {module:model/AntecipacaoResponse} The populated <code>AntecipacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idCompra')) {
        obj['idCompra'] = ApiClient.convertToType(data['idCompra'], 'Integer');
      }
      if (data.hasOwnProperty('quantidadeParcelasTotal')) {
        obj['quantidadeParcelasTotal'] = ApiClient.convertToType(data['quantidadeParcelasTotal'], 'Integer');
      }
      if (data.hasOwnProperty('quantidadeParcelasAntecipadas')) {
        obj['quantidadeParcelasAntecipadas'] = ApiClient.convertToType(data['quantidadeParcelasAntecipadas'], 'Integer');
      }
      if (data.hasOwnProperty('valorParcela')) {
        obj['valorParcela'] = ApiClient.convertToType(data['valorParcela'], 'Number');
      }
      if (data.hasOwnProperty('valorDescontoTotal')) {
        obj['valorDescontoTotal'] = ApiClient.convertToType(data['valorDescontoTotal'], 'Number');
      }
      if (data.hasOwnProperty('valorTotalComDesconto')) {
        obj['valorTotalComDesconto'] = ApiClient.convertToType(data['valorTotalComDesconto'], 'Number');
      }
      if (data.hasOwnProperty('taxaDesconto')) {
        obj['taxaDesconto'] = ApiClient.convertToType(data['taxaDesconto'], 'Number');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da antecipa\u00C3\u00A7\u00C3\u00A3o
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da compra
   * @member {Integer} idCompra
   */
  exports.prototype['idCompra'] = undefined;

  /**
   * Apresenta o numero total de parcelas da compra
   * @member {Integer} quantidadeParcelasTotal
   */
  exports.prototype['quantidadeParcelasTotal'] = undefined;

  /**
   * Apresenta o numero de parcelas antecipadas
   * @member {Integer} quantidadeParcelasAntecipadas
   */
  exports.prototype['quantidadeParcelasAntecipadas'] = undefined;

  /**
   * Apresenta o valor de cada parcela antecipadas
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * Apresenta o valor total do desconto
   * @member {Number} valorDescontoTotal
   */
  exports.prototype['valorDescontoTotal'] = undefined;

  /**
   * Apresenta o valor total com desconto
   * @member {Number} valorTotalComDesconto
   */
  exports.prototype['valorTotalComDesconto'] = undefined;

  /**
   * Apresenta a taxa de desconto
   * @member {Number} taxaDesconto
   */
  exports.prototype['taxaDesconto'] = undefined;




  return exports;
}));
