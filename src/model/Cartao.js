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
    root.Pier.Cartao = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Cartao model module.
   * @module model/Cartao
   * @version 2.16.2
   */

  /**
   * Constructs a new <code>Cartao</code>.
   * Objeto Cart\u00C3\u00A3o
   * @alias module:model/Cartao
   * @class
   */
  var exports = function() {




















  };

  /**
   * Constructs a <code>Cartao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cartao} obj Optional instance to populate.
   * @return {module:model/Cartao} The populated <code>Cartao</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusCartao')) {
        obj['idStatusCartao'] = ApiClient.convertToType(data['idStatusCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idEstagioCartao')) {
        obj['idEstagioCartao'] = ApiClient.convertToType(data['idEstagioCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('tipoPortador')) {
        obj['tipoPortador'] = ApiClient.convertToType(data['tipoPortador'], 'String');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('dataGeracao')) {
        obj['dataGeracao'] = ApiClient.convertToType(data['dataGeracao'], 'String');
      }
      if (data.hasOwnProperty('dataStatusCartao')) {
        obj['dataStatusCartao'] = ApiClient.convertToType(data['dataStatusCartao'], 'String');
      }
      if (data.hasOwnProperty('dataEstagioCartao')) {
        obj['dataEstagioCartao'] = ApiClient.convertToType(data['dataEstagioCartao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('dataImpressao')) {
        obj['dataImpressao'] = ApiClient.convertToType(data['dataImpressao'], 'String');
      }
      if (data.hasOwnProperty('arquivoImpressao')) {
        obj['arquivoImpressao'] = ApiClient.convertToType(data['arquivoImpressao'], 'String');
      }
      if (data.hasOwnProperty('flagImpressaoOrigemComercial')) {
        obj['flagImpressaoOrigemComercial'] = ApiClient.convertToType(data['flagImpressaoOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('flagVirtual')) {
        obj['flagVirtual'] = ApiClient.convertToType(data['flagVirtual'], 'Integer');
      }
      if (data.hasOwnProperty('codigoDesbloqueio')) {
        obj['codigoDesbloqueio'] = ApiClient.convertToType(data['codigoDesbloqueio'], 'String');
      }
      if (data.hasOwnProperty('sequencialCartao')) {
        obj['sequencialCartao'] = ApiClient.convertToType(data['sequencialCartao'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id).
   * @member {Integer} idStatusCartao
   */
  exports.prototype['idStatusCartao'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
   * @member {Integer} idEstagioCartao
   */
  exports.prototype['idEstagioCartao'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o cart\u00C3\u00A3o pertence (id).
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o cart\u00C3\u00A3o pertence (id)
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence (id).
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: ('T': Titular, 'A': Adicional).
   * @member {String} tipoPortador
   */
  exports.prototype['tipoPortador'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o.
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * Apresenta o nome impresso no cart\u00C3\u00A3o.
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
   * @member {String} dataGeracao
   */
  exports.prototype['dataGeracao'] = undefined;

  /**
   * Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
   * @member {String} dataStatusCartao
   */
  exports.prototype['dataStatusCartao'] = undefined;

  /**
   * Apresenta a data em que o idEstagioCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
   * @member {String} dataEstagioCartao
   */
  exports.prototype['dataEstagioCartao'] = undefined;

  /**
   * Apresenta a data de validade do cart\u00C3\u00A3o em formato yyyy-MM, quando houver.
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * Apresenta a data em que o cart\u00C3\u00A3o fora impresso, caso impress\u00C3\u00A3o em loja, ou a data em que ele fora inclu\u00C3\u00ADdo no arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica.
   * @member {String} dataImpressao
   */
  exports.prototype['dataImpressao'] = undefined;

  /**
   * Apresenta o nome do arquivo onde o cart\u00C3\u00A3o fora inclu\u00C3\u00ADdo para impress\u00C3\u00A3o por uma gr\u00C3\u00A1fica, quando houver.
   * @member {String} arquivoImpressao
   */
  exports.prototype['arquivoImpressao'] = undefined;

  /**
   * Quando ativa, indica que o cart\u00C3\u00A3o fora impresso na Origem Comercial.
   * @member {Integer} flagImpressaoOrigemComercial
   */
  exports.prototype['flagImpressaoOrigemComercial'] = undefined;

  /**
   * Apresenta o status que informa se o cart\u00C3\u00A3o \u00C3\u00A9 virtual.
   * @member {Integer} flagVirtual
   */
  exports.prototype['flagVirtual'] = undefined;

  /**
   * Apresenta um c\u00C3\u00B3digo espec\u00C3\u00ADfico para ser utilizado como vari\u00C3\u00A1vel no processo de desbloqueio do cart\u00C3\u00A3o para emissores que querem usar esta funcionalidade.
   * @member {String} codigoDesbloqueio
   */
  exports.prototype['codigoDesbloqueio'] = undefined;

  /**
   * N\u00C3\u00BAmero sequencial do cart\u00C3\u00A3o
   * @member {Integer} sequencialCartao
   */
  exports.prototype['sequencialCartao'] = undefined;




  return exports;
}));
