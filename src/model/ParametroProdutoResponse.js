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
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ParametroProdutoResponse</code>.
   * {{{parametro_produto_response_description}}}
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
   * {{{parametro_produto_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{parametro_produto_response_tipo_origem_transacao_value}}}
   * @member {module:model/ParametroProdutoResponse.TipoOrigemTransacaoEnum} tipoOrigemTransacao
   */
  exports.prototype['tipoOrigemTransacao'] = undefined;

  /**
   * {{{parametro_produto_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{parametro_produto_response_valor_parametro_value}}}
   * @member {Number} valorParametro
   */
  exports.prototype['valorParametro'] = undefined;

  /**
   * {{{parametro_produto_response_data_validade_value}}}
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
