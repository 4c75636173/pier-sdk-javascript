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
    root.Pier.SMS = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SMS model module.
   * @module model/SMS
   * @version 2.5.5
   */

  /**
   * Constructs a new <code>SMS</code>.
   * Objeto SMS
   * @alias module:model/SMS
   * @class
   * @param status
   * @param descricaoStatus
   * @param idPessoa
   * @param idConta
   * @param celular
   * @param operadora
   * @param conteudo
   * @param resposta
   * @param dataAgendamento
   * @param quantidadeTentativasEnvio
   * @param dataInclusao
   * @param dataAlteracaoStatus
   */
  var exports = function(status, descricaoStatus, idPessoa, idConta, celular, operadora, conteudo, resposta, dataAgendamento, quantidadeTentativasEnvio, dataInclusao, dataAlteracaoStatus) {





    this['status'] = status;
    this['descricaoStatus'] = descricaoStatus;
    this['idPessoa'] = idPessoa;
    this['idConta'] = idConta;
    this['celular'] = celular;
    this['operadora'] = operadora;
    this['conteudo'] = conteudo;
    this['resposta'] = resposta;
    this['dataAgendamento'] = dataAgendamento;
    this['quantidadeTentativasEnvio'] = quantidadeTentativasEnvio;
    this['dataInclusao'] = dataInclusao;
    this['dataAlteracaoStatus'] = dataAlteracaoStatus;

  };

  /**
   * Constructs a <code>SMS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMS} obj Optional instance to populate.
   * @return {module:model/SMS} The populated <code>SMS</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nsu')) {
        obj['nsu'] = ApiClient.convertToType(data['nsu'], 'Integer');
      }
      if (data.hasOwnProperty('idEmissor')) {
        obj['idEmissor'] = ApiClient.convertToType(data['idEmissor'], 'Integer');
      }
      if (data.hasOwnProperty('evento')) {
        obj['evento'] = ApiClient.convertToType(data['evento'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('descricaoStatus')) {
        obj['descricaoStatus'] = ApiClient.convertToType(data['descricaoStatus'], 'String');
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
      if (data.hasOwnProperty('operadora')) {
        obj['operadora'] = ApiClient.convertToType(data['operadora'], 'String');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
      if (data.hasOwnProperty('resposta')) {
        obj['resposta'] = ApiClient.convertToType(data['resposta'], 'String');
      }
      if (data.hasOwnProperty('dataAgendamento')) {
        obj['dataAgendamento'] = ApiClient.convertToType(data['dataAgendamento'], 'Date');
      }
      if (data.hasOwnProperty('quantidadeTentativasEnvio')) {
        obj['quantidadeTentativasEnvio'] = ApiClient.convertToType(data['quantidadeTentativasEnvio'], 'Integer');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'Date');
      }
      if (data.hasOwnProperty('dataAlteracaoStatus')) {
        obj['dataAlteracaoStatus'] = ApiClient.convertToType(data['dataAlteracaoStatus'], 'Date');
      }
      if (data.hasOwnProperty('protocolo')) {
        obj['protocolo'] = ApiClient.convertToType(data['protocolo'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo Identificador.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * N\u00C3\u00BAmero sequencial \u00C3\u00BAnico.
   * @member {Integer} nsu
   */
  exports.prototype['nsu'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do emissor (id).
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * Evento de notifica\u00C3\u00A7\u00C3\u00A3o
   * @member {module:model/SMS.EventoEnum} evento
   */
  exports.prototype['evento'] = undefined;

  /**
   * Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
   * @member {module:model/SMS.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
   * @member {String} descricaoStatus
   */
  exports.prototype['descricaoStatus'] = undefined;

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
   * Apresenta o celular a ser eviado o SMS no formato 5588999999999 ou 5588999999999
   * @member {String} celular
   */
  exports.prototype['celular'] = undefined;

  /**
   * Apresenta a operadora do celular a ser eviado o SMS
   * @member {String} operadora
   */
  exports.prototype['operadora'] = undefined;

  /**
   * Apresenta o texto da notifica\u00C3\u00A7\u00C3\u00A3o a ser enviado
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * Apresenta o texto da resposta da notifica\u00C3\u00A7\u00C3\u00A3o que foi enviada
   * @member {String} resposta
   */
  exports.prototype['resposta'] = undefined;

  /**
   * Apresenta a data e hora em que ser\u00C3\u00A1 enviado a notifica\u00C3\u00A7\u00C3\u00A3o
   * @member {Date} dataAgendamento
   */
  exports.prototype['dataAgendamento'] = undefined;

  /**
   * Quantidade de tentativas e envio da notifica\u00C3\u00A7\u00C3\u00A3o
   * @member {Integer} quantidadeTentativasEnvio
   */
  exports.prototype['quantidadeTentativasEnvio'] = undefined;

  /**
   * Apresenta a data e em que o registro foi inclu\u00C3\u00ADdo na base para ser enviado
   * @member {Date} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * Apresenta a data e em que o Stattjus do registro foi modificado
   * @member {Date} dataAlteracaoStatus
   */
  exports.prototype['dataAlteracaoStatus'] = undefined;

  /**
   * N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
   * @member {String} protocolo
   */
  exports.prototype['protocolo'] = undefined;


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
    ERRO_RESPOSTA: "ERRO_RESPOSTA"
  };

  return exports;
}));
