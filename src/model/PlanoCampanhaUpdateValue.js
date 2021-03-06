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
    root.Pier.PlanoCampanhaUpdateValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlanoCampanhaUpdateValue model module.
   * @module model/PlanoCampanhaUpdateValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>PlanoCampanhaUpdateValue</code>.
   * {{{plano_campanha_update_description}}}
   * @alias module:model/PlanoCampanhaUpdateValue
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>PlanoCampanhaUpdateValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanoCampanhaUpdateValue} obj Optional instance to populate.
   * @return {module:model/PlanoCampanhaUpdateValue} The populated <code>PlanoCampanhaUpdateValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('parcelas')) {
        obj['parcelas'] = ApiClient.convertToType(data['parcelas'], 'Integer');
      }
      if (data.hasOwnProperty('taxa')) {
        obj['taxa'] = ApiClient.convertToType(data['taxa'], 'Number');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{plano_campanha_update_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{plano_campanha_update_parcelas_value}}}
   * @member {Integer} parcelas
   */
  exports.prototype['parcelas'] = undefined;

  /**
   * {{{plano_campanha_update_taxa_value}}}
   * @member {Number} taxa
   */
  exports.prototype['taxa'] = undefined;

  /**
   * {{{plano_campanha_update_usuario_value}}}
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;




  return exports;
}));
