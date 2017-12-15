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
    root.Pier.UsuarioPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsuarioPersist model module.
   * @module model/UsuarioPersist
   * @version 2.49.0
   */

  /**
   * Constructs a new <code>UsuarioPersist</code>.
   * Objeto Usuario
   * @alias module:model/UsuarioPersist
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>UsuarioPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsuarioPersist} obj Optional instance to populate.
   * @return {module:model/UsuarioPersist} The populated <code>UsuarioPersist</code> instance.
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
      if (data.hasOwnProperty('senha')) {
        obj['senha'] = ApiClient.convertToType(data['senha'], 'String');
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
   * Apresenta a senha do usu\u00C3\u00A1rio.
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;




  return exports;
}));
