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
    root.Pier.NotificacaoSMSResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NotificacaoSMSResponse model module.
   * @module model/NotificacaoSMSResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>NotificacaoSMSResponse</code>.
   * {{{notificacao_s_m_s_response_description}}}
   * @alias module:model/NotificacaoSMSResponse
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
   * Constructs a <code>NotificacaoSMSResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificacaoSMSResponse} obj Optional instance to populate.
   * @return {module:model/NotificacaoSMSResponse} The populated <code>NotificacaoSMSResponse</code> instance.
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
      if (data.hasOwnProperty('tipoEvento')) {
        obj['tipoEvento'] = ApiClient.convertToType(data['tipoEvento'], 'String');
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
        obj['dataAgendamento'] = ApiClient.convertToType(data['dataAgendamento'], 'String');
      }
      if (data.hasOwnProperty('quantidadeTentativasEnvio')) {
        obj['quantidadeTentativasEnvio'] = ApiClient.convertToType(data['quantidadeTentativasEnvio'], 'Integer');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataAlteracaoStatus')) {
        obj['dataAlteracaoStatus'] = ApiClient.convertToType(data['dataAlteracaoStatus'], 'String');
      }
      if (data.hasOwnProperty('protocolo')) {
        obj['protocolo'] = ApiClient.convertToType(data['protocolo'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{notificacao_s_m_s_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_nsu_value}}}
   * @member {Integer} nsu
   */
  exports.prototype['nsu'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_id_emissor_value}}}
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_tipo_evento_value}}}
   * @member {module:model/NotificacaoSMSResponse.TipoEventoEnum} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_status_value}}}
   * @member {module:model/NotificacaoSMSResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_descricao_status_value}}}
   * @member {String} descricaoStatus
   */
  exports.prototype['descricaoStatus'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_celular_value}}}
   * @member {String} celular
   */
  exports.prototype['celular'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_operadora_value}}}
   * @member {String} operadora
   */
  exports.prototype['operadora'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_conteudo_value}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_resposta_value}}}
   * @member {String} resposta
   */
  exports.prototype['resposta'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_data_agendamento_value}}}
   * @member {String} dataAgendamento
   */
  exports.prototype['dataAgendamento'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_quantidade_tentativas_envio_value}}}
   * @member {Integer} quantidadeTentativasEnvio
   */
  exports.prototype['quantidadeTentativasEnvio'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_data_inclusao_value}}}
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_data_alteracao_status_value}}}
   * @member {String} dataAlteracaoStatus
   */
  exports.prototype['dataAlteracaoStatus'] = undefined;

  /**
   * {{{notificacao_s_m_s_response_protocolo_value}}}
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
  };

  return exports;
}));
