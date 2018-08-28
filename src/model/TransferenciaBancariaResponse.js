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
    root.Pier.TransferenciaBancariaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransferenciaBancariaResponse model module.
   * @module model/TransferenciaBancariaResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TransferenciaBancariaResponse</code>.
   * {{{transferencia_bancaria_response_description}}}
   * @alias module:model/TransferenciaBancariaResponse
   * @class
   */
  var exports = function() {




































  };

  /**
   * Constructs a <code>TransferenciaBancariaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferenciaBancariaResponse} obj Optional instance to populate.
   * @return {module:model/TransferenciaBancariaResponse} The populated <code>TransferenciaBancariaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nsuorigem')) {
        obj['nsuorigem'] = ApiClient.convertToType(data['nsuorigem'], 'Integer');
      }
      if (data.hasOwnProperty('idAutorizacao')) {
        obj['idAutorizacao'] = ApiClient.convertToType(data['idAutorizacao'], 'Integer');
      }
      if (data.hasOwnProperty('idTransferencia')) {
        obj['idTransferencia'] = ApiClient.convertToType(data['idTransferencia'], 'Integer');
      }
      if (data.hasOwnProperty('codigoAutorizacao')) {
        obj['codigoAutorizacao'] = ApiClient.convertToType(data['codigoAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('dataAutorizacao')) {
        obj['dataAutorizacao'] = ApiClient.convertToType(data['dataAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('origem')) {
        obj['origem'] = ApiClient.convertToType(data['origem'], 'String');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('idOperacao')) {
        obj['idOperacao'] = ApiClient.convertToType(data['idOperacao'], 'Integer');
      }
      if (data.hasOwnProperty('terminal')) {
        obj['terminal'] = ApiClient.convertToType(data['terminal'], 'String');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('dataCompra')) {
        obj['dataCompra'] = ApiClient.convertToType(data['dataCompra'], 'String');
      }
      if (data.hasOwnProperty('valorCompra')) {
        obj['valorCompra'] = ApiClient.convertToType(data['valorCompra'], 'Number');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('valorParcela')) {
        obj['valorParcela'] = ApiClient.convertToType(data['valorParcela'], 'Number');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('dataMovimento')) {
        obj['dataMovimento'] = ApiClient.convertToType(data['dataMovimento'], 'String');
      }
      if (data.hasOwnProperty('valorContrato')) {
        obj['valorContrato'] = ApiClient.convertToType(data['valorContrato'], 'Number');
      }
      if (data.hasOwnProperty('taxaJuros')) {
        obj['taxaJuros'] = ApiClient.convertToType(data['taxaJuros'], 'Number');
      }
      if (data.hasOwnProperty('valorIOF')) {
        obj['valorIOF'] = ApiClient.convertToType(data['valorIOF'], 'Number');
      }
      if (data.hasOwnProperty('valorTAC')) {
        obj['valorTAC'] = ApiClient.convertToType(data['valorTAC'], 'Number');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('valorEntrada')) {
        obj['valorEntrada'] = ApiClient.convertToType(data['valorEntrada'], 'Number');
      }
      if (data.hasOwnProperty('dataVencimentoReal')) {
        obj['dataVencimentoReal'] = ApiClient.convertToType(data['dataVencimentoReal'], 'String');
      }
      if (data.hasOwnProperty('dataVencimentoPadrao')) {
        obj['dataVencimentoPadrao'] = ApiClient.convertToType(data['dataVencimentoPadrao'], 'String');
      }
      if (data.hasOwnProperty('idContaPortador')) {
        obj['idContaPortador'] = ApiClient.convertToType(data['idContaPortador'], 'Integer');
      }
      if (data.hasOwnProperty('numeroEstabelecimento')) {
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('valorTaxaSaque')) {
        obj['valorTaxaSaque'] = ApiClient.convertToType(data['valorTaxaSaque'], 'Number');
      }
      if (data.hasOwnProperty('banco')) {
        obj['banco'] = ApiClient.convertToType(data['banco'], 'Integer');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'String');
      }
      if (data.hasOwnProperty('digitoAgencia')) {
        obj['digitoAgencia'] = ApiClient.convertToType(data['digitoAgencia'], 'String');
      }
      if (data.hasOwnProperty('numeroConta')) {
        obj['numeroConta'] = ApiClient.convertToType(data['numeroConta'], 'String');
      }
      if (data.hasOwnProperty('digitoConta')) {
        obj['digitoConta'] = ApiClient.convertToType(data['digitoConta'], 'String');
      }
      if (data.hasOwnProperty('flagContaPoupanca')) {
        obj['flagContaPoupanca'] = ApiClient.convertToType(data['flagContaPoupanca'], 'Integer');
      }
      if (data.hasOwnProperty('documentoFavorecido')) {
        obj['documentoFavorecido'] = ApiClient.convertToType(data['documentoFavorecido'], 'String');
      }
      if (data.hasOwnProperty('nomeFavorecido')) {
        obj['nomeFavorecido'] = ApiClient.convertToType(data['nomeFavorecido'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} nsuorigem
   */
  exports.prototype['nsuorigem'] = undefined;

  /**
   * {{{transferencia_bancaria_response_id_autorizacao_value}}}
   * @member {Integer} idAutorizacao
   */
  exports.prototype['idAutorizacao'] = undefined;

  /**
   * {{{transferencia_bancaria_response_id_transferencia_value}}}
   * @member {Integer} idTransferencia
   */
  exports.prototype['idTransferencia'] = undefined;

  /**
   * {{{transferencia_bancaria_response_codigo_autorizacao_value}}}
   * @member {String} codigoAutorizacao
   */
  exports.prototype['codigoAutorizacao'] = undefined;

  /**
   * {{{transferencia_bancaria_response_data_autorizacao_value}}}
   * @member {String} dataAutorizacao
   */
  exports.prototype['dataAutorizacao'] = undefined;

  /**
   * {{{transferencia_bancaria_response_origem_value}}}
   * @member {String} origem
   */
  exports.prototype['origem'] = undefined;

  /**
   * {{{transferencia_bancaria_response_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{transferencia_bancaria_response_id_operacao_value}}}
   * @member {Integer} idOperacao
   */
  exports.prototype['idOperacao'] = undefined;

  /**
   * {{{transferencia_bancaria_response_terminal_value}}}
   * @member {String} terminal
   */
  exports.prototype['terminal'] = undefined;

  /**
   * {{{transferencia_bancaria_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{transferencia_bancaria_response_data_compra_value}}}
   * @member {String} dataCompra
   */
  exports.prototype['dataCompra'] = undefined;

  /**
   * {{{transferencia_bancaria_response_valor_compra_value}}}
   * @member {Number} valorCompra
   */
  exports.prototype['valorCompra'] = undefined;

  /**
   * {{{transferencia_bancaria_response_numero_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * {{{transferencia_bancaria_response_valor_parcela_value}}}
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * {{{transferencia_bancaria_response_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{transferencia_bancaria_response_data_movimento_value}}}
   * @member {String} dataMovimento
   */
  exports.prototype['dataMovimento'] = undefined;

  /**
   * {{{transferencia_bancaria_response_valor_contrato_value}}}
   * @member {Number} valorContrato
   */
  exports.prototype['valorContrato'] = undefined;

  /**
   * {{{transferencia_bancaria_response_taxa_juros_value}}}
   * @member {Number} taxaJuros
   */
  exports.prototype['taxaJuros'] = undefined;

  /**
   * {{{transferencia_bancaria_response_valor_i_o_f_value}}}
   * @member {Number} valorIOF
   */
  exports.prototype['valorIOF'] = undefined;

  /**
   * {{{transferencia_bancaria_response_valor_t_a_c_value}}}
   * @member {Number} valorTAC
   */
  exports.prototype['valorTAC'] = undefined;

  /**
   * {{{transferencia_bancaria_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{transferencia_bancaria_response_valor_entrada_value}}}
   * @member {Number} valorEntrada
   */
  exports.prototype['valorEntrada'] = undefined;

  /**
   * {{{transferencia_bancaria_response_data_vencimento_real_value}}}
   * @member {String} dataVencimentoReal
   */
  exports.prototype['dataVencimentoReal'] = undefined;

  /**
   * {{{transferencia_bancaria_response_data_vencimento_padrao_value}}}
   * @member {String} dataVencimentoPadrao
   */
  exports.prototype['dataVencimentoPadrao'] = undefined;

  /**
   * {{{transferencia_bancaria_response_id_conta_portador_value}}}
   * @member {Integer} idContaPortador
   */
  exports.prototype['idContaPortador'] = undefined;

  /**
   * {{{transferencia_bancaria_response_numero_estabelecimento_value}}}
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * {{{transferencia_bancaria_response_valor_taxa_saque_value}}}
   * @member {Number} valorTaxaSaque
   */
  exports.prototype['valorTaxaSaque'] = undefined;

  /**
   * {{{transferencia_bancaria_response_banco_value}}}
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * {{{transferencia_bancaria_response_numero_agencia_value}}}
   * @member {String} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{transferencia_bancaria_response_digito_agencia_value}}}
   * @member {String} digitoAgencia
   */
  exports.prototype['digitoAgencia'] = undefined;

  /**
   * {{{transferencia_bancaria_response_numero_conta_value}}}
   * @member {String} numeroConta
   */
  exports.prototype['numeroConta'] = undefined;

  /**
   * {{{transferencia_bancaria_response_digito_conta_value}}}
   * @member {String} digitoConta
   */
  exports.prototype['digitoConta'] = undefined;

  /**
   * {{{transferencia_bancaria_response_flag_conta_poupanca_value}}}
   * @member {Integer} flagContaPoupanca
   */
  exports.prototype['flagContaPoupanca'] = undefined;

  /**
   * {{{transferencia_bancaria_response_documento_favorecido_value}}}
   * @member {String} documentoFavorecido
   */
  exports.prototype['documentoFavorecido'] = undefined;

  /**
   * {{{transferencia_bancaria_response_nome_favorecido_value}}}
   * @member {String} nomeFavorecido
   */
  exports.prototype['nomeFavorecido'] = undefined;




  return exports;
}));
