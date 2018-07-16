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
    root.Pier.UsuarioTokenPersistencia = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsuarioTokenPersistencia model module.
   * @module model/UsuarioTokenPersistencia
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>UsuarioTokenPersistencia</code>.
   * {{{usuario_token_persistencia_descricao}}}
   * @alias module:model/UsuarioTokenPersistencia
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>UsuarioTokenPersistencia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsuarioTokenPersistencia} obj Optional instance to populate.
   * @return {module:model/UsuarioTokenPersistencia} The populated <code>UsuarioTokenPersistencia</code> instance.
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
      if (data.hasOwnProperty('ddd')) {
        obj['ddd'] = ApiClient.convertToType(data['ddd'], 'String');
      }
      if (data.hasOwnProperty('telefone')) {
        obj['telefone'] = ApiClient.convertToType(data['telefone'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('enviaSMS')) {
        obj['enviaSMS'] = ApiClient.convertToType(data['enviaSMS'], 'Boolean');
      }
      if (data.hasOwnProperty('idTemplateEmail')) {
        obj['idTemplateEmail'] = ApiClient.convertToType(data['idTemplateEmail'], 'Integer');
      }
      if (data.hasOwnProperty('idTemplateSMS')) {
        obj['idTemplateSMS'] = ApiClient.convertToType(data['idTemplateSMS'], 'Integer');
      }
      if (data.hasOwnProperty('nsu')) {
        obj['nsu'] = ApiClient.convertToType(data['nsu'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{usuario_token_persistencia_cpf_descricao}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{usuario_token_persistencia_email_descricao}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{usuario_token_persistencia_ddd_descricao}}}
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * {{{usuario_token_persistencia_telefone_descricao}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * {{{usuario_token_persistencia_data_nascimento_descricao}}}
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * {{{usuario_token_persistencia_envia_sms_descricao}}}
   * @member {Boolean} enviaSMS
   */
  exports.prototype['enviaSMS'] = undefined;

  /**
   * {{{usuario_token_persistencia_id_template_email_descricao}}}
   * @member {Integer} idTemplateEmail
   */
  exports.prototype['idTemplateEmail'] = undefined;

  /**
   * {{{usuario_token_persistencia_id_template_sms_descricao}}}
   * @member {Integer} idTemplateSMS
   */
  exports.prototype['idTemplateSMS'] = undefined;

  /**
   * {{{usuario_token_persistencia_nsu_descricao}}}
   * @member {Integer} nsu
   */
  exports.prototype['nsu'] = undefined;




  return exports;
}));
