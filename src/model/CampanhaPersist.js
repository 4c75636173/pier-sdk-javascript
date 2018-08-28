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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>CampanhaPersist</code>.
   * {{{campanha_persist_description}}}
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
   * {{{campanha_persist_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{campanha_persist_id_tipo_campanha_value}}}
   * @member {Integer} idTipoCampanha
   */
  exports.prototype['idTipoCampanha'] = undefined;

  /**
   * {{{campanha_persist_planos_campanhas_value}}}
   * @member {Array.<module:model/PlanoCampanhaPersist>} planosCampanhas
   */
  exports.prototype['planosCampanhas'] = undefined;




  return exports;
}));
