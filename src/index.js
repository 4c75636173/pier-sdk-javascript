(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AtendimentoCliente', './model/AuthToken', './model/BodyAccessToken', './model/Cartao', './model/CartaoImpressao', './model/Conta', './model/Endereco', './model/EstagioCartao', './model/ExtraInfo', './model/FaturaResponse', './model/HistoricoImpressaoCartao', './model/HistoricoTelefone', './model/LimiteDisponibilidade', './model/ListaProdutos', './model/LoteCartoesPrePagos', './model/NotificacaoPushResponse', './model/NotificacaoSMSBody', './model/NotificacaoSMSResponse', './model/OrigemComercial', './model/PageCartoes', './model/PageEnderecos', './model/PageEstagiosCartoes', './model/PageFaturas', './model/PageOrigensComerciais', './model/PagePessoas', './model/PagePortador', './model/PagePush', './model/PageSMS', './model/PageStatusCartoes', './model/PageStatusContas', './model/PageStatusImpressao', './model/PageTelefones', './model/PageTipoTelefones', './model/PageTiposEndereco', './model/PageTransacaoResponse', './model/PageWebHooks', './model/Pessoa', './model/Portador', './model/Produto', './model/PushAPNS', './model/PushFCMEGCM', './model/SMS', './model/StatusCartao', './model/StatusConta', './model/StatusImpressao', './model/Telefone', './model/TipoEndereco', './model/TipoTelefone', './model/TransacaoResponse', './model/ValidaCartao', './model/WebHook', './api/BaseApi', './api/CadastrosGeraisApi', './api/CartaoApi', './api/ContaApi', './api/FraudesApi', './api/NotificacoesApi', './api/StatusParametrosApi', './api/TokenApi', './api/WebhooksApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AtendimentoCliente'), require('./model/AuthToken'), require('./model/BodyAccessToken'), require('./model/Cartao'), require('./model/CartaoImpressao'), require('./model/Conta'), require('./model/Endereco'), require('./model/EstagioCartao'), require('./model/ExtraInfo'), require('./model/FaturaResponse'), require('./model/HistoricoImpressaoCartao'), require('./model/HistoricoTelefone'), require('./model/LimiteDisponibilidade'), require('./model/ListaProdutos'), require('./model/LoteCartoesPrePagos'), require('./model/NotificacaoPushResponse'), require('./model/NotificacaoSMSBody'), require('./model/NotificacaoSMSResponse'), require('./model/OrigemComercial'), require('./model/PageCartoes'), require('./model/PageEnderecos'), require('./model/PageEstagiosCartoes'), require('./model/PageFaturas'), require('./model/PageOrigensComerciais'), require('./model/PagePessoas'), require('./model/PagePortador'), require('./model/PagePush'), require('./model/PageSMS'), require('./model/PageStatusCartoes'), require('./model/PageStatusContas'), require('./model/PageStatusImpressao'), require('./model/PageTelefones'), require('./model/PageTipoTelefones'), require('./model/PageTiposEndereco'), require('./model/PageTransacaoResponse'), require('./model/PageWebHooks'), require('./model/Pessoa'), require('./model/Portador'), require('./model/Produto'), require('./model/PushAPNS'), require('./model/PushFCMEGCM'), require('./model/SMS'), require('./model/StatusCartao'), require('./model/StatusConta'), require('./model/StatusImpressao'), require('./model/Telefone'), require('./model/TipoEndereco'), require('./model/TipoTelefone'), require('./model/TransacaoResponse'), require('./model/ValidaCartao'), require('./model/WebHook'), require('./api/BaseApi'), require('./api/CadastrosGeraisApi'), require('./api/CartaoApi'), require('./api/ContaApi'), require('./api/FraudesApi'), require('./api/NotificacoesApi'), require('./api/StatusParametrosApi'), require('./api/TokenApi'), require('./api/WebhooksApi'));
  }
}(function(ApiClient, AtendimentoCliente, AuthToken, BodyAccessToken, Cartao, CartaoImpressao, Conta, Endereco, EstagioCartao, ExtraInfo, FaturaResponse, HistoricoImpressaoCartao, HistoricoTelefone, LimiteDisponibilidade, ListaProdutos, LoteCartoesPrePagos, NotificacaoPushResponse, NotificacaoSMSBody, NotificacaoSMSResponse, OrigemComercial, PageCartoes, PageEnderecos, PageEstagiosCartoes, PageFaturas, PageOrigensComerciais, PagePessoas, PagePortador, PagePush, PageSMS, PageStatusCartoes, PageStatusContas, PageStatusImpressao, PageTelefones, PageTipoTelefones, PageTiposEndereco, PageTransacaoResponse, PageWebHooks, Pessoa, Portador, Produto, PushAPNS, PushFCMEGCM, SMS, StatusCartao, StatusConta, StatusImpressao, Telefone, TipoEndereco, TipoTelefone, TransacaoResponse, ValidaCartao, WebHook, BaseApi, CadastrosGeraisApi, CartaoApi, ContaApi, FraudesApi, NotificacoesApi, StatusParametrosApi, TokenApi, WebhooksApi) {
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
   * @version 2.5.5
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AtendimentoCliente model constructor.
     * @property {module:model/AtendimentoCliente}
     */
    AtendimentoCliente: AtendimentoCliente,
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
     * The CartaoImpressao model constructor.
     * @property {module:model/CartaoImpressao}
     */
    CartaoImpressao: CartaoImpressao,
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
     * The FaturaResponse model constructor.
     * @property {module:model/FaturaResponse}
     */
    FaturaResponse: FaturaResponse,
    /**
     * The HistoricoImpressaoCartao model constructor.
     * @property {module:model/HistoricoImpressaoCartao}
     */
    HistoricoImpressaoCartao: HistoricoImpressaoCartao,
    /**
     * The HistoricoTelefone model constructor.
     * @property {module:model/HistoricoTelefone}
     */
    HistoricoTelefone: HistoricoTelefone,
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
     * The LoteCartoesPrePagos model constructor.
     * @property {module:model/LoteCartoesPrePagos}
     */
    LoteCartoesPrePagos: LoteCartoesPrePagos,
    /**
     * The NotificacaoPushResponse model constructor.
     * @property {module:model/NotificacaoPushResponse}
     */
    NotificacaoPushResponse: NotificacaoPushResponse,
    /**
     * The NotificacaoSMSBody model constructor.
     * @property {module:model/NotificacaoSMSBody}
     */
    NotificacaoSMSBody: NotificacaoSMSBody,
    /**
     * The NotificacaoSMSResponse model constructor.
     * @property {module:model/NotificacaoSMSResponse}
     */
    NotificacaoSMSResponse: NotificacaoSMSResponse,
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
     * The PageFaturas model constructor.
     * @property {module:model/PageFaturas}
     */
    PageFaturas: PageFaturas,
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
     * The PagePush model constructor.
     * @property {module:model/PagePush}
     */
    PagePush: PagePush,
    /**
     * The PageSMS model constructor.
     * @property {module:model/PageSMS}
     */
    PageSMS: PageSMS,
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
     * The PageTransacaoResponse model constructor.
     * @property {module:model/PageTransacaoResponse}
     */
    PageTransacaoResponse: PageTransacaoResponse,
    /**
     * The PageWebHooks model constructor.
     * @property {module:model/PageWebHooks}
     */
    PageWebHooks: PageWebHooks,
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
     * The PushAPNS model constructor.
     * @property {module:model/PushAPNS}
     */
    PushAPNS: PushAPNS,
    /**
     * The PushFCMEGCM model constructor.
     * @property {module:model/PushFCMEGCM}
     */
    PushFCMEGCM: PushFCMEGCM,
    /**
     * The SMS model constructor.
     * @property {module:model/SMS}
     */
    SMS: SMS,
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
     * The TransacaoResponse model constructor.
     * @property {module:model/TransacaoResponse}
     */
    TransacaoResponse: TransacaoResponse,
    /**
     * The ValidaCartao model constructor.
     * @property {module:model/ValidaCartao}
     */
    ValidaCartao: ValidaCartao,
    /**
     * The WebHook model constructor.
     * @property {module:model/WebHook}
     */
    WebHook: WebHook,
    /**
     * The BaseApi service constructor.
     * @property {module:api/BaseApi}
     */
    BaseApi: BaseApi,
    /**
     * The CadastrosGeraisApi service constructor.
     * @property {module:api/CadastrosGeraisApi}
     */
    CadastrosGeraisApi: CadastrosGeraisApi,
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
     * The FraudesApi service constructor.
     * @property {module:api/FraudesApi}
     */
    FraudesApi: FraudesApi,
    /**
     * The NotificacoesApi service constructor.
     * @property {module:api/NotificacoesApi}
     */
    NotificacoesApi: NotificacoesApi,
    /**
     * The StatusParametrosApi service constructor.
     * @property {module:api/StatusParametrosApi}
     */
    StatusParametrosApi: StatusParametrosApi,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi,
    /**
     * The WebhooksApi service constructor.
     * @property {module:api/WebhooksApi}
     */
    WebhooksApi: WebhooksApi
  };

  return exports;
}));
