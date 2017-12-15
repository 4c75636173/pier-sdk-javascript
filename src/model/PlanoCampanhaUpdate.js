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
    root.Pier.PlanoCampanhaUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlanoCampanhaUpdate model module.
   * @module model/PlanoCampanhaUpdate
   * @version 2.49.0
   */

  /**
   * Constructs a new <code>PlanoCampanhaUpdate</code>.
   * Objeto PlanoCampanha
   * @alias module:model/PlanoCampanhaUpdate
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>PlanoCampanhaUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanoCampanhaUpdate} obj Optional instance to populate.
   * @return {module:model/PlanoCampanhaUpdate} The populated <code>PlanoCampanhaUpdate</code> instance.
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
   * C\u00C3\u00B3digo identificador do plano campanha
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Quantidade de parcelas
   * @member {Integer} parcelas
   */
  exports.prototype['parcelas'] = undefined;

  /**
   * Taxa de juros
   * @member {Number} taxa
   */
  exports.prototype['taxa'] = undefined;

  /**
   * Nome do usu\u00C3\u00A1rio
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;




  return exports;
}));
