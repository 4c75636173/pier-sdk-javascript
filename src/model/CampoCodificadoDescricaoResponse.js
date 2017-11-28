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
    root.Pier.CampoCodificadoDescricaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CampoCodificadoDescricaoResponse model module.
   * @module model/CampoCodificadoDescricaoResponse
   * @version 2.46.3
   */

  /**
   * Constructs a new <code>CampoCodificadoDescricaoResponse</code>.
   * Objeto Campo Condificado
   * @alias module:model/CampoCodificadoDescricaoResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>CampoCodificadoDescricaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampoCodificadoDescricaoResponse} obj Optional instance to populate.
   * @return {module:model/CampoCodificadoDescricaoResponse} The populated <code>CampoCodificadoDescricaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('codigo')) {
        obj['codigo'] = ApiClient.convertToType(data['codigo'], 'Integer');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da descri\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} codigo
   */
  exports.prototype['codigo'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do campo codificado.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;




  return exports;
}));
