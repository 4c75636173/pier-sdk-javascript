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
    root.Pier.ControleTentativaCadastroResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ControleTentativaCadastroResponse model module.
   * @module model/ControleTentativaCadastroResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ControleTentativaCadastroResponse</code>.
   * {{{controle_tentativa_cadastro_resposta_descricao}}}
   * @alias module:model/ControleTentativaCadastroResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>ControleTentativaCadastroResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ControleTentativaCadastroResponse} obj Optional instance to populate.
   * @return {module:model/ControleTentativaCadastroResponse} The populated <code>ControleTentativaCadastroResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('tentativas')) {
        obj['tentativas'] = ApiClient.convertToType(data['tentativas'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{controle_tentativa_cadastro_resposta_cpf_descricao}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{controle_tentativa_cadastro_resposta_login_descricao}}}
   * @member {String} login
   */
  exports.prototype['login'] = undefined;

  /**
   * {{{controle_tentativa_cadastro_resposta_tentativas_descricao}}}
   * @member {Integer} tentativas
   */
  exports.prototype['tentativas'] = undefined;




  return exports;
}));
