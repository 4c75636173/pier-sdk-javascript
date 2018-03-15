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
    root.Pier.BaseResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BaseResponse model module.
   * @module model/BaseResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>BaseResponse</code>.
   * Representa\u00E7\u00E3o do recurso Base
   * @alias module:model/BaseResponse
   * @class
   * @param id
   * @param servidor
   * @param usuario
   * @param nomeBase
   * @param senhaCriptografada
   * @param domain
   * @param nomeBaseControleAcesso
   * @param servidorControleAcesso
   * @param nomeBaseUsuarios
   * @param servidorUsuarios
   */
  var exports = function(id, servidor, usuario, nomeBase, senhaCriptografada, domain, nomeBaseControleAcesso, servidorControleAcesso, nomeBaseUsuarios, servidorUsuarios) {

    this['id'] = id;
    this['servidor'] = servidor;
    this['usuario'] = usuario;
    this['nomeBase'] = nomeBase;
    this['senhaCriptografada'] = senhaCriptografada;
    this['domain'] = domain;
    this['nomeBaseControleAcesso'] = nomeBaseControleAcesso;

    this['servidorControleAcesso'] = servidorControleAcesso;
    this['nomeBaseUsuarios'] = nomeBaseUsuarios;
    this['servidorUsuarios'] = servidorUsuarios;

  };

  /**
   * Constructs a <code>BaseResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseResponse} obj Optional instance to populate.
   * @return {module:model/BaseResponse} The populated <code>BaseResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('servidor')) {
        obj['servidor'] = ApiClient.convertToType(data['servidor'], 'String');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
      if (data.hasOwnProperty('nomeBase')) {
        obj['nomeBase'] = ApiClient.convertToType(data['nomeBase'], 'String');
      }
      if (data.hasOwnProperty('senhaCriptografada')) {
        obj['senhaCriptografada'] = ApiClient.convertToType(data['senhaCriptografada'], 'Boolean');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
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
   * C\u00F3digo identificador da base
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * IP do servidor
   * @member {String} servidor
   */
  exports.prototype['servidor'] = undefined;

  /**
   * Nome do usu\u00E1rio
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;

  /**
   * Nome da base
   * @member {String} nomeBase
   */
  exports.prototype['nomeBase'] = undefined;

  /**
   * senha Criptografada
   * @member {Boolean} senhaCriptografada
   */
  exports.prototype['senhaCriptografada'] = undefined;

  /**
   * Dom\u00EDnio da base
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;

  /**
   * Nome da base de controle acesso
   * @member {String} nomeBaseControleAcesso
   */
  exports.prototype['nomeBaseControleAcesso'] = undefined;

  /**
   * C\u00F3digo do identificador do emissor
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * Servidor do controle de acesso
   * @member {String} servidorControleAcesso
   */
  exports.prototype['servidorControleAcesso'] = undefined;

  /**
   * Nome da base de usu\u00E1rios
   * @member {String} nomeBaseUsuarios
   */
  exports.prototype['nomeBaseUsuarios'] = undefined;

  /**
   * Servidor do controle de acesso
   * @member {String} servidorUsuarios
   */
  exports.prototype['servidorUsuarios'] = undefined;

  /**
   * Flag Cluester
   * @member {Boolean} flagCluster
   */
  exports.prototype['flagCluster'] = undefined;




  return exports;
}));
