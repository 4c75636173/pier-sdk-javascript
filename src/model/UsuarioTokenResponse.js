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
    root.Pier.UsuarioTokenResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsuarioTokenResponse model module.
   * @module model/UsuarioTokenResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>UsuarioTokenResponse</code>.
   * {{{usuario_token_resposta_descricao}}}
   * @alias module:model/UsuarioTokenResponse
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>UsuarioTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsuarioTokenResponse} obj Optional instance to populate.
   * @return {module:model/UsuarioTokenResponse} The populated <code>UsuarioTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ativo')) {
        obj['ativo'] = ApiClient.convertToType(data['ativo'], 'Boolean');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('ddd')) {
        obj['ddd'] = ApiClient.convertToType(data['ddd'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('telefone')) {
        obj['telefone'] = ApiClient.convertToType(data['telefone'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('validade')) {
        obj['validade'] = ApiClient.convertToType(data['validade'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{usuario_token_resposta_ativo_descricao}}}
   * @member {Boolean} ativo
   */
  exports.prototype['ativo'] = undefined;

  /**
   * {{{usuario_token_resposta_cpf_descricao}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{usuario_token_resposta_data_inclusao_descricao}}}
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * {{{usuario_token_resposta_data_nascimento_descricao}}}
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * {{{usuario_token_resposta_ddd_descricao}}}
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * {{{usuario_token_resposta_email_descricao}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{usuario_token_resposta_telefone_descricao}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * {{{usuario_token_resposta_token_descricao}}}
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

  /**
   * {{{usuario_token_resposta_validade_descricao}}}
   * @member {String} validade
   */
  exports.prototype['validade'] = undefined;




  return exports;
}));
