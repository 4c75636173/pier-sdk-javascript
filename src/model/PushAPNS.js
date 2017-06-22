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
    root.Pier.PushAPNS = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PushAPNS model module.
   * @module model/PushAPNS
   * @version 2.16.6
   */

  /**
   * Constructs a new <code>PushAPNS</code>.
   * Objeto Push Notifica\u00C3\u00A7\u00C3\u00A3o APNS
   * @alias module:model/PushAPNS
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
   * Constructs a <code>PushAPNS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushAPNS} obj Optional instance to populate.
   * @return {module:model/PushAPNS} The populated <code>PushAPNS</code> instance.
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
   * Apresenta o certificado APNs que est\u00C3\u00A1 cadastrado para o aplicativo na loja da Apple. Esse certificado dever\u00C3\u00A1 ser enviado no formado Base64.
   * @member {String} certificado
   */
  exports.prototype['certificado'] = undefined;

  /**
   * Apresenta a senha para o certificado APNs que est\u00C3\u00A1 cadastrado para o aplicativo na loja da Apple.
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

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
   * @member {module:model/PushAPNS.TipoEventoEnum} tipoEvento
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
     * value: OUTROS
     * @const
     */
    OUTROS: "OUTROS"
  };

  return exports;
}));
