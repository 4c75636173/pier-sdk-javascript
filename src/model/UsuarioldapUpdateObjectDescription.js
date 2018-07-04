(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ReferenciaIdPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReferenciaIdPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.UsuarioldapUpdateObjectDescription = factory(root.Pier.ApiClient, root.Pier.ReferenciaIdPersist);
  }
}(this, function(ApiClient, ReferenciaIdPersist) {
  'use strict';

  /**
   * The UsuarioldapUpdateObjectDescription model module.
   * @module model/UsuarioldapUpdateObjectDescription
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>UsuarioldapUpdateObjectDescription</code>.
   * {{{usuarioldap_update_object_description}}}
   * @alias module:model/UsuarioldapUpdateObjectDescription
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>UsuarioldapUpdateObjectDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsuarioldapUpdateObjectDescription} obj Optional instance to populate.
   * @return {module:model/UsuarioldapUpdateObjectDescription} The populated <code>UsuarioldapUpdateObjectDescription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('perfis')) {
        obj['perfis'] = ApiClient.convertToType(data['perfis'], [ReferenciaIdPersist]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{usuario_update_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{usuario_update_login_value}}}
   * @member {String} login
   */
  exports.prototype['login'] = undefined;

  /**
   * {{{usuario_update_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{usuario_update_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{usuario_persist_email_value}}}
   * @member {Array.<module:model/ReferenciaIdPersist>} perfis
   */
  exports.prototype['perfis'] = undefined;

  /**
   * {{{usuario_update_status_value}}}
   * @member {String} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
