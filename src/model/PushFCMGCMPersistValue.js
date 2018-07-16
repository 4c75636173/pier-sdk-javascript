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
    root.Pier.PushFCMGCMPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PushFCMGCMPersistValue model module.
   * @module model/PushFCMGCMPersistValue
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>PushFCMGCMPersistValue</code>.
   * {{{push_f_c_m_g_c_m_persist_description}}}
   * @alias module:model/PushFCMGCMPersistValue
   * @class
   * @param idPessoa
   * @param idConta
   * @param tokenDispositivo
   * @param tokenServidor
   * @param titulo
   * @param conteudo
   * @param tipoEvento
   */
  var exports = function(idPessoa, idConta, tokenDispositivo, tokenServidor, titulo, conteudo, tipoEvento) {

    this['idPessoa'] = idPessoa;
    this['idConta'] = idConta;
    this['tokenDispositivo'] = tokenDispositivo;
    this['tokenServidor'] = tokenServidor;
    this['titulo'] = titulo;
    this['conteudo'] = conteudo;
    this['tipoEvento'] = tipoEvento;



  };

  /**
   * Constructs a <code>PushFCMGCMPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushFCMGCMPersistValue} obj Optional instance to populate.
   * @return {module:model/PushFCMGCMPersistValue} The populated <code>PushFCMGCMPersistValue</code> instance.
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
      if (data.hasOwnProperty('tokenServidor')) {
        obj['tokenServidor'] = ApiClient.convertToType(data['tokenServidor'], 'String');
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
      if (data.hasOwnProperty('cor')) {
        obj['cor'] = ApiClient.convertToType(data['cor'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{push_f_c_m_g_c_m_persist_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{push_f_c_m_g_c_m_persist_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{push_f_c_m_g_c_m_persist_token_dispositivo_value}}}
   * @member {String} tokenDispositivo
   */
  exports.prototype['tokenDispositivo'] = undefined;

  /**
   * {{{push_f_c_m_g_c_m_persist_token_servidor_value}}}
   * @member {String} tokenServidor
   */
  exports.prototype['tokenServidor'] = undefined;

  /**
   * {{{push_f_c_m_g_c_m_persist_titulo_value}}}
   * @member {String} titulo
   */
  exports.prototype['titulo'] = undefined;

  /**
   * {{{push_f_c_m_g_c_m_persist_conteudo_value}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * {{{push_f_c_m_g_c_m_persist_tipo_evento_value}}}
   * @member {module:model/PushFCMGCMPersistValue.TipoEventoEnum} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;

  /**
   * {{{push_f_c_m_g_c_m_persist_icone_value}}}
   * @member {String} icone
   */
  exports.prototype['icone'] = undefined;

  /**
   * {{{push_f_c_m_g_c_m_persist_som_value}}}
   * @member {String} som
   */
  exports.prototype['som'] = undefined;

  /**
   * {{{push_f_c_m_g_c_m_persist_cor_value}}}
   * @member {String} cor
   */
  exports.prototype['cor'] = undefined;


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
