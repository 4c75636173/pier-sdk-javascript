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
    root.Pier.VinculoCartoesResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VinculoCartoesResponse model module.
   * @module model/VinculoCartoesResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>VinculoCartoesResponse</code>.
   * {{{vincular_cartoes_response_description}}}
   * @alias module:model/VinculoCartoesResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>VinculoCartoesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VinculoCartoesResponse} obj Optional instance to populate.
   * @return {module:model/VinculoCartoesResponse} The populated <code>VinculoCartoesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idCartaoPrincipal')) {
        obj['idCartaoPrincipal'] = ApiClient.convertToType(data['idCartaoPrincipal'], 'Integer');
      }
      if (data.hasOwnProperty('idCartaoVinculado')) {
        obj['idCartaoVinculado'] = ApiClient.convertToType(data['idCartaoVinculado'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{vincular_cartoes_response_id_cartao_value}}}
   * @member {Integer} idCartaoPrincipal
   */
  exports.prototype['idCartaoPrincipal'] = undefined;

  /**
   * {{{vincular_cartoes_response_id_cartao_vinculado_value}}}
   * @member {Integer} idCartaoVinculado
   */
  exports.prototype['idCartaoVinculado'] = undefined;




  return exports;
}));
