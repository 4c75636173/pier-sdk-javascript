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
    root.Pier.LinkTransferenciaBancariaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LinkTransferenciaBancariaResponse model module.
   * @module model/LinkTransferenciaBancariaResponse
   * @version 2.15.0
   */

  /**
   * Constructs a new <code>LinkTransferenciaBancariaResponse</code>.
   * Transfer\u00C3\u00AAncia banc\u00C3\u00A1ria
   * @alias module:model/LinkTransferenciaBancariaResponse
   * @class
   */
  var exports = function() {



























  };

  /**
   * Constructs a <code>LinkTransferenciaBancariaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LinkTransferenciaBancariaResponse} obj Optional instance to populate.
   * @return {module:model/LinkTransferenciaBancariaResponse} The populated <code>LinkTransferenciaBancariaResponse</code> instance.
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
        obj['dataAutorizacao'] = ApiClient.convertToType(data['dataAutorizacao'], 'Date');
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
        obj['dataCompra'] = ApiClient.convertToType(data['dataCompra'], 'Date');
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
        obj['dataMovimento'] = ApiClient.convertToType(data['dataMovimento'], 'Date');
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
        obj['dataVencimentoReal'] = ApiClient.convertToType(data['dataVencimentoReal'], 'Date');
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
   * @member {Date} dataAutorizacao
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
   * @member {Date} dataCompra
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
   * @member {Date} dataMovimento
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
   * @member {Date} dataVencimentoReal
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
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;




  return exports;
}));
