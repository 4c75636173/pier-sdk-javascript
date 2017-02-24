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
    root.Pier.Usuario = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Usuario model module.
   * @module model/Usuario
   * @version 2.8.0
   */

  /**
   * Constructs a new <code>Usuario</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso Usuario
   * @alias module:model/Usuario
   * @class
   * @param id
   * @param login
   * @param email
   */
  var exports = function(id, login, email) {

    this['id'] = id;

    this['login'] = login;


    this['email'] = email;





  };

  /**
   * Constructs a <code>Usuario</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Usuario} obj Optional instance to populate.
   * @return {module:model/Usuario} The populated <code>Usuario</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('idEmissor')) {
        obj['idEmissor'] = ApiClient.convertToType(data['idEmissor'], 'Integer');
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
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('dataCriacao')) {
        obj['dataCriacao'] = ApiClient.convertToType(data['dataCriacao'], 'Date');
      }
      if (data.hasOwnProperty('dataModificacao')) {
        obj['dataModificacao'] = ApiClient.convertToType(data['dataModificacao'], 'Date');
      }
      if (data.hasOwnProperty('tentativasIncorretas')) {
        obj['tentativasIncorretas'] = ApiClient.convertToType(data['tentativasIncorretas'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Id do Usu\u00C3\u00A1rio
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do Usu\u00C3\u00A1rio
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Login do Usu\u00C3\u00A1rio
   * @member {String} login
   */
  exports.prototype['login'] = undefined;

  /**
   * Id do emissor do usu\u00C3\u00A1rio
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * CPF do Usu\u00C3\u00A1rio
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * Email do Usu\u00C3\u00A1rio
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Apresenta a senha do usu\u00C3\u00A1rio.
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

  /**
   * Status do Usu\u00C3\u00A1rio
   * @member {module:model/Usuario.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Status do Usu\u00C3\u00A1rio
   * @member {Date} dataCriacao
   */
  exports.prototype['dataCriacao'] = undefined;

  /**
   * Status do Usu\u00C3\u00A1rio
   * @member {Date} dataModificacao
   */
  exports.prototype['dataModificacao'] = undefined;

  /**
   * N\u00C3\u00BAmero de tentativas de valida\u00C3\u00A7\u00C3\u00A3o incorretas
   * @member {Integer} tentativasIncorretas
   */
  exports.prototype['tentativasIncorretas'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: ATIVO
     * @const
     */
    ATIVO: "ATIVO",
    
    /**
     * value: INATIVO
     * @const
     */
    INATIVO: "INATIVO"
  };

  return exports;
}));
