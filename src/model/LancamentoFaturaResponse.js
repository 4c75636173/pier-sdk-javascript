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
    root.Pier.LancamentoFaturaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LancamentoFaturaResponse model module.
   * @module model/LancamentoFaturaResponse
   * @version 2.54.4
   */

  /**
   * Constructs a new <code>LancamentoFaturaResponse</code>.
   * Fatura futura
   * @alias module:model/LancamentoFaturaResponse
   * @class
   */
  var exports = function() {


























  };

  /**
   * Constructs a <code>LancamentoFaturaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LancamentoFaturaResponse} obj Optional instance to populate.
   * @return {module:model/LancamentoFaturaResponse} The populated <code>LancamentoFaturaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTransacao')) {
        obj['idTransacao'] = ApiClient.convertToType(data['idTransacao'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoTransacao')) {
        obj['descricaoTipoTransacao'] = ApiClient.convertToType(data['descricaoTipoTransacao'], 'String');
      }
      if (data.hasOwnProperty('idTipoEvento')) {
        obj['idTipoEvento'] = ApiClient.convertToType(data['idTipoEvento'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoEvento')) {
        obj['descricaoTipoEvento'] = ApiClient.convertToType(data['descricaoTipoEvento'], 'String');
      }
      if (data.hasOwnProperty('idEvento')) {
        obj['idEvento'] = ApiClient.convertToType(data['idEvento'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('complemento')) {
        obj['complemento'] = ApiClient.convertToType(data['complemento'], 'String');
      }
      if (data.hasOwnProperty('valorBRL')) {
        obj['valorBRL'] = ApiClient.convertToType(data['valorBRL'], 'Number');
      }
      if (data.hasOwnProperty('valorUSD')) {
        obj['valorUSD'] = ApiClient.convertToType(data['valorUSD'], 'Number');
      }
      if (data.hasOwnProperty('numeroParcela')) {
        obj['numeroParcela'] = ApiClient.convertToType(data['numeroParcela'], 'Integer');
      }
      if (data.hasOwnProperty('quantidadeParcelas')) {
        obj['quantidadeParcelas'] = ApiClient.convertToType(data['quantidadeParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('dataHoraTransacao')) {
        obj['dataHoraTransacao'] = ApiClient.convertToType(data['dataHoraTransacao'], 'String');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('descricaoEstabelecimento')) {
        obj['descricaoEstabelecimento'] = ApiClient.convertToType(data['descricaoEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('nomeFantasiaEstabelecimento')) {
        obj['nomeFantasiaEstabelecimento'] = ApiClient.convertToType(data['nomeFantasiaEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('flagCredito')) {
        obj['flagCredito'] = ApiClient.convertToType(data['flagCredito'], 'Boolean');
      }
      if (data.hasOwnProperty('idMCC')) {
        obj['idMCC'] = ApiClient.convertToType(data['idMCC'], 'Integer');
      }
      if (data.hasOwnProperty('idGrupoMCC')) {
        obj['idGrupoMCC'] = ApiClient.convertToType(data['idGrupoMCC'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoGrupoMCC')) {
        obj['descricaoGrupoMCC'] = ApiClient.convertToType(data['descricaoGrupoMCC'], 'String');
      }
      if (data.hasOwnProperty('titular')) {
        obj['titular'] = ApiClient.convertToType(data['titular'], 'Boolean');
      }
      if (data.hasOwnProperty('nomePortador')) {
        obj['nomePortador'] = ApiClient.convertToType(data['nomePortador'], 'String');
      }
      if (data.hasOwnProperty('numeroCartaoMascarado')) {
        obj['numeroCartaoMascarado'] = ApiClient.convertToType(data['numeroCartaoMascarado'], 'String');
      }
      if (data.hasOwnProperty('flagSolicitouContestacao')) {
        obj['flagSolicitouContestacao'] = ApiClient.convertToType(data['flagSolicitouContestacao'], 'Boolean');
      }
      if (data.hasOwnProperty('valorTaxaEmbarque')) {
        obj['valorTaxaEmbarque'] = ApiClient.convertToType(data['valorTaxaEmbarque'], 'Number');
      }
      if (data.hasOwnProperty('descricaoAbreviada')) {
        obj['descricaoAbreviada'] = ApiClient.convertToType(data['descricaoAbreviada'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transa\u00C3\u00A7\u00C3\u00A3o
   * @member {Integer} idTransacao
   */
  exports.prototype['idTransacao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo da transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} descricaoTipoTransacao
   */
  exports.prototype['descricaoTipoTransacao'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do tipo do evento
   * @member {Integer} idTipoEvento
   */
  exports.prototype['idTipoEvento'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo do evento
   * @member {String} descricaoTipoEvento
   */
  exports.prototype['descricaoTipoEvento'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do evento
   * @member {Integer} idEvento
   */
  exports.prototype['idEvento'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o complementar do evento
   * @member {String} complemento
   */
  exports.prototype['complemento'] = undefined;

  /**
   * Valor em reais
   * @member {Number} valorBRL
   */
  exports.prototype['valorBRL'] = undefined;

  /**
   * Valor em dolar
   * @member {Number} valorUSD
   */
  exports.prototype['valorUSD'] = undefined;

  /**
   * N\u00C3\u00BAmero da parcela
   * @member {Integer} numeroParcela
   */
  exports.prototype['numeroParcela'] = undefined;

  /**
   * Quantidade de parcelas
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * Data da transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} dataHoraTransacao
   */
  exports.prototype['dataHoraTransacao'] = undefined;

  /**
   * Nome do estabelecimento
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do estabelecimento
   * @member {String} descricaoEstabelecimento
   */
  exports.prototype['descricaoEstabelecimento'] = undefined;

  /**
   * Nome fantasia do estabelecimento
   * @member {String} nomeFantasiaEstabelecimento
   */
  exports.prototype['nomeFantasiaEstabelecimento'] = undefined;

  /**
   * Flag que indica se o lan\u00C3\u00A7amento \u00C3\u00A9 de cr\u00C3\u00A9dito
   * @member {Boolean} flagCredito
   */
  exports.prototype['flagCredito'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do MCC (Merchant Category Codes)
   * @member {Integer} idMCC
   */
  exports.prototype['idMCC'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do grupo MCC
   * @member {Integer} idGrupoMCC
   */
  exports.prototype['idGrupoMCC'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do grupo MCC
   * @member {String} descricaoGrupoMCC
   */
  exports.prototype['descricaoGrupoMCC'] = undefined;

  /**
   * Indica se o portador do cart\u00C3\u00A3o \u00C3\u00A9 o titular da conta
   * @member {Boolean} titular
   */
  exports.prototype['titular'] = undefined;

  /**
   * Nome impresso no cart\u00C3\u00A3o
   * @member {String} nomePortador
   */
  exports.prototype['nomePortador'] = undefined;

  /**
   * N\u00C3\u00BAmero do cart\u00C3\u00A3o mascarado
   * @member {String} numeroCartaoMascarado
   */
  exports.prototype['numeroCartaoMascarado'] = undefined;

  /**
   * Flag que indica se o cliente solicitou contesta\u00C3\u00A7\u00C3\u00A3o da transa\u00C3\u00A7\u00C3\u00A3o
   * @member {Boolean} flagSolicitouContestacao
   */
  exports.prototype['flagSolicitouContestacao'] = undefined;

  /**
   * Valor da taxa de embarque
   * @member {Number} valorTaxaEmbarque
   */
  exports.prototype['valorTaxaEmbarque'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o abreviada da transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} descricaoAbreviada
   */
  exports.prototype['descricaoAbreviada'] = undefined;




  return exports;
}));
