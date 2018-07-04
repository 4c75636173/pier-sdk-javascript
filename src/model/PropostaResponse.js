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
    root.Pier.PropostaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PropostaResponse model module.
   * @module model/PropostaResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>PropostaResponse</code>.
   * {{{proposta_response_description}}}
   * @alias module:model/PropostaResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>PropostaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropostaResponse} obj Optional instance to populate.
   * @return {module:model/PropostaResponse} The populated <code>PropostaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('dataCadastramento')) {
        obj['dataCadastramento'] = ApiClient.convertToType(data['dataCadastramento'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{proposta_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{proposta_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{proposta_response_data_cadastramento_value}}}
   * @member {String} dataCadastramento
   */
  exports.prototype['dataCadastramento'] = undefined;




  return exports;
}));
