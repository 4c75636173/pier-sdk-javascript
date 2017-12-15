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
    root.Pier.TelefoneResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TelefoneResponse model module.
   * @module model/TelefoneResponse
   * @version 2.49.0
   */

  /**
   * Constructs a new <code>TelefoneResponse</code>.
   * Objeto de Resposta de Telefone
   * @alias module:model/TelefoneResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>TelefoneResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TelefoneResponse} obj Optional instance to populate.
   * @return {module:model/TelefoneResponse} The populated <code>TelefoneResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoTelefone')) {
        obj['idTipoTelefone'] = ApiClient.convertToType(data['idTipoTelefone'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('ddd')) {
        obj['ddd'] = ApiClient.convertToType(data['ddd'], 'String');
      }
      if (data.hasOwnProperty('telefone')) {
        obj['telefone'] = ApiClient.convertToType(data['telefone'], 'String');
      }
      if (data.hasOwnProperty('ramal')) {
        obj['ramal'] = ApiClient.convertToType(data['ramal'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone.
   * @member {Integer} idTipoTelefone
   */
  exports.prototype['idTipoTelefone'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o telefone pertence.
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * C\u00C3\u00B3digo DDD do telefone.
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * N\u00C3\u00BAmero do telefone.
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * N\u00C3\u00BAmero do ramal.
   * @member {String} ramal
   */
  exports.prototype['ramal'] = undefined;

  /**
   * Apresenta o Status do Telefone, onde: '0': Inativo e '1': Ativo
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
