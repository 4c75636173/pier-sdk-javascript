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
    root.Pier.ProdutoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProdutoResponse model module.
   * @module model/ProdutoResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>ProdutoResponse</code>.
   * {{{produto_response_description}}}
   * @alias module:model/ProdutoResponse
   * @class
   * @param id
   * @param nome
   * @param status
   */
  var exports = function(id, nome, status) {

    this['id'] = id;
    this['nome'] = nome;
    this['status'] = status;

  };

  /**
   * Constructs a <code>ProdutoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProdutoResponse} obj Optional instance to populate.
   * @return {module:model/ProdutoResponse} The populated <code>ProdutoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('idFantasiaBasica')) {
        obj['idFantasiaBasica'] = ApiClient.convertToType(data['idFantasiaBasica'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{produto_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{produto_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{produto_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{produto_response_id_fantasia_basica_value}}}
   * @member {Integer} idFantasiaBasica
   */
  exports.prototype['idFantasiaBasica'] = undefined;




  return exports;
}));
