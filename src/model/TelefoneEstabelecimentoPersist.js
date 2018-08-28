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
    root.Pier.TelefoneEstabelecimentoPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TelefoneEstabelecimentoPersist model module.
   * @module model/TelefoneEstabelecimentoPersist
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TelefoneEstabelecimentoPersist</code>.
   * {{{telefone_estabelecimento_persist_description}}}
   * @alias module:model/TelefoneEstabelecimentoPersist
   * @class
   * @param idEstabelecimento
   * @param ddd
   * @param telefone
   */
  var exports = function(idEstabelecimento, ddd, telefone) {

    this['idEstabelecimento'] = idEstabelecimento;
    this['ddd'] = ddd;
    this['telefone'] = telefone;

  };

  /**
   * Constructs a <code>TelefoneEstabelecimentoPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TelefoneEstabelecimentoPersist} obj Optional instance to populate.
   * @return {module:model/TelefoneEstabelecimentoPersist} The populated <code>TelefoneEstabelecimentoPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
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
   * {{{telefone_estabelecimento_persist_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{telefone_estabelecimento_persist_ddd_value}}}
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * {{{telefone_estabelecimento_persist_telefone_value}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * {{{telefone_estabelecimento_persist_ramal_value}}}
   * @member {String} ramal
   */
  exports.prototype['ramal'] = undefined;




  return exports;
}));
