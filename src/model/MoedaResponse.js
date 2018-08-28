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
    root.Pier.MoedaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MoedaResponse model module.
   * @module model/MoedaResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>MoedaResponse</code>.
   * {{{moeda_response_description}}}
   * @alias module:model/MoedaResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>MoedaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MoedaResponse} obj Optional instance to populate.
   * @return {module:model/MoedaResponse} The populated <code>MoedaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('codigoMoeda')) {
        obj['codigoMoeda'] = ApiClient.convertToType(data['codigoMoeda'], 'String');
      }
      if (data.hasOwnProperty('simbolo')) {
        obj['simbolo'] = ApiClient.convertToType(data['simbolo'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{moeda_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{moeda_response_codigo_moeda_value}}}
   * @member {String} codigoMoeda
   */
  exports.prototype['codigoMoeda'] = undefined;

  /**
   * {{{moeda_response_simbolo_value}}}
   * @member {String} simbolo
   */
  exports.prototype['simbolo'] = undefined;

  /**
   * {{{moeda_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;




  return exports;
}));
