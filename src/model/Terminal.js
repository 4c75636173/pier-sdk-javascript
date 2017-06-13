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
    root.Pier.Terminal = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Terminal model module.
   * @module model/Terminal
   * @version 2.16.2
   */

  /**
   * Constructs a new <code>Terminal</code>.
   * ObjetoTerminal
   * @alias module:model/Terminal
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>Terminal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Terminal} obj Optional instance to populate.
   * @return {module:model/Terminal} The populated <code>Terminal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('terminal')) {
        obj['terminal'] = ApiClient.convertToType(data['terminal'], 'String');
      }
      if (data.hasOwnProperty('numeroEstabelecimento')) {
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * N\u00C3\u00BAmero \u00C3\u00BAnico do terminal.
   * @member {String} terminal
   */
  exports.prototype['terminal'] = undefined;

  /**
   * N\u00C3\u00BAmero do estabelecimento a qual o terminal pertence.
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento a qual o terminal pertence.
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;




  return exports;
}));
