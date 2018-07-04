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
    root.Pier.PushAPNSPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PushAPNSPersistValue model module.
   * @module model/PushAPNSPersistValue
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>PushAPNSPersistValue</code>.
   * {{{push_a_p_n_s_persist_description}}}
   * @alias module:model/PushAPNSPersistValue
   * @class
   * @param idPessoa
   * @param idConta
   * @param tokenDispositivo
   * @param certificado
   * @param senha
   * @param titulo
   * @param conteudo
   * @param tipoEvento
   */
  var exports = function(idPessoa, idConta, tokenDispositivo, certificado, senha, titulo, conteudo, tipoEvento) {

    this['idPessoa'] = idPessoa;
    this['idConta'] = idConta;
    this['tokenDispositivo'] = tokenDispositivo;
    this['certificado'] = certificado;
    this['senha'] = senha;
    this['titulo'] = titulo;
    this['conteudo'] = conteudo;
    this['tipoEvento'] = tipoEvento;


  };

  /**
   * Constructs a <code>PushAPNSPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushAPNSPersistValue} obj Optional instance to populate.
   * @return {module:model/PushAPNSPersistValue} The populated <code>PushAPNSPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('tokenDispositivo')) {
        obj['tokenDispositivo'] = ApiClient.convertToType(data['tokenDispositivo'], 'String');
      }
      if (data.hasOwnProperty('certificado')) {
        obj['certificado'] = ApiClient.convertToType(data['certificado'], 'String');
      }
      if (data.hasOwnProperty('senha')) {
        obj['senha'] = ApiClient.convertToType(data['senha'], 'String');
      }
      if (data.hasOwnProperty('titulo')) {
        obj['titulo'] = ApiClient.convertToType(data['titulo'], 'String');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
      if (data.hasOwnProperty('tipoEvento')) {
        obj['tipoEvento'] = ApiClient.convertToType(data['tipoEvento'], 'String');
      }
      if (data.hasOwnProperty('icone')) {
        obj['icone'] = ApiClient.convertToType(data['icone'], 'String');
      }
      if (data.hasOwnProperty('som')) {
        obj['som'] = ApiClient.convertToType(data['som'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{push_a_p_n_s_persist_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{push_a_p_n_s_persist_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{push_a_p_n_s_persist_token_dispositivo_value}}}
   * @member {String} tokenDispositivo
   */
  exports.prototype['tokenDispositivo'] = undefined;

  /**
   * {{{push_a_p_n_s_persist_certificado_value}}}
   * @member {String} certificado
   */
  exports.prototype['certificado'] = undefined;

  /**
   * {{{push_a_p_n_s_persist_senha_value}}}
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

  /**
   * {{{push_a_p_n_s_persist_titulo_value}}}
   * @member {String} titulo
   */
  exports.prototype['titulo'] = undefined;

  /**
   * {{{push_a_p_n_s_persist_conteudo_value}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * {{{push_a_p_n_s_persist_tipo_evento_value}}}
   * @member {module:model/PushAPNSPersistValue.TipoEventoEnum} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;

  /**
   * {{{push_a_p_n_s_persist_icone_value}}}
   * @member {String} icone
   */
  exports.prototype['icone'] = undefined;

  /**
   * {{{push_a_p_n_s_persist_som_value}}}
   * @member {String} som
   */
  exports.prototype['som'] = undefined;


  /**
   * Allowed values for the <code>tipoEvento</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoEventoEnum = { 
    /**
     * value: RISCO_FRAUDE
     * @const
     */
    RISCO_FRAUDE: "RISCO_FRAUDE",
    
    /**
     * value: CODIGO_SEGURANCA
     * @const
     */
    CODIGO_SEGURANCA: "CODIGO_SEGURANCA",
    
    /**
     * value: OUTROS
     * @const
     */
    OUTROS: "OUTROS"
  };

  return exports;
}));
