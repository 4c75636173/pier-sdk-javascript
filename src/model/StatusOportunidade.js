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
    root.Pier.StatusOportunidade = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusOportunidade model module.
   * @module model/StatusOportunidade
   * @version 2.50.18
   */

  /**
   * Constructs a new <code>StatusOportunidade</code>.
   * Objeto StatusOportunidade
   * @alias module:model/StatusOportunidade
   * @class
   * @param descricao
   * @param flagAtivo
   */
  var exports = function(descricao, flagAtivo) {


    this['descricao'] = descricao;
    this['flagAtivo'] = flagAtivo;
  };

  /**
   * Constructs a <code>StatusOportunidade</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusOportunidade} obj Optional instance to populate.
   * @return {module:model/StatusOportunidade} The populated <code>StatusOportunidade</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('flagAtivo')) {
        obj['flagAtivo'] = ApiClient.convertToType(data['flagAtivo'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * Nome do status oportunidade
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status oportunidade
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o status oportunidade est\u00C3\u00A1 ativo
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;




  return exports;
}));
