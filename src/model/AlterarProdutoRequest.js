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
    root.Pier.AlterarProdutoRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AlterarProdutoRequest model module.
   * @module model/AlterarProdutoRequest
   * @version 2.49.0
   */

  /**
   * Constructs a new <code>AlterarProdutoRequest</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da requisi\u00C3\u00A7\u00C3\u00A3o do  recurso Dispositivo
   * @alias module:model/AlterarProdutoRequest
   * @class
   * @param idProduto
   */
  var exports = function(idProduto) {

    this['idProduto'] = idProduto;



  };

  /**
   * Constructs a <code>AlterarProdutoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlterarProdutoRequest} obj Optional instance to populate.
   * @return {module:model/AlterarProdutoRequest} The populated <code>AlterarProdutoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('idOrigemComercial')) {
        obj['idOrigemComercial'] = ApiClient.convertToType(data['idOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('idPromotor')) {
        obj['idPromotor'] = ApiClient.convertToType(data['idPromotor'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador do produto.
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da origem comercial.
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * Deve ser preenchido com o idEstabelecimento onde o Grade foi realizado. Quando n\u00C3\u00A3o informado, \u00C3\u00A9 gravado com o idEstabelecimento associado a Origem Comercial que capturou o cadastro inicial da Conta.
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * Deve ser preenchido com o C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Promotor que realizou o Grade. Quando n\u00C3\u00A3o informado, ser\u00C3\u00A1 gravado com um c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o padr\u00C3\u00A3o.
   * @member {Integer} idPromotor
   */
  exports.prototype['idPromotor'] = undefined;




  return exports;
}));
