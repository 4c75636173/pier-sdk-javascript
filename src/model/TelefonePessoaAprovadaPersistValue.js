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
    root.Pier.TelefonePessoaAprovadaPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TelefonePessoaAprovadaPersistValue model module.
   * @module model/TelefonePessoaAprovadaPersistValue
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>TelefonePessoaAprovadaPersistValue</code>.
   * {{{telefone_pessoa_aprovada_persist_description}}}
   * @alias module:model/TelefonePessoaAprovadaPersistValue
   * @class
   * @param idTipoTelefone
   * @param ddd
   * @param telefone
   */
  var exports = function(idTipoTelefone, ddd, telefone) {

    this['idTipoTelefone'] = idTipoTelefone;
    this['ddd'] = ddd;
    this['telefone'] = telefone;

  };

  /**
   * Constructs a <code>TelefonePessoaAprovadaPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TelefonePessoaAprovadaPersistValue} obj Optional instance to populate.
   * @return {module:model/TelefonePessoaAprovadaPersistValue} The populated <code>TelefonePessoaAprovadaPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
   * {{{telefone_pessoa_aprovada_persist_id_tipo_telefone_value}}}
   * @member {Integer} idTipoTelefone
   */
  exports.prototype['idTipoTelefone'] = undefined;

  /**
   * {{{telefone_pessoa_aprovada_persist_ddd_value}}}
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * {{{telefone_pessoa_aprovada_persist_telefone_value}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * {{{telefone_pessoa_aprovada_persist_ramal_value}}}
   * @member {String} ramal
   */
  exports.prototype['ramal'] = undefined;




  return exports;
}));
