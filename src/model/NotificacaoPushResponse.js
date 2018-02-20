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
   * @version 2.54.4
   */

  /**
   * Constructs a new <code>NotificacaoPushResponse</code>.
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
   * Apresenta a data e em que o registro foi enviado para o dispositivo.
   * @member {String} dataEnvio
   */
  exports.prototype['dataEnvio'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do emissor (id).
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o
   * @member {module:model/NotificacaoPushResponse.TipoEventoEnum} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;

  /**
   * Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
   * @member {module:model/NotificacaoPushResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * C\u00C3\u00B3digo identificado da pessoa
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da conta
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Token do dispositivo a qual foi destinado a notifica\u00C3\u00A7\u00C3\u00A3o (device_token)
   * @member {String} tokenDispositivo
   */
  exports.prototype['tokenDispositivo'] = undefined;

  /**
   * T\u00C3\u00ADtulo da notifica\u00C3\u00A7\u00C3\u00A3o enviada.
   * @member {String} titulo
   */
  exports.prototype['titulo'] = undefined;

  /**
   * Conte\u00C3\u00BAdo da notifica\u00C3\u00A7\u00C3\u00A3o enviada.
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * Nome do Sistema Operacional a qual foi enviado o Push.
   * @member {module:model/NotificacaoPushResponse.PlataformaEnum} plataforma
   */
  exports.prototype['plataforma'] = undefined;

  /**
   * N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
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
    OUTROS: "OUTROS"
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
