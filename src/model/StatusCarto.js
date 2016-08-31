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
    root.Pier.StatusCarto = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusCarto model module.
   * @module model/StatusCarto
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>StatusCarto</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso Status Cart\u00C3\u00A3o
   * @alias module:model/StatusCarto
   * @class
   * @param flagAlteraStatus
   * @param flagCadastroNovaSenha
   * @param flagCancelaConta
   * @param flagCobraTarifa
   * @param flagDestinoTransferencia
   * @param flagEmiteProvisorio
   * @param flagExcecaoBandeira
   * @param flagOrigemTransferencia
   * @param flagReemiteCartao
   * @param id
   * @param idStatusDestinoConta
   * @param idStatusDestinoDesbloqueio
   * @param nome
   */
  var exports = function(flagAlteraStatus, flagCadastroNovaSenha, flagCancelaConta, flagCobraTarifa, flagDestinoTransferencia, flagEmiteProvisorio, flagExcecaoBandeira, flagOrigemTransferencia, flagReemiteCartao, id, idStatusDestinoConta, idStatusDestinoDesbloqueio, nome) {

    this['flagAlteraStatus'] = flagAlteraStatus;
    this['flagCadastroNovaSenha'] = flagCadastroNovaSenha;
    this['flagCancelaConta'] = flagCancelaConta;

    this['flagCobraTarifa'] = flagCobraTarifa;
    this['flagDestinoTransferencia'] = flagDestinoTransferencia;
    this['flagEmiteProvisorio'] = flagEmiteProvisorio;
    this['flagExcecaoBandeira'] = flagExcecaoBandeira;
    this['flagOrigemTransferencia'] = flagOrigemTransferencia;
    this['flagReemiteCartao'] = flagReemiteCartao;
    this['id'] = id;
    this['idStatusDestinoConta'] = idStatusDestinoConta;
    this['idStatusDestinoDesbloqueio'] = idStatusDestinoDesbloqueio;
    this['nome'] = nome;
  };

  /**
   * Constructs a <code>StatusCarto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusCarto} obj Optional instance to populate.
   * @return {module:model/StatusCarto} The populated <code>StatusCarto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('flagAlteraStatus')) {
        obj['flagAlteraStatus'] = ApiClient.convertToType(data['flagAlteraStatus'], 'Integer');
      }
      if (data.hasOwnProperty('flagCadastroNovaSenha')) {
        obj['flagCadastroNovaSenha'] = ApiClient.convertToType(data['flagCadastroNovaSenha'], 'Integer');
      }
      if (data.hasOwnProperty('flagCancelaConta')) {
        obj['flagCancelaConta'] = ApiClient.convertToType(data['flagCancelaConta'], 'Integer');
      }
      if (data.hasOwnProperty('flagCancelaNoDesbloqueio')) {
        obj['flagCancelaNoDesbloqueio'] = ApiClient.convertToType(data['flagCancelaNoDesbloqueio'], 'Integer');
      }
      if (data.hasOwnProperty('flagCobraTarifa')) {
        obj['flagCobraTarifa'] = ApiClient.convertToType(data['flagCobraTarifa'], 'Integer');
      }
      if (data.hasOwnProperty('flagDestinoTransferencia')) {
        obj['flagDestinoTransferencia'] = ApiClient.convertToType(data['flagDestinoTransferencia'], 'Integer');
      }
      if (data.hasOwnProperty('flagEmiteProvisorio')) {
        obj['flagEmiteProvisorio'] = ApiClient.convertToType(data['flagEmiteProvisorio'], 'Integer');
      }
      if (data.hasOwnProperty('flagExcecaoBandeira')) {
        obj['flagExcecaoBandeira'] = ApiClient.convertToType(data['flagExcecaoBandeira'], 'Integer');
      }
      if (data.hasOwnProperty('flagOrigemTransferencia')) {
        obj['flagOrigemTransferencia'] = ApiClient.convertToType(data['flagOrigemTransferencia'], 'Integer');
      }
      if (data.hasOwnProperty('flagReemiteCartao')) {
        obj['flagReemiteCartao'] = ApiClient.convertToType(data['flagReemiteCartao'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusDestinoConta')) {
        obj['idStatusDestinoConta'] = ApiClient.convertToType(data['idStatusDestinoConta'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusDestinoDesbloqueio')) {
        obj['idStatusDestinoDesbloqueio'] = ApiClient.convertToType(data['idStatusDestinoDesbloqueio'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
    }
    return obj;
  }


  /**
   * Quando ativa, indica que ao ser atribu\u00C3\u00ADdo um idStatusCartao com essa caracter\u00C3\u00ADstica, o cart\u00C3\u00A3o ter\u00C3\u00A1 o seu idStatusCartao alterado para o que fora escolhido. Caso contr\u00C3\u00A1rio, o idStatusCartao s\u00C3\u00B3 ser\u00C3\u00A1 alterado ap\u00C3\u00B3s o desbloqueio de um novo cart\u00C3\u00A3o do mesmo Portador e Conta.
   * @member {Integer} flagAlteraStatus
   */
  exports.prototype['flagAlteraStatus'] = undefined;

  /**
   * Quando ativa, indica que a senha cadastrada ser\u00C3\u00A1 exclu\u00C3\u00ADda no momento do Bloqueio do cart\u00C3\u00A3o com um idStatusCartao que possua essa caracter\u00C3\u00ADstica, sendo ent\u00C3\u00A3o necess\u00C3\u00A1rio o cadastro de uma nova senha.
   * @member {Integer} flagCadastroNovaSenha
   */
  exports.prototype['flagCadastroNovaSenha'] = undefined;

  /**
   * Quando ativa, indica que cart\u00C3\u00B5es que tiverem um idStatusCartao atribu\u00C3\u00ADdo com essa caracter\u00C3\u00ADstica, e tal cart\u00C3\u00A3o seja de um titular (portador = 1), ter\u00C3\u00A3o a conta a qual o cart\u00C3\u00A3o pertence cancelada.
   * @member {Integer} flagCancelaConta
   */
  exports.prototype['flagCancelaConta'] = undefined;

  /**
   * Quando ativa, indica que o cart\u00C3\u00A3o ativo que o portador possuir na mesma conta do cart\u00C3\u00A3o a ser desbloqueado, e que o status dele possua essa caracter\u00C3\u00ADstica, dever\u00C3\u00A1 ser cancelado quando um novo cart\u00C3\u00A3o for desbloqueado.
   * @member {Integer} flagCancelaNoDesbloqueio
   */
  exports.prototype['flagCancelaNoDesbloqueio'] = undefined;

  /**
   * Quando ativa, indica que cart\u00C3\u00B5es que tiverem um idStatusCartao atribu\u00C3\u00ADdo com essa caracter\u00C3\u00ADstica, incluir\u00C3\u00A3o a cobran\u00C3\u00A7a de uma tarifa para a conta de acordo com os valores definidos nos par\u00C3\u00A2metros do emissor.
   * @member {Integer} flagCobraTarifa
   */
  exports.prototype['flagCobraTarifa'] = undefined;

  /**
   * Quando ativa, indica que Cart\u00C3\u00B5es com este idStatusCartao podem receber transfer\u00C3\u00AAncias de cr\u00C3\u00A9ditos/d\u00C3\u00A9bitos oriundos de outros cart\u00C3\u00B5es.
   * @member {Integer} flagDestinoTransferencia
   */
  exports.prototype['flagDestinoTransferencia'] = undefined;

  /**
   * Quando ativa, indica que poder\u00C3\u00A1 ser criado um novo cart\u00C3\u00A3o provis\u00C3\u00B3rio para o portador.
   * @member {Integer} flagEmiteProvisorio
   */
  exports.prototype['flagEmiteProvisorio'] = undefined;

  /**
   * Quando ativa, indica que os Cart\u00C3\u00B5es que tiverem este idStatusCartao atribu\u00C3\u00ADdo dever\u00C3\u00A3o ter a respectiva informa\u00C3\u00A7\u00C3\u00A3o de mudan\u00C3\u00A7a de status inclu\u00C3\u00ADda no arquivo de exce\u00C3\u00A7\u00C3\u00A3o da Bandeira, a fim de manter atualizado o cadastro do cart\u00C3\u00A3o nela para nortear o que fazer com as transa\u00C3\u00A7\u00C3\u00B5es quando o autorizador estiver indispon\u00C3\u00ADvel.
   * @member {Integer} flagExcecaoBandeira
   */
  exports.prototype['flagExcecaoBandeira'] = undefined;

  /**
   * Quando ativa, indica que Cart\u00C3\u00B5es com este idStatusCartao podem realizar a transfer\u00C3\u00AAncia de cr\u00C3\u00A9ditos/d\u00C3\u00A9bitos para outros cart\u00C3\u00B5es.
   * @member {Integer} flagOrigemTransferencia
   */
  exports.prototype['flagOrigemTransferencia'] = undefined;

  /**
   * Quando ativa, indica que cart\u00C3\u00B5es que tiverem este status atribu\u00C3\u00ADdo ter\u00C3\u00A3o um novo cart\u00C3\u00A3o gerado para o portador, para a mesma conta, automaticamente.
   * @member {Integer} flagReemiteCartao
   */
  exports.prototype['flagReemiteCartao'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id) 
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Indica qual o idStatusCartao que ser\u00C3\u00A1 atribu\u00C3\u00ADdo a conta, caso ela seja cancelada devido ao bloqueio de um cart\u00C3\u00A3o quando for utilizado um idStatusCartao no processo de Bloqueio que possua essa caracter\u00C3\u00ADstica.
   * @member {Integer} idStatusDestinoConta
   */
  exports.prototype['idStatusDestinoConta'] = undefined;

  /**
   * Indica qual o idStatusCartao que que ser\u00C3\u00A1 atribu\u00C3\u00ADdo aos cart\u00C3\u00B5es que forem cancelados devido ao desbloqueio de um novo cart\u00C3\u00A3o.
   * @member {Integer} idStatusDestinoDesbloqueio
   */
  exports.prototype['idStatusDestinoDesbloqueio'] = undefined;

  /**
   * Nome atribu\u00C3\u00ADdo ao Status de Entrega do Cart\u00C3\u00A3o.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
