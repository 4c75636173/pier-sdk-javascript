(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LocalDateTime'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocalDateTime'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CartaoResponse = factory(root.Pier.ApiClient, root.Pier.LocalDateTime);
  }
}(this, function(ApiClient, LocalDateTime) {
  'use strict';

  /**
   * The CartaoResponse model module.
   * @module model/CartaoResponse
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CartaoResponse</code>.
   * @alias module:model/CartaoResponse
   * @class
   * @param arquivoImpressao
   * @param codigoDesbloqueio
   * @param dataEstagioCartao
   * @param dataGeracao
   * @param dataImpressao
   * @param dataStatusCartao
   * @param dataValidade
   * @param flagImpressaoOrigemComercial
   * @param flagProvisorio
   * @param id
   * @param idConta
   * @param idEstagioCartao
   * @param idPessoa
   * @param idStatusCartao
   * @param numeroCartao
   * @param portador
   */
  var exports = function(arquivoImpressao, codigoDesbloqueio, dataEstagioCartao, dataGeracao, dataImpressao, dataStatusCartao, dataValidade, flagImpressaoOrigemComercial, flagProvisorio, id, idConta, idEstagioCartao, idPessoa, idStatusCartao, numeroCartao, portador) {

    this['arquivoImpressao'] = arquivoImpressao;
    this['codigoDesbloqueio'] = codigoDesbloqueio;
    this['dataEstagioCartao'] = dataEstagioCartao;
    this['dataGeracao'] = dataGeracao;
    this['dataImpressao'] = dataImpressao;
    this['dataStatusCartao'] = dataStatusCartao;
    this['dataValidade'] = dataValidade;
    this['flagImpressaoOrigemComercial'] = flagImpressaoOrigemComercial;
    this['flagProvisorio'] = flagProvisorio;
    this['id'] = id;
    this['idConta'] = idConta;
    this['idEstagioCartao'] = idEstagioCartao;
    this['idPessoa'] = idPessoa;
    this['idStatusCartao'] = idStatusCartao;
    this['numeroCartao'] = numeroCartao;
    this['portador'] = portador;
  };

  /**
   * Constructs a <code>CartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoResponse} obj Optional instance to populate.
   * @return {module:model/CartaoResponse} The populated <code>CartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('arquivoImpressao')) {
        obj['arquivoImpressao'] = ApiClient.convertToType(data['arquivoImpressao'], 'String');
      }
      if (data.hasOwnProperty('codigoDesbloqueio')) {
        obj['codigoDesbloqueio'] = ApiClient.convertToType(data['codigoDesbloqueio'], 'String');
      }
      if (data.hasOwnProperty('dataEstagioCartao')) {
        obj['dataEstagioCartao'] = LocalDateTime.constructFromObject(data['dataEstagioCartao']);
      }
      if (data.hasOwnProperty('dataGeracao')) {
        obj['dataGeracao'] = LocalDateTime.constructFromObject(data['dataGeracao']);
      }
      if (data.hasOwnProperty('dataImpressao')) {
        obj['dataImpressao'] = LocalDateTime.constructFromObject(data['dataImpressao']);
      }
      if (data.hasOwnProperty('dataStatusCartao')) {
        obj['dataStatusCartao'] = LocalDateTime.constructFromObject(data['dataStatusCartao']);
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = LocalDateTime.constructFromObject(data['dataValidade']);
      }
      if (data.hasOwnProperty('flagImpressaoOrigemComercial')) {
        obj['flagImpressaoOrigemComercial'] = ApiClient.convertToType(data['flagImpressaoOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('flagProvisorio')) {
        obj['flagProvisorio'] = ApiClient.convertToType(data['flagProvisorio'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idEstagioCartao')) {
        obj['idEstagioCartao'] = ApiClient.convertToType(data['idEstagioCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusCartao')) {
        obj['idStatusCartao'] = ApiClient.convertToType(data['idStatusCartao'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('portador')) {
        obj['portador'] = ApiClient.convertToType(data['portador'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Apresenta o nome do arquivo onde o cart\u00C3\u00A3o fora inclu\u00C3\u00ADdo para impress\u00C3\u00A3o por uma gr\u00C3\u00A1fica, quando houver.
   * @member {String} arquivoImpressao
   */
  exports.prototype['arquivoImpressao'] = undefined;

  /**
   * Apresenta um c\u00C3\u00B3digo espec\u00C3\u00ADfico para ser utilizado como vari\u00C3\u00A1vel no processo de desbloqueio do cart\u00C3\u00A3o para emissores que querem usar esta funcionalidade.
   * @member {String} codigoDesbloqueio
   */
  exports.prototype['codigoDesbloqueio'] = undefined;

  /**
   * Apresenta a data em que o idEstagioCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
   * @member {module:model/LocalDateTime} dataEstagioCartao
   */
  exports.prototype['dataEstagioCartao'] = undefined;

  /**
   * Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
   * @member {module:model/LocalDateTime} dataGeracao
   */
  exports.prototype['dataGeracao'] = undefined;

  /**
   * Apresenta a data em que o cart\u00C3\u00A3o fora impresso, caso impress\u00C3\u00A3o em loja, ou a data em que ele fora inclu\u00C3\u00ADdo no arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica.
   * @member {module:model/LocalDateTime} dataImpressao
   */
  exports.prototype['dataImpressao'] = undefined;

  /**
   * Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
   * @member {module:model/LocalDateTime} dataStatusCartao
   */
  exports.prototype['dataStatusCartao'] = undefined;

  /**
   * Apresenta a data de validade do cart\u00C3\u00A3o em formato MMAAAA, quando houver.
   * @member {module:model/LocalDateTime} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * Quando ativa, indica que o cart\u00C3\u00A3o fora impresso na Origem Comercial.
   * @member {Integer} flagImpressaoOrigemComercial
   */
  exports.prototype['flagImpressaoOrigemComercial'] = undefined;

  /**
   * Quando ativa, indica que o cart\u00C3\u00A3o \u00C3\u00A9 provis\u00C3\u00B3rio. Ou seja, \u00C3\u00A9 um cart\u00C3\u00A3o para uso tempor\u00C3\u00A1rio quando se deseja permitir que o cliente transacione sem que ele tenha recebido um cart\u00C3\u00A3o definitivo.
   * @member {Integer} flagProvisorio
   */
  exports.prototype['flagProvisorio'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o cart\u00C3\u00A3o pertence (id).
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
   * @member {Integer} idEstagioCartao
   */
  exports.prototype['idEstagioCartao'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o cart\u00C3\u00A3o pertence (id)
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id).
   * @member {Integer} idStatusCartao
   */
  exports.prototype['idStatusCartao'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o.
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * Indica qual \u00C3\u00A9 a rela\u00C3\u00A7\u00C3\u00A3o do portador do cart\u00C3\u00A3o com a conta. Quando \u00E2\u0080\u00981\u00E2\u0080\u0099, corresponde ao seu titular. Quando diferente disso, corresponde a um cart\u00C3\u00A3o adicional.
   * @member {Integer} portador
   */
  exports.prototype['portador'] = undefined;




  return exports;
}));
