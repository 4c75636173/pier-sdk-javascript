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
    root.Pier.UsuarioLdapPersist = factory(root.Pier.ApiClient, root.Pier.ReferenciaIdPersist);
  }
}(this, function(ApiClient, ReferenciaIdPersist) {
  'use strict';

  /**
   * The UsuarioLdapPersist model module.
   * @module model/UsuarioLdapPersist
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>UsuarioLdapPersist</code>.
   * @alias module:model/UsuarioLdapPersist
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>UsuarioLdapPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsuarioLdapPersist} obj Optional instance to populate.
   * @return {module:model/UsuarioLdapPersist} The populated <code>UsuarioLdapPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('idEmissor')) {
        obj['idEmissor'] = ApiClient.convertToType(data['idEmissor'], 'Integer');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('perfis')) {
        obj['perfis'] = ApiClient.convertToType(data['perfis'], [ReferenciaIdPersist]);
      }
    }
    return obj;
  }


  /**
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * @member {String} login
   */
  exports.prototype['login'] = undefined;

  /**
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * @member {Array.<module:model/ReferenciaIdPersist>} perfis
   */
  exports.prototype['perfis'] = undefined;




  return exports;
}));
