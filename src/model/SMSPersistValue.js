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
    root.Pier.SMSPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SMSPersistValue model module.
   * @module model/SMSPersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>SMSPersistValue</code>.
   * {{{s_m_s_persist_description}}}
   * @alias module:model/SMSPersistValue
   * @class
   * @param nsu
   * @param idPessoa
   * @param idConta
   * @param celular
   * @param conteudo
   * @param tipoEvento
   */
  var exports = function(nsu, idPessoa, idConta, celular, conteudo, tipoEvento) {

    this['nsu'] = nsu;
    this['idPessoa'] = idPessoa;
    this['idConta'] = idConta;
    this['celular'] = celular;
    this['conteudo'] = conteudo;

    this['tipoEvento'] = tipoEvento;
  };

  /**
   * Constructs a <code>SMSPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMSPersistValue} obj Optional instance to populate.
   * @return {module:model/SMSPersistValue} The populated <code>SMSPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nsu')) {
        obj['nsu'] = ApiClient.convertToType(data['nsu'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('celular')) {
        obj['celular'] = ApiClient.convertToType(data['celular'], 'String');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
      if (data.hasOwnProperty('dataAgendamento')) {
        obj['dataAgendamento'] = ApiClient.convertToType(data['dataAgendamento'], 'String');
      }
      if (data.hasOwnProperty('tipoEvento')) {
        obj['tipoEvento'] = ApiClient.convertToType(data['tipoEvento'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{s_m_s_persist_nsu_value}}}
   * @member {Integer} nsu
   */
  exports.prototype['nsu'] = undefined;

  /**
   * {{{s_m_s_persist_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{s_m_s_persist_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{s_m_s_persist_celular_value}}}
   * @member {String} celular
   */
  exports.prototype['celular'] = undefined;

  /**
   * {{{s_m_s_persist_conteudo_value}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * {{{s_m_s_persist_data_agendamento_value}}}
   * @member {String} dataAgendamento
   */
  exports.prototype['dataAgendamento'] = undefined;

  /**
   * {{{s_m_s_persist_tipo_evento_value}}}
   * @member {module:model/SMSPersistValue.TipoEventoEnum} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;


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
    OUTROS: "OUTROS",
    
    /**
     * value: OTP_3D_SECURE
     * @const
     */
    OTP_3D_SECURE: "OTP_3D_SECURE"
  };

  return exports;
}));
