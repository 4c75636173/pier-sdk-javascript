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
    root.Pier.StatusOportunidadeResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusOportunidadeResponse model module.
   * @module model/StatusOportunidadeResponse
   * @version 2.16.2
   */

  /**
   * Constructs a new <code>StatusOportunidadeResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso StatusOportunidade
   * @alias module:model/StatusOportunidadeResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>StatusOportunidadeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusOportunidadeResponse} obj Optional instance to populate.
   * @return {module:model/StatusOportunidadeResponse} The populated <code>StatusOportunidadeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
