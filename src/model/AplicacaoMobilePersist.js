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
    root.Pier.AplicacaoMobilePersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AplicacaoMobilePersist model module.
   * @module model/AplicacaoMobilePersist
   * @version 2.47.3
   */

  /**
   * Constructs a new <code>AplicacaoMobilePersist</code>.
   * Objeto AplicacaoMobile
   * @alias module:model/AplicacaoMobilePersist
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>AplicacaoMobilePersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AplicacaoMobilePersist} obj Optional instance to populate.
   * @return {module:model/AplicacaoMobilePersist} The populated <code>AplicacaoMobilePersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idPlataformaMobile')) {
        obj['idPlataformaMobile'] = ApiClient.convertToType(data['idPlataformaMobile'], 'Integer');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('cor')) {
        obj['cor'] = ApiClient.convertToType(data['cor'], 'String');
      }
      if (data.hasOwnProperty('som')) {
        obj['som'] = ApiClient.convertToType(data['som'], 'String');
      }
      if (data.hasOwnProperty('icone')) {
        obj['icone'] = ApiClient.convertToType(data['icone'], 'String');
      }
      if (data.hasOwnProperty('certificadoBase64')) {
        obj['certificadoBase64'] = ApiClient.convertToType(data['certificadoBase64'], 'String');
      }
      if (data.hasOwnProperty('senha')) {
        obj['senha'] = ApiClient.convertToType(data['senha'], 'String');
      }
    }
    return obj;
  }


  /**
   * Apresenta o identificador da plataforma.
   * @member {Integer} idPlataformaMobile
   */
  exports.prototype['idPlataformaMobile'] = undefined;

  /**
   * Apresenta o token da aplicacao.
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

  /**
   * Apresenta a cor da mensagem da aplicacao.
   * @member {String} cor
   */
  exports.prototype['cor'] = undefined;

  /**
   * Apresenta o som da mensagem da aplicacao
   * @member {String} som
   */
  exports.prototype['som'] = undefined;

  /**
   * Apresenta o icone da mensagem da aplica\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} icone
   */
  exports.prototype['icone'] = undefined;

  /**
   * Apresenta o certificado da aplica\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} certificadoBase64
   */
  exports.prototype['certificadoBase64'] = undefined;

  /**
   * Apresenta a senha da aplica\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;




  return exports;
}));
