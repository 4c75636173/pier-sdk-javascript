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
    root.Pier.UsuarioResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsuarioResponse model module.
   * @module model/UsuarioResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>UsuarioResponse</code>.
   * {{{usuario_response_description}}}
   * @alias module:model/UsuarioResponse
   * @class
   * @param login
   * @param email
   */
  var exports = function(login, email) {



    this['login'] = login;


    this['email'] = email;





  };

  /**
   * Constructs a <code>UsuarioResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsuarioResponse} obj Optional instance to populate.
   * @return {module:model/UsuarioResponse} The populated <code>UsuarioResponse</code> instance.
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
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('dataCriacao')) {
        obj['dataCriacao'] = ApiClient.convertToType(data['dataCriacao'], 'String');
      }
      if (data.hasOwnProperty('dataModificacao')) {
        obj['dataModificacao'] = ApiClient.convertToType(data['dataModificacao'], 'String');
      }
      if (data.hasOwnProperty('tentativasIncorretas')) {
        obj['tentativasIncorretas'] = ApiClient.convertToType(data['tentativasIncorretas'], 'Integer');
      }
      if (data.hasOwnProperty('bloquearAcesso')) {
        obj['bloquearAcesso'] = ApiClient.convertToType(data['bloquearAcesso'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * {{{usuario_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{usuario_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{usuario_response_login_value}}}
   * @member {String} login
   */
  exports.prototype['login'] = undefined;

  /**
   * {{{usuario_response_id_emissor_value}}}
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * {{{usuario_response_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{usuario_response_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{usuario_response_status_value}}}
   * @member {module:model/UsuarioResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{usuario_response_data_criacao_value}}}
   * @member {String} dataCriacao
   */
  exports.prototype['dataCriacao'] = undefined;

  /**
   * {{{usuario_response_data_modificacao_value}}}
   * @member {String} dataModificacao
   */
  exports.prototype['dataModificacao'] = undefined;

  /**
   * {{{usuario_response_tentativas_incorretas_value}}}
   * @member {Integer} tentativasIncorretas
   */
  exports.prototype['tentativasIncorretas'] = undefined;

  /**
   * {{{usuario_response_bloquear_acesso_descricao}}}
   * @member {Boolean} bloquearAcesso
   */
  exports.prototype['bloquearAcesso'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: INATIVO
     * @const
     */
    INATIVO: "INATIVO",
    
    /**
     * value: ATIVO
     * @const
     */
    ATIVO: "ATIVO"
  };

  return exports;
}));
