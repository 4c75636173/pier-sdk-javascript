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
   * @version 2.47.3
   */

  /**
   * Constructs a new <code>ContaDetalheResponse</code>.
   * Objeto conta
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
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa Titular da Conta (id).
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * Apresenta o 'Nome Completo da PF' ou o 'Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)'.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do produto ao qual a conta faz parte. (id).
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id) que deu origem a Conta.
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * Nome da origem comercial
   * @member {String} nomeOrigemComercial
   */
  exports.prototype['nomeOrigemComercial'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Fantasia Basica (id).
   * @member {Integer} idFantasiaBasica
   */
  exports.prototype['idFantasiaBasica'] = undefined;

  /**
   * Nome da Fantasia Basica
   * @member {String} nomeFantasiaBasica
   */
  exports.prototype['nomeFantasiaBasica'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do status atribuido a conta.
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status da conta
   * @member {String} statusConta
   */
  exports.prototype['statusConta'] = undefined;

  /**
   * Apresenta o dia de vencimento.
   * @member {Integer} diaVencimento
   */
  exports.prototype['diaVencimento'] = undefined;

  /**
   * Apresenta o melhor dia de compra.
   * @member {Integer} melhorDiaCompra
   */
  exports.prototype['melhorDiaCompra'] = undefined;

  /**
   * Apresenta a data em que o idStatusConta atual fora atribu\u00C3\u00ADdo para ela.
   * @member {String} dataStatusConta
   */
  exports.prototype['dataStatusConta'] = undefined;

  /**
   * Valor da renda comprovada.
   * @member {Number} valorRenda
   */
  exports.prototype['valorRenda'] = undefined;

  /**
   * Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
   * @member {String} dataCadastro
   */
  exports.prototype['dataCadastro'] = undefined;

  /**
   * Apresenta a data da ultima altera\u00C3\u00A7\u00C3\u00A3o de vencimento.
   * @member {String} dataUltimaAlteracaoVencimento
   */
  exports.prototype['dataUltimaAlteracaoVencimento'] = undefined;

  /**
   * Apresenta a data da ultima altera\u00C3\u00A7\u00C3\u00A3o de vencimento.
   * @member {String} dataHoraUltimaCompra
   */
  exports.prototype['dataHoraUltimaCompra'] = undefined;

  /**
   * N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * N\u00C3\u00BAmero da conta corrente.
   * @member {String} numeroContaCorrente
   */
  exports.prototype['numeroContaCorrente'] = undefined;

  /**
   * Forma de envio da fatura.
   * @member {String} formaEnvioFatura
   */
  exports.prototype['formaEnvioFatura'] = undefined;

  /**
   * Apresenta se a pessoa \u00C3\u00A9 titular da conta.
   * @member {Boolean} titular
   */
  exports.prototype['titular'] = undefined;

  /**
   * Apresenta o valor do limite de cr\u00C3\u00A9dito que o portador do cart\u00C3\u00A3o possui.
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional.
   * @member {Number} limiteSaqueGlobal
   */
  exports.prototype['limiteSaqueGlobal'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Nacionais.
   * @member {Number} saldoDisponivelGlobal
   */
  exports.prototype['saldoDisponivelGlobal'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento.
   * @member {Number} saldoDisponivelSaque
   */
  exports.prototype['saldoDisponivelSaque'] = undefined;

  /**
   * Apresenta a quantidade de dias que a conta esta em atraso
   * @member {Integer} diasAtraso
   */
  exports.prototype['diasAtraso'] = undefined;




  return exports;
}));
