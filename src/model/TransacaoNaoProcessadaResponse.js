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
    root.Pier.TransacaoNaoProcessadaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransacaoNaoProcessadaResponse model module.
   * @module model/TransacaoNaoProcessadaResponse
   * @version 2.50.19
   */

  /**
   * Constructs a new <code>TransacaoNaoProcessadaResponse</code>.
   * Objeto transacao N\u00C3\u00A3o Processada
   * @alias module:model/TransacaoNaoProcessadaResponse
   * @class
   */
  var exports = function() {





































  };

  /**
   * Constructs a <code>TransacaoNaoProcessadaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacaoNaoProcessadaResponse} obj Optional instance to populate.
   * @return {module:model/TransacaoNaoProcessadaResponse} The populated <code>TransacaoNaoProcessadaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTipoTransacaoNaoProcessada')) {
        obj['idTipoTransacaoNaoProcessada'] = ApiClient.convertToType(data['idTipoTransacaoNaoProcessada'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoTransacaoNaoProcessada')) {
        obj['descricaoTipoTransacaoNaoProcessada'] = ApiClient.convertToType(data['descricaoTipoTransacaoNaoProcessada'], 'String');
      }
      if (data.hasOwnProperty('descricaoAbreviada')) {
        obj['descricaoAbreviada'] = ApiClient.convertToType(data['descricaoAbreviada'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('cartaoMascarado')) {
        obj['cartaoMascarado'] = ApiClient.convertToType(data['cartaoMascarado'], 'String');
      }
      if (data.hasOwnProperty('nomePortador')) {
        obj['nomePortador'] = ApiClient.convertToType(data['nomePortador'], 'String');
      }
      if (data.hasOwnProperty('dataOrigem')) {
        obj['dataOrigem'] = ApiClient.convertToType(data['dataOrigem'], 'String');
      }
      if (data.hasOwnProperty('dataFaturamento')) {
        obj['dataFaturamento'] = ApiClient.convertToType(data['dataFaturamento'], 'String');
      }
      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], 'String');
      }
      if (data.hasOwnProperty('modoEntradaTransacao')) {
        obj['modoEntradaTransacao'] = ApiClient.convertToType(data['modoEntradaTransacao'], 'String');
      }
      if (data.hasOwnProperty('valorTaxaEmbarque')) {
        obj['valorTaxaEmbarque'] = ApiClient.convertToType(data['valorTaxaEmbarque'], 'Number');
      }
      if (data.hasOwnProperty('valorEntrada')) {
        obj['valorEntrada'] = ApiClient.convertToType(data['valorEntrada'], 'Number');
      }
      if (data.hasOwnProperty('valorBRL')) {
        obj['valorBRL'] = ApiClient.convertToType(data['valorBRL'], 'Number');
      }
      if (data.hasOwnProperty('valorUSD')) {
        obj['valorUSD'] = ApiClient.convertToType(data['valorUSD'], 'Number');
      }
      if (data.hasOwnProperty('cotacaoUSD')) {
        obj['cotacaoUSD'] = ApiClient.convertToType(data['cotacaoUSD'], 'Number');
      }
      if (data.hasOwnProperty('dataCotacaoUSD')) {
        obj['dataCotacaoUSD'] = ApiClient.convertToType(data['dataCotacaoUSD'], 'String');
      }
      if (data.hasOwnProperty('codigoMoedaOrigem')) {
        obj['codigoMoedaOrigem'] = ApiClient.convertToType(data['codigoMoedaOrigem'], 'String');
      }
      if (data.hasOwnProperty('codigoMoedaDestino')) {
        obj['codigoMoedaDestino'] = ApiClient.convertToType(data['codigoMoedaDestino'], 'String');
      }
      if (data.hasOwnProperty('codigoAutorizacao')) {
        obj['codigoAutorizacao'] = ApiClient.convertToType(data['codigoAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('codigoReferencia')) {
        obj['codigoReferencia'] = ApiClient.convertToType(data['codigoReferencia'], 'String');
      }
      if (data.hasOwnProperty('codigoTerminal')) {
        obj['codigoTerminal'] = ApiClient.convertToType(data['codigoTerminal'], 'String');
      }
      if (data.hasOwnProperty('codigoMCC')) {
        obj['codigoMCC'] = ApiClient.convertToType(data['codigoMCC'], 'Integer');
      }
      if (data.hasOwnProperty('grupoMCC')) {
        obj['grupoMCC'] = ApiClient.convertToType(data['grupoMCC'], 'Integer');
      }
      if (data.hasOwnProperty('grupoDescricaoMCC')) {
        obj['grupoDescricaoMCC'] = ApiClient.convertToType(data['grupoDescricaoMCC'], 'String');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('nomeFantasiaEstabelecimento')) {
        obj['nomeFantasiaEstabelecimento'] = ApiClient.convertToType(data['nomeFantasiaEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('localidadeEstabelecimento')) {
        obj['localidadeEstabelecimento'] = ApiClient.convertToType(data['localidadeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('planoParcelamento')) {
        obj['planoParcelamento'] = ApiClient.convertToType(data['planoParcelamento'], 'Integer');
      }
      if (data.hasOwnProperty('numeroParcela')) {
        obj['numeroParcela'] = ApiClient.convertToType(data['numeroParcela'], 'Integer');
      }
      if (data.hasOwnProperty('detalhesTransacao')) {
        obj['detalhesTransacao'] = ApiClient.convertToType(data['detalhesTransacao'], 'String');
      }
      if (data.hasOwnProperty('flagCredito')) {
        obj['flagCredito'] = ApiClient.convertToType(data['flagCredito'], 'Integer');
      }
      if (data.hasOwnProperty('flagFaturado')) {
        obj['flagFaturado'] = ApiClient.convertToType(data['flagFaturado'], 'Integer');
      }
      if (data.hasOwnProperty('flagEstorno')) {
        obj['flagEstorno'] = ApiClient.convertToType(data['flagEstorno'], 'Integer');
      }
      if (data.hasOwnProperty('idTransacaoEstorno')) {
        obj['idTransacaoEstorno'] = ApiClient.convertToType(data['idTransacaoEstorno'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo da Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} idTipoTransacaoNaoProcessada
   */
  exports.prototype['idTipoTransacaoNaoProcessada'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do Tipo da Transa\u00C3\u00A7\u00C3\u00A3o n\u00C3\u00A3o Processada.
   * @member {String} descricaoTipoTransacaoNaoProcessada
   */
  exports.prototype['descricaoTipoTransacaoNaoProcessada'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o Abreviada da Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} descricaoAbreviada
   */
  exports.prototype['descricaoAbreviada'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id).
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * N\u00C3\u00BAmero do Cart\u00C3\u00A3o em Formato 0000XXXXXXXX0000.
   * @member {String} cartaoMascarado
   */
  exports.prototype['cartaoMascarado'] = undefined;

  /**
   * Nome completo do Portador do Cart\u00C3\u00A3o.
   * @member {String} nomePortador
   */
  exports.prototype['nomePortador'] = undefined;

  /**
   * Data em que a Transa\u00C3\u00A7\u00C3\u00A3o foi realizada.
   * @member {String} dataOrigem
   */
  exports.prototype['dataOrigem'] = undefined;

  /**
   * Data de Faturamento da Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} dataFaturamento
   */
  exports.prototype['dataFaturamento'] = undefined;

  /**
   * Data de Vencimento da Fatura.
   * @member {String} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * Descreve o modo utilizado para realizar a leitura dos dados do cart\u00C3\u00A3o para realizar a Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} modoEntradaTransacao
   */
  exports.prototype['modoEntradaTransacao'] = undefined;

  /**
   * Valor da Taxa de Embarque em Real (BRL) quando a transa\u00C3\u00A7\u00C3\u00A3o for relacionada a Compra de Passagens A\u00C3\u00A9reas.
   * @member {Number} valorTaxaEmbarque
   */
  exports.prototype['valorTaxaEmbarque'] = undefined;

  /**
   * Valor da Entrada em Real (BRL) quando a transa\u00C3\u00A7\u00C3\u00A3o for do tipo Parcelada com o pagamento de um valor de Entrada.
   * @member {Number} valorEntrada
   */
  exports.prototype['valorEntrada'] = undefined;

  /**
   * Valor da Transa\u00C3\u00A7\u00C3\u00A3o em Real (BRL).
   * @member {Number} valorBRL
   */
  exports.prototype['valorBRL'] = undefined;

  /**
   * Valor da Transa\u00C3\u00A7\u00C3\u00A3o em D\u00C3\u00B3lar Americano (USD).
   * @member {Number} valorUSD
   */
  exports.prototype['valorUSD'] = undefined;

  /**
   * Valor do D\u00C3\u00B3lar Americano (USD) convertido em Real (BRL).
   * @member {Number} cotacaoUSD
   */
  exports.prototype['cotacaoUSD'] = undefined;

  /**
   * Data de Fechamento da Cota\u00C3\u00A7\u00C3\u00A3o do D\u00C3\u00B3lar Americano (USD).
   * @member {String} dataCotacaoUSD
   */
  exports.prototype['dataCotacaoUSD'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Moeda utilizada na Transa\u00C3\u00A7\u00C3\u00A3o, seguindo padr\u00C3\u00A3o ISO 4217.
   * @member {String} codigoMoedaOrigem
   */
  exports.prototype['codigoMoedaOrigem'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Moeda da Transa\u00C3\u00A7\u00C3\u00A3o ap\u00C3\u00B3s a convers\u00C3\u00A3o, seguindo padr\u00C3\u00A3o ISO 4217.
   * @member {String} codigoMoedaDestino
   */
  exports.prototype['codigoMoedaDestino'] = undefined;

  /**
   * C\u00C3\u00B3digo de Autoriza\u00C3\u00A7\u00C3\u00A3o da Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} codigoAutorizacao
   */
  exports.prototype['codigoAutorizacao'] = undefined;

  /**
   * C\u00C3\u00B3digo de Refer\u00C3\u00AAncia da Transa\u00C3\u00A7\u00C3\u00A3o quando utilizado Cart\u00C3\u00A3o Bandeirado.
   * @member {String} codigoReferencia
   */
  exports.prototype['codigoReferencia'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da origem da captura da Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} codigoTerminal
   */
  exports.prototype['codigoTerminal'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da categoria do Estabelecimento.
   * @member {Integer} codigoMCC
   */
  exports.prototype['codigoMCC'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do grupo do Estabelecimento.
   * @member {Integer} grupoMCC
   */
  exports.prototype['grupoMCC'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do grupo do Estabelecimento.
   * @member {String} grupoDescricaoMCC
   */
  exports.prototype['grupoDescricaoMCC'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento (id).
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * Nome do Estabelecimento.
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * Nome Fantasia do Estabelecimento.
   * @member {String} nomeFantasiaEstabelecimento
   */
  exports.prototype['nomeFantasiaEstabelecimento'] = undefined;

  /**
   * Localidade do Estabelecimento.
   * @member {String} localidadeEstabelecimento
   */
  exports.prototype['localidadeEstabelecimento'] = undefined;

  /**
   * Quando a Transa\u00C3\u00A7\u00C3\u00A3o for do tipo Parcelada, apresenta o n\u00C3\u00BAmero total de Parcelas.
   * @member {Integer} planoParcelamento
   */
  exports.prototype['planoParcelamento'] = undefined;

  /**
   * Quando a Transa\u00C3\u00A7\u00C3\u00A3o for do tipo Parcelada, apresenta o n\u00C3\u00BAmero da Parcela.
   * @member {Integer} numeroParcela
   */
  exports.prototype['numeroParcela'] = undefined;

  /**
   * Detalhes complementares a respeito da Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} detalhesTransacao
   */
  exports.prototype['detalhesTransacao'] = undefined;

  /**
   * Quando ativa, indica que a Transa\u00C3\u00A7\u00C3\u00A3o \u00C3\u00A9 do Tipo 'Cr\u00C3\u00A9dito'.
   * @member {Integer} flagCredito
   */
  exports.prototype['flagCredito'] = undefined;

  /**
   * Quando ativa, indica que a Transa\u00C3\u00A7\u00C3\u00A3o foi consolidada em uma Fatura.
   * @member {Integer} flagFaturado
   */
  exports.prototype['flagFaturado'] = undefined;

  /**
   * Quando ativa, indica que a Transa\u00C3\u00A7\u00C3\u00A3o foi estornada.
   * @member {Integer} flagEstorno
   */
  exports.prototype['flagEstorno'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Transa\u00C3\u00A7\u00C3\u00A3o (id) que gerou o estorno.
   * @member {Integer} idTransacaoEstorno
   */
  exports.prototype['idTransacaoEstorno'] = undefined;

  /**
   * Atributo que representa o c\u00C3\u00B3digo identificador do status da transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
