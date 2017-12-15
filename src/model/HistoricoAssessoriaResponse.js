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
    root.Pier.HistoricoAssessoriaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HistoricoAssessoriaResponse model module.
   * @module model/HistoricoAssessoriaResponse
   * @version 2.49.0
   */

  /**
   * Constructs a new <code>HistoricoAssessoriaResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do {@link HistoricoAssessoriaResponse}
   * @alias module:model/HistoricoAssessoriaResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>HistoricoAssessoriaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricoAssessoriaResponse} obj Optional instance to populate.
   * @return {module:model/HistoricoAssessoriaResponse} The populated <code>HistoricoAssessoriaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataHoraHistorico')) {
        obj['dataHoraHistorico'] = ApiClient.convertToType(data['dataHoraHistorico'], 'String');
      }
      if (data.hasOwnProperty('tipoHistorico')) {
        obj['tipoHistorico'] = ApiClient.convertToType(data['tipoHistorico'], 'String');
      }
      if (data.hasOwnProperty('nomeAssessoria')) {
        obj['nomeAssessoria'] = ApiClient.convertToType(data['nomeAssessoria'], 'String');
      }
    }
    return obj;
  }


  /**
   * Apresenta a data e hora do hist\u00C3\u00B3rico
   * @member {String} dataHoraHistorico
   */
  exports.prototype['dataHoraHistorico'] = undefined;

  /**
   * Apresenta o tipo do hist\u00C3\u00B3rico podendo ser ENTRADA ou SAIDA
   * @member {String} tipoHistorico
   */
  exports.prototype['tipoHistorico'] = undefined;

  /**
   * Apresenta o nome da Assessoria de Cobran\u00C3\u00A7a relacionada ao hist\u00C3\u00B3rico
   * @member {String} nomeAssessoria
   */
  exports.prototype['nomeAssessoria'] = undefined;




  return exports;
}));
