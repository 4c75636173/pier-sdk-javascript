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
    root.Pier.TipoOportunidadePersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoOportunidadePersistValue model module.
   * @module model/TipoOportunidadePersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TipoOportunidadePersistValue</code>.
   * {{{tipo_oportunidade_persist_description}}}
   * @alias module:model/TipoOportunidadePersistValue
   * @class
   * @param descricao
   * @param flagAtivo
   */
  var exports = function(descricao, flagAtivo) {

    this['descricao'] = descricao;
    this['flagAtivo'] = flagAtivo;
  };

  /**
   * Constructs a <code>TipoOportunidadePersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoOportunidadePersistValue} obj Optional instance to populate.
   * @return {module:model/TipoOportunidadePersistValue} The populated <code>TipoOportunidadePersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
   * {{{tipo_oportunidade_persist_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{tipo_oportunidade_persist_flag_ativo_value}}}
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;




  return exports;
}));
