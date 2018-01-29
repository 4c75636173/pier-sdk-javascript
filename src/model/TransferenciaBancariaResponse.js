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
   * @version 2.50.18
   */

  /**
   * Constructs a new <code>TransferenciaBancariaResponse</code>.
   * Transfer\u00C3\u00AAncia banc\u00C3\u00A1ria
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
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da autoriza\u00C3\u00A7\u00C3\u00A3o (id)
   * @member {Integer} idAutorizacao
   */
  exports.prototype['idAutorizacao'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transferencia (id)
   * @member {Integer} idTransferencia
   */
  exports.prototype['idTransferencia'] = undefined;

  /**
   * C\u00C3\u00B3digo da autoriza\u00C3\u00A7\u00C3\u00A3o
   * @member {String} codigoAutorizacao
   */
  exports.prototype['codigoAutorizacao'] = undefined;

  /**
   * Data da autoriza\u00C3\u00A7\u00C3\u00A3o
   * @member {String} dataAutorizacao
   */
  exports.prototype['dataAutorizacao'] = undefined;

  /**
   * Origem
   * @member {String} origem
   */
  exports.prototype['origem'] = undefined;

  /**
   * Valor
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de opera\u00C3\u00A7\u00C3\u00A3o (id)
   * @member {Integer} idOperacao
   */
  exports.prototype['idOperacao'] = undefined;

  /**
   * Terminal
   * @member {String} terminal
   */
  exports.prototype['terminal'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id)
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * Data da transfer\u00C3\u00AAncia
   * @member {String} dataCompra
   */
  exports.prototype['dataCompra'] = undefined;

  /**
   * Valor da transfer\u00C3\u00AAncia
   * @member {Number} valorCompra
   */
  exports.prototype['valorCompra'] = undefined;

  /**
   * N\u00C3\u00BAmero de parcelas
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * Valor da parcela
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id)
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * Data do movimento
   * @member {String} dataMovimento
   */
  exports.prototype['dataMovimento'] = undefined;

  /**
   * Valor da transfer\u00C3\u00AAncia acrescido do valor da tarifa de saque se houver tarifa de saque
   * @member {Number} valorContrato
   */
  exports.prototype['valorContrato'] = undefined;

  /**
   * Percentual de juros
   * @member {Number} taxaJuros
   */
  exports.prototype['taxaJuros'] = undefined;

  /**
   * Valor do IOF
   * @member {Number} valorIOF
   */
  exports.prototype['valorIOF'] = undefined;

  /**
   * Valor da TAC
   * @member {Number} valorTAC
   */
  exports.prototype['valorTAC'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id)
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Valor da entrada (primeira parcela)
   * @member {Number} valorEntrada
   */
  exports.prototype['valorEntrada'] = undefined;

  /**
   * Data do vencimento real da fatura
   * @member {String} dataVencimentoReal
   */
  exports.prototype['dataVencimentoReal'] = undefined;

  /**
   * Dia do vencimento padr\u00C3\u00A3o da fatura
   * @member {String} dataVencimentoPadrao
   */
  exports.prototype['dataVencimentoPadrao'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id)
   * @member {Integer} idContaPortador
   */
  exports.prototype['idContaPortador'] = undefined;

  /**
   * Atributo que representa o numero do estabelecimento.
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * Valor da taxa saque.
   * @member {Number} valorTaxaSaque
   */
  exports.prototype['valorTaxaSaque'] = undefined;

  /**
   * C\u00C3\u00B3digo do Banco
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * N\u00C3\u00BAmero da Ag\u00C3\u00AAncia
   * @member {String} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * D\u00C3\u00ADgito da Ag\u00C3\u00AAncia
   * @member {String} digitoAgencia
   */
  exports.prototype['digitoAgencia'] = undefined;

  /**
   * N\u00C3\u00BAmero da Conta
   * @member {String} numeroConta
   */
  exports.prototype['numeroConta'] = undefined;

  /**
   * D\u00C3\u00ADgito da Conta
   * @member {String} digitoConta
   */
  exports.prototype['digitoConta'] = undefined;

  /**
   * Tipo da Conta
   * @member {Integer} flagContaPoupanca
   */
  exports.prototype['flagContaPoupanca'] = undefined;

  /**
   * Documento do Favorecido
   * @member {String} documentoFavorecido
   */
  exports.prototype['documentoFavorecido'] = undefined;

  /**
   * Nome do Favorecido
   * @member {String} nomeFavorecido
   */
  exports.prototype['nomeFavorecido'] = undefined;




  return exports;
}));
