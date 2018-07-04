(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TelefoneResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TelefoneResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.RiscoFraudeDetalhadoResponse = factory(root.Pier.ApiClient, root.Pier.TelefoneResponse);
  }
}(this, function(ApiClient, TelefoneResponse) {
  'use strict';

  /**
   * The RiscoFraudeDetalhadoResponse model module.
   * @module model/RiscoFraudeDetalhadoResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>RiscoFraudeDetalhadoResponse</code>.
   * {{{risco_fraude_detalhado_response_description}}}
   * @alias module:model/RiscoFraudeDetalhadoResponse
   * @class
   */
  var exports = function() {




























  };

  /**
   * Constructs a <code>RiscoFraudeDetalhadoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiscoFraudeDetalhadoResponse} obj Optional instance to populate.
   * @return {module:model/RiscoFraudeDetalhadoResponse} The populated <code>RiscoFraudeDetalhadoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoResolucao')) {
        obj['idTipoResolucao'] = ApiClient.convertToType(data['idTipoResolucao'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoResolucao')) {
        obj['descricaoTipoResolucao'] = ApiClient.convertToType(data['descricaoTipoResolucao'], 'String');
      }
      if (data.hasOwnProperty('flagAltoRisco')) {
        obj['flagAltoRisco'] = ApiClient.convertToType(data['flagAltoRisco'], 'Boolean');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('idTransacao')) {
        obj['idTransacao'] = ApiClient.convertToType(data['idTransacao'], 'Integer');
      }
      if (data.hasOwnProperty('dataTransacao')) {
        obj['dataTransacao'] = ApiClient.convertToType(data['dataTransacao'], 'String');
      }
      if (data.hasOwnProperty('valorTransacao')) {
        obj['valorTransacao'] = ApiClient.convertToType(data['valorTransacao'], 'Number');
      }
      if (data.hasOwnProperty('codigoMoedaOrigem')) {
        obj['codigoMoedaOrigem'] = ApiClient.convertToType(data['codigoMoedaOrigem'], 'String');
      }
      if (data.hasOwnProperty('valorOrigem')) {
        obj['valorOrigem'] = ApiClient.convertToType(data['valorOrigem'], 'Number');
      }
      if (data.hasOwnProperty('codigoMoedaDestino')) {
        obj['codigoMoedaDestino'] = ApiClient.convertToType(data['codigoMoedaDestino'], 'String');
      }
      if (data.hasOwnProperty('valorDestino')) {
        obj['valorDestino'] = ApiClient.convertToType(data['valorDestino'], 'Number');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('idPais')) {
        obj['idPais'] = ApiClient.convertToType(data['idPais'], 'String');
      }
      if (data.hasOwnProperty('codigoRespostaAutorizador')) {
        obj['codigoRespostaAutorizador'] = ApiClient.convertToType(data['codigoRespostaAutorizador'], 'String');
      }
      if (data.hasOwnProperty('descricaoRespostaAutorizador')) {
        obj['descricaoRespostaAutorizador'] = ApiClient.convertToType(data['descricaoRespostaAutorizador'], 'String');
      }
      if (data.hasOwnProperty('codigoRespostaFraude')) {
        obj['codigoRespostaFraude'] = ApiClient.convertToType(data['codigoRespostaFraude'], 'String');
      }
      if (data.hasOwnProperty('descricaoRespostaFraude')) {
        obj['descricaoRespostaFraude'] = ApiClient.convertToType(data['descricaoRespostaFraude'], 'String');
      }
      if (data.hasOwnProperty('origemTransacao')) {
        obj['origemTransacao'] = ApiClient.convertToType(data['origemTransacao'], 'String');
      }
      if (data.hasOwnProperty('codigoModoEntradaTerminal')) {
        obj['codigoModoEntradaTerminal'] = ApiClient.convertToType(data['codigoModoEntradaTerminal'], 'String');
      }
      if (data.hasOwnProperty('descricaoModoEntradaTerminal')) {
        obj['descricaoModoEntradaTerminal'] = ApiClient.convertToType(data['descricaoModoEntradaTerminal'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('cnpj')) {
        obj['cnpj'] = ApiClient.convertToType(data['cnpj'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('telefones')) {
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefoneResponse]);
      }
    }
    return obj;
  }


  /**
   * {{{risco_fraude_detalhado_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_id_tipo_resolucao_value}}}
   * @member {Integer} idTipoResolucao
   */
  exports.prototype['idTipoResolucao'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_descricao_tipo_resolucao_value}}}
   * @member {String} descricaoTipoResolucao
   */
  exports.prototype['descricaoTipoResolucao'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_flag_alto_risco_value}}}
   * @member {Boolean} flagAltoRisco
   */
  exports.prototype['flagAltoRisco'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_id_transacao_value}}}
   * @member {Integer} idTransacao
   */
  exports.prototype['idTransacao'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_data_transacao_value}}}
   * @member {String} dataTransacao
   */
  exports.prototype['dataTransacao'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_valor_transacao_value}}}
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_codigo_moeda_origem_value}}}
   * @member {String} codigoMoedaOrigem
   */
  exports.prototype['codigoMoedaOrigem'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_valor_origem_value}}}
   * @member {Number} valorOrigem
   */
  exports.prototype['valorOrigem'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_codigo_moeda_destino_value}}}
   * @member {String} codigoMoedaDestino
   */
  exports.prototype['codigoMoedaDestino'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_valor_destino_value}}}
   * @member {Number} valorDestino
   */
  exports.prototype['valorDestino'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_nome_estabelecimento_value}}}
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_id_pais_value}}}
   * @member {String} idPais
   */
  exports.prototype['idPais'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_codigo_resposta_autorizador_value}}}
   * @member {String} codigoRespostaAutorizador
   */
  exports.prototype['codigoRespostaAutorizador'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_descricao_resposta_autorizador_value}}}
   * @member {String} descricaoRespostaAutorizador
   */
  exports.prototype['descricaoRespostaAutorizador'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_codigo_resposta_fraude_value}}}
   * @member {String} codigoRespostaFraude
   */
  exports.prototype['codigoRespostaFraude'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_descricao_resposta_fraude_value}}}
   * @member {String} descricaoRespostaFraude
   */
  exports.prototype['descricaoRespostaFraude'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_origem_transacao_value}}}
   * @member {String} origemTransacao
   */
  exports.prototype['origemTransacao'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_codigo_modo_entrada_terminal_value}}}
   * @member {String} codigoModoEntradaTerminal
   */
  exports.prototype['codigoModoEntradaTerminal'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_descricao_modo_entrada_terminal_value}}}
   * @member {String} descricaoModoEntradaTerminal
   */
  exports.prototype['descricaoModoEntradaTerminal'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_cnpj_value}}}
   * @member {String} cnpj
   */
  exports.prototype['cnpj'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{risco_fraude_detalhado_response_telefones_value}}}
   * @member {Array.<module:model/TelefoneResponse>} telefones
   */
  exports.prototype['telefones'] = undefined;




  return exports;
}));
