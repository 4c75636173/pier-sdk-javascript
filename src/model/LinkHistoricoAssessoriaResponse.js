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
    root.Pier.LinkHistoricoAssessoriaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LinkHistoricoAssessoriaResponse model module.
   * @module model/LinkHistoricoAssessoriaResponse
   * @version 2.12.0
   */

  /**
   * Constructs a new <code>LinkHistoricoAssessoriaResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do {@link HistoricoAssessoriaResponse}
   * @alias module:model/LinkHistoricoAssessoriaResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>LinkHistoricoAssessoriaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LinkHistoricoAssessoriaResponse} obj Optional instance to populate.
   * @return {module:model/LinkHistoricoAssessoriaResponse} The populated <code>LinkHistoricoAssessoriaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataHoraHistorico')) {
        obj['dataHoraHistorico'] = ApiClient.convertToType(data['dataHoraHistorico'], 'Date');
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
   * @member {Date} dataHoraHistorico
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
