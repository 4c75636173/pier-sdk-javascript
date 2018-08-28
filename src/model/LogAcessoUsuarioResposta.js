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
    root.Pier.LogAcessoUsuarioResposta = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LogAcessoUsuarioResposta model module.
   * @module model/LogAcessoUsuarioResposta
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>LogAcessoUsuarioResposta</code>.
   * {{{log_acesso_usuario_resposta_descricao}}}
   * @alias module:model/LogAcessoUsuarioResposta
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>LogAcessoUsuarioResposta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogAcessoUsuarioResposta} obj Optional instance to populate.
   * @return {module:model/LogAcessoUsuarioResposta} The populated <code>LogAcessoUsuarioResposta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{log_acesso_usuario_resposta_id_descricao}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));
