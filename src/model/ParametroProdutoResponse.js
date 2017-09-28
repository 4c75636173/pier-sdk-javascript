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
    root.Pier.ParametroProdutoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ParametroProdutoResponse model module.
   * @module model/ParametroProdutoResponse
   * @version 2.36.2
   */

  /**
   * Constructs a new <code>ParametroProdutoResponse</code>.
   * Objeto de Resposta Par\u00C3\u00A2metro Produto
   * @alias module:model/ParametroProdutoResponse
   * @class
   * @param idProduto
   * @param tipoOrigemTransacao
   * @param descricao
   * @param valorParametro
   * @param dataValidade
   */
  var exports = function(idProduto, tipoOrigemTransacao, descricao, valorParametro, dataValidade) {

    this['idProduto'] = idProduto;
    this['tipoOrigemTransacao'] = tipoOrigemTransacao;
    this['descricao'] = descricao;
    this['valorParametro'] = valorParametro;
    this['dataValidade'] = dataValidade;
  };

  /**
   * Constructs a <code>ParametroProdutoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParametroProdutoResponse} obj Optional instance to populate.
   * @return {module:model/ParametroProdutoResponse} The populated <code>ParametroProdutoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('tipoOrigemTransacao')) {
        obj['tipoOrigemTransacao'] = ApiClient.convertToType(data['tipoOrigemTransacao'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('valorParametro')) {
        obj['valorParametro'] = ApiClient.convertToType(data['valorParametro'], 'Number');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * Tipo da Transa\u00C3\u00A7\u00C3\u00A3o (ON_US ou OFF_US).
   * @member {module:model/ParametroProdutoResponse.TipoOrigemTransacaoEnum} tipoOrigemTransacao
   */
  exports.prototype['tipoOrigemTransacao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do Tipo da Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Valor do Par\u00C3\u00A2metro.
   * @member {Number} valorParametro
   */
  exports.prototype['valorParametro'] = undefined;

  /**
   * Data de Validade do Par\u00C3\u00A2metro do Produto.
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;


  /**
   * Allowed values for the <code>tipoOrigemTransacao</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoOrigemTransacaoEnum = { 
    /**
     * value: ON_US
     * @const
     */
    ON_US: "ON_US",
    
    /**
     * value: OFF_US
     * @const
     */
    OFF_US: "OFF_US"
  };

  return exports;
}));
