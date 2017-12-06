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
    root.Pier.UsuarioUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsuarioUpdate model module.
   * @module model/UsuarioUpdate
   * @version 2.47.3
   */

  /**
   * Constructs a new <code>UsuarioUpdate</code>.
   * Objeto Usuario
   * @alias module:model/UsuarioUpdate
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>UsuarioUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsuarioUpdate} obj Optional instance to populate.
   * @return {module:model/UsuarioUpdate} The populated <code>UsuarioUpdate</code> instance.
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
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * Apresenta o nome do usu\u00C3\u00A1rio.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Apresenta o login do usu\u00C3\u00A1rio.
   * @member {String} login
   */
  exports.prototype['login'] = undefined;

  /**
   * N\u00C3\u00BAmero do CPF.
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * Apresenta o email do usu\u00C3\u00A1rio.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Apresenta o status do usu\u00C3\u00A1rio.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
