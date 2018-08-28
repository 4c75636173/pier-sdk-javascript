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
    root.Pier.StatusOportunidadePersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusOportunidadePersistValue model module.
   * @module model/StatusOportunidadePersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>StatusOportunidadePersistValue</code>.
   * {{{status_oportunidade_persist_description}}}
   * @alias module:model/StatusOportunidadePersistValue
   * @class
   * @param descricao
   * @param flagAtivo
   */
  var exports = function(descricao, flagAtivo) {


    this['descricao'] = descricao;
    this['flagAtivo'] = flagAtivo;
  };

  /**
   * Constructs a <code>StatusOportunidadePersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusOportunidadePersistValue} obj Optional instance to populate.
   * @return {module:model/StatusOportunidadePersistValue} The populated <code>StatusOportunidadePersistValue</code> instance.
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
   * {{{status_oportunidade_persist_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{status_oportunidade_persist_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{status_oportunidade_persist_flag_ativo_value}}}
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;




  return exports;
}));
