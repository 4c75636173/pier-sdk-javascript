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
    root.Pier.NotificacaoPushResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NotificacaoPushResponse model module.
   * @module model/NotificacaoPushResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>NotificacaoPushResponse</code>.
   * {{{notificacao_push_response_description}}}
   * @alias module:model/NotificacaoPushResponse
   * @class
   * @param idPessoa
   * @param idConta
   * @param tokenDispositivo
   * @param titulo
   * @param conteudo
   */
  var exports = function(idPessoa, idConta, tokenDispositivo, titulo, conteudo) {





    this['idPessoa'] = idPessoa;
    this['idConta'] = idConta;
    this['tokenDispositivo'] = tokenDispositivo;
    this['titulo'] = titulo;
    this['conteudo'] = conteudo;


  };

  /**
   * Constructs a <code>NotificacaoPushResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificacaoPushResponse} obj Optional instance to populate.
   * @return {module:model/NotificacaoPushResponse} The populated <code>NotificacaoPushResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataEnvio')) {
        obj['dataEnvio'] = ApiClient.convertToType(data['dataEnvio'], 'String');
      }
      if (data.hasOwnProperty('idEmissor')) {
        obj['idEmissor'] = ApiClient.convertToType(data['idEmissor'], 'Integer');
      }
      if (data.hasOwnProperty('tipoEvento')) {
        obj['tipoEvento'] = ApiClient.convertToType(data['tipoEvento'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('tokenDispositivo')) {
        obj['tokenDispositivo'] = ApiClient.convertToType(data['tokenDispositivo'], 'String');
      }
      if (data.hasOwnProperty('titulo')) {
        obj['titulo'] = ApiClient.convertToType(data['titulo'], 'String');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
      if (data.hasOwnProperty('plataforma')) {
        obj['plataforma'] = ApiClient.convertToType(data['plataforma'], 'String');
      }
      if (data.hasOwnProperty('protocolo')) {
        obj['protocolo'] = ApiClient.convertToType(data['protocolo'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{notificacao_push_response_data_envio_value}}}
   * @member {String} dataEnvio
   */
  exports.prototype['dataEnvio'] = undefined;

  /**
   * {{{notificacao_push_response_id_emissor_value}}}
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * {{{notificacao_push_response_tipo_evento_value}}}
   * @member {module:model/NotificacaoPushResponse.TipoEventoEnum} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;

  /**
   * {{{notificacao_push_response_status_value}}}
   * @member {module:model/NotificacaoPushResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{notificacao_push_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{notificacao_push_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{notificacao_push_response_token_dispositivo_value}}}
   * @member {String} tokenDispositivo
   */
  exports.prototype['tokenDispositivo'] = undefined;

  /**
   * {{{notificacao_push_response_titulo_value}}}
   * @member {String} titulo
   */
  exports.prototype['titulo'] = undefined;

  /**
   * {{{notificacao_push_response_conteudo_value}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * {{{notificacao_push_response_plataforma_value}}}
   * @member {module:model/NotificacaoPushResponse.PlataformaEnum} plataforma
   */
  exports.prototype['plataforma'] = undefined;

  /**
   * {{{notificacao_push_response_protocolo_value}}}
   * @member {String} protocolo
   */
  exports.prototype['protocolo'] = undefined;


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
  };  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: PENDENTE
     * @const
     */
    PENDENTE: "PENDENTE",
    
    /**
     * value: ENCAMINHADO
     * @const
     */
    ENCAMINHADO: "ENCAMINHADO",
    
    /**
     * value: ENVIADO
     * @const
     */
    ENVIADO: "ENVIADO",
    
    /**
     * value: RESPONDIDO
     * @const
     */
    RESPONDIDO: "RESPONDIDO",
    
    /**
     * value: ERRO
     * @const
     */
    ERRO: "ERRO",
    
    /**
     * value: ERRO_RESPOSTA
     * @const
     */
    ERRO_RESPOSTA: "ERRO_RESPOSTA",
    
    /**
     * value: SUCESSO_RESPOSTA
     * @const
     */
    SUCESSO_RESPOSTA: "SUCESSO_RESPOSTA"
  };  /**
   * Allowed values for the <code>plataforma</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PlataformaEnum = { 
    /**
     * value: APNS
     * @const
     */
    APNS: "APNS",
    
    /**
     * value: FCM
     * @const
     */
    FCM: "FCM",
    
    /**
     * value: GCM
     * @const
     */
    GCM: "GCM"
  };

  return exports;
}));
