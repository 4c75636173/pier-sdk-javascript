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
    root.Pier.ArquivoParametroAUDResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ArquivoParametroAUDResponse model module.
   * @module model/ArquivoParametroAUDResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ArquivoParametroAUDResponse</code>.
   * {{{arquivo_parametro_a_u_d_response_description}}}
   * @alias module:model/ArquivoParametroAUDResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>ArquivoParametroAUDResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArquivoParametroAUDResponse} obj Optional instance to populate.
   * @return {module:model/ArquivoParametroAUDResponse} The populated <code>ArquivoParametroAUDResponse</code> instance.
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
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parametro')) {
        obj['parametro'] = ApiClient.convertToType(data['parametro'], 'String');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
      if (data.hasOwnProperty('dataHoraInclusao')) {
        obj['dataHoraInclusao'] = ApiClient.convertToType(data['dataHoraInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataHoraAlteracao')) {
        obj['dataHoraAlteracao'] = ApiClient.convertToType(data['dataHoraAlteracao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{arquivo_parametro_a_u_d_response_rev_value}}}
   * @member {Integer} rev
   */
  exports.prototype['rev'] = undefined;

  /**
   * {{{arquivo_parametro_a_u_d_response_rev_type_value}}}
   * @member {Integer} revType
   */
  exports.prototype['revType'] = undefined;

  /**
   * {{{arquivo_parametro_a_u_d_response_id_value}}}
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{arquivo_parametro_a_u_d_response_parametro_value}}}
   * @member {String} parametro
   */
  exports.prototype['parametro'] = undefined;

  /**
   * {{{arquivo_parametro_a_u_d_response_conteudo_value}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * {{{arquivo_parametro_a_u_d_response_data_hora_inclusao_value}}}
   * @member {String} dataHoraInclusao
   */
  exports.prototype['dataHoraInclusao'] = undefined;

  /**
   * {{{arquivo_parametro_a_u_d_response_data_hora_alteracao_value}}}
   * @member {String} dataHoraAlteracao
   */
  exports.prototype['dataHoraAlteracao'] = undefined;




  return exports;
}));
