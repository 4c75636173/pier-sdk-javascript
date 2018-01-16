(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PlanoCampanhaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlanoCampanhaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CampanhaResponse = factory(root.Pier.ApiClient, root.Pier.PlanoCampanhaResponse);
  }
}(this, function(ApiClient, PlanoCampanhaResponse) {
  'use strict';

  /**
   * The CampanhaResponse model module.
   * @module model/CampanhaResponse
   * @version 2.50.11
   */

  /**
   * Constructs a new <code>CampanhaResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso de campanha
   * @alias module:model/CampanhaResponse
   * @class
   * @param planosCampanhas
   */
  var exports = function(planosCampanhas) {




    this['planosCampanhas'] = planosCampanhas;
  };

  /**
   * Constructs a <code>CampanhaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampanhaResponse} obj Optional instance to populate.
   * @return {module:model/CampanhaResponse} The populated <code>CampanhaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('idTipoCampanha')) {
        obj['idTipoCampanha'] = ApiClient.convertToType(data['idTipoCampanha'], 'Integer');
      }
      if (data.hasOwnProperty('planosCampanhas')) {
        obj['planosCampanhas'] = ApiClient.convertToType(data['planosCampanhas'], [PlanoCampanhaResponse]);
      }
    }
    return obj;
  }


  /**
   * Identificador da campanha
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome da campanha
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo de campanha a qual a a Campanha pertence
   * @member {Integer} idTipoCampanha
   */
  exports.prototype['idTipoCampanha'] = undefined;

  /**
   * Lista de planos associados a Campanha
   * @member {Array.<module:model/PlanoCampanhaResponse>} planosCampanhas
   */
  exports.prototype['planosCampanhas'] = undefined;




  return exports;
}));
