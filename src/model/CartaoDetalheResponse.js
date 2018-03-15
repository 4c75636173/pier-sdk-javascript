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
    root.Pier.CartaoDetalheResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoDetalheResponse model module.
   * @module model/CartaoDetalheResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>CartaoDetalheResponse</code>.
   * Objeto Cart\u00E3o com mais informa\u00E7\u00F5es
   * @alias module:model/CartaoDetalheResponse
   * @class
   */
  var exports = function() {

























  };

  /**
   * Constructs a <code>CartaoDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoDetalheResponse} obj Optional instance to populate.
   * @return {module:model/CartaoDetalheResponse} The populated <code>CartaoDetalheResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('flagTitular')) {
        obj['flagTitular'] = ApiClient.convertToType(data['flagTitular'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('sequencialCartao')) {
        obj['sequencialCartao'] = ApiClient.convertToType(data['sequencialCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idStatus')) {
        obj['idStatus'] = ApiClient.convertToType(data['idStatus'], 'Integer');
      }
      if (data.hasOwnProperty('dataStatus')) {
        obj['dataStatus'] = ApiClient.convertToType(data['dataStatus'], 'String');
      }
      if (data.hasOwnProperty('idEstagio')) {
        obj['idEstagio'] = ApiClient.convertToType(data['idEstagio'], 'Integer');
      }
      if (data.hasOwnProperty('dataEstagio')) {
        obj['dataEstagio'] = ApiClient.convertToType(data['dataEstagio'], 'String');
      }
      if (data.hasOwnProperty('numeroBin')) {
        obj['numeroBin'] = ApiClient.convertToType(data['numeroBin'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('numeroCartaoHash')) {
        obj['numeroCartaoHash'] = ApiClient.convertToType(data['numeroCartaoHash'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartaoCriptografado')) {
        obj['numeroCartaoCriptografado'] = ApiClient.convertToType(data['numeroCartaoCriptografado'], 'String');
      }
      if (data.hasOwnProperty('dataEmissao')) {
        obj['dataEmissao'] = ApiClient.convertToType(data['dataEmissao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('cartaoVirtual')) {
        obj['cartaoVirtual'] = ApiClient.convertToType(data['cartaoVirtual'], 'Integer');
      }
      if (data.hasOwnProperty('impressaoAvulsa')) {
        obj['impressaoAvulsa'] = ApiClient.convertToType(data['impressaoAvulsa'], 'Integer');
      }
      if (data.hasOwnProperty('dataImpressao')) {
        obj['dataImpressao'] = ApiClient.convertToType(data['dataImpressao'], 'String');
      }
      if (data.hasOwnProperty('nomeArquivoImpressao')) {
        obj['nomeArquivoImpressao'] = ApiClient.convertToType(data['nomeArquivoImpressao'], 'String');
      }
      if (data.hasOwnProperty('descricaoTipoCartao')) {
        obj['descricaoTipoCartao'] = ApiClient.convertToType(data['descricaoTipoCartao'], 'String');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('tipoCartao')) {
        obj['tipoCartao'] = ApiClient.convertToType(data['tipoCartao'], 'Integer');
      }
      if (data.hasOwnProperty('codigoDesbloqueio')) {
        obj['codigoDesbloqueio'] = ApiClient.convertToType(data['codigoDesbloqueio'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o do Cart\u00E3o.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Apresenta o tipo do Portador do cart\u00E3o, sendo: (1: Titular, 0: Adicional).
   * @member {Integer} flagTitular
   */
  exports.prototype['flagTitular'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa a qual o cart\u00E3o pertence
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * N\u00FAmero sequencial do cart\u00E3o
   * @member {Integer} sequencialCartao
   */
  exports.prototype['sequencialCartao'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o da Conta a qual o cart\u00E3o pertence.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o do Status do Cart\u00E3o.
   * @member {Integer} idStatus
   */
  exports.prototype['idStatus'] = undefined;

  /**
   * Apresenta a data em que o idStatusCartao atual do cart\u00E3o fora aplicado, quando houver.
   * @member {String} dataStatus
   */
  exports.prototype['dataStatus'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o do Est\u00E1gio de Impress\u00E3o do Cart\u00E3o.
   * @member {Integer} idEstagio
   */
  exports.prototype['idEstagio'] = undefined;

  /**
   * Apresenta a data em que o idEstagio atual do cart\u00E3o fora aplicado, quando houver.
   * @member {String} dataEstagio
   */
  exports.prototype['dataEstagio'] = undefined;

  /**
   * N\u00FAmero do bin do cart\u00E3o.
   * @member {Integer} numeroBin
   */
  exports.prototype['numeroBin'] = undefined;

  /**
   * Apresenta o n\u00FAmero do cart\u00E3o.
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * N\u00FAmero do cart\u00E3o hash.
   * @member {Integer} numeroCartaoHash
   */
  exports.prototype['numeroCartaoHash'] = undefined;

  /**
   * N\u00FAmero do cart\u00E3o criptografado.
   * @member {String} numeroCartaoCriptografado
   */
  exports.prototype['numeroCartaoCriptografado'] = undefined;

  /**
   * Apresenta a data de emiss\u00E3o do cart\u00E3o.
   * @member {String} dataEmissao
   */
  exports.prototype['dataEmissao'] = undefined;

  /**
   * Apresenta a data de validade do cart\u00E3o em formato yyyy-MM, quando houver.
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * Apresenta o status que informa se o cart\u00E3o \u00E9 virtual. Sendo: (1: True, 0: False).
   * @member {Integer} cartaoVirtual
   */
  exports.prototype['cartaoVirtual'] = undefined;

  /**
   * Quando ativa, indica que o cart\u00E3o fora impresso na Origem Comercial.
   * @member {Integer} impressaoAvulsa
   */
  exports.prototype['impressaoAvulsa'] = undefined;

  /**
   * Apresenta a data em que o cart\u00E3o fora impresso, caso impress\u00E3o em loja, ou a data em que ele fora inclu\u00EDdo no arquivo para impress\u00E3o via gr\u00E1fica.
   * @member {String} dataImpressao
   */
  exports.prototype['dataImpressao'] = undefined;

  /**
   * Apresenta o nome do arquivo onde o cart\u00E3o fora inclu\u00EDdo para impress\u00E3o por uma gr\u00E1fica, quando houver.
   * @member {String} nomeArquivoImpressao
   */
  exports.prototype['nomeArquivoImpressao'] = undefined;

  /**
   * Descreve o tipo do cart\u00E3o.
   * @member {String} descricaoTipoCartao
   */
  exports.prototype['descricaoTipoCartao'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o do Produto a qual o cart\u00E3o pertence.
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * Apresenta o nome impresso no cart\u00E3o.
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * Indica o identificador do tipo do cart\u00E3o.
   * @member {Integer} tipoCartao
   */
  exports.prototype['tipoCartao'] = undefined;

  /**
   * Apresenta um c\u00F3digo espec\u00EDfico para ser utilizado como vari\u00E1vel no processo de desbloqueio do cart\u00E3o para emissores que querem usar esta funcionalidade.
   * @member {String} codigoDesbloqueio
   */
  exports.prototype['codigoDesbloqueio'] = undefined;




  return exports;
}));
