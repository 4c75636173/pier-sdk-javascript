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
    root.Pier.LogAcessoUsuarioPersistencia = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LogAcessoUsuarioPersistencia model module.
   * @module model/LogAcessoUsuarioPersistencia
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>LogAcessoUsuarioPersistencia</code>.
   * {{{log_acesso_usuario_persistencia_descricao}}}
   * @alias module:model/LogAcessoUsuarioPersistencia
   * @class
   * @param idUsuario
   * @param login
   */
  var exports = function(idUsuario, login) {

    this['idUsuario'] = idUsuario;
    this['login'] = login;







  };

  /**
   * Constructs a <code>LogAcessoUsuarioPersistencia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogAcessoUsuarioPersistencia} obj Optional instance to populate.
   * @return {module:model/LogAcessoUsuarioPersistencia} The populated <code>LogAcessoUsuarioPersistencia</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idUsuario')) {
        obj['idUsuario'] = ApiClient.convertToType(data['idUsuario'], 'Integer');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('mensagem')) {
        obj['mensagem'] = ApiClient.convertToType(data['mensagem'], 'String');
      }
      if (data.hasOwnProperty('versaoAPP')) {
        obj['versaoAPP'] = ApiClient.convertToType(data['versaoAPP'], 'String');
      }
      if (data.hasOwnProperty('device')) {
        obj['device'] = ApiClient.convertToType(data['device'], 'String');
      }
      if (data.hasOwnProperty('senhaOK')) {
        obj['senhaOK'] = ApiClient.convertToType(data['senhaOK'], 'Integer');
      }
      if (data.hasOwnProperty('tentativasIncorretas')) {
        obj['tentativasIncorretas'] = ApiClient.convertToType(data['tentativasIncorretas'], 'Integer');
      }
      if (data.hasOwnProperty('idPlataforma')) {
        obj['idPlataforma'] = ApiClient.convertToType(data['idPlataforma'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{log_acesso_usuario_persistencia_id_usuario_descricao}}}
   * @member {Integer} idUsuario
   */
  exports.prototype['idUsuario'] = undefined;

  /**
   * {{{log_acesso_usuario_persistencia_login_descricao}}}
   * @member {String} login
   */
  exports.prototype['login'] = undefined;

  /**
   * {{{log_acesso_usuario_persistencia_message_descricao}}}
   * @member {String} mensagem
   */
  exports.prototype['mensagem'] = undefined;

  /**
   * {{{log_acesso_usuario_persistencia_versao_app_descricao}}}
   * @member {String} versaoAPP
   */
  exports.prototype['versaoAPP'] = undefined;

  /**
   * {{{log_acesso_usuario_persistencia_versao_app_descricao}}}
   * @member {String} device
   */
  exports.prototype['device'] = undefined;

  /**
   * {{{log_acesso_usuario_persistencia_senha_ok_descricao}}}
   * @member {Integer} senhaOK
   */
  exports.prototype['senhaOK'] = undefined;

  /**
   * {{{log_acesso_usuario_persistencia_tentativas_incorretas_descricao}}}
   * @member {Integer} tentativasIncorretas
   */
  exports.prototype['tentativasIncorretas'] = undefined;

  /**
   * {{{log_acesso_usuario_persistencia_id_plataforma_descricao}}}
   * @member {Integer} idPlataforma
   */
  exports.prototype['idPlataforma'] = undefined;

  /**
   * {{{log_acesso_usuario_persistencia_status_log_acesso}}}
   * @member {module:model/LogAcessoUsuarioPersistencia.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: SUCESSO
     * @const
     */
    SUCESSO: "SUCESSO",
    
    /**
     * value: SENHA_INVALIDA
     * @const
     */
    SENHA_INVALIDA: "SENHA_INVALIDA",
    
    /**
     * value: BLOQUEDO
     * @const
     */
    BLOQUEDO: "BLOQUEDO",
    
    /**
     * value: CADASTRADO
     * @const
     */
    CADASTRADO: "CADASTRADO",
    
    /**
     * value: SENHA_ALTERADO
     * @const
     */
    SENHA_ALTERADO: "SENHA_ALTERADO"
  };

  return exports;
}));
