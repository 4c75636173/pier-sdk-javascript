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
    root.Pier.TelefonePessoaAprovadaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TelefonePessoaAprovadaResponse model module.
   * @module model/TelefonePessoaAprovadaResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>TelefonePessoaAprovadaResponse</code>.
   * {{{telefone_pessoa_aprovada_response_description}}}
   * @alias module:model/TelefonePessoaAprovadaResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>TelefonePessoaAprovadaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TelefonePessoaAprovadaResponse} obj Optional instance to populate.
   * @return {module:model/TelefonePessoaAprovadaResponse} The populated <code>TelefonePessoaAprovadaResponse</code> instance.
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
      if (data.hasOwnProperty('ddd')) {
        obj['ddd'] = ApiClient.convertToType(data['ddd'], 'String');
      }
      if (data.hasOwnProperty('telefone')) {
        obj['telefone'] = ApiClient.convertToType(data['telefone'], 'String');
      }
      if (data.hasOwnProperty('ramal')) {
        obj['ramal'] = ApiClient.convertToType(data['ramal'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{telefone_pessoa_aprovada_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{telefone_pessoa_aprovada_response_id_tipo_telefone_value}}}
   * @member {Integer} idTipoTelefone
   */
  exports.prototype['idTipoTelefone'] = undefined;

  /**
   * {{{telefone_pessoa_aprovada_response_ddd_value}}}
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * {{{telefone_pessoa_aprovada_response_telefone_value}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * {{{telefone_pessoa_aprovada_response_ramal_value}}}
   * @member {String} ramal
   */
  exports.prototype['ramal'] = undefined;




  return exports;
}));
