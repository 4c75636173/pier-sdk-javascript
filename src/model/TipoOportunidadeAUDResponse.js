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
    root.Pier.TipoOportunidadeAUDResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoOportunidadeAUDResponse model module.
   * @module model/TipoOportunidadeAUDResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>TipoOportunidadeAUDResponse</code>.
   * {{{tipo_oportunidade_a_u_d_response_description}}}
   * @alias module:model/TipoOportunidadeAUDResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>TipoOportunidadeAUDResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoOportunidadeAUDResponse} obj Optional instance to populate.
   * @return {module:model/TipoOportunidadeAUDResponse} The populated <code>TipoOportunidadeAUDResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('rev')) {
        obj['rev'] = ApiClient.convertToType(data['rev'], 'Integer');
      }
      if (data.hasOwnProperty('revType')) {
        obj['revType'] = ApiClient.convertToType(data['revType'], 'Integer');
      }
      if (data.hasOwnProperty('revDate')) {
        obj['revDate'] = ApiClient.convertToType(data['revDate'], 'String');
      }
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
   * {{{tipo_oportunidade_a_u_d_response_rev_value}}}
   * @member {Integer} rev
   */
  exports.prototype['rev'] = undefined;

  /**
   * {{{tipo_oportunidade_a_u_d_response_rev_type_value}}}
   * @member {Integer} revType
   */
  exports.prototype['revType'] = undefined;

  /**
   * {{{tipo_oportunidade_a_u_d_response_rev_date_value}}}
   * @member {String} revDate
   */
  exports.prototype['revDate'] = undefined;

  /**
   * {{{tipo_oportunidade_a_u_d_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{tipo_oportunidade_a_u_d_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{tipo_oportunidade_a_u_d_response_flag_ativo_value}}}
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;




  return exports;
}));
