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
   * @version 2.39.3
   */

  /**
   * Constructs a new <code>ContaResponse</code>.
   * Objeto conta
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
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do produto ao qual a conta faz parte. (id).
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id) que deu origem a Conta.
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa Titular da Conta (id).
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do status atribuido a conta.
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * Apresenta o dia de vencimento.
   * @member {Integer} diaVencimento
   */
  exports.prototype['diaVencimento'] = undefined;

  /**
   * Apresenta o melhor dia de compra.
   * @member {Integer} melhorDiaCompra
   */
  exports.prototype['melhorDiaCompra'] = undefined;

  /**
   * Apresenta a data em que o idStatusConta atual fora atribu\u00C3\u00ADdo para ela.
   * @member {String} dataStatusConta
   */
  exports.prototype['dataStatusConta'] = undefined;

  /**
   * Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
   * @member {String} dataCadastro
   */
  exports.prototype['dataCadastro'] = undefined;

  /**
   * Apresenta a data da ultima altera\u00C3\u00A7\u00C3\u00A3o de vencimento.
   * @member {String} dataUltimaAlteracaoVencimento
   */
  exports.prototype['dataUltimaAlteracaoVencimento'] = undefined;

  /**
   * Apresenta o valor da renda comprovada
   * @member {Number} valorRenda
   */
  exports.prototype['valorRenda'] = undefined;




  return exports;
}));
