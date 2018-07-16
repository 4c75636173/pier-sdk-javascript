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
    root.Pier.CdtTipoResolucaoContestacao = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CdtTipoResolucaoContestacao model module.
   * @module model/CdtTipoResolucaoContestacao
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>CdtTipoResolucaoContestacao</code>.
   * @alias module:model/CdtTipoResolucaoContestacao
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>CdtTipoResolucaoContestacao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CdtTipoResolucaoContestacao} obj Optional instance to populate.
   * @return {module:model/CdtTipoResolucaoContestacao} The populated <code>CdtTipoResolucaoContestacao</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('idTipoResolucaoContestacao')) {
        obj['idTipoResolucaoContestacao'] = ApiClient.convertToType(data['idTipoResolucaoContestacao'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * @member {Integer} idTipoResolucaoContestacao
   */
  exports.prototype['idTipoResolucaoContestacao'] = undefined;




  return exports;
}));
