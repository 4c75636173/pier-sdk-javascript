(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PlanoCampanhaUpdateValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlanoCampanhaUpdateValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CampanhaUpdateValue = factory(root.Pier.ApiClient, root.Pier.PlanoCampanhaUpdateValue);
  }
}(this, function(ApiClient, PlanoCampanhaUpdateValue) {
  'use strict';

  /**
   * The CampanhaUpdateValue model module.
   * @module model/CampanhaUpdateValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>CampanhaUpdateValue</code>.
   * {{{campanha_update_description}}}
   * @alias module:model/CampanhaUpdateValue
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>CampanhaUpdateValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampanhaUpdateValue} obj Optional instance to populate.
   * @return {module:model/CampanhaUpdateValue} The populated <code>CampanhaUpdateValue</code> instance.
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
        obj['planosCampanhas'] = ApiClient.convertToType(data['planosCampanhas'], [PlanoCampanhaUpdateValue]);
      }
    }
    return obj;
  }


  /**
   * {{{campanha_update_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{campanha_update_id_tipo_campanha_value}}}
   * @member {Integer} idTipoCampanha
   */
  exports.prototype['idTipoCampanha'] = undefined;

  /**
   * {{{campanha_update_planos_campanhas_value}}}
   * @member {Array.<module:model/PlanoCampanhaUpdateValue>} planosCampanhas
   */
  exports.prototype['planosCampanhas'] = undefined;




  return exports;
}));
