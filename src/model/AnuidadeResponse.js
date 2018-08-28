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
    root.Pier.AnuidadeResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AnuidadeResponse model module.
   * @module model/AnuidadeResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AnuidadeResponse</code>.
   * {{{anuidade_response_description}}}
   * @alias module:model/AnuidadeResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>AnuidadeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnuidadeResponse} obj Optional instance to populate.
   * @return {module:model/AnuidadeResponse} The populated <code>AnuidadeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('flagAnuidadeBonificada')) {
        obj['flagAnuidadeBonificada'] = ApiClient.convertToType(data['flagAnuidadeBonificada'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * {{{anuidade_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{anuidade_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{anuidade_response_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{anuidade_response_flag_anuidade_bonificada_value}}}
   * @member {Boolean} flagAnuidadeBonificada
   */
  exports.prototype['flagAnuidadeBonificada'] = undefined;




  return exports;
}));
