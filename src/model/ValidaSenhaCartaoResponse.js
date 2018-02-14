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
    root.Pier.ValidaSenhaCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ValidaSenhaCartaoResponse model module.
   * @module model/ValidaSenhaCartaoResponse
   * @version 2.54.2
   */

  /**
   * Constructs a new <code>ValidaSenhaCartaoResponse</code>.
   * Objeto de resposta para a valida\u00C3\u00A7\u00C3\u00A3o de senha do cart\u00C3\u00A3o
   * @alias module:model/ValidaSenhaCartaoResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ValidaSenhaCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidaSenhaCartaoResponse} obj Optional instance to populate.
   * @return {module:model/ValidaSenhaCartaoResponse} The populated <code>ValidaSenhaCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('mensagem')) {
        obj['mensagem'] = ApiClient.convertToType(data['mensagem'], 'String');
      }
      if (data.hasOwnProperty('idStatusCartao')) {
        obj['idStatusCartao'] = ApiClient.convertToType(data['idStatusCartao'], 'Integer');
      }
      if (data.hasOwnProperty('statusCartao')) {
        obj['statusCartao'] = ApiClient.convertToType(data['statusCartao'], 'String');
      }
      if (data.hasOwnProperty('quantidadeTentativas')) {
        obj['quantidadeTentativas'] = ApiClient.convertToType(data['quantidadeTentativas'], 'Integer');
      }
      if (data.hasOwnProperty('quantidadeMaximaTentativas')) {
        obj['quantidadeMaximaTentativas'] = ApiClient.convertToType(data['quantidadeMaximaTentativas'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Mensagem
   * @member {String} mensagem
   */
  exports.prototype['mensagem'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status do cart\u00C3\u00A3o
   * @member {Integer} idStatusCartao
   */
  exports.prototype['idStatusCartao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status do cart\u00C3\u00A3o
   * @member {String} statusCartao
   */
  exports.prototype['statusCartao'] = undefined;

  /**
   * Quantidade tentativas
   * @member {Integer} quantidadeTentativas
   */
  exports.prototype['quantidadeTentativas'] = undefined;

  /**
   * Quantidade m\u00C3\u00A1xima tentativas permitidas
   * @member {Integer} quantidadeMaximaTentativas
   */
  exports.prototype['quantidadeMaximaTentativas'] = undefined;




  return exports;
}));
