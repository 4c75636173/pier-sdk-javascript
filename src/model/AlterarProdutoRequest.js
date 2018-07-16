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
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>AlterarProdutoRequest</code>.
   * {{{alterar_produto_request_description}}}
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
   * {{{alterar_produto_request_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{alterar_produto_request_id_origem_comercial_value}}}
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * {{{alterar_produto_request_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{alterar_produto_request_id_promotor_value}}}
   * @member {Integer} idPromotor
   */
  exports.prototype['idPromotor'] = undefined;




  return exports;
}));
