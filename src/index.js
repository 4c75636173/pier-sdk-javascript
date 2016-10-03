(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AuthToken', './model/BodyAccessToken', './model/CancelarCartaoResponse', './model/Cartao', './model/CartaoResponseOld', './model/ConsultarCartaoResponse', './model/ConsultarContaCartaoResponse', './model/ConsultarContaResponse', './model/ConsultarExtratoContaResponse', './model/ConsultarSaldoLimitesResponse', './model/ContaCartaoResponse', './model/ContaResponse', './model/DesbloquearCartaoResponse', './model/EmbossadoCartaoResponse', './model/EstagioCartao', './model/ExtraInfo', './model/ExtratoResponse', './model/LimiteDisponibilidade', './model/ListaProdutos', './model/OrigemComercial', './model/PageCartoes', './model/PageEstagiosCartoes', './model/PageOrigensComerciais', './model/PagePessoas', './model/PageStatusCartoes', './model/PageStatusContas', './model/PageStatusImpressao', './model/Pessoa', './model/PessoaFisicaResponse', './model/Portador', './model/Produto', './model/SaldoLimiteResponse', './model/StatusCartao', './model/StatusConta', './model/StatusImpressao', './api/BaseApi', './api/CartaoApi', './api/CartaoOldApi', './api/ContaApi', './api/EstagioCartaoApi', './api/OrigemComercialApi', './api/PessoaApi', './api/ProdutoApi', './api/StatusCartaoApi', './api/StatusContaApi', './api/StatusImpressaoApi', './api/TokenApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AuthToken'), require('./model/BodyAccessToken'), require('./model/CancelarCartaoResponse'), require('./model/Cartao'), require('./model/CartaoResponseOld'), require('./model/ConsultarCartaoResponse'), require('./model/ConsultarContaCartaoResponse'), require('./model/ConsultarContaResponse'), require('./model/ConsultarExtratoContaResponse'), require('./model/ConsultarSaldoLimitesResponse'), require('./model/ContaCartaoResponse'), require('./model/ContaResponse'), require('./model/DesbloquearCartaoResponse'), require('./model/EmbossadoCartaoResponse'), require('./model/EstagioCartao'), require('./model/ExtraInfo'), require('./model/ExtratoResponse'), require('./model/LimiteDisponibilidade'), require('./model/ListaProdutos'), require('./model/OrigemComercial'), require('./model/PageCartoes'), require('./model/PageEstagiosCartoes'), require('./model/PageOrigensComerciais'), require('./model/PagePessoas'), require('./model/PageStatusCartoes'), require('./model/PageStatusContas'), require('./model/PageStatusImpressao'), require('./model/Pessoa'), require('./model/PessoaFisicaResponse'), require('./model/Portador'), require('./model/Produto'), require('./model/SaldoLimiteResponse'), require('./model/StatusCartao'), require('./model/StatusConta'), require('./model/StatusImpressao'), require('./api/BaseApi'), require('./api/CartaoApi'), require('./api/CartaoOldApi'), require('./api/ContaApi'), require('./api/EstagioCartaoApi'), require('./api/OrigemComercialApi'), require('./api/PessoaApi'), require('./api/ProdutoApi'), require('./api/StatusCartaoApi'), require('./api/StatusContaApi'), require('./api/StatusImpressaoApi'), require('./api/TokenApi'));
  }
}(function(ApiClient, AuthToken, BodyAccessToken, CancelarCartaoResponse, Cartao, CartaoResponseOld, ConsultarCartaoResponse, ConsultarContaCartaoResponse, ConsultarContaResponse, ConsultarExtratoContaResponse, ConsultarSaldoLimitesResponse, ContaCartaoResponse, ContaResponse, DesbloquearCartaoResponse, EmbossadoCartaoResponse, EstagioCartao, ExtraInfo, ExtratoResponse, LimiteDisponibilidade, ListaProdutos, OrigemComercial, PageCartoes, PageEstagiosCartoes, PageOrigensComerciais, PagePessoas, PageStatusCartoes, PageStatusContas, PageStatusImpressao, Pessoa, PessoaFisicaResponse, Portador, Produto, SaldoLimiteResponse, StatusCartao, StatusConta, StatusImpressao, BaseApi, CartaoApi, CartaoOldApi, ContaApi, EstagioCartaoApi, OrigemComercialApi, PessoaApi, ProdutoApi, StatusCartaoApi, StatusContaApi, StatusImpressaoApi, TokenApi) {
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
   * @version 1.1.0
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
     * The CancelarCartaoResponse model constructor.
     * @property {module:model/CancelarCartaoResponse}
     */
    CancelarCartaoResponse: CancelarCartaoResponse,
    /**
     * The Cartao model constructor.
     * @property {module:model/Cartao}
     */
    Cartao: Cartao,
    /**
     * The CartaoResponseOld model constructor.
     * @property {module:model/CartaoResponseOld}
     */
    CartaoResponseOld: CartaoResponseOld,
    /**
     * The ConsultarCartaoResponse model constructor.
     * @property {module:model/ConsultarCartaoResponse}
     */
    ConsultarCartaoResponse: ConsultarCartaoResponse,
    /**
     * The ConsultarContaCartaoResponse model constructor.
     * @property {module:model/ConsultarContaCartaoResponse}
     */
    ConsultarContaCartaoResponse: ConsultarContaCartaoResponse,
    /**
     * The ConsultarContaResponse model constructor.
     * @property {module:model/ConsultarContaResponse}
     */
    ConsultarContaResponse: ConsultarContaResponse,
    /**
     * The ConsultarExtratoContaResponse model constructor.
     * @property {module:model/ConsultarExtratoContaResponse}
     */
    ConsultarExtratoContaResponse: ConsultarExtratoContaResponse,
    /**
     * The ConsultarSaldoLimitesResponse model constructor.
     * @property {module:model/ConsultarSaldoLimitesResponse}
     */
    ConsultarSaldoLimitesResponse: ConsultarSaldoLimitesResponse,
    /**
     * The ContaCartaoResponse model constructor.
     * @property {module:model/ContaCartaoResponse}
     */
    ContaCartaoResponse: ContaCartaoResponse,
    /**
     * The ContaResponse model constructor.
     * @property {module:model/ContaResponse}
     */
    ContaResponse: ContaResponse,
    /**
     * The DesbloquearCartaoResponse model constructor.
     * @property {module:model/DesbloquearCartaoResponse}
     */
    DesbloquearCartaoResponse: DesbloquearCartaoResponse,
    /**
     * The EmbossadoCartaoResponse model constructor.
     * @property {module:model/EmbossadoCartaoResponse}
     */
    EmbossadoCartaoResponse: EmbossadoCartaoResponse,
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
     * The ExtratoResponse model constructor.
     * @property {module:model/ExtratoResponse}
     */
    ExtratoResponse: ExtratoResponse,
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
     * The Pessoa model constructor.
     * @property {module:model/Pessoa}
     */
    Pessoa: Pessoa,
    /**
     * The PessoaFisicaResponse model constructor.
     * @property {module:model/PessoaFisicaResponse}
     */
    PessoaFisicaResponse: PessoaFisicaResponse,
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
     * The SaldoLimiteResponse model constructor.
     * @property {module:model/SaldoLimiteResponse}
     */
    SaldoLimiteResponse: SaldoLimiteResponse,
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
     * The CartaoOldApi service constructor.
     * @property {module:api/CartaoOldApi}
     */
    CartaoOldApi: CartaoOldApi,
    /**
     * The ContaApi service constructor.
     * @property {module:api/ContaApi}
     */
    ContaApi: ContaApi,
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
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi
  };

  return exports;
}));
