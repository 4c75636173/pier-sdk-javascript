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
    root.Pier.AplicacaoRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AplicacaoRequest model module.
   * @module model/AplicacaoRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AplicacaoRequest</code>.
   * {{{aplicacao_request_description}}}
   * @alias module:model/AplicacaoRequest
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>AplicacaoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AplicacaoRequest} obj Optional instance to populate.
   * @return {module:model/AplicacaoRequest} The populated <code>AplicacaoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('tokenId')) {
        obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'Integer');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], ['String']);
      }
    }
    return obj;
  }


  /**
   * {{{aplicacao_dto_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{aplicacao_dto_token_value}}}
   * @member {Integer} tokenId
   */
  exports.prototype['tokenId'] = undefined;

  /**
   * {{{global_menssagem_sort_sort}}}
   * @member {Array.<String>} sort
   */
  exports.prototype['sort'] = undefined;




  return exports;
}));
