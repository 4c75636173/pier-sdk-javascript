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
    root.Pier.ContaDetalheResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContaDetalheResponse model module.
   * @module model/ContaDetalheResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ContaDetalheResponse</code>.
   * {{{conta_detalhe_response_description}}}
   * @alias module:model/ContaDetalheResponse
   * @class
   */
  var exports = function() {




























  };

  /**
   * Constructs a <code>ContaDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaDetalheResponse} obj Optional instance to populate.
   * @return {module:model/ContaDetalheResponse} The populated <code>ContaDetalheResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('idOrigemComercial')) {
        obj['idOrigemComercial'] = ApiClient.convertToType(data['idOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('nomeOrigemComercial')) {
        obj['nomeOrigemComercial'] = ApiClient.convertToType(data['nomeOrigemComercial'], 'String');
      }
      if (data.hasOwnProperty('idFantasiaBasica')) {
        obj['idFantasiaBasica'] = ApiClient.convertToType(data['idFantasiaBasica'], 'Integer');
      }
      if (data.hasOwnProperty('nomeFantasiaBasica')) {
        obj['nomeFantasiaBasica'] = ApiClient.convertToType(data['nomeFantasiaBasica'], 'String');
      }
      if (data.hasOwnProperty('idStatusConta')) {
        obj['idStatusConta'] = ApiClient.convertToType(data['idStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('statusConta')) {
        obj['statusConta'] = ApiClient.convertToType(data['statusConta'], 'String');
      }
      if (data.hasOwnProperty('diaVencimento')) {
        obj['diaVencimento'] = ApiClient.convertToType(data['diaVencimento'], 'Integer');
      }
      if (data.hasOwnProperty('melhorDiaCompra')) {
        obj['melhorDiaCompra'] = ApiClient.convertToType(data['melhorDiaCompra'], 'Integer');
      }
      if (data.hasOwnProperty('dataStatusConta')) {
        obj['dataStatusConta'] = ApiClient.convertToType(data['dataStatusConta'], 'String');
      }
      if (data.hasOwnProperty('valorRenda')) {
        obj['valorRenda'] = ApiClient.convertToType(data['valorRenda'], 'Number');
      }
      if (data.hasOwnProperty('dataCadastro')) {
        obj['dataCadastro'] = ApiClient.convertToType(data['dataCadastro'], 'String');
      }
      if (data.hasOwnProperty('dataUltimaAlteracaoVencimento')) {
        obj['dataUltimaAlteracaoVencimento'] = ApiClient.convertToType(data['dataUltimaAlteracaoVencimento'], 'String');
      }
      if (data.hasOwnProperty('dataHoraUltimaCompra')) {
        obj['dataHoraUltimaCompra'] = ApiClient.convertToType(data['dataHoraUltimaCompra'], 'String');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'Integer');
      }
      if (data.hasOwnProperty('numeroContaCorrente')) {
        obj['numeroContaCorrente'] = ApiClient.convertToType(data['numeroContaCorrente'], 'String');
      }
      if (data.hasOwnProperty('formaEnvioFatura')) {
        obj['formaEnvioFatura'] = ApiClient.convertToType(data['formaEnvioFatura'], 'String');
      }
      if (data.hasOwnProperty('titular')) {
        obj['titular'] = ApiClient.convertToType(data['titular'], 'Boolean');
      }
      if (data.hasOwnProperty('limiteGlobal')) {
        obj['limiteGlobal'] = ApiClient.convertToType(data['limiteGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaqueGlobal')) {
        obj['limiteSaqueGlobal'] = ApiClient.convertToType(data['limiteSaqueGlobal'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelGlobal')) {
        obj['saldoDisponivelGlobal'] = ApiClient.convertToType(data['saldoDisponivelGlobal'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelSaque')) {
        obj['saldoDisponivelSaque'] = ApiClient.convertToType(data['saldoDisponivelSaque'], 'Number');
      }
      if (data.hasOwnProperty('diasAtraso')) {
        obj['diasAtraso'] = ApiClient.convertToType(data['diasAtraso'], 'Integer');
      }
      if (data.hasOwnProperty('proximoVencimentoPadrao')) {
        obj['proximoVencimentoPadrao'] = ApiClient.convertToType(data['proximoVencimentoPadrao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{conta_detalhe_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{conta_detalhe_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{conta_detalhe_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{conta_detalhe_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{conta_detalhe_response_id_origem_comercial_value}}}
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * {{{conta_detalhe_response_nome_origem_comercial_value}}}
   * @member {String} nomeOrigemComercial
   */
  exports.prototype['nomeOrigemComercial'] = undefined;

  /**
   * {{{conta_detalhe_response_id_fantasia_basica_value}}}
   * @member {Integer} idFantasiaBasica
   */
  exports.prototype['idFantasiaBasica'] = undefined;

  /**
   * {{{conta_detalhe_response_nome_fantasia_basica_value}}}
   * @member {String} nomeFantasiaBasica
   */
  exports.prototype['nomeFantasiaBasica'] = undefined;

  /**
   * {{{conta_detalhe_response_id_status_conta_value}}}
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * {{{conta_detalhe_response_status_conta_value}}}
   * @member {String} statusConta
   */
  exports.prototype['statusConta'] = undefined;

  /**
   * {{{conta_detalhe_response_dia_vencimento_value}}}
   * @member {Integer} diaVencimento
   */
  exports.prototype['diaVencimento'] = undefined;

  /**
   * {{{conta_detalhe_response_melhor_dia_compra_value}}}
   * @member {Integer} melhorDiaCompra
   */
  exports.prototype['melhorDiaCompra'] = undefined;

  /**
   * {{{conta_detalhe_response_data_status_conta_value}}}
   * @member {String} dataStatusConta
   */
  exports.prototype['dataStatusConta'] = undefined;

  /**
   * {{{conta_detalhe_response_valor_renda_value}}}
   * @member {Number} valorRenda
   */
  exports.prototype['valorRenda'] = undefined;

  /**
   * {{{conta_detalhe_response_data_cadastro_value}}}
   * @member {String} dataCadastro
   */
  exports.prototype['dataCadastro'] = undefined;

  /**
   * {{{conta_detalhe_response_data_ultima_alteracao_vencimento_value}}}
   * @member {String} dataUltimaAlteracaoVencimento
   */
  exports.prototype['dataUltimaAlteracaoVencimento'] = undefined;

  /**
   * {{{conta_detalhe_response_data_hora_ultima_compra_value}}}
   * @member {String} dataHoraUltimaCompra
   */
  exports.prototype['dataHoraUltimaCompra'] = undefined;

  /**
   * {{{conta_detalhe_response_numero_agencia_value}}}
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{conta_detalhe_response_numero_conta_corrente_value}}}
   * @member {String} numeroContaCorrente
   */
  exports.prototype['numeroContaCorrente'] = undefined;

  /**
   * {{{conta_detalhe_response_forma_envio_fatura_value}}}
   * @member {String} formaEnvioFatura
   */
  exports.prototype['formaEnvioFatura'] = undefined;

  /**
   * {{{conta_detalhe_response_titular_value}}}
   * @member {Boolean} titular
   */
  exports.prototype['titular'] = undefined;

  /**
   * {{{conta_detalhe_response_limite_global_value}}}
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * {{{conta_detalhe_response_limite_saque_global_value}}}
   * @member {Number} limiteSaqueGlobal
   */
  exports.prototype['limiteSaqueGlobal'] = undefined;

  /**
   * {{{conta_detalhe_response_saldo_disponivel_global_value}}}
   * @member {Number} saldoDisponivelGlobal
   */
  exports.prototype['saldoDisponivelGlobal'] = undefined;

  /**
   * {{{conta_detalhe_response_saldo_disponivel_saque_value}}}
   * @member {Number} saldoDisponivelSaque
   */
  exports.prototype['saldoDisponivelSaque'] = undefined;

  /**
   * {{{conta_detalhe_response_dias_atraso_value}}}
   * @member {Integer} diasAtraso
   */
  exports.prototype['diasAtraso'] = undefined;

  /**
   * {{{conta_response_proximo_vencimento_padrao_value}}}
   * @member {String} proximoVencimentoPadrao
   */
  exports.prototype['proximoVencimentoPadrao'] = undefined;




  return exports;
}));
