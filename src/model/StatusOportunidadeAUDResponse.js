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
    root.Pier.StatusOportunidadeAUDResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusOportunidadeAUDResponse model module.
   * @module model/StatusOportunidadeAUDResponse
   * @version 2.46.5
   */

  /**
   * Constructs a new <code>StatusOportunidadeAUDResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso StatusTipoOportunidadeAUD
   * @alias module:model/StatusOportunidadeAUDResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>StatusOportunidadeAUDResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusOportunidadeAUDResponse} obj Optional instance to populate.
   * @return {module:model/StatusOportunidadeAUDResponse} The populated <code>StatusOportunidadeAUDResponse</code> instance.
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
      if (data.hasOwnProperty('idTipoOportunidade')) {
        obj['idTipoOportunidade'] = ApiClient.convertToType(data['idTipoOportunidade'], 'Integer');
      }
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
   * C\u00C3\u00B3digo identificador da auditoria dos tipos oportunidades
   * @member {Integer} rev
   */
  exports.prototype['rev'] = undefined;

  /**
   * C\u00C3\u00B3digo que representa o tipo de a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
   * @member {Integer} revType
   */
  exports.prototype['revType'] = undefined;

  /**
   * Data da a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
   * @member {String} revDate
   */
  exports.prototype['revDate'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do StatusOportunidade
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do TipoOportunidade
   * @member {Integer} idTipoOportunidade
   */
  exports.prototype['idTipoOportunidade'] = undefined;

  /**
   * Nome do status oportunidade
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descricao do StatusOportunidade
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Flag que representa se o tipo oportunidade est\u00C3\u00A1 ativo
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;




  return exports;
}));
