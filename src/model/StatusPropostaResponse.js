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
    root.Pier.StatusPropostaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusPropostaResponse model module.
   * @module model/StatusPropostaResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>StatusPropostaResponse</code>.
   * {{{status_proposta_response_description}}}
   * @alias module:model/StatusPropostaResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>StatusPropostaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusPropostaResponse} obj Optional instance to populate.
   * @return {module:model/StatusPropostaResponse} The populated <code>StatusPropostaResponse</code> instance.
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
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('flagPermiteAlteracao')) {
        obj['flagPermiteAlteracao'] = ApiClient.convertToType(data['flagPermiteAlteracao'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * {{{status_proposta_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{status_proposta_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{status_proposta_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{status_proposta_response_flag_permite_alteracao_value}}}
   * @member {Boolean} flagPermiteAlteracao
   */
  exports.prototype['flagPermiteAlteracao'] = undefined;




  return exports;
}));
