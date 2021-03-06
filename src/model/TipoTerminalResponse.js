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
    root.Pier.TipoTerminalResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoTerminalResponse model module.
   * @module model/TipoTerminalResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TipoTerminalResponse</code>.
   * {{{tipo_terminal_response_description}}}
   * @alias module:model/TipoTerminalResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TipoTerminalResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoTerminalResponse} obj Optional instance to populate.
   * @return {module:model/TipoTerminalResponse} The populated <code>TipoTerminalResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTerminal')) {
        obj['descricaoTerminal'] = ApiClient.convertToType(data['descricaoTerminal'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{tipo_terminal_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{tipo_terminal_response_descricao_terminal_value}}}
   * @member {String} descricaoTerminal
   */
  exports.prototype['descricaoTerminal'] = undefined;




  return exports;
}));
