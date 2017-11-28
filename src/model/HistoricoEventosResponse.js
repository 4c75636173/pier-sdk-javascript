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
    root.Pier.HistoricoEventosResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HistoricoEventosResponse model module.
   * @module model/HistoricoEventosResponse
   * @version 2.46.3
   */

  /**
   * Constructs a new <code>HistoricoEventosResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do objeto que abstrai o hist\u00C3\u00B3rico de eventos
   * @alias module:model/HistoricoEventosResponse
   * @class
   * @param idHistorico
   * @param dataHistorico
   * @param tipoHistorico
   * @param valorAtribuido
   */
  var exports = function(idHistorico, dataHistorico, tipoHistorico, valorAtribuido) {

    this['idHistorico'] = idHistorico;
    this['dataHistorico'] = dataHistorico;
    this['tipoHistorico'] = tipoHistorico;

    this['valorAtribuido'] = valorAtribuido;
  };

  /**
   * Constructs a <code>HistoricoEventosResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricoEventosResponse} obj Optional instance to populate.
   * @return {module:model/HistoricoEventosResponse} The populated <code>HistoricoEventosResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idHistorico')) {
        obj['idHistorico'] = ApiClient.convertToType(data['idHistorico'], 'Integer');
      }
      if (data.hasOwnProperty('dataHistorico')) {
        obj['dataHistorico'] = ApiClient.convertToType(data['dataHistorico'], 'String');
      }
      if (data.hasOwnProperty('tipoHistorico')) {
        obj['tipoHistorico'] = ApiClient.convertToType(data['tipoHistorico'], 'String');
      }
      if (data.hasOwnProperty('valorAnterior')) {
        obj['valorAnterior'] = ApiClient.convertToType(data['valorAnterior'], 'String');
      }
      if (data.hasOwnProperty('valorAtribuido')) {
        obj['valorAtribuido'] = ApiClient.convertToType(data['valorAtribuido'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador do evento
   * @member {Integer} idHistorico
   */
  exports.prototype['idHistorico'] = undefined;

  /**
   * Data do evento
   * @member {String} dataHistorico
   */
  exports.prototype['dataHistorico'] = undefined;

  /**
   * Nome do campo alterado
   * @member {String} tipoHistorico
   */
  exports.prototype['tipoHistorico'] = undefined;

  /**
   * Valor anterior a modifica\u00C3\u00A7\u00C3\u00A3o
   * @member {String} valorAnterior
   */
  exports.prototype['valorAnterior'] = undefined;

  /**
   * Valor atribu\u00C3\u00ADdo na modifica\u00C3\u00A7\u00C3\u00A3o
   * @member {String} valorAtribuido
   */
  exports.prototype['valorAtribuido'] = undefined;




  return exports;
}));
