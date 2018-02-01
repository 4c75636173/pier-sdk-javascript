(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PlanoCampanhaUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlanoCampanhaUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CampanhaUpdate = factory(root.Pier.ApiClient, root.Pier.PlanoCampanhaUpdate);
  }
}(this, function(ApiClient, PlanoCampanhaUpdate) {
  'use strict';

  /**
   * The CampanhaUpdate model module.
   * @module model/CampanhaUpdate
   * @version 2.51.0
   */

  /**
   * Constructs a new <code>CampanhaUpdate</code>.
   * Objeto Campanha
   * @alias module:model/CampanhaUpdate
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>CampanhaUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampanhaUpdate} obj Optional instance to populate.
   * @return {module:model/CampanhaUpdate} The populated <code>CampanhaUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('idTipoCampanha')) {
        obj['idTipoCampanha'] = ApiClient.convertToType(data['idTipoCampanha'], 'Integer');
      }
      if (data.hasOwnProperty('planosCampanhas')) {
        obj['planosCampanhas'] = ApiClient.convertToType(data['planosCampanhas'], [PlanoCampanhaUpdate]);
      }
    }
    return obj;
  }


  /**
   * Nome da campanha
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo da campanha.
   * @member {Integer} idTipoCampanha
   */
  exports.prototype['idTipoCampanha'] = undefined;

  /**
   * Lista com os planos de campanha
   * @member {Array.<module:model/PlanoCampanhaUpdate>} planosCampanhas
   */
  exports.prototype['planosCampanhas'] = undefined;




  return exports;
}));
