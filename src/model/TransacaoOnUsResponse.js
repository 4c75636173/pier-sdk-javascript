(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './MapOfstringAndstring'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MapOfstringAndstring'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TransacaoOnUsResponse = factory(root.Pier.ApiClient, root.Pier.MapOfstringAndstring);
  }
}(this, function(ApiClient, MapOfstringAndstring) {
  'use strict';

  /**
   * The TransacaoOnUsResponse model module.
   * @module model/TransacaoOnUsResponse
   * @version 2.50.14
   */

  /**
   * Constructs a new <code>TransacaoOnUsResponse</code>.
   * Objeto de Resposta de Autoriza\u00C3\u00A7\u00C3\u00A3o
   * @alias module:model/TransacaoOnUsResponse
   * @class
   * @param terminalRequisitante
   */
  var exports = function(terminalRequisitante) {







    this['terminalRequisitante'] = terminalRequisitante;
  };

  /**
   * Constructs a <code>TransacaoOnUsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacaoOnUsResponse} obj Optional instance to populate.
   * @return {module:model/TransacaoOnUsResponse} The populated <code>TransacaoOnUsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nsuOrigem')) {
        obj['nsuOrigem'] = ApiClient.convertToType(data['nsuOrigem'], 'String');
      }
      if (data.hasOwnProperty('nsuAutorizacao')) {
        obj['nsuAutorizacao'] = ApiClient.convertToType(data['nsuAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('planoDeParcelamento')) {
        obj['planoDeParcelamento'] = ApiClient.convertToType(data['planoDeParcelamento'], [MapOfstringAndstring]);
      }
      if (data.hasOwnProperty('codigoAutorizacao')) {
        obj['codigoAutorizacao'] = ApiClient.convertToType(data['codigoAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('numeroMascaradoCartao')) {
        obj['numeroMascaradoCartao'] = ApiClient.convertToType(data['numeroMascaradoCartao'], 'String');
      }
      if (data.hasOwnProperty('nomePortadorCartao')) {
        obj['nomePortadorCartao'] = ApiClient.convertToType(data['nomePortadorCartao'], 'String');
      }
      if (data.hasOwnProperty('terminalRequisitante')) {
        obj['terminalRequisitante'] = ApiClient.convertToType(data['terminalRequisitante'], 'String');
      }
    }
    return obj;
  }


  /**
   * N\u00C3\u00BAmero Sequencial \u00C3\u009Anico que identifica a transa\u00C3\u00A7\u00C3\u00A3o no sistema que a originou.
   * @member {String} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * N\u00C3\u00BAmero Sequencial \u00C3\u009Anico gerado pelo Autorizador a cada Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} nsuAutorizacao
   */
  exports.prototype['nsuAutorizacao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do Plano de Parcelamento atribu\u00C3\u00ADdo a Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {Array.<module:model/MapOfstringAndstring>} planoDeParcelamento
   */
  exports.prototype['planoDeParcelamento'] = undefined;

  /**
   * C\u00C3\u00B3digo de Autoriza\u00C3\u00A7\u00C3\u00A3o gerado pelo Autorizador.
   * @member {String} codigoAutorizacao
   */
  exports.prototype['codigoAutorizacao'] = undefined;

  /**
   * N\u00C3\u00BAmero do Cart\u00C3\u00A3o que originou a transa\u00C3\u00A7\u00C3\u00A3o em formato mascarado.
   * @member {String} numeroMascaradoCartao
   */
  exports.prototype['numeroMascaradoCartao'] = undefined;

  /**
   * Nome do Portador do Cart\u00C3\u00A3o que originou a transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} nomePortadorCartao
   */
  exports.prototype['nomePortadorCartao'] = undefined;

  /**
   * Apresenta a identifica\u00C3\u00A7\u00C3\u00A3o do terminal requisitante
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;




  return exports;
}));
