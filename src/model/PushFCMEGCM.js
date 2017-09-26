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
    root.Pier.PushFCMEGCM = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PushFCMEGCM model module.
   * @module model/PushFCMEGCM
   * @version 2.35.2
   */

  /**
   * Constructs a new <code>PushFCMEGCM</code>.
   * Objeto Notifica\u00C3\u00A7\u00C3\u00A3o Push FCM e GCM
   * @alias module:model/PushFCMEGCM
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
   * Constructs a <code>PushFCMEGCM</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushFCMEGCM} obj Optional instance to populate.
   * @return {module:model/PushFCMEGCM} The populated <code>PushFCMEGCM</code> instance.
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
   * Apresenta o token do dispositivo que dever\u00C3\u00A1 receber o push.
   * @member {String} tokenDispositivo
   */
  exports.prototype['tokenDispositivo'] = undefined;

  /**
   * Apresenta o token da sua aplica\u00C3\u00A7\u00C3\u00A3o Android gerada pela Google.
   * @member {String} tokenServidor
   */
  exports.prototype['tokenServidor'] = undefined;

  /**
   * Apresenta o t\u00C3\u00ADtulo da notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} titulo
   */
  exports.prototype['titulo'] = undefined;

  /**
   * Apresenta o texto da notifica\u00C3\u00A7\u00C3\u00A3o a ser enviado.
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * Apresenta o tipoEvento a qual pertence a notifica\u00C3\u00A7\u00C3\u00A3o
   * @member {module:model/PushFCMEGCM.TipoEventoEnum} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;

  /**
   * Apresenta o nome do icone a ser apresentado no push.
   * @member {String} icone
   */
  exports.prototype['icone'] = undefined;

  /**
   * Apresenta o cor do icone a ser apresentado no push
   * @member {String} som
   */
  exports.prototype['som'] = undefined;

  /**
   * Apresenta a cor do icone da notifica\u00C3\u00A7\u00C3\u00A3o. Essa cor dever\u00C3\u00A1 ser informada no formato RGB Ex. #000000.
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
