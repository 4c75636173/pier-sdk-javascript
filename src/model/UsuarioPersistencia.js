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
    root.Pier.UsuarioPersistencia = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsuarioPersistencia model module.
   * @module model/UsuarioPersistencia
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>UsuarioPersistencia</code>.
   * {{{usuario_persistencia_descricao}}}
   * @alias module:model/UsuarioPersistencia
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>UsuarioPersistencia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsuarioPersistencia} obj Optional instance to populate.
   * @return {module:model/UsuarioPersistencia} The populated <code>UsuarioPersistencia</code> instance.
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
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('idPlataforma')) {
        obj['idPlataforma'] = ApiClient.convertToType(data['idPlataforma'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{usuario_persistencia_nome_descricao}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{usuario_persistencia_login_descricao}}}
   * @member {String} login
   */
  exports.prototype['login'] = undefined;

  /**
   * {{{usuario_persistencia_cpf_descricao}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{usuario_persistencia_email_descricao}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{usuario_persistencia_senha_descricao}}}
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

  /**
   * {{{usuario_persistencia_data_validade_descricao}}}
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * {{{usuario_persistencia_id_plataforma_descricao}}}
   * @member {Integer} idPlataforma
   */
  exports.prototype['idPlataforma'] = undefined;




  return exports;
}));
