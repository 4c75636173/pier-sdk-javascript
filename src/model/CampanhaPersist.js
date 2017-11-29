(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PlanoCampanhaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlanoCampanhaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CampanhaPersist = factory(root.Pier.ApiClient, root.Pier.PlanoCampanhaPersist);
  }
}(this, function(ApiClient, PlanoCampanhaPersist) {
  'use strict';

  /**
   * The CampanhaPersist model module.
   * @module model/CampanhaPersist
   * @version 2.46.5
   */

  /**
   * Constructs a new <code>CampanhaPersist</code>.
   * Campanha
   * @alias module:model/CampanhaPersist
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>CampanhaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampanhaPersist} obj Optional instance to populate.
   * @return {module:model/CampanhaPersist} The populated <code>CampanhaPersist</code> instance.
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
        obj['planosCampanhas'] = ApiClient.convertToType(data['planosCampanhas'], [PlanoCampanhaPersist]);
      }
    }
    return obj;
  }


  /**
   * Nome da campanha.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo da campanha.
   * @member {Integer} idTipoCampanha
   */
  exports.prototype['idTipoCampanha'] = undefined;

  /**
   * Lista com os planos de campanha.
   * @member {Array.<module:model/PlanoCampanhaPersist>} planosCampanhas
   */
  exports.prototype['planosCampanhas'] = undefined;




  return exports;
}));
