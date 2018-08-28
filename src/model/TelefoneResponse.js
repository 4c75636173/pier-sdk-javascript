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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TelefoneResponse</code>.
   * {{{telefone_response_description}}}
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
   * {{{telefone_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{telefone_response_id_tipo_telefone_value}}}
   * @member {Integer} idTipoTelefone
   */
  exports.prototype['idTipoTelefone'] = undefined;

  /**
   * {{{telefone_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{telefone_response_ddd_value}}}
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * {{{telefone_response_telefone_value}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * {{{telefone_response_ramal_value}}}
   * @member {String} ramal
   */
  exports.prototype['ramal'] = undefined;

  /**
   * {{{telefone_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
