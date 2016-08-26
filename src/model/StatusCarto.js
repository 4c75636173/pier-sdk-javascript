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
   * @param flagCadastroSenha
   * @param flagCancelaCartao
   * @param flagCancelaConta
   * @param flagCobraTarifa
   * @param flagDesbloqueio
   * @param flagDestinoTransferencia
   * @param flagEmiteProvisorio
   * @param flagExcecaoBandeira
   * @param flagOrigemTransferencia
   * @param flagReemiteCartao
   * @param flagReversaoCancelamento
   * @param flagReversaoDesbloqueio
   * @param id
   * @param idStatusDestinoConta
   * @param idStatusDestinoDesbloqueio
   * @param nome
   */
  var exports = function(flagAlteraStatus, flagCadastroNovaSenha, flagCadastroSenha, flagCancelaCartao, flagCancelaConta, flagCobraTarifa, flagDesbloqueio, flagDestinoTransferencia, flagEmiteProvisorio, flagExcecaoBandeira, flagOrigemTransferencia, flagReemiteCartao, flagReversaoCancelamento, flagReversaoDesbloqueio, id, idStatusDestinoConta, idStatusDestinoDesbloqueio, nome) {

    this['flagAlteraStatus'] = flagAlteraStatus;
    this['flagCadastroNovaSenha'] = flagCadastroNovaSenha;
    this['flagCadastroSenha'] = flagCadastroSenha;
    this['flagCancelaCartao'] = flagCancelaCartao;
    this['flagCancelaConta'] = flagCancelaConta;
    this['flagCobraTarifa'] = flagCobraTarifa;
    this['flagDesbloqueio'] = flagDesbloqueio;
    this['flagDestinoTransferencia'] = flagDestinoTransferencia;
    this['flagEmiteProvisorio'] = flagEmiteProvisorio;
    this['flagExcecaoBandeira'] = flagExcecaoBandeira;
    this['flagOrigemTransferencia'] = flagOrigemTransferencia;
    this['flagReemiteCartao'] = flagReemiteCartao;
    this['flagReversaoCancelamento'] = flagReversaoCancelamento;
    this['flagReversaoDesbloqueio'] = flagReversaoDesbloqueio;
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
        obj['flagAlteraStatus'] = ApiClient.convertToType(data['flagAlteraStatus'], 'String');
      }
      if (data.hasOwnProperty('flagCadastroNovaSenha')) {
        obj['flagCadastroNovaSenha'] = ApiClient.convertToType(data['flagCadastroNovaSenha'], 'String');
      }
      if (data.hasOwnProperty('flagCadastroSenha')) {
        obj['flagCadastroSenha'] = ApiClient.convertToType(data['flagCadastroSenha'], 'String');
      }
      if (data.hasOwnProperty('flagCancelaCartao')) {
        obj['flagCancelaCartao'] = ApiClient.convertToType(data['flagCancelaCartao'], 'String');
      }
      if (data.hasOwnProperty('flagCancelaConta')) {
        obj['flagCancelaConta'] = ApiClient.convertToType(data['flagCancelaConta'], 'String');
      }
      if (data.hasOwnProperty('flagCobraTarifa')) {
        obj['flagCobraTarifa'] = ApiClient.convertToType(data['flagCobraTarifa'], 'String');
      }
      if (data.hasOwnProperty('flagDesbloqueio')) {
        obj['flagDesbloqueio'] = ApiClient.convertToType(data['flagDesbloqueio'], 'String');
      }
      if (data.hasOwnProperty('flagDestinoTransferencia')) {
        obj['flagDestinoTransferencia'] = ApiClient.convertToType(data['flagDestinoTransferencia'], 'String');
      }
      if (data.hasOwnProperty('flagEmiteProvisorio')) {
        obj['flagEmiteProvisorio'] = ApiClient.convertToType(data['flagEmiteProvisorio'], 'String');
      }
      if (data.hasOwnProperty('flagExcecaoBandeira')) {
        obj['flagExcecaoBandeira'] = ApiClient.convertToType(data['flagExcecaoBandeira'], 'String');
      }
      if (data.hasOwnProperty('flagOrigemTransferencia')) {
        obj['flagOrigemTransferencia'] = ApiClient.convertToType(data['flagOrigemTransferencia'], 'String');
      }
      if (data.hasOwnProperty('flagReemiteCartao')) {
        obj['flagReemiteCartao'] = ApiClient.convertToType(data['flagReemiteCartao'], 'String');
      }
      if (data.hasOwnProperty('flagReversaoCancelamento')) {
        obj['flagReversaoCancelamento'] = ApiClient.convertToType(data['flagReversaoCancelamento'], 'String');
      }
      if (data.hasOwnProperty('flagReversaoDesbloqueio')) {
        obj['flagReversaoDesbloqueio'] = ApiClient.convertToType(data['flagReversaoDesbloqueio'], 'String');
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
   * Quanto ativa, indica que Cart\u00C3\u00B5es que tiverem este idStatusCartao atribu\u00C3\u00ADdo n\u00C3\u00A3o ter\u00C3\u00A3o seu idStatusCartao Alterado, fazendo com que o Cart\u00C3\u00A3o atual possa continuar sendo utilizado at\u00C3\u00A9 o desbloqueio de um novo cart\u00C3\u00A3o.
   * @member {String} flagAlteraStatus
   */
  exports.prototype['flagAlteraStatus'] = undefined;

  /**
   * Quando ativa, indica que os Cart\u00C3\u00B5es que tiverem este idStatusCartao atribu\u00C3\u00ADdo ter\u00C3\u00A3o a senha atual exclu\u00C3\u00ADda.
   * @member {String} flagCadastroNovaSenha
   */
  exports.prototype['flagCadastroNovaSenha'] = undefined;

  /**
   * Quando ativa, indica se poder\u00C3\u00A1 ser realizado o cadastro de uma senha para o Cart\u00C3\u00A3o.
   * @member {String} flagCadastroSenha
   */
  exports.prototype['flagCadastroSenha'] = undefined;

  /**
   * Quando ativa, indica que Cart\u00C3\u00B5es que tiverem este idStatusCartao atribu\u00C3\u00ADdo ter\u00C3\u00A3o o cart\u00C3\u00A3o Cancelado.
   * @member {String} flagCancelaCartao
   */
  exports.prototype['flagCancelaCartao'] = undefined;

  /**
   * Quando ativa, indica que Cart\u00C3\u00B5es que tiverem este idStatusCartao atribu\u00C3\u00ADdo ter\u00C3\u00A3o a conta Cancelada.
   * @member {String} flagCancelaConta
   */
  exports.prototype['flagCancelaConta'] = undefined;

  /**
   * Quando ativa, indica que Cart\u00C3\u00B5es que tiverem este idStatusCartao atribu\u00C3\u00ADdo ter\u00C3\u00A3o a cobran\u00C3\u00A7a de tarifa lan\u00C3\u00A7ada junto a gera\u00C3\u00A7\u00C3\u00A3o do novo cart\u00C3\u00A3o, desde que o Produto ao qual o cart\u00C3\u00A3o pertence possua o respectivo par\u00C3\u00A2metro configurado.
   * @member {String} flagCobraTarifa
   */
  exports.prototype['flagCobraTarifa'] = undefined;

  /**
   * Quando ativa, indica que Cart\u00C3\u00B5es com este idStatusCartao poder\u00C3\u00A3o ser Desbloqueados.
   * @member {String} flagDesbloqueio
   */
  exports.prototype['flagDesbloqueio'] = undefined;

  /**
   * Quando ativa, indica que Cart\u00C3\u00B5es com este idStatusCartao podem receber transfer\u00C3\u00AAncias de cr\u00C3\u00A9ditos/d\u00C3\u00A9bitos oriundos de outros cart\u00C3\u00B5es.
   * @member {String} flagDestinoTransferencia
   */
  exports.prototype['flagDestinoTransferencia'] = undefined;

  /**
   * Quando ativa, indica que os portadores que tiverem seus cart\u00C3\u00B5es associados a idStatusCartao com esta flag poder\u00C3\u00A3o solicitar a emiss\u00C3\u00A3o de um cart\u00C3\u00A3o provis\u00C3\u00B3rio at\u00C3\u00A9 que um novo cart\u00C3\u00A3o definitivo seja recebido. 
   * @member {String} flagEmiteProvisorio
   */
  exports.prototype['flagEmiteProvisorio'] = undefined;

  /**
   * Quando ativa, indica que os Cart\u00C3\u00B5es que tiverem este idStatusCartao atribu\u00C3\u00ADdo dever\u00C3\u00A3o ter a respectiva informa\u00C3\u00A7\u00C3\u00A3o de mudan\u00C3\u00A7a de status inclu\u00C3\u00ADda no arquivo de exce\u00C3\u00A7\u00C3\u00A3o da Bandeira, a fim de manter atualizado o cadastro do cart\u00C3\u00A3o nela para nortear o que fazer com as transa\u00C3\u00A7\u00C3\u00B5es quando o autorizador estiver indispon\u00C3\u00ADvel.
   * @member {String} flagExcecaoBandeira
   */
  exports.prototype['flagExcecaoBandeira'] = undefined;

  /**
   * Quando ativa, indica que Cart\u00C3\u00B5es com este idStatusCartao podem realizar a transfer\u00C3\u00AAncia de cr\u00C3\u00A9ditos/d\u00C3\u00A9bitos para outros cart\u00C3\u00B5es.
   * @member {String} flagOrigemTransferencia
   */
  exports.prototype['flagOrigemTransferencia'] = undefined;

  /**
   * Quando ativa, indica que Cart\u00C3\u00B5es que tiverem este idStatusCartao atribu\u00C3\u00ADdo ter\u00C3\u00A3o um novo cart\u00C3\u00A3o automaticamente gerado.
   * @member {String} flagReemiteCartao
   */
  exports.prototype['flagReemiteCartao'] = undefined;

  /**
   * Quando ativa, indica que o cart\u00C3\u00A3o, mesmo tendo sido cancelado, poder\u00C3\u00A1 ter o processo desfeito.
   * @member {String} flagReversaoCancelamento
   */
  exports.prototype['flagReversaoCancelamento'] = undefined;

  /**
   * Quando ativa, indica que o cart\u00C3\u00A3o, mesmo tendo sido bloqueado, poder\u00C3\u00A1 ter o processo desfeito.
   * @member {String} flagReversaoDesbloqueio
   */
  exports.prototype['flagReversaoDesbloqueio'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id) 
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Indica qual o idStatusConta que ser\u00C3\u00A1 atribu\u00C3\u00ADdo ao idConta que tiver o Cartao do titular da mesma cancelado por um idStatusCartao que recomenda o cancelamento da conta.
   * @member {Integer} idStatusDestinoConta
   */
  exports.prototype['idStatusDestinoConta'] = undefined;

  /**
   * Indica qual o idStatusCartao que deve ser atribu\u00C3\u00ADdo a um idCartao quando ele for desbloqueado.
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
