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
    root.Pier.ContaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContaResponse model module.
   * @module model/ContaResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>ContaResponse</code>.
   * {{{conta_response_description}}}
   * @alias module:model/ContaResponse
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>ContaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaResponse} obj Optional instance to populate.
   * @return {module:model/ContaResponse} The populated <code>ContaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('idOrigemComercial')) {
        obj['idOrigemComercial'] = ApiClient.convertToType(data['idOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusConta')) {
        obj['idStatusConta'] = ApiClient.convertToType(data['idStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('diaVencimento')) {
        obj['diaVencimento'] = ApiClient.convertToType(data['diaVencimento'], 'Integer');
      }
      if (data.hasOwnProperty('melhorDiaCompra')) {
        obj['melhorDiaCompra'] = ApiClient.convertToType(data['melhorDiaCompra'], 'Integer');
      }
      if (data.hasOwnProperty('dataStatusConta')) {
        obj['dataStatusConta'] = ApiClient.convertToType(data['dataStatusConta'], 'String');
      }
      if (data.hasOwnProperty('dataCadastro')) {
        obj['dataCadastro'] = ApiClient.convertToType(data['dataCadastro'], 'String');
      }
      if (data.hasOwnProperty('dataUltimaAlteracaoVencimento')) {
        obj['dataUltimaAlteracaoVencimento'] = ApiClient.convertToType(data['dataUltimaAlteracaoVencimento'], 'String');
      }
      if (data.hasOwnProperty('valorRenda')) {
        obj['valorRenda'] = ApiClient.convertToType(data['valorRenda'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{conta_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{conta_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{conta_response_id_origem_comercial_value}}}
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * {{{conta_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{conta_response_id_status_conta_value}}}
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * {{{conta_response_dia_vencimento_value}}}
   * @member {Integer} diaVencimento
   */
  exports.prototype['diaVencimento'] = undefined;

  /**
   * {{{conta_response_melhor_dia_compra_value}}}
   * @member {Integer} melhorDiaCompra
   */
  exports.prototype['melhorDiaCompra'] = undefined;

  /**
   * {{{conta_response_data_status_conta_value}}}
   * @member {String} dataStatusConta
   */
  exports.prototype['dataStatusConta'] = undefined;

  /**
   * {{{conta_response_data_cadastro_value}}}
   * @member {String} dataCadastro
   */
  exports.prototype['dataCadastro'] = undefined;

  /**
   * {{{conta_response_data_ultima_alteracao_vencimento_value}}}
   * @member {String} dataUltimaAlteracaoVencimento
   */
  exports.prototype['dataUltimaAlteracaoVencimento'] = undefined;

  /**
   * {{{conta_response_valor_renda_value}}}
   * @member {Number} valorRenda
   */
  exports.prototype['valorRenda'] = undefined;




  return exports;
}));
