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
   * @version 2.28.3
   */

  /**
   * Constructs a new <code>RiscoFraudeDetalhadoResponse</code>.
   * Objeto de resposta de Risco de Fraude Detalhado
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
      if (data.hasOwnProperty('tefefones')) {
        obj['tefefones'] = ApiClient.convertToType(data['tefefones'], [TelefoneResponse]);
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de resolu\u00C3\u00A7\u00C3\u00A3o atribu\u00C3\u00ADdo ao registro
   * @member {Integer} idTipoResolucao
   */
  exports.prototype['idTipoResolucao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo de resolu\u00C3\u00A7\u00C3\u00A3o atribu\u00C3\u00ADdo ao registro
   * @member {String} descricaoTipoResolucao
   */
  exports.prototype['descricaoTipoResolucao'] = undefined;

  /**
   * Indica que a transa\u00C3\u00A7\u00C3\u00A3o possui um alto risco de fraude e que todas as transa\u00C3\u00A7\u00C3\u00B5es seguintes a ela ser\u00C3\u00A3o negadas at\u00C3\u00A9 que todas as transa\u00C3\u00A7\u00C3\u00B5es classificadas com risco de fraude sejam analisadas
   * @member {Boolean} flagAltoRisco
   */
  exports.prototype['flagAltoRisco'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do produto
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transa\u00C3\u00A7\u00C3\u00A3o
   * @member {Integer} idTransacao
   */
  exports.prototype['idTransacao'] = undefined;

  /**
   * Data que a transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude foi realizada
   * @member {String} dataTransacao
   */
  exports.prototype['dataTransacao'] = undefined;

  /**
   * Valor da transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * C\u00C3\u00B3digo da moeda de origem utilizada para a transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} codigoMoedaOrigem
   */
  exports.prototype['codigoMoedaOrigem'] = undefined;

  /**
   * Valor da transa\u00C3\u00A7\u00C3\u00A3o na moeda de origem
   * @member {Number} valorOrigem
   */
  exports.prototype['valorOrigem'] = undefined;

  /**
   * C\u00C3\u00B3digo da moeda de destino utilizada para a transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} codigoMoedaDestino
   */
  exports.prototype['codigoMoedaDestino'] = undefined;

  /**
   * Valor da transa\u00C3\u00A7\u00C3\u00A3o na moeda de destino
   * @member {Number} valorDestino
   */
  exports.prototype['valorDestino'] = undefined;

  /**
   * Nome do estabelecimento onde a transa\u00C3\u00A7\u00C3\u00A3o  com risco de fraude foi realizada
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Pa\u00C3\u00ADs
   * @member {String} idPais
   */
  exports.prototype['idPais'] = undefined;

  /**
   * C\u00C3\u00B3digo de resposta do autorizador para a transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} codigoRespostaAutorizador
   */
  exports.prototype['codigoRespostaAutorizador'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o da resposta do autorizador para a transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} descricaoRespostaAutorizador
   */
  exports.prototype['descricaoRespostaAutorizador'] = undefined;

  /**
   * C\u00C3\u00B3digo de resposta da ferramenta de Preven\u00C3\u00A7\u00C3\u00A3o a Fraude para a transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} codigoRespostaFraude
   */
  exports.prototype['codigoRespostaFraude'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o da resposta da ferramenta de Preven\u00C3\u00A7\u00C3\u00A3o a Fraude para a transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} descricaoRespostaFraude
   */
  exports.prototype['descricaoRespostaFraude'] = undefined;

  /**
   * Tipo de Terminal que originou a Transa\u00C3\u00A7\u00C3\u00A3o (POS, ATM, TEF, etc)
   * @member {String} origemTransacao
   */
  exports.prototype['origemTransacao'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do modo de origem da captura da Transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} codigoModoEntradaTerminal
   */
  exports.prototype['codigoModoEntradaTerminal'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do modo de origem da captura da Transa\u00C3\u00A7\u00C3\u00A3o
   * @member {String} descricaoModoEntradaTerminal
   */
  exports.prototype['descricaoModoEntradaTerminal'] = undefined;

  /**
   * N\u00C3\u00BAmero do CPF da Pessoa portadora do Cart\u00C3\u00A3o, quando for do tipo Pessoa F\u00C3\u00ADsica
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * N\u00C3\u00BAmero do CNPJ da Pessoa portadora do Cart\u00C3\u00A3o, quanto for do tipo Pessoa Jur\u00C3\u00ADdica
   * @member {String} cnpj
   */
  exports.prototype['cnpj'] = undefined;

  /**
   * Endere\u00C3\u00A7o de email da Pessoa portadora do Cart\u00C3\u00A3o
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Lista de telefones associados ao portador do Cart\u00C3\u00A3o
   * @member {Array.<module:model/TelefoneResponse>} tefefones
   */
  exports.prototype['tefefones'] = undefined;




  return exports;
}));
