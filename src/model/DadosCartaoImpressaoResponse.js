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
    root.Pier.DadosCartaoImpressaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DadosCartaoImpressaoResponse model module.
   * @module model/DadosCartaoImpressaoResponse
   * @version 2.50.18
   */

  /**
   * Constructs a new <code>DadosCartaoImpressaoResponse</code>.
   * Objeto Cart\u00C3\u00A3o para Impresso
   * @alias module:model/DadosCartaoImpressaoResponse
   * @class
   */
  var exports = function() {
















































  };

  /**
   * Constructs a <code>DadosCartaoImpressaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DadosCartaoImpressaoResponse} obj Optional instance to populate.
   * @return {module:model/DadosCartaoImpressaoResponse} The populated <code>DadosCartaoImpressaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idBandeira')) {
        obj['idBandeira'] = ApiClient.convertToType(data['idBandeira'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoCartao')) {
        obj['idTipoCartao'] = ApiClient.convertToType(data['idTipoCartao'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('cvv2')) {
        obj['cvv2'] = ApiClient.convertToType(data['cvv2'], 'String');
      }
      if (data.hasOwnProperty('dataGeracao')) {
        obj['dataGeracao'] = ApiClient.convertToType(data['dataGeracao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('tipoPortador')) {
        obj['tipoPortador'] = ApiClient.convertToType(data['tipoPortador'], 'String');
      }
      if (data.hasOwnProperty('trilha1')) {
        obj['trilha1'] = ApiClient.convertToType(data['trilha1'], 'String');
      }
      if (data.hasOwnProperty('trilha2')) {
        obj['trilha2'] = ApiClient.convertToType(data['trilha2'], 'String');
      }
      if (data.hasOwnProperty('trilhaCVV1')) {
        obj['trilhaCVV1'] = ApiClient.convertToType(data['trilhaCVV1'], 'String');
      }
      if (data.hasOwnProperty('trilhaCVV2')) {
        obj['trilhaCVV2'] = ApiClient.convertToType(data['trilhaCVV2'], 'String');
      }
      if (data.hasOwnProperty('flagVirtual')) {
        obj['flagVirtual'] = ApiClient.convertToType(data['flagVirtual'], 'Integer');
      }
      if (data.hasOwnProperty('nomeBandeira')) {
        obj['nomeBandeira'] = ApiClient.convertToType(data['nomeBandeira'], 'String');
      }
      if (data.hasOwnProperty('flagTitular')) {
        obj['flagTitular'] = ApiClient.convertToType(data['flagTitular'], 'Integer');
      }
      if (data.hasOwnProperty('sequencialCartao')) {
        obj['sequencialCartao'] = ApiClient.convertToType(data['sequencialCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idStatus')) {
        obj['idStatus'] = ApiClient.convertToType(data['idStatus'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoStatusCartao')) {
        obj['descricaoStatusCartao'] = ApiClient.convertToType(data['descricaoStatusCartao'], 'String');
      }
      if (data.hasOwnProperty('dataStatus')) {
        obj['dataStatus'] = ApiClient.convertToType(data['dataStatus'], 'String');
      }
      if (data.hasOwnProperty('idEstagio')) {
        obj['idEstagio'] = ApiClient.convertToType(data['idEstagio'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoEstagio')) {
        obj['descricaoEstagio'] = ApiClient.convertToType(data['descricaoEstagio'], 'String');
      }
      if (data.hasOwnProperty('dataEstagio')) {
        obj['dataEstagio'] = ApiClient.convertToType(data['dataEstagio'], 'String');
      }
      if (data.hasOwnProperty('numeroBin')) {
        obj['numeroBin'] = ApiClient.convertToType(data['numeroBin'], 'String');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoProduto')) {
        obj['descricaoProduto'] = ApiClient.convertToType(data['descricaoProduto'], 'String');
      }
      if (data.hasOwnProperty('idStatusConta')) {
        obj['idStatusConta'] = ApiClient.convertToType(data['idStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoStatusConta')) {
        obj['descricaoStatusConta'] = ApiClient.convertToType(data['descricaoStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('dataEmbossing')) {
        obj['dataEmbossing'] = ApiClient.convertToType(data['dataEmbossing'], 'String');
      }
      if (data.hasOwnProperty('codigoDesbloqueio')) {
        obj['codigoDesbloqueio'] = ApiClient.convertToType(data['codigoDesbloqueio'], 'String');
      }
      if (data.hasOwnProperty('nomePessoa')) {
        obj['nomePessoa'] = ApiClient.convertToType(data['nomePessoa'], 'String');
      }
      if (data.hasOwnProperty('tipoPessoa')) {
        obj['tipoPessoa'] = ApiClient.convertToType(data['tipoPessoa'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('idEndereco')) {
        obj['idEndereco'] = ApiClient.convertToType(data['idEndereco'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoEndereco')) {
        obj['idTipoEndereco'] = ApiClient.convertToType(data['idTipoEndereco'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoEndereco')) {
        obj['descricaoTipoEndereco'] = ApiClient.convertToType(data['descricaoTipoEndereco'], 'String');
      }
      if (data.hasOwnProperty('cep')) {
        obj['cep'] = ApiClient.convertToType(data['cep'], 'String');
      }
      if (data.hasOwnProperty('logradouro')) {
        obj['logradouro'] = ApiClient.convertToType(data['logradouro'], 'String');
      }
      if (data.hasOwnProperty('numeroEndereco')) {
        obj['numeroEndereco'] = ApiClient.convertToType(data['numeroEndereco'], 'String');
      }
      if (data.hasOwnProperty('complementoEndereco')) {
        obj['complementoEndereco'] = ApiClient.convertToType(data['complementoEndereco'], 'String');
      }
      if (data.hasOwnProperty('bairro')) {
        obj['bairro'] = ApiClient.convertToType(data['bairro'], 'String');
      }
      if (data.hasOwnProperty('cidade')) {
        obj['cidade'] = ApiClient.convertToType(data['cidade'], 'String');
      }
      if (data.hasOwnProperty('uf')) {
        obj['uf'] = ApiClient.convertToType(data['uf'], 'String');
      }
      if (data.hasOwnProperty('pais')) {
        obj['pais'] = ApiClient.convertToType(data['pais'], 'String');
      }
    }
    return obj;
  }


  /**
   * O C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id) a qual o cart\u00C3\u00A3o gerado pertence.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * O C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) portadora do cart\u00C3\u00A3o gerado.
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * O C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id) que foi gerado.
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * O C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Bandeira (id) a qual o Cart\u00C3\u00A3o pertence, quando bandeirado.
   * @member {Integer} idBandeira
   */
  exports.prototype['idBandeira'] = undefined;

  /**
   * O C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Cart\u00C3\u00A3o (id) atribu\u00C3\u00ADdo ao Cart\u00C3\u00A3o.
   * @member {Integer} idTipoCartao
   */
  exports.prototype['idTipoCartao'] = undefined;

  /**
   * O n\u00C3\u00BAmero do cart\u00C3\u00A3o.
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * O nome do Portador do Cart\u00C3\u00A3o.
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * O n\u00C3\u00BAmero do CVV a ser impresso no Cart\u00C3\u00A3o
   * @member {String} cvv2
   */
  exports.prototype['cvv2'] = undefined;

  /**
   * Apresenta a data de emiss\u00C3\u00A3o do Cart\u00C3\u00A3o.
   * @member {String} dataGeracao
   */
  exports.prototype['dataGeracao'] = undefined;

  /**
   * Apresenta a data de Validade do Cart\u00C3\u00A3o.
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * O CPF do Portador do Cart\u00C3\u00A3o.
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * O tipo do Portador do cart\u00C3\u00A3o, sendo: ('T': Titular, 'A': Adicional).
   * @member {String} tipoPortador
   */
  exports.prototype['tipoPortador'] = undefined;

  /**
   * Os dados da Trilha1, seguindo as regras de trilha do emissor.
   * @member {String} trilha1
   */
  exports.prototype['trilha1'] = undefined;

  /**
   * Os dados da Trilha2, seguindo as regras de trilha do emissor.
   * @member {String} trilha2
   */
  exports.prototype['trilha2'] = undefined;

  /**
   * Os dados da TrilhaCVV01, seguindo as regras de trilha do emissor.
   * @member {String} trilhaCVV1
   */
  exports.prototype['trilhaCVV1'] = undefined;

  /**
   * Os dados da TrilhaCVV02, seguindo as regras de trilha do emissor.
   * @member {String} trilhaCVV2
   */
  exports.prototype['trilhaCVV2'] = undefined;

  /**
   * O status que informa se o cart\u00C3\u00A3o \u00C3\u00A9 virtual 
   * @member {Integer} flagVirtual
   */
  exports.prototype['flagVirtual'] = undefined;

  /**
   * Nome da Bandeira
   * @member {String} nomeBandeira
   */
  exports.prototype['nomeBandeira'] = undefined;

  /**
   * Flag Indicativo de Titularidade da Conta
   * @member {Integer} flagTitular
   */
  exports.prototype['flagTitular'] = undefined;

  /**
   * C\u00C3\u00B3digo Sequencial do Cart\u00C3\u00A3o
   * @member {Integer} sequencialCartao
   */
  exports.prototype['sequencialCartao'] = undefined;

  /**
   * Identificador do Status do Cart\u00C3\u00A3o
   * @member {Integer} idStatus
   */
  exports.prototype['idStatus'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o
   * @member {String} descricaoStatusCartao
   */
  exports.prototype['descricaoStatusCartao'] = undefined;

  /**
   * Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
   * @member {String} dataStatus
   */
  exports.prototype['dataStatus'] = undefined;

  /**
   * Identificador do Est\u00C3\u00A1gio do Cart\u00C3\u00A3o.
   * @member {Integer} idEstagio
   */
  exports.prototype['idEstagio'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do Estagio do Cart\u00C3\u00A3o.
   * @member {String} descricaoEstagio
   */
  exports.prototype['descricaoEstagio'] = undefined;

  /**
   * Apresenta a data em que o idEstagioCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
   * @member {String} dataEstagio
   */
  exports.prototype['dataEstagio'] = undefined;

  /**
   * N\u00C3\u00BAmero do Bin do Cart\u00C3\u00A3o
   * @member {String} numeroBin
   */
  exports.prototype['numeroBin'] = undefined;

  /**
   * Identificador do Produto Associado a Conta
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do produto
   * @member {String} descricaoProduto
   */
  exports.prototype['descricaoProduto'] = undefined;

  /**
   * Identificador do Status da Conta
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status da conta
   * @member {Integer} descricaoStatusConta
   */
  exports.prototype['descricaoStatusConta'] = undefined;

  /**
   * Data que o cart\u00C3\u00A3o foi embossado
   * @member {String} dataEmbossing
   */
  exports.prototype['dataEmbossing'] = undefined;

  /**
   * C\u00C3\u00B3digo de desbloqueio do cart\u00C3\u00A3o
   * @member {String} codigoDesbloqueio
   */
  exports.prototype['codigoDesbloqueio'] = undefined;

  /**
   * O 'Nome Completo da PF' ou o 'Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)'.
   * @member {String} nomePessoa
   */
  exports.prototype['nomePessoa'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\"PF\": Pessoa F\u00C3\u00ADsica), (\"PJ\": Pessoa Jur\u00C3\u00ADdica).
   * @member {String} tipoPessoa
   */
  exports.prototype['tipoPessoa'] = undefined;

  /**
   * Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ.
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * Identificador do Endere\u00C3\u00A7o do titular do cart\u00C3\u00A3o
   * @member {Integer} idEndereco
   */
  exports.prototype['idEndereco'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
   * @member {Integer} idTipoEndereco
   */
  exports.prototype['idTipoEndereco'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do Tipo de Endere\u00C3\u00A7o
   * @member {String} descricaoTipoEndereco
   */
  exports.prototype['descricaoTipoEndereco'] = undefined;

  /**
   * O C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro '58800000'
   * @member {String} cep
   */
  exports.prototype['cep'] = undefined;

  /**
   * Nome do Logradouro
   * @member {String} logradouro
   */
  exports.prototype['logradouro'] = undefined;

  /**
   * N\u00C3\u00BAmero do endere\u00C3\u00A7o
   * @member {String} numeroEndereco
   */
  exports.prototype['numeroEndereco'] = undefined;

  /**
   * Descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
   * @member {String} complementoEndereco
   */
  exports.prototype['complementoEndereco'] = undefined;

  /**
   * Nome do bairro
   * @member {String} bairro
   */
  exports.prototype['bairro'] = undefined;

  /**
   * Nome do cidade
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * Unidade federativa
   * @member {String} uf
   */
  exports.prototype['uf'] = undefined;

  /**
   * Nome do pa\u00C3\u00ADs
   * @member {String} pais
   */
  exports.prototype['pais'] = undefined;




  return exports;
}));
