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
    root.Pier.BasePersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BasePersistValue model module.
   * @module model/BasePersistValue
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>BasePersistValue</code>.
   * {{{base_persist_description}}}
   * @alias module:model/BasePersistValue
   * @class
   * @param servidor
   * @param usuario
   * @param senha
   * @param nomeBase
   * @param criadoPor
   * @param senhaCriptografada
   * @param nomeBaseControleAcesso
   * @param servidorControleAcesso
   * @param nomeBaseUsuarios
   * @param servidorUsuarios
   * @param flagCluster
   */
  var exports = function(servidor, usuario, senha, nomeBase, criadoPor, senhaCriptografada, nomeBaseControleAcesso, servidorControleAcesso, nomeBaseUsuarios, servidorUsuarios, flagCluster) {

    this['servidor'] = servidor;
    this['usuario'] = usuario;
    this['senha'] = senha;
    this['nomeBase'] = nomeBase;
    this['criadoPor'] = criadoPor;

    this['senhaCriptografada'] = senhaCriptografada;
    this['nomeBaseControleAcesso'] = nomeBaseControleAcesso;

    this['servidorControleAcesso'] = servidorControleAcesso;
    this['nomeBaseUsuarios'] = nomeBaseUsuarios;
    this['servidorUsuarios'] = servidorUsuarios;
    this['flagCluster'] = flagCluster;
  };

  /**
   * Constructs a <code>BasePersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BasePersistValue} obj Optional instance to populate.
   * @return {module:model/BasePersistValue} The populated <code>BasePersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('servidor')) {
        obj['servidor'] = ApiClient.convertToType(data['servidor'], 'String');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
      if (data.hasOwnProperty('senha')) {
        obj['senha'] = ApiClient.convertToType(data['senha'], 'String');
      }
      if (data.hasOwnProperty('nomeBase')) {
        obj['nomeBase'] = ApiClient.convertToType(data['nomeBase'], 'String');
      }
      if (data.hasOwnProperty('criadoPor')) {
        obj['criadoPor'] = ApiClient.convertToType(data['criadoPor'], 'String');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('senhaCriptografada')) {
        obj['senhaCriptografada'] = ApiClient.convertToType(data['senhaCriptografada'], 'Boolean');
      }
      if (data.hasOwnProperty('nomeBaseControleAcesso')) {
        obj['nomeBaseControleAcesso'] = ApiClient.convertToType(data['nomeBaseControleAcesso'], 'String');
      }
      if (data.hasOwnProperty('idEmissor')) {
        obj['idEmissor'] = ApiClient.convertToType(data['idEmissor'], 'Integer');
      }
      if (data.hasOwnProperty('servidorControleAcesso')) {
        obj['servidorControleAcesso'] = ApiClient.convertToType(data['servidorControleAcesso'], 'String');
      }
      if (data.hasOwnProperty('nomeBaseUsuarios')) {
        obj['nomeBaseUsuarios'] = ApiClient.convertToType(data['nomeBaseUsuarios'], 'String');
      }
      if (data.hasOwnProperty('servidorUsuarios')) {
        obj['servidorUsuarios'] = ApiClient.convertToType(data['servidorUsuarios'], 'String');
      }
      if (data.hasOwnProperty('flagCluster')) {
        obj['flagCluster'] = ApiClient.convertToType(data['flagCluster'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * {{{base_dto_servidor_value}}}
   * @member {String} servidor
   */
  exports.prototype['servidor'] = undefined;

  /**
   * {{{base_dto_usuario_value}}}
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;

  /**
   * {{{base_dto_senha_value}}}
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

  /**
   * {{{base_dto_nome_base_value}}}
   * @member {String} nomeBase
   */
  exports.prototype['nomeBase'] = undefined;

  /**
   * {{{base_dto_criado_por_value}}}
   * @member {String} criadoPor
   */
  exports.prototype['criadoPor'] = undefined;

  /**
   * {{{base_dto_domain_value}}}
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;

  /**
   * {{{base_dto_senha_criptografada_value}}}
   * @member {Boolean} senhaCriptografada
   */
  exports.prototype['senhaCriptografada'] = undefined;

  /**
   * {{{base_dto_nome_base_controle_acesso_value}}}
   * @member {String} nomeBaseControleAcesso
   */
  exports.prototype['nomeBaseControleAcesso'] = undefined;

  /**
   * {{{base_dto_id_emissor_value}}}
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * {{{base_dto_servidor_controle_acesso_value}}}
   * @member {String} servidorControleAcesso
   */
  exports.prototype['servidorControleAcesso'] = undefined;

  /**
   * {{{base_dto_nome_base_usuarios_value}}}
   * @member {String} nomeBaseUsuarios
   */
  exports.prototype['nomeBaseUsuarios'] = undefined;

  /**
   * {{{base_dto_servidor_usuarios_value}}}
   * @member {String} servidorUsuarios
   */
  exports.prototype['servidorUsuarios'] = undefined;

  /**
   * {{{base_dto_flag_cluster_value}}}
   * @member {Boolean} flagCluster
   */
  exports.prototype['flagCluster'] = undefined;




  return exports;
}));
