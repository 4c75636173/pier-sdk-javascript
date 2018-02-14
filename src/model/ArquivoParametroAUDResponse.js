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
   * @version 2.54.2
   */

  /**
   * Constructs a new <code>ArquivoParametroAUDResponse</code>.
   * Objeto Response da auditoria dos par\u00C3\u00A2metros do arquivo.
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
   * Identificador da auditoria arquivo
   * @member {Integer} rev
   */
  exports.prototype['rev'] = undefined;

  /**
   * Identificador do tipo de auditoria (0 - Criado, 1 - Alterado, 2 - Exclu\u00C3\u00ADdo)
   * @member {Integer} revType
   */
  exports.prototype['revType'] = undefined;

  /**
   * Identificador do par\u00C3\u00A2metro
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do par\u00C3\u00A2metro
   * @member {String} parametro
   */
  exports.prototype['parametro'] = undefined;

  /**
   * Conte\u00C3\u00BAdo do par\u00C3\u00A2metro
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * Data de inclus\u00C3\u00A3o do par\u00C3\u00A2metro
   * @member {String} dataHoraInclusao
   */
  exports.prototype['dataHoraInclusao'] = undefined;

  /**
   * Data de altera\u00C3\u00A7\u00C3\u00A3o do par\u00C3\u00A2metro
   * @member {String} dataHoraAlteracao
   */
  exports.prototype['dataHoraAlteracao'] = undefined;




  return exports;
}));
