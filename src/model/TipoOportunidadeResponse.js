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
    root.Pier.TipoOportunidadeResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoOportunidadeResponse model module.
   * @module model/TipoOportunidadeResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TipoOportunidadeResponse</code>.
   * {{{tipo_oportunidade_response_description}}}
   * @alias module:model/TipoOportunidadeResponse
   * @class
   * @param id
   * @param descricao
   * @param flagAtivo
   */
  var exports = function(id, descricao, flagAtivo) {

    this['id'] = id;
    this['descricao'] = descricao;
    this['flagAtivo'] = flagAtivo;
  };

  /**
   * Constructs a <code>TipoOportunidadeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoOportunidadeResponse} obj Optional instance to populate.
   * @return {module:model/TipoOportunidadeResponse} The populated <code>TipoOportunidadeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
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
   * {{{tipo_oportunidade_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{tipo_oportunidade_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{tipo_oportunidade_response_flag_ativo_value}}}
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;




  return exports;
}));
