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
    root.Pier.StatusContestacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusContestacaoResponse model module.
   * @module model/StatusContestacaoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>StatusContestacaoResponse</code>.
   * {{{status_contestacao_response_description}}}
   * @alias module:model/StatusContestacaoResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>StatusContestacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusContestacaoResponse} obj Optional instance to populate.
   * @return {module:model/StatusContestacaoResponse} The populated <code>StatusContestacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idStatusContestacao')) {
        obj['idStatusContestacao'] = ApiClient.convertToType(data['idStatusContestacao'], 'Integer');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{status_contestacao_request_idstatuscontestacao_value}}}
   * @member {Integer} idStatusContestacao
   */
  exports.prototype['idStatusContestacao'] = undefined;

  /**
   * {{{status_contestacao_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;




  return exports;
}));
