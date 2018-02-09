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
    root.Pier.DetalheOperacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DetalheOperacaoResponse model module.
   * @module model/DetalheOperacaoResponse
   * @version 2.54.1
   */

  /**
   * Constructs a new <code>DetalheOperacaoResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso Operacao
   * @alias module:model/DetalheOperacaoResponse
   * @class
   */
  var exports = function() {




















  };

  /**
   * Constructs a <code>DetalheOperacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetalheOperacaoResponse} obj Optional instance to populate.
   * @return {module:model/DetalheOperacaoResponse} The populated <code>DetalheOperacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idOperacao')) {
        obj['idOperacao'] = ApiClient.convertToType(data['idOperacao'], 'Integer');
      }
      if (data.hasOwnProperty('codigoProcessamento')) {
        obj['codigoProcessamento'] = ApiClient.convertToType(data['codigoProcessamento'], 'String');
      }
      if (data.hasOwnProperty('codigoProcessamentoCancelamento')) {
        obj['codigoProcessamentoCancelamento'] = ApiClient.convertToType(data['codigoProcessamentoCancelamento'], 'String');
      }
      if (data.hasOwnProperty('nomeOperacao')) {
        obj['nomeOperacao'] = ApiClient.convertToType(data['nomeOperacao'], 'String');
      }
      if (data.hasOwnProperty('descricaoOperacao')) {
        obj['descricaoOperacao'] = ApiClient.convertToType(data['descricaoOperacao'], 'String');
      }
      if (data.hasOwnProperty('planoMinimo')) {
        obj['planoMinimo'] = ApiClient.convertToType(data['planoMinimo'], 'Integer');
      }
      if (data.hasOwnProperty('planoMaximo')) {
        obj['planoMaximo'] = ApiClient.convertToType(data['planoMaximo'], 'Integer');
      }
      if (data.hasOwnProperty('valorMinimo')) {
        obj['valorMinimo'] = ApiClient.convertToType(data['valorMinimo'], 'Number');
      }
      if (data.hasOwnProperty('valorMaximo')) {
        obj['valorMaximo'] = ApiClient.convertToType(data['valorMaximo'], 'Number');
      }
      if (data.hasOwnProperty('flagCobraJuros')) {
        obj['flagCobraJuros'] = ApiClient.convertToType(data['flagCobraJuros'], 'Boolean');
      }
      if (data.hasOwnProperty('taxaJuros')) {
        obj['taxaJuros'] = ApiClient.convertToType(data['taxaJuros'], 'Number');
      }
      if (data.hasOwnProperty('flagCobraTarifa')) {
        obj['flagCobraTarifa'] = ApiClient.convertToType(data['flagCobraTarifa'], 'Boolean');
      }
      if (data.hasOwnProperty('taxaTarifa')) {
        obj['taxaTarifa'] = ApiClient.convertToType(data['taxaTarifa'], 'Number');
      }
      if (data.hasOwnProperty('valorTac')) {
        obj['valorTac'] = ApiClient.convertToType(data['valorTac'], 'Number');
      }
      if (data.hasOwnProperty('percentualTac')) {
        obj['percentualTac'] = ApiClient.convertToType(data['percentualTac'], 'Number');
      }
      if (data.hasOwnProperty('valorOperacao')) {
        obj['valorOperacao'] = ApiClient.convertToType(data['valorOperacao'], 'Number');
      }
      if (data.hasOwnProperty('carencia')) {
        obj['carencia'] = ApiClient.convertToType(data['carencia'], 'Integer');
      }
      if (data.hasOwnProperty('excedentePermitido')) {
        obj['excedentePermitido'] = ApiClient.convertToType(data['excedentePermitido'], 'Number');
      }
      if (data.hasOwnProperty('flagPermitirParcelamento')) {
        obj['flagPermitirParcelamento'] = ApiClient.convertToType(data['flagPermitirParcelamento'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo que identifica a opera\u00C3\u00A7\u00C3\u00A3o
   * @member {Integer} idOperacao
   */
  exports.prototype['idOperacao'] = undefined;

  /**
   * C\u00C3\u00B3digo de processamento usado em transa\u00C3\u00A7\u00C3\u00B5es com o autorizador
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * C\u00C3\u00B3digo de processamento usado para cancelar transa\u00C3\u00A7\u00C3\u00B5es no autorizador
   * @member {String} codigoProcessamentoCancelamento
   */
  exports.prototype['codigoProcessamentoCancelamento'] = undefined;

  /**
   * Nome da opera\u00C3\u00A7\u00C3\u00A3o
   * @member {String} nomeOperacao
   */
  exports.prototype['nomeOperacao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o da opera\u00C3\u00A7\u00C3\u00A3o
   * @member {String} descricaoOperacao
   */
  exports.prototype['descricaoOperacao'] = undefined;

  /**
   * Quantidade m\u00C3\u00ADnima de meses permitido para opera\u00C3\u00A7\u00C3\u00A3o
   * @member {Integer} planoMinimo
   */
  exports.prototype['planoMinimo'] = undefined;

  /**
   * Quantidade M\u00C3\u00A1ximo de meses permitido para opera\u00C3\u00A7\u00C3\u00A3o
   * @member {Integer} planoMaximo
   */
  exports.prototype['planoMaximo'] = undefined;

  /**
   *  Valor m\u00C3\u00ADnimo permitido permitido para opera\u00C3\u00A7\u00C3\u00A3o
   * @member {Number} valorMinimo
   */
  exports.prototype['valorMinimo'] = undefined;

  /**
   *  Valor m\u00C3\u00A1ximo permitido permitido para opera\u00C3\u00A7\u00C3\u00A3o
   * @member {Number} valorMaximo
   */
  exports.prototype['valorMaximo'] = undefined;

  /**
   * Flag indicativa para crobran\u00C3\u00A7a de juros
   * @member {Boolean} flagCobraJuros
   */
  exports.prototype['flagCobraJuros'] = undefined;

  /**
   * Valor do juros a ser cobrado, caso opera\u00C3\u00A7\u00C3\u00A3o cobre juros
   * @member {Number} taxaJuros
   */
  exports.prototype['taxaJuros'] = undefined;

  /**
   * Flag indicativa para crobran\u00C3\u00A7a de tarifas
   * @member {Boolean} flagCobraTarifa
   */
  exports.prototype['flagCobraTarifa'] = undefined;

  /**
   * Valor da tarifa a ser cobrado, caso opera\u00C3\u00A7\u00C3\u00A3o cobre tarifas
   * @member {Number} taxaTarifa
   */
  exports.prototype['taxaTarifa'] = undefined;

  /**
   * Valor da taxa de abertura de conta
   * @member {Number} valorTac
   */
  exports.prototype['valorTac'] = undefined;

  /**
   * Percentual da taxa de abertura de conta
   * @member {Number} percentualTac
   */
  exports.prototype['percentualTac'] = undefined;

  /**
   * Valor da opera\u00C3\u00A7\u00C3\u00A3o
   * @member {Number} valorOperacao
   */
  exports.prototype['valorOperacao'] = undefined;

  /**
   * Quantidade de meses para car\u00C3\u00AAncia
   * @member {Integer} carencia
   */
  exports.prototype['carencia'] = undefined;

  /**
   * Valor excedente permitido para opera\u00C3\u00A7\u00C3\u00A3o
   * @member {Number} excedentePermitido
   */
  exports.prototype['excedentePermitido'] = undefined;

  /**
   * Permitir transa\u00C3\u00A7\u00C3\u00B5es parceladas
   * @member {Boolean} flagPermitirParcelamento
   */
  exports.prototype['flagPermitirParcelamento'] = undefined;




  return exports;
}));
