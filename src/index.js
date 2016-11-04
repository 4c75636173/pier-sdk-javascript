(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AuthToken', './model/BodyAccessToken', './model/Cartao', './model/Conta', './model/Endereco', './model/EstagioCartao', './model/ExtraInfo', './model/HistoricoImpressaoCartao', './model/LimiteDisponibilidade', './model/ListaProdutos', './model/OrigemComercial', './model/PageCartoes', './model/PageEnderecos', './model/PageEstagiosCartoes', './model/PageOrigensComerciais', './model/PagePessoas', './model/PagePortador', './model/PageStatusCartoes', './model/PageStatusContas', './model/PageStatusImpressao', './model/PageTelefones', './model/PageTipoTelefones', './model/PageTiposEndereco', './model/Pessoa', './model/Portador', './model/Produto', './model/StatusCartao', './model/StatusConta', './model/StatusImpressao', './model/Telefone', './model/TipoEndereco', './model/TipoTelefone', './api/BaseApi', './api/CartaoApi', './api/ContaApi', './api/EnderecoApi', './api/EstagioCartaoApi', './api/OrigemComercialApi', './api/PessoaApi', './api/PortadorApi', './api/ProdutoApi', './api/StatusCartaoApi', './api/StatusContaApi', './api/StatusImpressaoApi', './api/TelefoneApi', './api/TipoEnderecoApi', './api/TipoTelefoneApi', './api/TokenApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AuthToken'), require('./model/BodyAccessToken'), require('./model/Cartao'), require('./model/Conta'), require('./model/Endereco'), require('./model/EstagioCartao'), require('./model/ExtraInfo'), require('./model/HistoricoImpressaoCartao'), require('./model/LimiteDisponibilidade'), require('./model/ListaProdutos'), require('./model/OrigemComercial'), require('./model/PageCartoes'), require('./model/PageEnderecos'), require('./model/PageEstagiosCartoes'), require('./model/PageOrigensComerciais'), require('./model/PagePessoas'), require('./model/PagePortador'), require('./model/PageStatusCartoes'), require('./model/PageStatusContas'), require('./model/PageStatusImpressao'), require('./model/PageTelefones'), require('./model/PageTipoTelefones'), require('./model/PageTiposEndereco'), require('./model/Pessoa'), require('./model/Portador'), require('./model/Produto'), require('./model/StatusCartao'), require('./model/StatusConta'), require('./model/StatusImpressao'), require('./model/Telefone'), require('./model/TipoEndereco'), require('./model/TipoTelefone'), require('./api/BaseApi'), require('./api/CartaoApi'), require('./api/ContaApi'), require('./api/EnderecoApi'), require('./api/EstagioCartaoApi'), require('./api/OrigemComercialApi'), require('./api/PessoaApi'), require('./api/PortadorApi'), require('./api/ProdutoApi'), require('./api/StatusCartaoApi'), require('./api/StatusContaApi'), require('./api/StatusImpressaoApi'), require('./api/TelefoneApi'), require('./api/TipoEnderecoApi'), require('./api/TipoTelefoneApi'), require('./api/TokenApi'));
  }
}(function(ApiClient, AuthToken, BodyAccessToken, Cartao, Conta, Endereco, EstagioCartao, ExtraInfo, HistoricoImpressaoCartao, LimiteDisponibilidade, ListaProdutos, OrigemComercial, PageCartoes, PageEnderecos, PageEstagiosCartoes, PageOrigensComerciais, PagePessoas, PagePortador, PageStatusCartoes, PageStatusContas, PageStatusImpressao, PageTelefones, PageTipoTelefones, PageTiposEndereco, Pessoa, Portador, Produto, StatusCartao, StatusConta, StatusImpressao, Telefone, TipoEndereco, TipoTelefone, BaseApi, CartaoApi, ContaApi, EnderecoApi, EstagioCartaoApi, OrigemComercialApi, PessoaApi, PortadorApi, ProdutoApi, StatusCartaoApi, StatusContaApi, StatusImpressaoApi, TelefoneApi, TipoEnderecoApi, TipoTelefoneApi, TokenApi) {
  'use strict';

  /**
   * Gest\u00C3\u00A3o de pagamento eletr\u00C3\u00B4nicos como servi\u00C3\u00A7o.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Pier = require('./index'); // See note below*.
   * var xxxSvc = new Pier.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Pier.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Pier.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Pier.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthToken model constructor.
     * @property {module:model/AuthToken}
     */
    AuthToken: AuthToken,
    /**
     * The BodyAccessToken model constructor.
     * @property {module:model/BodyAccessToken}
     */
    BodyAccessToken: BodyAccessToken,
    /**
     * The Cartao model constructor.
     * @property {module:model/Cartao}
     */
    Cartao: Cartao,
    /**
     * The Conta model constructor.
     * @property {module:model/Conta}
     */
    Conta: Conta,
    /**
     * The Endereco model constructor.
     * @property {module:model/Endereco}
     */
    Endereco: Endereco,
    /**
     * The EstagioCartao model constructor.
     * @property {module:model/EstagioCartao}
     */
    EstagioCartao: EstagioCartao,
    /**
     * The ExtraInfo model constructor.
     * @property {module:model/ExtraInfo}
     */
    ExtraInfo: ExtraInfo,
    /**
     * The HistoricoImpressaoCartao model constructor.
     * @property {module:model/HistoricoImpressaoCartao}
     */
    HistoricoImpressaoCartao: HistoricoImpressaoCartao,
    /**
     * The LimiteDisponibilidade model constructor.
     * @property {module:model/LimiteDisponibilidade}
     */
    LimiteDisponibilidade: LimiteDisponibilidade,
    /**
     * The ListaProdutos model constructor.
     * @property {module:model/ListaProdutos}
     */
    ListaProdutos: ListaProdutos,
    /**
     * The OrigemComercial model constructor.
     * @property {module:model/OrigemComercial}
     */
    OrigemComercial: OrigemComercial,
    /**
     * The PageCartoes model constructor.
     * @property {module:model/PageCartoes}
     */
    PageCartoes: PageCartoes,
    /**
     * The PageEnderecos model constructor.
     * @property {module:model/PageEnderecos}
     */
    PageEnderecos: PageEnderecos,
    /**
     * The PageEstagiosCartoes model constructor.
     * @property {module:model/PageEstagiosCartoes}
     */
    PageEstagiosCartoes: PageEstagiosCartoes,
    /**
     * The PageOrigensComerciais model constructor.
     * @property {module:model/PageOrigensComerciais}
     */
    PageOrigensComerciais: PageOrigensComerciais,
    /**
     * The PagePessoas model constructor.
     * @property {module:model/PagePessoas}
     */
    PagePessoas: PagePessoas,
    /**
     * The PagePortador model constructor.
     * @property {module:model/PagePortador}
     */
    PagePortador: PagePortador,
    /**
     * The PageStatusCartoes model constructor.
     * @property {module:model/PageStatusCartoes}
     */
    PageStatusCartoes: PageStatusCartoes,
    /**
     * The PageStatusContas model constructor.
     * @property {module:model/PageStatusContas}
     */
    PageStatusContas: PageStatusContas,
    /**
     * The PageStatusImpressao model constructor.
     * @property {module:model/PageStatusImpressao}
     */
    PageStatusImpressao: PageStatusImpressao,
    /**
     * The PageTelefones model constructor.
     * @property {module:model/PageTelefones}
     */
    PageTelefones: PageTelefones,
    /**
     * The PageTipoTelefones model constructor.
     * @property {module:model/PageTipoTelefones}
     */
    PageTipoTelefones: PageTipoTelefones,
    /**
     * The PageTiposEndereco model constructor.
     * @property {module:model/PageTiposEndereco}
     */
    PageTiposEndereco: PageTiposEndereco,
    /**
     * The Pessoa model constructor.
     * @property {module:model/Pessoa}
     */
    Pessoa: Pessoa,
    /**
     * The Portador model constructor.
     * @property {module:model/Portador}
     */
    Portador: Portador,
    /**
     * The Produto model constructor.
     * @property {module:model/Produto}
     */
    Produto: Produto,
    /**
     * The StatusCartao model constructor.
     * @property {module:model/StatusCartao}
     */
    StatusCartao: StatusCartao,
    /**
     * The StatusConta model constructor.
     * @property {module:model/StatusConta}
     */
    StatusConta: StatusConta,
    /**
     * The StatusImpressao model constructor.
     * @property {module:model/StatusImpressao}
     */
    StatusImpressao: StatusImpressao,
    /**
     * The Telefone model constructor.
     * @property {module:model/Telefone}
     */
    Telefone: Telefone,
    /**
     * The TipoEndereco model constructor.
     * @property {module:model/TipoEndereco}
     */
    TipoEndereco: TipoEndereco,
    /**
     * The TipoTelefone model constructor.
     * @property {module:model/TipoTelefone}
     */
    TipoTelefone: TipoTelefone,
    /**
     * The BaseApi service constructor.
     * @property {module:api/BaseApi}
     */
    BaseApi: BaseApi,
    /**
     * The CartaoApi service constructor.
     * @property {module:api/CartaoApi}
     */
    CartaoApi: CartaoApi,
    /**
     * The ContaApi service constructor.
     * @property {module:api/ContaApi}
     */
    ContaApi: ContaApi,
    /**
     * The EnderecoApi service constructor.
     * @property {module:api/EnderecoApi}
     */
    EnderecoApi: EnderecoApi,
    /**
     * The EstagioCartaoApi service constructor.
     * @property {module:api/EstagioCartaoApi}
     */
    EstagioCartaoApi: EstagioCartaoApi,
    /**
     * The OrigemComercialApi service constructor.
     * @property {module:api/OrigemComercialApi}
     */
    OrigemComercialApi: OrigemComercialApi,
    /**
     * The PessoaApi service constructor.
     * @property {module:api/PessoaApi}
     */
    PessoaApi: PessoaApi,
    /**
     * The PortadorApi service constructor.
     * @property {module:api/PortadorApi}
     */
    PortadorApi: PortadorApi,
    /**
     * The ProdutoApi service constructor.
     * @property {module:api/ProdutoApi}
     */
    ProdutoApi: ProdutoApi,
    /**
     * The StatusCartaoApi service constructor.
     * @property {module:api/StatusCartaoApi}
     */
    StatusCartaoApi: StatusCartaoApi,
    /**
     * The StatusContaApi service constructor.
     * @property {module:api/StatusContaApi}
     */
    StatusContaApi: StatusContaApi,
    /**
     * The StatusImpressaoApi service constructor.
     * @property {module:api/StatusImpressaoApi}
     */
    StatusImpressaoApi: StatusImpressaoApi,
    /**
     * The TelefoneApi service constructor.
     * @property {module:api/TelefoneApi}
     */
    TelefoneApi: TelefoneApi,
    /**
     * The TipoEnderecoApi service constructor.
     * @property {module:api/TipoEnderecoApi}
     */
    TipoEnderecoApi: TipoEnderecoApi,
    /**
     * The TipoTelefoneApi service constructor.
     * @property {module:api/TipoTelefoneApi}
     */
    TipoTelefoneApi: TipoTelefoneApi,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi
  };

  return exports;
}));
