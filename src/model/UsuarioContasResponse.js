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
    root.Pier.UsuarioContasResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsuarioContasResponse model module.
   * @module model/UsuarioContasResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>UsuarioContasResponse</code>.
   * {{{usuario_conta_resposta_descricao}}}
   * @alias module:model/UsuarioContasResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>UsuarioContasResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsuarioContasResponse} obj Optional instance to populate.
   * @return {module:model/UsuarioContasResponse} The populated <code>UsuarioContasResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idUsuario')) {
        obj['idUsuario'] = ApiClient.convertToType(data['idUsuario'], 'Integer');
      }
      if (data.hasOwnProperty('nivelAcesso')) {
        obj['nivelAcesso'] = ApiClient.convertToType(data['nivelAcesso'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{usuario_conta_resposta_id_descricao}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{usuario_conta_resposta_id_conta_descricao}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{usuario_conta_resposta_id_pessoa_descricao}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{usuario_conta_resposta_id_usuario_descricao}}}
   * @member {Integer} idUsuario
   */
  exports.prototype['idUsuario'] = undefined;

  /**
   * {{{usuario_conta_resposta_nivel_acesso_descricao}}}
   * @member {Integer} nivelAcesso
   */
  exports.prototype['nivelAcesso'] = undefined;




  return exports;
}));
