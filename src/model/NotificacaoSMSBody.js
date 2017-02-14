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
    root.Pier.NotificacaoSMSBody = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NotificacaoSMSBody model module.
   * @module model/NotificacaoSMSBody
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>NotificacaoSMSBody</code>.
   * Objeto Notifica\u00C3\u00A7\u00C3\u00A3o
   * @alias module:model/NotificacaoSMSBody
   * @class
   * @param nsu
   * @param idPessoa
   * @param idConta
   * @param celular
   * @param conteudo
   * @param evento
   */
  var exports = function(nsu, idPessoa, idConta, celular, conteudo, evento) {

    this['nsu'] = nsu;
    this['idPessoa'] = idPessoa;
    this['idConta'] = idConta;
    this['celular'] = celular;
    this['conteudo'] = conteudo;

    this['evento'] = evento;
  };

  /**
   * Constructs a <code>NotificacaoSMSBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificacaoSMSBody} obj Optional instance to populate.
   * @return {module:model/NotificacaoSMSBody} The populated <code>NotificacaoSMSBody</code> instance.
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
        obj['dataAgendamento'] = ApiClient.convertToType(data['dataAgendamento'], 'Date');
      }
      if (data.hasOwnProperty('evento')) {
        obj['evento'] = ApiClient.convertToType(data['evento'], 'String');
      }
    }
    return obj;
  }


  /**
   * N\u00C3\u00BAmero sequencial \u00C3\u00BAnico
   * @member {Integer} nsu
   */
  exports.prototype['nsu'] = undefined;

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
   * Apresenta o celular a ser eviado o SMS no formato 5588999999999 ou 5588999999999.
   * @member {String} celular
   */
  exports.prototype['celular'] = undefined;

  /**
   * Apresenta o texto do SMS a ser enviado
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * Apresenta a data e hora em que ser\u00C3\u00A1 enviado a notifica\u00C3\u00A7\u00C3\u00A3o
   * @member {Date} dataAgendamento
   */
  exports.prototype['dataAgendamento'] = undefined;

  /**
   * Apresenta o evento a qual pertence a notifica\u00C3\u00A7\u00C3\u00A3o
   * @member {module:model/NotificacaoSMSBody.EventoEnum} evento
   */
  exports.prototype['evento'] = undefined;


  /**
   * Allowed values for the <code>evento</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventoEnum = { 
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
