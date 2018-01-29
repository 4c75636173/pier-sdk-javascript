(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AdicionalDetalheResponse', './model/AdicionalPersist', './model/AdicionalResponse', './model/AdicionalUpdate', './model/AjusteFinanceiroResponse', './model/AlterarProdutoRequest', './model/AnexoNotificacaoEmailRequest', './model/AntecipacaoResponse', './model/AntecipacaoSimuladaDetalhesResponse', './model/AntecipacaoSimuladaLoteResponse', './model/AntecipacaoSimuladaResponse', './model/AnuidadeResponse', './model/AplicacaoMobilePersist', './model/AplicacaoMobileResponse', './model/AplicacaoMobileUpdate', './model/ArquivoDetalhesPersist', './model/ArquivoParametroResponse', './model/ArquivoPersist', './model/ArquivoResponse', './model/AtendimentoClienteResponse', './model/AtribuirAssinaturaClientePersist', './model/AuthToken', './model/AutorizacaoOnUsRequest', './model/BancoResponse', './model/BaseResponse', './model/BeneficioPagamentoAtrasoResponse', './model/BodyAccessToken', './model/BoletoResponse', './model/CampanhaPersist', './model/CampanhaResponse', './model/CampanhaUpdate', './model/CampoCodificadoDescricaoResponse', './model/CancelamentoTransacaoOnUsRequest', './model/CancelamentoTransacaoPorIdCartaoRequest', './model/CartaoDetalheResponse', './model/CartaoEmbossingRequest', './model/CartaoEmbossingResponse', './model/CartaoImpressaoProvisorioResponse', './model/CartaoImpressaoResponse', './model/CartaoPayAtualizarChaveResponse', './model/CartaoPayCadastroResponse', './model/CartaoPayConfirmarChaveResponse', './model/CartaoPayDetalheResponse', './model/CartaoPayKeyUpdate', './model/CartaoPayPersist', './model/CartaoPayResponse', './model/CartaoPayUpdate', './model/CartaoResponse', './model/CdtDetalheOportunidadeAUD', './model/CodigoSegurancaEMAILPersist', './model/CodigoSegurancaResponse', './model/CodigoSegurancaSMSPersist', './model/CodigoSegurancaSMSRequest', './model/CompraResponse', './model/ConfiguracaoEmailPersist', './model/ConfiguracaoEmailResponse', './model/ConfiguracaoRegistroCobrancaPersist', './model/ConfiguracaoRegistroCobrancaResponse', './model/ConfiguracaoRotativoDetalheResponse', './model/ConfiguracaoRotativoPersist', './model/ContaBancariaPortadorPersist', './model/ContaBancariaPortadorResponse', './model/ContaBancariaPortadorUpdate', './model/ContaDetalheResponse', './model/ContaHistoricoPagamentoResponse', './model/ContaResponse', './model/ControleVencimentoResponse', './model/CredorDTO', './model/CredorResponse', './model/DadosCartaoImpressaoResponse', './model/DadosCartaoResponse', './model/DesfazimentoTransacaoOnUsRequest', './model/DetalheOperacaoResponse', './model/DetalheOportunidadePersist', './model/DetalheOportunidadeResponse', './model/DetalheOportunidadeUpdate', './model/DetalhesFaturaConsignadaResponse', './model/DetalhesFaturaResponse', './model/DispositivoPersist', './model/DispositivoResponse', './model/DividaClienteResponse', './model/DocumentoDetalhadoResponse', './model/DocumentoDetalheResponse', './model/DocumentoIntegracaoResponse', './model/DocumentoParametrosRequest', './model/DocumentoResponse', './model/DocumentoTemplatePersist', './model/DocumentoTemplateResponse', './model/EmprestimoPessoalRequest', './model/EmprestimoPessoalResponse', './model/EnderecoAprovadoPersist', './model/EnderecoAprovadoResponse', './model/EnderecoResponse', './model/EstabelecimentoResponse', './model/EstagioCartaoResponse', './model/ExtraInfo', './model/FantasiaBasicaResponse', './model/FaqResponse', './model/FaturaConsignadaDetalheResponse', './model/FaturaConsignadaResponse', './model/FaturaDetalheResponse', './model/FaturaFechadaResponse', './model/FaturaResponse', './model/GradePendenteRequest', './model/HistoricoAssessoriaResponse', './model/HistoricoAtrasoFaturaResponse', './model/HistoricoEventosResponse', './model/HistoricoImpressaoCartaoResponse', './model/HistoricoTelefoneResponse', './model/IntegracaoEmissorPersist', './model/IntegracaoEmissorResponse', './model/IntegrarDocumentoRequest', './model/JobResponse', './model/LancamentoFaturaResponse', './model/LimiteDisponibilidadeResponse', './model/LoteCartoesPrePagosResponse', './model/MapOfstringAndstring', './model/NotificacaoEmailRequest', './model/NotificacaoPushResponse', './model/NotificacaoResponse', './model/NotificacaoSMSBody', './model/NotificacaoSMSResponse', './model/OperacaoResponse', './model/OperadoraResponse', './model/OportunidadeAUDResponse', './model/OportunidadePersist', './model/OportunidadeResponse', './model/OportunidadeUpdate', './model/OrigemComercialResponse', './model/PageAjusteResponse', './model/PageAnuidadeResponse', './model/PageAplicacaoMobileResponse', './model/PageAtendimentoClienteResponse', './model/PageBancoResponse', './model/PageBaseResponse', './model/PageCampanhaResponse', './model/PageCampoCodificadoDescricaoResponse', './model/PageCartaoPayResponse', './model/PageCartaoResponse', './model/PageCodigoSegurancaResponse', './model/PageCompraResponse', './model/PageConfiguracaoEmailResponse', './model/PageConfiguracaoRotativoResponse', './model/PageContaBancariaPortadorResponse', './model/PageContaDetalheResponse', './model/PageContaHistoricoPagamentoResponse', './model/PageContaResponse', './model/PageControleVencimentoResponse', './model/PageCredorResponse', './model/PageDispositivoResponse', './model/PageDocumentoResponse', './model/PageDocumentoTemplateResponse', './model/PageEnderecoResponse', './model/PageEstabelecimentoResponse', './model/PageEstagioCartaoResponse', './model/PageFantasiaBasicaResponse', './model/PageFaqResponse', './model/PageFaturaConsignadaResponse', './model/PageFaturaFechadaResponse', './model/PageFaturaResponse', './model/PageHistoricoAssessoriaResponse', './model/PageHistoricoAtrasoFaturaResponse', './model/PageHistoricoEventosResponse', './model/PageJobResponse', './model/PageLoteCartoesPrePagosResponse', './model/PageOperacaoResponse', './model/PageOperadoraResponse', './model/PageOportunidadeAUDResponse', './model/PageOportunidadeResponse', './model/PageOrigemComercialResponse', './model/PagePessoaDetalheResponse', './model/PagePessoaJuridicaResponse', './model/PagePessoaResponse', './model/PagePlanoParcelamentoResponse', './model/PagePlataformaMobileResponse', './model/PagePortadorResponse', './model/PageProdutoResponse', './model/PagePromotorResponse', './model/PagePushResponse', './model/PageRiscoFraudeResponse', './model/PageSMSResponse', './model/PageStatusCartaoResponse', './model/PageStatusContaResponse', './model/PageStatusImpressaoResponse', './model/PageStatusOportunidadeAUDResponse', './model/PageStatusOportunidadeResponse', './model/PageTaxasRefinanciamentoResponse', './model/PageTelefoneEstabelecimentoResponse', './model/PageTelefoneResponse', './model/PageTemplateNotificacaoResponse', './model/PageTerminalResponse', './model/PageTipoAjusteResponse', './model/PageTipoBoletoResponse', './model/PageTipoCampanhaResponse', './model/PageTipoDebitoRecorrenteResponse', './model/PageTipoEnderecoResponse', './model/PageTipoOportunidadeAUDResponse', './model/PageTipoOportunidadeResponse', './model/PageTipoTelefoneResponse', './model/PageTipoTemplateResponse', './model/PageTransacaoNaoProcessadaResponse', './model/PageTransacaoResponse', './model/PageTransacoesCorrentesResponse', './model/PageTransferenciaBancariaResponse', './model/PageTransferenciaCreditoContaBancariaResponse', './model/PageTransferenciaResponse', './model/PageUsuarioResponse', './model/PageWebHookResponse', './model/ParametroProdutoResponse', './model/ParcelamentoTransferenciaResponse', './model/PessoaDetalheResponse', './model/PessoaFisicaAprovadaPersist', './model/PessoaFisicaAprovadaResponse', './model/PessoaJuridicaAprovadaPersist', './model/PessoaJuridicaAprovadaResponse', './model/PessoaJuridicaResponse', './model/PessoaPersist', './model/PessoaResponse', './model/PlanoCampanhaPersist', './model/PlanoCampanhaResponse', './model/PlanoCampanhaUpdate', './model/PlanoParcelamentoEmprestimoResponse', './model/PlanoParcelamentoResponse', './model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest', './model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse', './model/PlataformaMobilePersist', './model/PlataformaMobileResponse', './model/PlataformaMobileUpdate', './model/PortadorResponse', './model/ProdutoDetalhesResponse', './model/ProdutoOrigemResponse', './model/ProdutoResponse', './model/PromotorResponse', './model/PropriedadeDocumentoRequest', './model/PushAPNS', './model/PushFCMEGCM', './model/RefenciaComercialAprovadoPersist', './model/ReferenciaComercialAprovadoResponse', './model/ReferenciaIdPersist', './model/RiscoFraudeDetalhadoResponse', './model/RiscoFraudeResponse', './model/SocioAprovadoResponse', './model/StatusCartaoResponse', './model/StatusContaResponse', './model/StatusImpressaoResponse', './model/StatusOportunidade', './model/StatusOportunidadeAUDResponse', './model/StatusOportunidadeResponse', './model/TaxaAntecipacaoRequest', './model/TaxasRefinanciamentoResponse', './model/TelefoneAdicionalPersist', './model/TelefoneAdicionalUpdate', './model/TelefoneEstabelecimentoResponse', './model/TelefonePessoaAprovadaPersist', './model/TelefonePessoaAprovadaResponse', './model/TelefoneResponse', './model/TemplateNotificacaoDetalheResponse', './model/TemplateNotificacaoResponse', './model/TerminalResponse', './model/TerminalUpdate', './model/TipoAjusteResponse', './model/TipoBoletoResponse', './model/TipoCampanhaResponse', './model/TipoDebitoRecorrenteResponse', './model/TipoEnderecoResponse', './model/TipoOperacaoResponse', './model/TipoOportunidade', './model/TipoOportunidadeAUDResponse', './model/TipoOportunidadeResponse', './model/TipoResolucaoResponse', './model/TipoTelefoneResponse', './model/TipoTemplateRequest', './model/TipoTemplateResponse', './model/TokenResponse', './model/TransacaoCorrenteResponse', './model/TransacaoNaoProcessadaResponse', './model/TransacaoOnUsPorIdCartaoRequest', './model/TransacaoOnUsRequest', './model/TransacaoOnUsResponse', './model/TransacaoPayQueryRequest', './model/TransacaoPayQueryResponse', './model/TransacaoPaySecureRequest', './model/TransacoesCorrentesResponse', './model/TransferenciaBancariaPersist', './model/TransferenciaBancariaResponse', './model/TransferenciaCreditoContaBancariaListaResponse', './model/TransferenciaCreditoContaBancariaPersist', './model/TransferenciaCreditoContaBancariaResponse', './model/TransferenciaDetalheResponse', './model/TransferenciaResponse', './model/UsuarioPersist', './model/UsuarioResponse', './model/UsuarioUpdate', './model/ValidaCartaoResponse', './model/ValidaSenhaCartaoResponse', './model/WebHookResponse', './api/AjusteFinanceiroApi', './api/AntecipacaoApi', './api/AplicacaoMobileApi', './api/ArquivoApi', './api/AutorizacaoApi', './api/BaseApi', './api/BoletoApi', './api/CadastroClienteApi', './api/CadastroGeralApi', './api/CartaoApi', './api/ConductorPayApi', './api/ContaApi', './api/DebitoRecorrenteApi', './api/DispositivoApi', './api/DocumentoApi', './api/EnderecoNacionalApi', './api/EstabelecimentoApi', './api/FAQApi', './api/FaturaApi', './api/JobApi', './api/LimiteApi', './api/LimiteDisponibilidadeApi', './api/NotificacaoApi', './api/OportunidadeApi', './api/PlataformaMobileApi', './api/RiscoFraudeApi', './api/ServicoContaApi', './api/StatusParametroApi', './api/TokenApi', './api/TransferenciaBancariaApi', './api/UsuarioApi', './api/WebhookApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AdicionalDetalheResponse'), require('./model/AdicionalPersist'), require('./model/AdicionalResponse'), require('./model/AdicionalUpdate'), require('./model/AjusteFinanceiroResponse'), require('./model/AlterarProdutoRequest'), require('./model/AnexoNotificacaoEmailRequest'), require('./model/AntecipacaoResponse'), require('./model/AntecipacaoSimuladaDetalhesResponse'), require('./model/AntecipacaoSimuladaLoteResponse'), require('./model/AntecipacaoSimuladaResponse'), require('./model/AnuidadeResponse'), require('./model/AplicacaoMobilePersist'), require('./model/AplicacaoMobileResponse'), require('./model/AplicacaoMobileUpdate'), require('./model/ArquivoDetalhesPersist'), require('./model/ArquivoParametroResponse'), require('./model/ArquivoPersist'), require('./model/ArquivoResponse'), require('./model/AtendimentoClienteResponse'), require('./model/AtribuirAssinaturaClientePersist'), require('./model/AuthToken'), require('./model/AutorizacaoOnUsRequest'), require('./model/BancoResponse'), require('./model/BaseResponse'), require('./model/BeneficioPagamentoAtrasoResponse'), require('./model/BodyAccessToken'), require('./model/BoletoResponse'), require('./model/CampanhaPersist'), require('./model/CampanhaResponse'), require('./model/CampanhaUpdate'), require('./model/CampoCodificadoDescricaoResponse'), require('./model/CancelamentoTransacaoOnUsRequest'), require('./model/CancelamentoTransacaoPorIdCartaoRequest'), require('./model/CartaoDetalheResponse'), require('./model/CartaoEmbossingRequest'), require('./model/CartaoEmbossingResponse'), require('./model/CartaoImpressaoProvisorioResponse'), require('./model/CartaoImpressaoResponse'), require('./model/CartaoPayAtualizarChaveResponse'), require('./model/CartaoPayCadastroResponse'), require('./model/CartaoPayConfirmarChaveResponse'), require('./model/CartaoPayDetalheResponse'), require('./model/CartaoPayKeyUpdate'), require('./model/CartaoPayPersist'), require('./model/CartaoPayResponse'), require('./model/CartaoPayUpdate'), require('./model/CartaoResponse'), require('./model/CdtDetalheOportunidadeAUD'), require('./model/CodigoSegurancaEMAILPersist'), require('./model/CodigoSegurancaResponse'), require('./model/CodigoSegurancaSMSPersist'), require('./model/CodigoSegurancaSMSRequest'), require('./model/CompraResponse'), require('./model/ConfiguracaoEmailPersist'), require('./model/ConfiguracaoEmailResponse'), require('./model/ConfiguracaoRegistroCobrancaPersist'), require('./model/ConfiguracaoRegistroCobrancaResponse'), require('./model/ConfiguracaoRotativoDetalheResponse'), require('./model/ConfiguracaoRotativoPersist'), require('./model/ContaBancariaPortadorPersist'), require('./model/ContaBancariaPortadorResponse'), require('./model/ContaBancariaPortadorUpdate'), require('./model/ContaDetalheResponse'), require('./model/ContaHistoricoPagamentoResponse'), require('./model/ContaResponse'), require('./model/ControleVencimentoResponse'), require('./model/CredorDTO'), require('./model/CredorResponse'), require('./model/DadosCartaoImpressaoResponse'), require('./model/DadosCartaoResponse'), require('./model/DesfazimentoTransacaoOnUsRequest'), require('./model/DetalheOperacaoResponse'), require('./model/DetalheOportunidadePersist'), require('./model/DetalheOportunidadeResponse'), require('./model/DetalheOportunidadeUpdate'), require('./model/DetalhesFaturaConsignadaResponse'), require('./model/DetalhesFaturaResponse'), require('./model/DispositivoPersist'), require('./model/DispositivoResponse'), require('./model/DividaClienteResponse'), require('./model/DocumentoDetalhadoResponse'), require('./model/DocumentoDetalheResponse'), require('./model/DocumentoIntegracaoResponse'), require('./model/DocumentoParametrosRequest'), require('./model/DocumentoResponse'), require('./model/DocumentoTemplatePersist'), require('./model/DocumentoTemplateResponse'), require('./model/EmprestimoPessoalRequest'), require('./model/EmprestimoPessoalResponse'), require('./model/EnderecoAprovadoPersist'), require('./model/EnderecoAprovadoResponse'), require('./model/EnderecoResponse'), require('./model/EstabelecimentoResponse'), require('./model/EstagioCartaoResponse'), require('./model/ExtraInfo'), require('./model/FantasiaBasicaResponse'), require('./model/FaqResponse'), require('./model/FaturaConsignadaDetalheResponse'), require('./model/FaturaConsignadaResponse'), require('./model/FaturaDetalheResponse'), require('./model/FaturaFechadaResponse'), require('./model/FaturaResponse'), require('./model/GradePendenteRequest'), require('./model/HistoricoAssessoriaResponse'), require('./model/HistoricoAtrasoFaturaResponse'), require('./model/HistoricoEventosResponse'), require('./model/HistoricoImpressaoCartaoResponse'), require('./model/HistoricoTelefoneResponse'), require('./model/IntegracaoEmissorPersist'), require('./model/IntegracaoEmissorResponse'), require('./model/IntegrarDocumentoRequest'), require('./model/JobResponse'), require('./model/LancamentoFaturaResponse'), require('./model/LimiteDisponibilidadeResponse'), require('./model/LoteCartoesPrePagosResponse'), require('./model/MapOfstringAndstring'), require('./model/NotificacaoEmailRequest'), require('./model/NotificacaoPushResponse'), require('./model/NotificacaoResponse'), require('./model/NotificacaoSMSBody'), require('./model/NotificacaoSMSResponse'), require('./model/OperacaoResponse'), require('./model/OperadoraResponse'), require('./model/OportunidadeAUDResponse'), require('./model/OportunidadePersist'), require('./model/OportunidadeResponse'), require('./model/OportunidadeUpdate'), require('./model/OrigemComercialResponse'), require('./model/PageAjusteResponse'), require('./model/PageAnuidadeResponse'), require('./model/PageAplicacaoMobileResponse'), require('./model/PageAtendimentoClienteResponse'), require('./model/PageBancoResponse'), require('./model/PageBaseResponse'), require('./model/PageCampanhaResponse'), require('./model/PageCampoCodificadoDescricaoResponse'), require('./model/PageCartaoPayResponse'), require('./model/PageCartaoResponse'), require('./model/PageCodigoSegurancaResponse'), require('./model/PageCompraResponse'), require('./model/PageConfiguracaoEmailResponse'), require('./model/PageConfiguracaoRotativoResponse'), require('./model/PageContaBancariaPortadorResponse'), require('./model/PageContaDetalheResponse'), require('./model/PageContaHistoricoPagamentoResponse'), require('./model/PageContaResponse'), require('./model/PageControleVencimentoResponse'), require('./model/PageCredorResponse'), require('./model/PageDispositivoResponse'), require('./model/PageDocumentoResponse'), require('./model/PageDocumentoTemplateResponse'), require('./model/PageEnderecoResponse'), require('./model/PageEstabelecimentoResponse'), require('./model/PageEstagioCartaoResponse'), require('./model/PageFantasiaBasicaResponse'), require('./model/PageFaqResponse'), require('./model/PageFaturaConsignadaResponse'), require('./model/PageFaturaFechadaResponse'), require('./model/PageFaturaResponse'), require('./model/PageHistoricoAssessoriaResponse'), require('./model/PageHistoricoAtrasoFaturaResponse'), require('./model/PageHistoricoEventosResponse'), require('./model/PageJobResponse'), require('./model/PageLoteCartoesPrePagosResponse'), require('./model/PageOperacaoResponse'), require('./model/PageOperadoraResponse'), require('./model/PageOportunidadeAUDResponse'), require('./model/PageOportunidadeResponse'), require('./model/PageOrigemComercialResponse'), require('./model/PagePessoaDetalheResponse'), require('./model/PagePessoaJuridicaResponse'), require('./model/PagePessoaResponse'), require('./model/PagePlanoParcelamentoResponse'), require('./model/PagePlataformaMobileResponse'), require('./model/PagePortadorResponse'), require('./model/PageProdutoResponse'), require('./model/PagePromotorResponse'), require('./model/PagePushResponse'), require('./model/PageRiscoFraudeResponse'), require('./model/PageSMSResponse'), require('./model/PageStatusCartaoResponse'), require('./model/PageStatusContaResponse'), require('./model/PageStatusImpressaoResponse'), require('./model/PageStatusOportunidadeAUDResponse'), require('./model/PageStatusOportunidadeResponse'), require('./model/PageTaxasRefinanciamentoResponse'), require('./model/PageTelefoneEstabelecimentoResponse'), require('./model/PageTelefoneResponse'), require('./model/PageTemplateNotificacaoResponse'), require('./model/PageTerminalResponse'), require('./model/PageTipoAjusteResponse'), require('./model/PageTipoBoletoResponse'), require('./model/PageTipoCampanhaResponse'), require('./model/PageTipoDebitoRecorrenteResponse'), require('./model/PageTipoEnderecoResponse'), require('./model/PageTipoOportunidadeAUDResponse'), require('./model/PageTipoOportunidadeResponse'), require('./model/PageTipoTelefoneResponse'), require('./model/PageTipoTemplateResponse'), require('./model/PageTransacaoNaoProcessadaResponse'), require('./model/PageTransacaoResponse'), require('./model/PageTransacoesCorrentesResponse'), require('./model/PageTransferenciaBancariaResponse'), require('./model/PageTransferenciaCreditoContaBancariaResponse'), require('./model/PageTransferenciaResponse'), require('./model/PageUsuarioResponse'), require('./model/PageWebHookResponse'), require('./model/ParametroProdutoResponse'), require('./model/ParcelamentoTransferenciaResponse'), require('./model/PessoaDetalheResponse'), require('./model/PessoaFisicaAprovadaPersist'), require('./model/PessoaFisicaAprovadaResponse'), require('./model/PessoaJuridicaAprovadaPersist'), require('./model/PessoaJuridicaAprovadaResponse'), require('./model/PessoaJuridicaResponse'), require('./model/PessoaPersist'), require('./model/PessoaResponse'), require('./model/PlanoCampanhaPersist'), require('./model/PlanoCampanhaResponse'), require('./model/PlanoCampanhaUpdate'), require('./model/PlanoParcelamentoEmprestimoResponse'), require('./model/PlanoParcelamentoResponse'), require('./model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest'), require('./model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse'), require('./model/PlataformaMobilePersist'), require('./model/PlataformaMobileResponse'), require('./model/PlataformaMobileUpdate'), require('./model/PortadorResponse'), require('./model/ProdutoDetalhesResponse'), require('./model/ProdutoOrigemResponse'), require('./model/ProdutoResponse'), require('./model/PromotorResponse'), require('./model/PropriedadeDocumentoRequest'), require('./model/PushAPNS'), require('./model/PushFCMEGCM'), require('./model/RefenciaComercialAprovadoPersist'), require('./model/ReferenciaComercialAprovadoResponse'), require('./model/ReferenciaIdPersist'), require('./model/RiscoFraudeDetalhadoResponse'), require('./model/RiscoFraudeResponse'), require('./model/SocioAprovadoResponse'), require('./model/StatusCartaoResponse'), require('./model/StatusContaResponse'), require('./model/StatusImpressaoResponse'), require('./model/StatusOportunidade'), require('./model/StatusOportunidadeAUDResponse'), require('./model/StatusOportunidadeResponse'), require('./model/TaxaAntecipacaoRequest'), require('./model/TaxasRefinanciamentoResponse'), require('./model/TelefoneAdicionalPersist'), require('./model/TelefoneAdicionalUpdate'), require('./model/TelefoneEstabelecimentoResponse'), require('./model/TelefonePessoaAprovadaPersist'), require('./model/TelefonePessoaAprovadaResponse'), require('./model/TelefoneResponse'), require('./model/TemplateNotificacaoDetalheResponse'), require('./model/TemplateNotificacaoResponse'), require('./model/TerminalResponse'), require('./model/TerminalUpdate'), require('./model/TipoAjusteResponse'), require('./model/TipoBoletoResponse'), require('./model/TipoCampanhaResponse'), require('./model/TipoDebitoRecorrenteResponse'), require('./model/TipoEnderecoResponse'), require('./model/TipoOperacaoResponse'), require('./model/TipoOportunidade'), require('./model/TipoOportunidadeAUDResponse'), require('./model/TipoOportunidadeResponse'), require('./model/TipoResolucaoResponse'), require('./model/TipoTelefoneResponse'), require('./model/TipoTemplateRequest'), require('./model/TipoTemplateResponse'), require('./model/TokenResponse'), require('./model/TransacaoCorrenteResponse'), require('./model/TransacaoNaoProcessadaResponse'), require('./model/TransacaoOnUsPorIdCartaoRequest'), require('./model/TransacaoOnUsRequest'), require('./model/TransacaoOnUsResponse'), require('./model/TransacaoPayQueryRequest'), require('./model/TransacaoPayQueryResponse'), require('./model/TransacaoPaySecureRequest'), require('./model/TransacoesCorrentesResponse'), require('./model/TransferenciaBancariaPersist'), require('./model/TransferenciaBancariaResponse'), require('./model/TransferenciaCreditoContaBancariaListaResponse'), require('./model/TransferenciaCreditoContaBancariaPersist'), require('./model/TransferenciaCreditoContaBancariaResponse'), require('./model/TransferenciaDetalheResponse'), require('./model/TransferenciaResponse'), require('./model/UsuarioPersist'), require('./model/UsuarioResponse'), require('./model/UsuarioUpdate'), require('./model/ValidaCartaoResponse'), require('./model/ValidaSenhaCartaoResponse'), require('./model/WebHookResponse'), require('./api/AjusteFinanceiroApi'), require('./api/AntecipacaoApi'), require('./api/AplicacaoMobileApi'), require('./api/ArquivoApi'), require('./api/AutorizacaoApi'), require('./api/BaseApi'), require('./api/BoletoApi'), require('./api/CadastroClienteApi'), require('./api/CadastroGeralApi'), require('./api/CartaoApi'), require('./api/ConductorPayApi'), require('./api/ContaApi'), require('./api/DebitoRecorrenteApi'), require('./api/DispositivoApi'), require('./api/DocumentoApi'), require('./api/EnderecoNacionalApi'), require('./api/EstabelecimentoApi'), require('./api/FAQApi'), require('./api/FaturaApi'), require('./api/JobApi'), require('./api/LimiteApi'), require('./api/LimiteDisponibilidadeApi'), require('./api/NotificacaoApi'), require('./api/OportunidadeApi'), require('./api/PlataformaMobileApi'), require('./api/RiscoFraudeApi'), require('./api/ServicoContaApi'), require('./api/StatusParametroApi'), require('./api/TokenApi'), require('./api/TransferenciaBancariaApi'), require('./api/UsuarioApi'), require('./api/WebhookApi'));
  }
}(function(ApiClient, AdicionalDetalheResponse, AdicionalPersist, AdicionalResponse, AdicionalUpdate, AjusteFinanceiroResponse, AlterarProdutoRequest, AnexoNotificacaoEmailRequest, AntecipacaoResponse, AntecipacaoSimuladaDetalhesResponse, AntecipacaoSimuladaLoteResponse, AntecipacaoSimuladaResponse, AnuidadeResponse, AplicacaoMobilePersist, AplicacaoMobileResponse, AplicacaoMobileUpdate, ArquivoDetalhesPersist, ArquivoParametroResponse, ArquivoPersist, ArquivoResponse, AtendimentoClienteResponse, AtribuirAssinaturaClientePersist, AuthToken, AutorizacaoOnUsRequest, BancoResponse, BaseResponse, BeneficioPagamentoAtrasoResponse, BodyAccessToken, BoletoResponse, CampanhaPersist, CampanhaResponse, CampanhaUpdate, CampoCodificadoDescricaoResponse, CancelamentoTransacaoOnUsRequest, CancelamentoTransacaoPorIdCartaoRequest, CartaoDetalheResponse, CartaoEmbossingRequest, CartaoEmbossingResponse, CartaoImpressaoProvisorioResponse, CartaoImpressaoResponse, CartaoPayAtualizarChaveResponse, CartaoPayCadastroResponse, CartaoPayConfirmarChaveResponse, CartaoPayDetalheResponse, CartaoPayKeyUpdate, CartaoPayPersist, CartaoPayResponse, CartaoPayUpdate, CartaoResponse, CdtDetalheOportunidadeAUD, CodigoSegurancaEMAILPersist, CodigoSegurancaResponse, CodigoSegurancaSMSPersist, CodigoSegurancaSMSRequest, CompraResponse, ConfiguracaoEmailPersist, ConfiguracaoEmailResponse, ConfiguracaoRegistroCobrancaPersist, ConfiguracaoRegistroCobrancaResponse, ConfiguracaoRotativoDetalheResponse, ConfiguracaoRotativoPersist, ContaBancariaPortadorPersist, ContaBancariaPortadorResponse, ContaBancariaPortadorUpdate, ContaDetalheResponse, ContaHistoricoPagamentoResponse, ContaResponse, ControleVencimentoResponse, CredorDTO, CredorResponse, DadosCartaoImpressaoResponse, DadosCartaoResponse, DesfazimentoTransacaoOnUsRequest, DetalheOperacaoResponse, DetalheOportunidadePersist, DetalheOportunidadeResponse, DetalheOportunidadeUpdate, DetalhesFaturaConsignadaResponse, DetalhesFaturaResponse, DispositivoPersist, DispositivoResponse, DividaClienteResponse, DocumentoDetalhadoResponse, DocumentoDetalheResponse, DocumentoIntegracaoResponse, DocumentoParametrosRequest, DocumentoResponse, DocumentoTemplatePersist, DocumentoTemplateResponse, EmprestimoPessoalRequest, EmprestimoPessoalResponse, EnderecoAprovadoPersist, EnderecoAprovadoResponse, EnderecoResponse, EstabelecimentoResponse, EstagioCartaoResponse, ExtraInfo, FantasiaBasicaResponse, FaqResponse, FaturaConsignadaDetalheResponse, FaturaConsignadaResponse, FaturaDetalheResponse, FaturaFechadaResponse, FaturaResponse, GradePendenteRequest, HistoricoAssessoriaResponse, HistoricoAtrasoFaturaResponse, HistoricoEventosResponse, HistoricoImpressaoCartaoResponse, HistoricoTelefoneResponse, IntegracaoEmissorPersist, IntegracaoEmissorResponse, IntegrarDocumentoRequest, JobResponse, LancamentoFaturaResponse, LimiteDisponibilidadeResponse, LoteCartoesPrePagosResponse, MapOfstringAndstring, NotificacaoEmailRequest, NotificacaoPushResponse, NotificacaoResponse, NotificacaoSMSBody, NotificacaoSMSResponse, OperacaoResponse, OperadoraResponse, OportunidadeAUDResponse, OportunidadePersist, OportunidadeResponse, OportunidadeUpdate, OrigemComercialResponse, PageAjusteResponse, PageAnuidadeResponse, PageAplicacaoMobileResponse, PageAtendimentoClienteResponse, PageBancoResponse, PageBaseResponse, PageCampanhaResponse, PageCampoCodificadoDescricaoResponse, PageCartaoPayResponse, PageCartaoResponse, PageCodigoSegurancaResponse, PageCompraResponse, PageConfiguracaoEmailResponse, PageConfiguracaoRotativoResponse, PageContaBancariaPortadorResponse, PageContaDetalheResponse, PageContaHistoricoPagamentoResponse, PageContaResponse, PageControleVencimentoResponse, PageCredorResponse, PageDispositivoResponse, PageDocumentoResponse, PageDocumentoTemplateResponse, PageEnderecoResponse, PageEstabelecimentoResponse, PageEstagioCartaoResponse, PageFantasiaBasicaResponse, PageFaqResponse, PageFaturaConsignadaResponse, PageFaturaFechadaResponse, PageFaturaResponse, PageHistoricoAssessoriaResponse, PageHistoricoAtrasoFaturaResponse, PageHistoricoEventosResponse, PageJobResponse, PageLoteCartoesPrePagosResponse, PageOperacaoResponse, PageOperadoraResponse, PageOportunidadeAUDResponse, PageOportunidadeResponse, PageOrigemComercialResponse, PagePessoaDetalheResponse, PagePessoaJuridicaResponse, PagePessoaResponse, PagePlanoParcelamentoResponse, PagePlataformaMobileResponse, PagePortadorResponse, PageProdutoResponse, PagePromotorResponse, PagePushResponse, PageRiscoFraudeResponse, PageSMSResponse, PageStatusCartaoResponse, PageStatusContaResponse, PageStatusImpressaoResponse, PageStatusOportunidadeAUDResponse, PageStatusOportunidadeResponse, PageTaxasRefinanciamentoResponse, PageTelefoneEstabelecimentoResponse, PageTelefoneResponse, PageTemplateNotificacaoResponse, PageTerminalResponse, PageTipoAjusteResponse, PageTipoBoletoResponse, PageTipoCampanhaResponse, PageTipoDebitoRecorrenteResponse, PageTipoEnderecoResponse, PageTipoOportunidadeAUDResponse, PageTipoOportunidadeResponse, PageTipoTelefoneResponse, PageTipoTemplateResponse, PageTransacaoNaoProcessadaResponse, PageTransacaoResponse, PageTransacoesCorrentesResponse, PageTransferenciaBancariaResponse, PageTransferenciaCreditoContaBancariaResponse, PageTransferenciaResponse, PageUsuarioResponse, PageWebHookResponse, ParametroProdutoResponse, ParcelamentoTransferenciaResponse, PessoaDetalheResponse, PessoaFisicaAprovadaPersist, PessoaFisicaAprovadaResponse, PessoaJuridicaAprovadaPersist, PessoaJuridicaAprovadaResponse, PessoaJuridicaResponse, PessoaPersist, PessoaResponse, PlanoCampanhaPersist, PlanoCampanhaResponse, PlanoCampanhaUpdate, PlanoParcelamentoEmprestimoResponse, PlanoParcelamentoResponse, PlanoParcelamentoTransferenciaCreditoContaBancariaRequest, PlanoParcelamentoTransferenciaCreditoContaBancariaResponse, PlataformaMobilePersist, PlataformaMobileResponse, PlataformaMobileUpdate, PortadorResponse, ProdutoDetalhesResponse, ProdutoOrigemResponse, ProdutoResponse, PromotorResponse, PropriedadeDocumentoRequest, PushAPNS, PushFCMEGCM, RefenciaComercialAprovadoPersist, ReferenciaComercialAprovadoResponse, ReferenciaIdPersist, RiscoFraudeDetalhadoResponse, RiscoFraudeResponse, SocioAprovadoResponse, StatusCartaoResponse, StatusContaResponse, StatusImpressaoResponse, StatusOportunidade, StatusOportunidadeAUDResponse, StatusOportunidadeResponse, TaxaAntecipacaoRequest, TaxasRefinanciamentoResponse, TelefoneAdicionalPersist, TelefoneAdicionalUpdate, TelefoneEstabelecimentoResponse, TelefonePessoaAprovadaPersist, TelefonePessoaAprovadaResponse, TelefoneResponse, TemplateNotificacaoDetalheResponse, TemplateNotificacaoResponse, TerminalResponse, TerminalUpdate, TipoAjusteResponse, TipoBoletoResponse, TipoCampanhaResponse, TipoDebitoRecorrenteResponse, TipoEnderecoResponse, TipoOperacaoResponse, TipoOportunidade, TipoOportunidadeAUDResponse, TipoOportunidadeResponse, TipoResolucaoResponse, TipoTelefoneResponse, TipoTemplateRequest, TipoTemplateResponse, TokenResponse, TransacaoCorrenteResponse, TransacaoNaoProcessadaResponse, TransacaoOnUsPorIdCartaoRequest, TransacaoOnUsRequest, TransacaoOnUsResponse, TransacaoPayQueryRequest, TransacaoPayQueryResponse, TransacaoPaySecureRequest, TransacoesCorrentesResponse, TransferenciaBancariaPersist, TransferenciaBancariaResponse, TransferenciaCreditoContaBancariaListaResponse, TransferenciaCreditoContaBancariaPersist, TransferenciaCreditoContaBancariaResponse, TransferenciaDetalheResponse, TransferenciaResponse, UsuarioPersist, UsuarioResponse, UsuarioUpdate, ValidaCartaoResponse, ValidaSenhaCartaoResponse, WebHookResponse, AjusteFinanceiroApi, AntecipacaoApi, AplicacaoMobileApi, ArquivoApi, AutorizacaoApi, BaseApi, BoletoApi, CadastroClienteApi, CadastroGeralApi, CartaoApi, ConductorPayApi, ContaApi, DebitoRecorrenteApi, DispositivoApi, DocumentoApi, EnderecoNacionalApi, EstabelecimentoApi, FAQApi, FaturaApi, JobApi, LimiteApi, LimiteDisponibilidadeApi, NotificacaoApi, OportunidadeApi, PlataformaMobileApi, RiscoFraudeApi, ServicoContaApi, StatusParametroApi, TokenApi, TransferenciaBancariaApi, UsuarioApi, WebhookApi) {
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
   * @version 2.50.18
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AdicionalDetalheResponse model constructor.
     * @property {module:model/AdicionalDetalheResponse}
     */
    AdicionalDetalheResponse: AdicionalDetalheResponse,
    /**
     * The AdicionalPersist model constructor.
     * @property {module:model/AdicionalPersist}
     */
    AdicionalPersist: AdicionalPersist,
    /**
     * The AdicionalResponse model constructor.
     * @property {module:model/AdicionalResponse}
     */
    AdicionalResponse: AdicionalResponse,
    /**
     * The AdicionalUpdate model constructor.
     * @property {module:model/AdicionalUpdate}
     */
    AdicionalUpdate: AdicionalUpdate,
    /**
     * The AjusteFinanceiroResponse model constructor.
     * @property {module:model/AjusteFinanceiroResponse}
     */
    AjusteFinanceiroResponse: AjusteFinanceiroResponse,
    /**
     * The AlterarProdutoRequest model constructor.
     * @property {module:model/AlterarProdutoRequest}
     */
    AlterarProdutoRequest: AlterarProdutoRequest,
    /**
     * The AnexoNotificacaoEmailRequest model constructor.
     * @property {module:model/AnexoNotificacaoEmailRequest}
     */
    AnexoNotificacaoEmailRequest: AnexoNotificacaoEmailRequest,
    /**
     * The AntecipacaoResponse model constructor.
     * @property {module:model/AntecipacaoResponse}
     */
    AntecipacaoResponse: AntecipacaoResponse,
    /**
     * The AntecipacaoSimuladaDetalhesResponse model constructor.
     * @property {module:model/AntecipacaoSimuladaDetalhesResponse}
     */
    AntecipacaoSimuladaDetalhesResponse: AntecipacaoSimuladaDetalhesResponse,
    /**
     * The AntecipacaoSimuladaLoteResponse model constructor.
     * @property {module:model/AntecipacaoSimuladaLoteResponse}
     */
    AntecipacaoSimuladaLoteResponse: AntecipacaoSimuladaLoteResponse,
    /**
     * The AntecipacaoSimuladaResponse model constructor.
     * @property {module:model/AntecipacaoSimuladaResponse}
     */
    AntecipacaoSimuladaResponse: AntecipacaoSimuladaResponse,
    /**
     * The AnuidadeResponse model constructor.
     * @property {module:model/AnuidadeResponse}
     */
    AnuidadeResponse: AnuidadeResponse,
    /**
     * The AplicacaoMobilePersist model constructor.
     * @property {module:model/AplicacaoMobilePersist}
     */
    AplicacaoMobilePersist: AplicacaoMobilePersist,
    /**
     * The AplicacaoMobileResponse model constructor.
     * @property {module:model/AplicacaoMobileResponse}
     */
    AplicacaoMobileResponse: AplicacaoMobileResponse,
    /**
     * The AplicacaoMobileUpdate model constructor.
     * @property {module:model/AplicacaoMobileUpdate}
     */
    AplicacaoMobileUpdate: AplicacaoMobileUpdate,
    /**
     * The ArquivoDetalhesPersist model constructor.
     * @property {module:model/ArquivoDetalhesPersist}
     */
    ArquivoDetalhesPersist: ArquivoDetalhesPersist,
    /**
     * The ArquivoParametroResponse model constructor.
     * @property {module:model/ArquivoParametroResponse}
     */
    ArquivoParametroResponse: ArquivoParametroResponse,
    /**
     * The ArquivoPersist model constructor.
     * @property {module:model/ArquivoPersist}
     */
    ArquivoPersist: ArquivoPersist,
    /**
     * The ArquivoResponse model constructor.
     * @property {module:model/ArquivoResponse}
     */
    ArquivoResponse: ArquivoResponse,
    /**
     * The AtendimentoClienteResponse model constructor.
     * @property {module:model/AtendimentoClienteResponse}
     */
    AtendimentoClienteResponse: AtendimentoClienteResponse,
    /**
     * The AtribuirAssinaturaClientePersist model constructor.
     * @property {module:model/AtribuirAssinaturaClientePersist}
     */
    AtribuirAssinaturaClientePersist: AtribuirAssinaturaClientePersist,
    /**
     * The AuthToken model constructor.
     * @property {module:model/AuthToken}
     */
    AuthToken: AuthToken,
    /**
     * The AutorizacaoOnUsRequest model constructor.
     * @property {module:model/AutorizacaoOnUsRequest}
     */
    AutorizacaoOnUsRequest: AutorizacaoOnUsRequest,
    /**
     * The BancoResponse model constructor.
     * @property {module:model/BancoResponse}
     */
    BancoResponse: BancoResponse,
    /**
     * The BaseResponse model constructor.
     * @property {module:model/BaseResponse}
     */
    BaseResponse: BaseResponse,
    /**
     * The BeneficioPagamentoAtrasoResponse model constructor.
     * @property {module:model/BeneficioPagamentoAtrasoResponse}
     */
    BeneficioPagamentoAtrasoResponse: BeneficioPagamentoAtrasoResponse,
    /**
     * The BodyAccessToken model constructor.
     * @property {module:model/BodyAccessToken}
     */
    BodyAccessToken: BodyAccessToken,
    /**
     * The BoletoResponse model constructor.
     * @property {module:model/BoletoResponse}
     */
    BoletoResponse: BoletoResponse,
    /**
     * The CampanhaPersist model constructor.
     * @property {module:model/CampanhaPersist}
     */
    CampanhaPersist: CampanhaPersist,
    /**
     * The CampanhaResponse model constructor.
     * @property {module:model/CampanhaResponse}
     */
    CampanhaResponse: CampanhaResponse,
    /**
     * The CampanhaUpdate model constructor.
     * @property {module:model/CampanhaUpdate}
     */
    CampanhaUpdate: CampanhaUpdate,
    /**
     * The CampoCodificadoDescricaoResponse model constructor.
     * @property {module:model/CampoCodificadoDescricaoResponse}
     */
    CampoCodificadoDescricaoResponse: CampoCodificadoDescricaoResponse,
    /**
     * The CancelamentoTransacaoOnUsRequest model constructor.
     * @property {module:model/CancelamentoTransacaoOnUsRequest}
     */
    CancelamentoTransacaoOnUsRequest: CancelamentoTransacaoOnUsRequest,
    /**
     * The CancelamentoTransacaoPorIdCartaoRequest model constructor.
     * @property {module:model/CancelamentoTransacaoPorIdCartaoRequest}
     */
    CancelamentoTransacaoPorIdCartaoRequest: CancelamentoTransacaoPorIdCartaoRequest,
    /**
     * The CartaoDetalheResponse model constructor.
     * @property {module:model/CartaoDetalheResponse}
     */
    CartaoDetalheResponse: CartaoDetalheResponse,
    /**
     * The CartaoEmbossingRequest model constructor.
     * @property {module:model/CartaoEmbossingRequest}
     */
    CartaoEmbossingRequest: CartaoEmbossingRequest,
    /**
     * The CartaoEmbossingResponse model constructor.
     * @property {module:model/CartaoEmbossingResponse}
     */
    CartaoEmbossingResponse: CartaoEmbossingResponse,
    /**
     * The CartaoImpressaoProvisorioResponse model constructor.
     * @property {module:model/CartaoImpressaoProvisorioResponse}
     */
    CartaoImpressaoProvisorioResponse: CartaoImpressaoProvisorioResponse,
    /**
     * The CartaoImpressaoResponse model constructor.
     * @property {module:model/CartaoImpressaoResponse}
     */
    CartaoImpressaoResponse: CartaoImpressaoResponse,
    /**
     * The CartaoPayAtualizarChaveResponse model constructor.
     * @property {module:model/CartaoPayAtualizarChaveResponse}
     */
    CartaoPayAtualizarChaveResponse: CartaoPayAtualizarChaveResponse,
    /**
     * The CartaoPayCadastroResponse model constructor.
     * @property {module:model/CartaoPayCadastroResponse}
     */
    CartaoPayCadastroResponse: CartaoPayCadastroResponse,
    /**
     * The CartaoPayConfirmarChaveResponse model constructor.
     * @property {module:model/CartaoPayConfirmarChaveResponse}
     */
    CartaoPayConfirmarChaveResponse: CartaoPayConfirmarChaveResponse,
    /**
     * The CartaoPayDetalheResponse model constructor.
     * @property {module:model/CartaoPayDetalheResponse}
     */
    CartaoPayDetalheResponse: CartaoPayDetalheResponse,
    /**
     * The CartaoPayKeyUpdate model constructor.
     * @property {module:model/CartaoPayKeyUpdate}
     */
    CartaoPayKeyUpdate: CartaoPayKeyUpdate,
    /**
     * The CartaoPayPersist model constructor.
     * @property {module:model/CartaoPayPersist}
     */
    CartaoPayPersist: CartaoPayPersist,
    /**
     * The CartaoPayResponse model constructor.
     * @property {module:model/CartaoPayResponse}
     */
    CartaoPayResponse: CartaoPayResponse,
    /**
     * The CartaoPayUpdate model constructor.
     * @property {module:model/CartaoPayUpdate}
     */
    CartaoPayUpdate: CartaoPayUpdate,
    /**
     * The CartaoResponse model constructor.
     * @property {module:model/CartaoResponse}
     */
    CartaoResponse: CartaoResponse,
    /**
     * The CdtDetalheOportunidadeAUD model constructor.
     * @property {module:model/CdtDetalheOportunidadeAUD}
     */
    CdtDetalheOportunidadeAUD: CdtDetalheOportunidadeAUD,
    /**
     * The CodigoSegurancaEMAILPersist model constructor.
     * @property {module:model/CodigoSegurancaEMAILPersist}
     */
    CodigoSegurancaEMAILPersist: CodigoSegurancaEMAILPersist,
    /**
     * The CodigoSegurancaResponse model constructor.
     * @property {module:model/CodigoSegurancaResponse}
     */
    CodigoSegurancaResponse: CodigoSegurancaResponse,
    /**
     * The CodigoSegurancaSMSPersist model constructor.
     * @property {module:model/CodigoSegurancaSMSPersist}
     */
    CodigoSegurancaSMSPersist: CodigoSegurancaSMSPersist,
    /**
     * The CodigoSegurancaSMSRequest model constructor.
     * @property {module:model/CodigoSegurancaSMSRequest}
     */
    CodigoSegurancaSMSRequest: CodigoSegurancaSMSRequest,
    /**
     * The CompraResponse model constructor.
     * @property {module:model/CompraResponse}
     */
    CompraResponse: CompraResponse,
    /**
     * The ConfiguracaoEmailPersist model constructor.
     * @property {module:model/ConfiguracaoEmailPersist}
     */
    ConfiguracaoEmailPersist: ConfiguracaoEmailPersist,
    /**
     * The ConfiguracaoEmailResponse model constructor.
     * @property {module:model/ConfiguracaoEmailResponse}
     */
    ConfiguracaoEmailResponse: ConfiguracaoEmailResponse,
    /**
     * The ConfiguracaoRegistroCobrancaPersist model constructor.
     * @property {module:model/ConfiguracaoRegistroCobrancaPersist}
     */
    ConfiguracaoRegistroCobrancaPersist: ConfiguracaoRegistroCobrancaPersist,
    /**
     * The ConfiguracaoRegistroCobrancaResponse model constructor.
     * @property {module:model/ConfiguracaoRegistroCobrancaResponse}
     */
    ConfiguracaoRegistroCobrancaResponse: ConfiguracaoRegistroCobrancaResponse,
    /**
     * The ConfiguracaoRotativoDetalheResponse model constructor.
     * @property {module:model/ConfiguracaoRotativoDetalheResponse}
     */
    ConfiguracaoRotativoDetalheResponse: ConfiguracaoRotativoDetalheResponse,
    /**
     * The ConfiguracaoRotativoPersist model constructor.
     * @property {module:model/ConfiguracaoRotativoPersist}
     */
    ConfiguracaoRotativoPersist: ConfiguracaoRotativoPersist,
    /**
     * The ContaBancariaPortadorPersist model constructor.
     * @property {module:model/ContaBancariaPortadorPersist}
     */
    ContaBancariaPortadorPersist: ContaBancariaPortadorPersist,
    /**
     * The ContaBancariaPortadorResponse model constructor.
     * @property {module:model/ContaBancariaPortadorResponse}
     */
    ContaBancariaPortadorResponse: ContaBancariaPortadorResponse,
    /**
     * The ContaBancariaPortadorUpdate model constructor.
     * @property {module:model/ContaBancariaPortadorUpdate}
     */
    ContaBancariaPortadorUpdate: ContaBancariaPortadorUpdate,
    /**
     * The ContaDetalheResponse model constructor.
     * @property {module:model/ContaDetalheResponse}
     */
    ContaDetalheResponse: ContaDetalheResponse,
    /**
     * The ContaHistoricoPagamentoResponse model constructor.
     * @property {module:model/ContaHistoricoPagamentoResponse}
     */
    ContaHistoricoPagamentoResponse: ContaHistoricoPagamentoResponse,
    /**
     * The ContaResponse model constructor.
     * @property {module:model/ContaResponse}
     */
    ContaResponse: ContaResponse,
    /**
     * The ControleVencimentoResponse model constructor.
     * @property {module:model/ControleVencimentoResponse}
     */
    ControleVencimentoResponse: ControleVencimentoResponse,
    /**
     * The CredorDTO model constructor.
     * @property {module:model/CredorDTO}
     */
    CredorDTO: CredorDTO,
    /**
     * The CredorResponse model constructor.
     * @property {module:model/CredorResponse}
     */
    CredorResponse: CredorResponse,
    /**
     * The DadosCartaoImpressaoResponse model constructor.
     * @property {module:model/DadosCartaoImpressaoResponse}
     */
    DadosCartaoImpressaoResponse: DadosCartaoImpressaoResponse,
    /**
     * The DadosCartaoResponse model constructor.
     * @property {module:model/DadosCartaoResponse}
     */
    DadosCartaoResponse: DadosCartaoResponse,
    /**
     * The DesfazimentoTransacaoOnUsRequest model constructor.
     * @property {module:model/DesfazimentoTransacaoOnUsRequest}
     */
    DesfazimentoTransacaoOnUsRequest: DesfazimentoTransacaoOnUsRequest,
    /**
     * The DetalheOperacaoResponse model constructor.
     * @property {module:model/DetalheOperacaoResponse}
     */
    DetalheOperacaoResponse: DetalheOperacaoResponse,
    /**
     * The DetalheOportunidadePersist model constructor.
     * @property {module:model/DetalheOportunidadePersist}
     */
    DetalheOportunidadePersist: DetalheOportunidadePersist,
    /**
     * The DetalheOportunidadeResponse model constructor.
     * @property {module:model/DetalheOportunidadeResponse}
     */
    DetalheOportunidadeResponse: DetalheOportunidadeResponse,
    /**
     * The DetalheOportunidadeUpdate model constructor.
     * @property {module:model/DetalheOportunidadeUpdate}
     */
    DetalheOportunidadeUpdate: DetalheOportunidadeUpdate,
    /**
     * The DetalhesFaturaConsignadaResponse model constructor.
     * @property {module:model/DetalhesFaturaConsignadaResponse}
     */
    DetalhesFaturaConsignadaResponse: DetalhesFaturaConsignadaResponse,
    /**
     * The DetalhesFaturaResponse model constructor.
     * @property {module:model/DetalhesFaturaResponse}
     */
    DetalhesFaturaResponse: DetalhesFaturaResponse,
    /**
     * The DispositivoPersist model constructor.
     * @property {module:model/DispositivoPersist}
     */
    DispositivoPersist: DispositivoPersist,
    /**
     * The DispositivoResponse model constructor.
     * @property {module:model/DispositivoResponse}
     */
    DispositivoResponse: DispositivoResponse,
    /**
     * The DividaClienteResponse model constructor.
     * @property {module:model/DividaClienteResponse}
     */
    DividaClienteResponse: DividaClienteResponse,
    /**
     * The DocumentoDetalhadoResponse model constructor.
     * @property {module:model/DocumentoDetalhadoResponse}
     */
    DocumentoDetalhadoResponse: DocumentoDetalhadoResponse,
    /**
     * The DocumentoDetalheResponse model constructor.
     * @property {module:model/DocumentoDetalheResponse}
     */
    DocumentoDetalheResponse: DocumentoDetalheResponse,
    /**
     * The DocumentoIntegracaoResponse model constructor.
     * @property {module:model/DocumentoIntegracaoResponse}
     */
    DocumentoIntegracaoResponse: DocumentoIntegracaoResponse,
    /**
     * The DocumentoParametrosRequest model constructor.
     * @property {module:model/DocumentoParametrosRequest}
     */
    DocumentoParametrosRequest: DocumentoParametrosRequest,
    /**
     * The DocumentoResponse model constructor.
     * @property {module:model/DocumentoResponse}
     */
    DocumentoResponse: DocumentoResponse,
    /**
     * The DocumentoTemplatePersist model constructor.
     * @property {module:model/DocumentoTemplatePersist}
     */
    DocumentoTemplatePersist: DocumentoTemplatePersist,
    /**
     * The DocumentoTemplateResponse model constructor.
     * @property {module:model/DocumentoTemplateResponse}
     */
    DocumentoTemplateResponse: DocumentoTemplateResponse,
    /**
     * The EmprestimoPessoalRequest model constructor.
     * @property {module:model/EmprestimoPessoalRequest}
     */
    EmprestimoPessoalRequest: EmprestimoPessoalRequest,
    /**
     * The EmprestimoPessoalResponse model constructor.
     * @property {module:model/EmprestimoPessoalResponse}
     */
    EmprestimoPessoalResponse: EmprestimoPessoalResponse,
    /**
     * The EnderecoAprovadoPersist model constructor.
     * @property {module:model/EnderecoAprovadoPersist}
     */
    EnderecoAprovadoPersist: EnderecoAprovadoPersist,
    /**
     * The EnderecoAprovadoResponse model constructor.
     * @property {module:model/EnderecoAprovadoResponse}
     */
    EnderecoAprovadoResponse: EnderecoAprovadoResponse,
    /**
     * The EnderecoResponse model constructor.
     * @property {module:model/EnderecoResponse}
     */
    EnderecoResponse: EnderecoResponse,
    /**
     * The EstabelecimentoResponse model constructor.
     * @property {module:model/EstabelecimentoResponse}
     */
    EstabelecimentoResponse: EstabelecimentoResponse,
    /**
     * The EstagioCartaoResponse model constructor.
     * @property {module:model/EstagioCartaoResponse}
     */
    EstagioCartaoResponse: EstagioCartaoResponse,
    /**
     * The ExtraInfo model constructor.
     * @property {module:model/ExtraInfo}
     */
    ExtraInfo: ExtraInfo,
    /**
     * The FantasiaBasicaResponse model constructor.
     * @property {module:model/FantasiaBasicaResponse}
     */
    FantasiaBasicaResponse: FantasiaBasicaResponse,
    /**
     * The FaqResponse model constructor.
     * @property {module:model/FaqResponse}
     */
    FaqResponse: FaqResponse,
    /**
     * The FaturaConsignadaDetalheResponse model constructor.
     * @property {module:model/FaturaConsignadaDetalheResponse}
     */
    FaturaConsignadaDetalheResponse: FaturaConsignadaDetalheResponse,
    /**
     * The FaturaConsignadaResponse model constructor.
     * @property {module:model/FaturaConsignadaResponse}
     */
    FaturaConsignadaResponse: FaturaConsignadaResponse,
    /**
     * The FaturaDetalheResponse model constructor.
     * @property {module:model/FaturaDetalheResponse}
     */
    FaturaDetalheResponse: FaturaDetalheResponse,
    /**
     * The FaturaFechadaResponse model constructor.
     * @property {module:model/FaturaFechadaResponse}
     */
    FaturaFechadaResponse: FaturaFechadaResponse,
    /**
     * The FaturaResponse model constructor.
     * @property {module:model/FaturaResponse}
     */
    FaturaResponse: FaturaResponse,
    /**
     * The GradePendenteRequest model constructor.
     * @property {module:model/GradePendenteRequest}
     */
    GradePendenteRequest: GradePendenteRequest,
    /**
     * The HistoricoAssessoriaResponse model constructor.
     * @property {module:model/HistoricoAssessoriaResponse}
     */
    HistoricoAssessoriaResponse: HistoricoAssessoriaResponse,
    /**
     * The HistoricoAtrasoFaturaResponse model constructor.
     * @property {module:model/HistoricoAtrasoFaturaResponse}
     */
    HistoricoAtrasoFaturaResponse: HistoricoAtrasoFaturaResponse,
    /**
     * The HistoricoEventosResponse model constructor.
     * @property {module:model/HistoricoEventosResponse}
     */
    HistoricoEventosResponse: HistoricoEventosResponse,
    /**
     * The HistoricoImpressaoCartaoResponse model constructor.
     * @property {module:model/HistoricoImpressaoCartaoResponse}
     */
    HistoricoImpressaoCartaoResponse: HistoricoImpressaoCartaoResponse,
    /**
     * The HistoricoTelefoneResponse model constructor.
     * @property {module:model/HistoricoTelefoneResponse}
     */
    HistoricoTelefoneResponse: HistoricoTelefoneResponse,
    /**
     * The IntegracaoEmissorPersist model constructor.
     * @property {module:model/IntegracaoEmissorPersist}
     */
    IntegracaoEmissorPersist: IntegracaoEmissorPersist,
    /**
     * The IntegracaoEmissorResponse model constructor.
     * @property {module:model/IntegracaoEmissorResponse}
     */
    IntegracaoEmissorResponse: IntegracaoEmissorResponse,
    /**
     * The IntegrarDocumentoRequest model constructor.
     * @property {module:model/IntegrarDocumentoRequest}
     */
    IntegrarDocumentoRequest: IntegrarDocumentoRequest,
    /**
     * The JobResponse model constructor.
     * @property {module:model/JobResponse}
     */
    JobResponse: JobResponse,
    /**
     * The LancamentoFaturaResponse model constructor.
     * @property {module:model/LancamentoFaturaResponse}
     */
    LancamentoFaturaResponse: LancamentoFaturaResponse,
    /**
     * The LimiteDisponibilidadeResponse model constructor.
     * @property {module:model/LimiteDisponibilidadeResponse}
     */
    LimiteDisponibilidadeResponse: LimiteDisponibilidadeResponse,
    /**
     * The LoteCartoesPrePagosResponse model constructor.
     * @property {module:model/LoteCartoesPrePagosResponse}
     */
    LoteCartoesPrePagosResponse: LoteCartoesPrePagosResponse,
    /**
     * The MapOfstringAndstring model constructor.
     * @property {module:model/MapOfstringAndstring}
     */
    MapOfstringAndstring: MapOfstringAndstring,
    /**
     * The NotificacaoEmailRequest model constructor.
     * @property {module:model/NotificacaoEmailRequest}
     */
    NotificacaoEmailRequest: NotificacaoEmailRequest,
    /**
     * The NotificacaoPushResponse model constructor.
     * @property {module:model/NotificacaoPushResponse}
     */
    NotificacaoPushResponse: NotificacaoPushResponse,
    /**
     * The NotificacaoResponse model constructor.
     * @property {module:model/NotificacaoResponse}
     */
    NotificacaoResponse: NotificacaoResponse,
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
     * The OperacaoResponse model constructor.
     * @property {module:model/OperacaoResponse}
     */
    OperacaoResponse: OperacaoResponse,
    /**
     * The OperadoraResponse model constructor.
     * @property {module:model/OperadoraResponse}
     */
    OperadoraResponse: OperadoraResponse,
    /**
     * The OportunidadeAUDResponse model constructor.
     * @property {module:model/OportunidadeAUDResponse}
     */
    OportunidadeAUDResponse: OportunidadeAUDResponse,
    /**
     * The OportunidadePersist model constructor.
     * @property {module:model/OportunidadePersist}
     */
    OportunidadePersist: OportunidadePersist,
    /**
     * The OportunidadeResponse model constructor.
     * @property {module:model/OportunidadeResponse}
     */
    OportunidadeResponse: OportunidadeResponse,
    /**
     * The OportunidadeUpdate model constructor.
     * @property {module:model/OportunidadeUpdate}
     */
    OportunidadeUpdate: OportunidadeUpdate,
    /**
     * The OrigemComercialResponse model constructor.
     * @property {module:model/OrigemComercialResponse}
     */
    OrigemComercialResponse: OrigemComercialResponse,
    /**
     * The PageAjusteResponse model constructor.
     * @property {module:model/PageAjusteResponse}
     */
    PageAjusteResponse: PageAjusteResponse,
    /**
     * The PageAnuidadeResponse model constructor.
     * @property {module:model/PageAnuidadeResponse}
     */
    PageAnuidadeResponse: PageAnuidadeResponse,
    /**
     * The PageAplicacaoMobileResponse model constructor.
     * @property {module:model/PageAplicacaoMobileResponse}
     */
    PageAplicacaoMobileResponse: PageAplicacaoMobileResponse,
    /**
     * The PageAtendimentoClienteResponse model constructor.
     * @property {module:model/PageAtendimentoClienteResponse}
     */
    PageAtendimentoClienteResponse: PageAtendimentoClienteResponse,
    /**
     * The PageBancoResponse model constructor.
     * @property {module:model/PageBancoResponse}
     */
    PageBancoResponse: PageBancoResponse,
    /**
     * The PageBaseResponse model constructor.
     * @property {module:model/PageBaseResponse}
     */
    PageBaseResponse: PageBaseResponse,
    /**
     * The PageCampanhaResponse model constructor.
     * @property {module:model/PageCampanhaResponse}
     */
    PageCampanhaResponse: PageCampanhaResponse,
    /**
     * The PageCampoCodificadoDescricaoResponse model constructor.
     * @property {module:model/PageCampoCodificadoDescricaoResponse}
     */
    PageCampoCodificadoDescricaoResponse: PageCampoCodificadoDescricaoResponse,
    /**
     * The PageCartaoPayResponse model constructor.
     * @property {module:model/PageCartaoPayResponse}
     */
    PageCartaoPayResponse: PageCartaoPayResponse,
    /**
     * The PageCartaoResponse model constructor.
     * @property {module:model/PageCartaoResponse}
     */
    PageCartaoResponse: PageCartaoResponse,
    /**
     * The PageCodigoSegurancaResponse model constructor.
     * @property {module:model/PageCodigoSegurancaResponse}
     */
    PageCodigoSegurancaResponse: PageCodigoSegurancaResponse,
    /**
     * The PageCompraResponse model constructor.
     * @property {module:model/PageCompraResponse}
     */
    PageCompraResponse: PageCompraResponse,
    /**
     * The PageConfiguracaoEmailResponse model constructor.
     * @property {module:model/PageConfiguracaoEmailResponse}
     */
    PageConfiguracaoEmailResponse: PageConfiguracaoEmailResponse,
    /**
     * The PageConfiguracaoRotativoResponse model constructor.
     * @property {module:model/PageConfiguracaoRotativoResponse}
     */
    PageConfiguracaoRotativoResponse: PageConfiguracaoRotativoResponse,
    /**
     * The PageContaBancariaPortadorResponse model constructor.
     * @property {module:model/PageContaBancariaPortadorResponse}
     */
    PageContaBancariaPortadorResponse: PageContaBancariaPortadorResponse,
    /**
     * The PageContaDetalheResponse model constructor.
     * @property {module:model/PageContaDetalheResponse}
     */
    PageContaDetalheResponse: PageContaDetalheResponse,
    /**
     * The PageContaHistoricoPagamentoResponse model constructor.
     * @property {module:model/PageContaHistoricoPagamentoResponse}
     */
    PageContaHistoricoPagamentoResponse: PageContaHistoricoPagamentoResponse,
    /**
     * The PageContaResponse model constructor.
     * @property {module:model/PageContaResponse}
     */
    PageContaResponse: PageContaResponse,
    /**
     * The PageControleVencimentoResponse model constructor.
     * @property {module:model/PageControleVencimentoResponse}
     */
    PageControleVencimentoResponse: PageControleVencimentoResponse,
    /**
     * The PageCredorResponse model constructor.
     * @property {module:model/PageCredorResponse}
     */
    PageCredorResponse: PageCredorResponse,
    /**
     * The PageDispositivoResponse model constructor.
     * @property {module:model/PageDispositivoResponse}
     */
    PageDispositivoResponse: PageDispositivoResponse,
    /**
     * The PageDocumentoResponse model constructor.
     * @property {module:model/PageDocumentoResponse}
     */
    PageDocumentoResponse: PageDocumentoResponse,
    /**
     * The PageDocumentoTemplateResponse model constructor.
     * @property {module:model/PageDocumentoTemplateResponse}
     */
    PageDocumentoTemplateResponse: PageDocumentoTemplateResponse,
    /**
     * The PageEnderecoResponse model constructor.
     * @property {module:model/PageEnderecoResponse}
     */
    PageEnderecoResponse: PageEnderecoResponse,
    /**
     * The PageEstabelecimentoResponse model constructor.
     * @property {module:model/PageEstabelecimentoResponse}
     */
    PageEstabelecimentoResponse: PageEstabelecimentoResponse,
    /**
     * The PageEstagioCartaoResponse model constructor.
     * @property {module:model/PageEstagioCartaoResponse}
     */
    PageEstagioCartaoResponse: PageEstagioCartaoResponse,
    /**
     * The PageFantasiaBasicaResponse model constructor.
     * @property {module:model/PageFantasiaBasicaResponse}
     */
    PageFantasiaBasicaResponse: PageFantasiaBasicaResponse,
    /**
     * The PageFaqResponse model constructor.
     * @property {module:model/PageFaqResponse}
     */
    PageFaqResponse: PageFaqResponse,
    /**
     * The PageFaturaConsignadaResponse model constructor.
     * @property {module:model/PageFaturaConsignadaResponse}
     */
    PageFaturaConsignadaResponse: PageFaturaConsignadaResponse,
    /**
     * The PageFaturaFechadaResponse model constructor.
     * @property {module:model/PageFaturaFechadaResponse}
     */
    PageFaturaFechadaResponse: PageFaturaFechadaResponse,
    /**
     * The PageFaturaResponse model constructor.
     * @property {module:model/PageFaturaResponse}
     */
    PageFaturaResponse: PageFaturaResponse,
    /**
     * The PageHistoricoAssessoriaResponse model constructor.
     * @property {module:model/PageHistoricoAssessoriaResponse}
     */
    PageHistoricoAssessoriaResponse: PageHistoricoAssessoriaResponse,
    /**
     * The PageHistoricoAtrasoFaturaResponse model constructor.
     * @property {module:model/PageHistoricoAtrasoFaturaResponse}
     */
    PageHistoricoAtrasoFaturaResponse: PageHistoricoAtrasoFaturaResponse,
    /**
     * The PageHistoricoEventosResponse model constructor.
     * @property {module:model/PageHistoricoEventosResponse}
     */
    PageHistoricoEventosResponse: PageHistoricoEventosResponse,
    /**
     * The PageJobResponse model constructor.
     * @property {module:model/PageJobResponse}
     */
    PageJobResponse: PageJobResponse,
    /**
     * The PageLoteCartoesPrePagosResponse model constructor.
     * @property {module:model/PageLoteCartoesPrePagosResponse}
     */
    PageLoteCartoesPrePagosResponse: PageLoteCartoesPrePagosResponse,
    /**
     * The PageOperacaoResponse model constructor.
     * @property {module:model/PageOperacaoResponse}
     */
    PageOperacaoResponse: PageOperacaoResponse,
    /**
     * The PageOperadoraResponse model constructor.
     * @property {module:model/PageOperadoraResponse}
     */
    PageOperadoraResponse: PageOperadoraResponse,
    /**
     * The PageOportunidadeAUDResponse model constructor.
     * @property {module:model/PageOportunidadeAUDResponse}
     */
    PageOportunidadeAUDResponse: PageOportunidadeAUDResponse,
    /**
     * The PageOportunidadeResponse model constructor.
     * @property {module:model/PageOportunidadeResponse}
     */
    PageOportunidadeResponse: PageOportunidadeResponse,
    /**
     * The PageOrigemComercialResponse model constructor.
     * @property {module:model/PageOrigemComercialResponse}
     */
    PageOrigemComercialResponse: PageOrigemComercialResponse,
    /**
     * The PagePessoaDetalheResponse model constructor.
     * @property {module:model/PagePessoaDetalheResponse}
     */
    PagePessoaDetalheResponse: PagePessoaDetalheResponse,
    /**
     * The PagePessoaJuridicaResponse model constructor.
     * @property {module:model/PagePessoaJuridicaResponse}
     */
    PagePessoaJuridicaResponse: PagePessoaJuridicaResponse,
    /**
     * The PagePessoaResponse model constructor.
     * @property {module:model/PagePessoaResponse}
     */
    PagePessoaResponse: PagePessoaResponse,
    /**
     * The PagePlanoParcelamentoResponse model constructor.
     * @property {module:model/PagePlanoParcelamentoResponse}
     */
    PagePlanoParcelamentoResponse: PagePlanoParcelamentoResponse,
    /**
     * The PagePlataformaMobileResponse model constructor.
     * @property {module:model/PagePlataformaMobileResponse}
     */
    PagePlataformaMobileResponse: PagePlataformaMobileResponse,
    /**
     * The PagePortadorResponse model constructor.
     * @property {module:model/PagePortadorResponse}
     */
    PagePortadorResponse: PagePortadorResponse,
    /**
     * The PageProdutoResponse model constructor.
     * @property {module:model/PageProdutoResponse}
     */
    PageProdutoResponse: PageProdutoResponse,
    /**
     * The PagePromotorResponse model constructor.
     * @property {module:model/PagePromotorResponse}
     */
    PagePromotorResponse: PagePromotorResponse,
    /**
     * The PagePushResponse model constructor.
     * @property {module:model/PagePushResponse}
     */
    PagePushResponse: PagePushResponse,
    /**
     * The PageRiscoFraudeResponse model constructor.
     * @property {module:model/PageRiscoFraudeResponse}
     */
    PageRiscoFraudeResponse: PageRiscoFraudeResponse,
    /**
     * The PageSMSResponse model constructor.
     * @property {module:model/PageSMSResponse}
     */
    PageSMSResponse: PageSMSResponse,
    /**
     * The PageStatusCartaoResponse model constructor.
     * @property {module:model/PageStatusCartaoResponse}
     */
    PageStatusCartaoResponse: PageStatusCartaoResponse,
    /**
     * The PageStatusContaResponse model constructor.
     * @property {module:model/PageStatusContaResponse}
     */
    PageStatusContaResponse: PageStatusContaResponse,
    /**
     * The PageStatusImpressaoResponse model constructor.
     * @property {module:model/PageStatusImpressaoResponse}
     */
    PageStatusImpressaoResponse: PageStatusImpressaoResponse,
    /**
     * The PageStatusOportunidadeAUDResponse model constructor.
     * @property {module:model/PageStatusOportunidadeAUDResponse}
     */
    PageStatusOportunidadeAUDResponse: PageStatusOportunidadeAUDResponse,
    /**
     * The PageStatusOportunidadeResponse model constructor.
     * @property {module:model/PageStatusOportunidadeResponse}
     */
    PageStatusOportunidadeResponse: PageStatusOportunidadeResponse,
    /**
     * The PageTaxasRefinanciamentoResponse model constructor.
     * @property {module:model/PageTaxasRefinanciamentoResponse}
     */
    PageTaxasRefinanciamentoResponse: PageTaxasRefinanciamentoResponse,
    /**
     * The PageTelefoneEstabelecimentoResponse model constructor.
     * @property {module:model/PageTelefoneEstabelecimentoResponse}
     */
    PageTelefoneEstabelecimentoResponse: PageTelefoneEstabelecimentoResponse,
    /**
     * The PageTelefoneResponse model constructor.
     * @property {module:model/PageTelefoneResponse}
     */
    PageTelefoneResponse: PageTelefoneResponse,
    /**
     * The PageTemplateNotificacaoResponse model constructor.
     * @property {module:model/PageTemplateNotificacaoResponse}
     */
    PageTemplateNotificacaoResponse: PageTemplateNotificacaoResponse,
    /**
     * The PageTerminalResponse model constructor.
     * @property {module:model/PageTerminalResponse}
     */
    PageTerminalResponse: PageTerminalResponse,
    /**
     * The PageTipoAjusteResponse model constructor.
     * @property {module:model/PageTipoAjusteResponse}
     */
    PageTipoAjusteResponse: PageTipoAjusteResponse,
    /**
     * The PageTipoBoletoResponse model constructor.
     * @property {module:model/PageTipoBoletoResponse}
     */
    PageTipoBoletoResponse: PageTipoBoletoResponse,
    /**
     * The PageTipoCampanhaResponse model constructor.
     * @property {module:model/PageTipoCampanhaResponse}
     */
    PageTipoCampanhaResponse: PageTipoCampanhaResponse,
    /**
     * The PageTipoDebitoRecorrenteResponse model constructor.
     * @property {module:model/PageTipoDebitoRecorrenteResponse}
     */
    PageTipoDebitoRecorrenteResponse: PageTipoDebitoRecorrenteResponse,
    /**
     * The PageTipoEnderecoResponse model constructor.
     * @property {module:model/PageTipoEnderecoResponse}
     */
    PageTipoEnderecoResponse: PageTipoEnderecoResponse,
    /**
     * The PageTipoOportunidadeAUDResponse model constructor.
     * @property {module:model/PageTipoOportunidadeAUDResponse}
     */
    PageTipoOportunidadeAUDResponse: PageTipoOportunidadeAUDResponse,
    /**
     * The PageTipoOportunidadeResponse model constructor.
     * @property {module:model/PageTipoOportunidadeResponse}
     */
    PageTipoOportunidadeResponse: PageTipoOportunidadeResponse,
    /**
     * The PageTipoTelefoneResponse model constructor.
     * @property {module:model/PageTipoTelefoneResponse}
     */
    PageTipoTelefoneResponse: PageTipoTelefoneResponse,
    /**
     * The PageTipoTemplateResponse model constructor.
     * @property {module:model/PageTipoTemplateResponse}
     */
    PageTipoTemplateResponse: PageTipoTemplateResponse,
    /**
     * The PageTransacaoNaoProcessadaResponse model constructor.
     * @property {module:model/PageTransacaoNaoProcessadaResponse}
     */
    PageTransacaoNaoProcessadaResponse: PageTransacaoNaoProcessadaResponse,
    /**
     * The PageTransacaoResponse model constructor.
     * @property {module:model/PageTransacaoResponse}
     */
    PageTransacaoResponse: PageTransacaoResponse,
    /**
     * The PageTransacoesCorrentesResponse model constructor.
     * @property {module:model/PageTransacoesCorrentesResponse}
     */
    PageTransacoesCorrentesResponse: PageTransacoesCorrentesResponse,
    /**
     * The PageTransferenciaBancariaResponse model constructor.
     * @property {module:model/PageTransferenciaBancariaResponse}
     */
    PageTransferenciaBancariaResponse: PageTransferenciaBancariaResponse,
    /**
     * The PageTransferenciaCreditoContaBancariaResponse model constructor.
     * @property {module:model/PageTransferenciaCreditoContaBancariaResponse}
     */
    PageTransferenciaCreditoContaBancariaResponse: PageTransferenciaCreditoContaBancariaResponse,
    /**
     * The PageTransferenciaResponse model constructor.
     * @property {module:model/PageTransferenciaResponse}
     */
    PageTransferenciaResponse: PageTransferenciaResponse,
    /**
     * The PageUsuarioResponse model constructor.
     * @property {module:model/PageUsuarioResponse}
     */
    PageUsuarioResponse: PageUsuarioResponse,
    /**
     * The PageWebHookResponse model constructor.
     * @property {module:model/PageWebHookResponse}
     */
    PageWebHookResponse: PageWebHookResponse,
    /**
     * The ParametroProdutoResponse model constructor.
     * @property {module:model/ParametroProdutoResponse}
     */
    ParametroProdutoResponse: ParametroProdutoResponse,
    /**
     * The ParcelamentoTransferenciaResponse model constructor.
     * @property {module:model/ParcelamentoTransferenciaResponse}
     */
    ParcelamentoTransferenciaResponse: ParcelamentoTransferenciaResponse,
    /**
     * The PessoaDetalheResponse model constructor.
     * @property {module:model/PessoaDetalheResponse}
     */
    PessoaDetalheResponse: PessoaDetalheResponse,
    /**
     * The PessoaFisicaAprovadaPersist model constructor.
     * @property {module:model/PessoaFisicaAprovadaPersist}
     */
    PessoaFisicaAprovadaPersist: PessoaFisicaAprovadaPersist,
    /**
     * The PessoaFisicaAprovadaResponse model constructor.
     * @property {module:model/PessoaFisicaAprovadaResponse}
     */
    PessoaFisicaAprovadaResponse: PessoaFisicaAprovadaResponse,
    /**
     * The PessoaJuridicaAprovadaPersist model constructor.
     * @property {module:model/PessoaJuridicaAprovadaPersist}
     */
    PessoaJuridicaAprovadaPersist: PessoaJuridicaAprovadaPersist,
    /**
     * The PessoaJuridicaAprovadaResponse model constructor.
     * @property {module:model/PessoaJuridicaAprovadaResponse}
     */
    PessoaJuridicaAprovadaResponse: PessoaJuridicaAprovadaResponse,
    /**
     * The PessoaJuridicaResponse model constructor.
     * @property {module:model/PessoaJuridicaResponse}
     */
    PessoaJuridicaResponse: PessoaJuridicaResponse,
    /**
     * The PessoaPersist model constructor.
     * @property {module:model/PessoaPersist}
     */
    PessoaPersist: PessoaPersist,
    /**
     * The PessoaResponse model constructor.
     * @property {module:model/PessoaResponse}
     */
    PessoaResponse: PessoaResponse,
    /**
     * The PlanoCampanhaPersist model constructor.
     * @property {module:model/PlanoCampanhaPersist}
     */
    PlanoCampanhaPersist: PlanoCampanhaPersist,
    /**
     * The PlanoCampanhaResponse model constructor.
     * @property {module:model/PlanoCampanhaResponse}
     */
    PlanoCampanhaResponse: PlanoCampanhaResponse,
    /**
     * The PlanoCampanhaUpdate model constructor.
     * @property {module:model/PlanoCampanhaUpdate}
     */
    PlanoCampanhaUpdate: PlanoCampanhaUpdate,
    /**
     * The PlanoParcelamentoEmprestimoResponse model constructor.
     * @property {module:model/PlanoParcelamentoEmprestimoResponse}
     */
    PlanoParcelamentoEmprestimoResponse: PlanoParcelamentoEmprestimoResponse,
    /**
     * The PlanoParcelamentoResponse model constructor.
     * @property {module:model/PlanoParcelamentoResponse}
     */
    PlanoParcelamentoResponse: PlanoParcelamentoResponse,
    /**
     * The PlanoParcelamentoTransferenciaCreditoContaBancariaRequest model constructor.
     * @property {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest}
     */
    PlanoParcelamentoTransferenciaCreditoContaBancariaRequest: PlanoParcelamentoTransferenciaCreditoContaBancariaRequest,
    /**
     * The PlanoParcelamentoTransferenciaCreditoContaBancariaResponse model constructor.
     * @property {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse}
     */
    PlanoParcelamentoTransferenciaCreditoContaBancariaResponse: PlanoParcelamentoTransferenciaCreditoContaBancariaResponse,
    /**
     * The PlataformaMobilePersist model constructor.
     * @property {module:model/PlataformaMobilePersist}
     */
    PlataformaMobilePersist: PlataformaMobilePersist,
    /**
     * The PlataformaMobileResponse model constructor.
     * @property {module:model/PlataformaMobileResponse}
     */
    PlataformaMobileResponse: PlataformaMobileResponse,
    /**
     * The PlataformaMobileUpdate model constructor.
     * @property {module:model/PlataformaMobileUpdate}
     */
    PlataformaMobileUpdate: PlataformaMobileUpdate,
    /**
     * The PortadorResponse model constructor.
     * @property {module:model/PortadorResponse}
     */
    PortadorResponse: PortadorResponse,
    /**
     * The ProdutoDetalhesResponse model constructor.
     * @property {module:model/ProdutoDetalhesResponse}
     */
    ProdutoDetalhesResponse: ProdutoDetalhesResponse,
    /**
     * The ProdutoOrigemResponse model constructor.
     * @property {module:model/ProdutoOrigemResponse}
     */
    ProdutoOrigemResponse: ProdutoOrigemResponse,
    /**
     * The ProdutoResponse model constructor.
     * @property {module:model/ProdutoResponse}
     */
    ProdutoResponse: ProdutoResponse,
    /**
     * The PromotorResponse model constructor.
     * @property {module:model/PromotorResponse}
     */
    PromotorResponse: PromotorResponse,
    /**
     * The PropriedadeDocumentoRequest model constructor.
     * @property {module:model/PropriedadeDocumentoRequest}
     */
    PropriedadeDocumentoRequest: PropriedadeDocumentoRequest,
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
     * The RefenciaComercialAprovadoPersist model constructor.
     * @property {module:model/RefenciaComercialAprovadoPersist}
     */
    RefenciaComercialAprovadoPersist: RefenciaComercialAprovadoPersist,
    /**
     * The ReferenciaComercialAprovadoResponse model constructor.
     * @property {module:model/ReferenciaComercialAprovadoResponse}
     */
    ReferenciaComercialAprovadoResponse: ReferenciaComercialAprovadoResponse,
    /**
     * The ReferenciaIdPersist model constructor.
     * @property {module:model/ReferenciaIdPersist}
     */
    ReferenciaIdPersist: ReferenciaIdPersist,
    /**
     * The RiscoFraudeDetalhadoResponse model constructor.
     * @property {module:model/RiscoFraudeDetalhadoResponse}
     */
    RiscoFraudeDetalhadoResponse: RiscoFraudeDetalhadoResponse,
    /**
     * The RiscoFraudeResponse model constructor.
     * @property {module:model/RiscoFraudeResponse}
     */
    RiscoFraudeResponse: RiscoFraudeResponse,
    /**
     * The SocioAprovadoResponse model constructor.
     * @property {module:model/SocioAprovadoResponse}
     */
    SocioAprovadoResponse: SocioAprovadoResponse,
    /**
     * The StatusCartaoResponse model constructor.
     * @property {module:model/StatusCartaoResponse}
     */
    StatusCartaoResponse: StatusCartaoResponse,
    /**
     * The StatusContaResponse model constructor.
     * @property {module:model/StatusContaResponse}
     */
    StatusContaResponse: StatusContaResponse,
    /**
     * The StatusImpressaoResponse model constructor.
     * @property {module:model/StatusImpressaoResponse}
     */
    StatusImpressaoResponse: StatusImpressaoResponse,
    /**
     * The StatusOportunidade model constructor.
     * @property {module:model/StatusOportunidade}
     */
    StatusOportunidade: StatusOportunidade,
    /**
     * The StatusOportunidadeAUDResponse model constructor.
     * @property {module:model/StatusOportunidadeAUDResponse}
     */
    StatusOportunidadeAUDResponse: StatusOportunidadeAUDResponse,
    /**
     * The StatusOportunidadeResponse model constructor.
     * @property {module:model/StatusOportunidadeResponse}
     */
    StatusOportunidadeResponse: StatusOportunidadeResponse,
    /**
     * The TaxaAntecipacaoRequest model constructor.
     * @property {module:model/TaxaAntecipacaoRequest}
     */
    TaxaAntecipacaoRequest: TaxaAntecipacaoRequest,
    /**
     * The TaxasRefinanciamentoResponse model constructor.
     * @property {module:model/TaxasRefinanciamentoResponse}
     */
    TaxasRefinanciamentoResponse: TaxasRefinanciamentoResponse,
    /**
     * The TelefoneAdicionalPersist model constructor.
     * @property {module:model/TelefoneAdicionalPersist}
     */
    TelefoneAdicionalPersist: TelefoneAdicionalPersist,
    /**
     * The TelefoneAdicionalUpdate model constructor.
     * @property {module:model/TelefoneAdicionalUpdate}
     */
    TelefoneAdicionalUpdate: TelefoneAdicionalUpdate,
    /**
     * The TelefoneEstabelecimentoResponse model constructor.
     * @property {module:model/TelefoneEstabelecimentoResponse}
     */
    TelefoneEstabelecimentoResponse: TelefoneEstabelecimentoResponse,
    /**
     * The TelefonePessoaAprovadaPersist model constructor.
     * @property {module:model/TelefonePessoaAprovadaPersist}
     */
    TelefonePessoaAprovadaPersist: TelefonePessoaAprovadaPersist,
    /**
     * The TelefonePessoaAprovadaResponse model constructor.
     * @property {module:model/TelefonePessoaAprovadaResponse}
     */
    TelefonePessoaAprovadaResponse: TelefonePessoaAprovadaResponse,
    /**
     * The TelefoneResponse model constructor.
     * @property {module:model/TelefoneResponse}
     */
    TelefoneResponse: TelefoneResponse,
    /**
     * The TemplateNotificacaoDetalheResponse model constructor.
     * @property {module:model/TemplateNotificacaoDetalheResponse}
     */
    TemplateNotificacaoDetalheResponse: TemplateNotificacaoDetalheResponse,
    /**
     * The TemplateNotificacaoResponse model constructor.
     * @property {module:model/TemplateNotificacaoResponse}
     */
    TemplateNotificacaoResponse: TemplateNotificacaoResponse,
    /**
     * The TerminalResponse model constructor.
     * @property {module:model/TerminalResponse}
     */
    TerminalResponse: TerminalResponse,
    /**
     * The TerminalUpdate model constructor.
     * @property {module:model/TerminalUpdate}
     */
    TerminalUpdate: TerminalUpdate,
    /**
     * The TipoAjusteResponse model constructor.
     * @property {module:model/TipoAjusteResponse}
     */
    TipoAjusteResponse: TipoAjusteResponse,
    /**
     * The TipoBoletoResponse model constructor.
     * @property {module:model/TipoBoletoResponse}
     */
    TipoBoletoResponse: TipoBoletoResponse,
    /**
     * The TipoCampanhaResponse model constructor.
     * @property {module:model/TipoCampanhaResponse}
     */
    TipoCampanhaResponse: TipoCampanhaResponse,
    /**
     * The TipoDebitoRecorrenteResponse model constructor.
     * @property {module:model/TipoDebitoRecorrenteResponse}
     */
    TipoDebitoRecorrenteResponse: TipoDebitoRecorrenteResponse,
    /**
     * The TipoEnderecoResponse model constructor.
     * @property {module:model/TipoEnderecoResponse}
     */
    TipoEnderecoResponse: TipoEnderecoResponse,
    /**
     * The TipoOperacaoResponse model constructor.
     * @property {module:model/TipoOperacaoResponse}
     */
    TipoOperacaoResponse: TipoOperacaoResponse,
    /**
     * The TipoOportunidade model constructor.
     * @property {module:model/TipoOportunidade}
     */
    TipoOportunidade: TipoOportunidade,
    /**
     * The TipoOportunidadeAUDResponse model constructor.
     * @property {module:model/TipoOportunidadeAUDResponse}
     */
    TipoOportunidadeAUDResponse: TipoOportunidadeAUDResponse,
    /**
     * The TipoOportunidadeResponse model constructor.
     * @property {module:model/TipoOportunidadeResponse}
     */
    TipoOportunidadeResponse: TipoOportunidadeResponse,
    /**
     * The TipoResolucaoResponse model constructor.
     * @property {module:model/TipoResolucaoResponse}
     */
    TipoResolucaoResponse: TipoResolucaoResponse,
    /**
     * The TipoTelefoneResponse model constructor.
     * @property {module:model/TipoTelefoneResponse}
     */
    TipoTelefoneResponse: TipoTelefoneResponse,
    /**
     * The TipoTemplateRequest model constructor.
     * @property {module:model/TipoTemplateRequest}
     */
    TipoTemplateRequest: TipoTemplateRequest,
    /**
     * The TipoTemplateResponse model constructor.
     * @property {module:model/TipoTemplateResponse}
     */
    TipoTemplateResponse: TipoTemplateResponse,
    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse: TokenResponse,
    /**
     * The TransacaoCorrenteResponse model constructor.
     * @property {module:model/TransacaoCorrenteResponse}
     */
    TransacaoCorrenteResponse: TransacaoCorrenteResponse,
    /**
     * The TransacaoNaoProcessadaResponse model constructor.
     * @property {module:model/TransacaoNaoProcessadaResponse}
     */
    TransacaoNaoProcessadaResponse: TransacaoNaoProcessadaResponse,
    /**
     * The TransacaoOnUsPorIdCartaoRequest model constructor.
     * @property {module:model/TransacaoOnUsPorIdCartaoRequest}
     */
    TransacaoOnUsPorIdCartaoRequest: TransacaoOnUsPorIdCartaoRequest,
    /**
     * The TransacaoOnUsRequest model constructor.
     * @property {module:model/TransacaoOnUsRequest}
     */
    TransacaoOnUsRequest: TransacaoOnUsRequest,
    /**
     * The TransacaoOnUsResponse model constructor.
     * @property {module:model/TransacaoOnUsResponse}
     */
    TransacaoOnUsResponse: TransacaoOnUsResponse,
    /**
     * The TransacaoPayQueryRequest model constructor.
     * @property {module:model/TransacaoPayQueryRequest}
     */
    TransacaoPayQueryRequest: TransacaoPayQueryRequest,
    /**
     * The TransacaoPayQueryResponse model constructor.
     * @property {module:model/TransacaoPayQueryResponse}
     */
    TransacaoPayQueryResponse: TransacaoPayQueryResponse,
    /**
     * The TransacaoPaySecureRequest model constructor.
     * @property {module:model/TransacaoPaySecureRequest}
     */
    TransacaoPaySecureRequest: TransacaoPaySecureRequest,
    /**
     * The TransacoesCorrentesResponse model constructor.
     * @property {module:model/TransacoesCorrentesResponse}
     */
    TransacoesCorrentesResponse: TransacoesCorrentesResponse,
    /**
     * The TransferenciaBancariaPersist model constructor.
     * @property {module:model/TransferenciaBancariaPersist}
     */
    TransferenciaBancariaPersist: TransferenciaBancariaPersist,
    /**
     * The TransferenciaBancariaResponse model constructor.
     * @property {module:model/TransferenciaBancariaResponse}
     */
    TransferenciaBancariaResponse: TransferenciaBancariaResponse,
    /**
     * The TransferenciaCreditoContaBancariaListaResponse model constructor.
     * @property {module:model/TransferenciaCreditoContaBancariaListaResponse}
     */
    TransferenciaCreditoContaBancariaListaResponse: TransferenciaCreditoContaBancariaListaResponse,
    /**
     * The TransferenciaCreditoContaBancariaPersist model constructor.
     * @property {module:model/TransferenciaCreditoContaBancariaPersist}
     */
    TransferenciaCreditoContaBancariaPersist: TransferenciaCreditoContaBancariaPersist,
    /**
     * The TransferenciaCreditoContaBancariaResponse model constructor.
     * @property {module:model/TransferenciaCreditoContaBancariaResponse}
     */
    TransferenciaCreditoContaBancariaResponse: TransferenciaCreditoContaBancariaResponse,
    /**
     * The TransferenciaDetalheResponse model constructor.
     * @property {module:model/TransferenciaDetalheResponse}
     */
    TransferenciaDetalheResponse: TransferenciaDetalheResponse,
    /**
     * The TransferenciaResponse model constructor.
     * @property {module:model/TransferenciaResponse}
     */
    TransferenciaResponse: TransferenciaResponse,
    /**
     * The UsuarioPersist model constructor.
     * @property {module:model/UsuarioPersist}
     */
    UsuarioPersist: UsuarioPersist,
    /**
     * The UsuarioResponse model constructor.
     * @property {module:model/UsuarioResponse}
     */
    UsuarioResponse: UsuarioResponse,
    /**
     * The UsuarioUpdate model constructor.
     * @property {module:model/UsuarioUpdate}
     */
    UsuarioUpdate: UsuarioUpdate,
    /**
     * The ValidaCartaoResponse model constructor.
     * @property {module:model/ValidaCartaoResponse}
     */
    ValidaCartaoResponse: ValidaCartaoResponse,
    /**
     * The ValidaSenhaCartaoResponse model constructor.
     * @property {module:model/ValidaSenhaCartaoResponse}
     */
    ValidaSenhaCartaoResponse: ValidaSenhaCartaoResponse,
    /**
     * The WebHookResponse model constructor.
     * @property {module:model/WebHookResponse}
     */
    WebHookResponse: WebHookResponse,
    /**
     * The AjusteFinanceiroApi service constructor.
     * @property {module:api/AjusteFinanceiroApi}
     */
    AjusteFinanceiroApi: AjusteFinanceiroApi,
    /**
     * The AntecipacaoApi service constructor.
     * @property {module:api/AntecipacaoApi}
     */
    AntecipacaoApi: AntecipacaoApi,
    /**
     * The AplicacaoMobileApi service constructor.
     * @property {module:api/AplicacaoMobileApi}
     */
    AplicacaoMobileApi: AplicacaoMobileApi,
    /**
     * The ArquivoApi service constructor.
     * @property {module:api/ArquivoApi}
     */
    ArquivoApi: ArquivoApi,
    /**
     * The AutorizacaoApi service constructor.
     * @property {module:api/AutorizacaoApi}
     */
    AutorizacaoApi: AutorizacaoApi,
    /**
     * The BaseApi service constructor.
     * @property {module:api/BaseApi}
     */
    BaseApi: BaseApi,
    /**
     * The BoletoApi service constructor.
     * @property {module:api/BoletoApi}
     */
    BoletoApi: BoletoApi,
    /**
     * The CadastroClienteApi service constructor.
     * @property {module:api/CadastroClienteApi}
     */
    CadastroClienteApi: CadastroClienteApi,
    /**
     * The CadastroGeralApi service constructor.
     * @property {module:api/CadastroGeralApi}
     */
    CadastroGeralApi: CadastroGeralApi,
    /**
     * The CartaoApi service constructor.
     * @property {module:api/CartaoApi}
     */
    CartaoApi: CartaoApi,
    /**
     * The ConductorPayApi service constructor.
     * @property {module:api/ConductorPayApi}
     */
    ConductorPayApi: ConductorPayApi,
    /**
     * The ContaApi service constructor.
     * @property {module:api/ContaApi}
     */
    ContaApi: ContaApi,
    /**
     * The DebitoRecorrenteApi service constructor.
     * @property {module:api/DebitoRecorrenteApi}
     */
    DebitoRecorrenteApi: DebitoRecorrenteApi,
    /**
     * The DispositivoApi service constructor.
     * @property {module:api/DispositivoApi}
     */
    DispositivoApi: DispositivoApi,
    /**
     * The DocumentoApi service constructor.
     * @property {module:api/DocumentoApi}
     */
    DocumentoApi: DocumentoApi,
    /**
     * The EnderecoNacionalApi service constructor.
     * @property {module:api/EnderecoNacionalApi}
     */
    EnderecoNacionalApi: EnderecoNacionalApi,
    /**
     * The EstabelecimentoApi service constructor.
     * @property {module:api/EstabelecimentoApi}
     */
    EstabelecimentoApi: EstabelecimentoApi,
    /**
     * The FAQApi service constructor.
     * @property {module:api/FAQApi}
     */
    FAQApi: FAQApi,
    /**
     * The FaturaApi service constructor.
     * @property {module:api/FaturaApi}
     */
    FaturaApi: FaturaApi,
    /**
     * The JobApi service constructor.
     * @property {module:api/JobApi}
     */
    JobApi: JobApi,
    /**
     * The LimiteApi service constructor.
     * @property {module:api/LimiteApi}
     */
    LimiteApi: LimiteApi,
    /**
     * The LimiteDisponibilidadeApi service constructor.
     * @property {module:api/LimiteDisponibilidadeApi}
     */
    LimiteDisponibilidadeApi: LimiteDisponibilidadeApi,
    /**
     * The NotificacaoApi service constructor.
     * @property {module:api/NotificacaoApi}
     */
    NotificacaoApi: NotificacaoApi,
    /**
     * The OportunidadeApi service constructor.
     * @property {module:api/OportunidadeApi}
     */
    OportunidadeApi: OportunidadeApi,
    /**
     * The PlataformaMobileApi service constructor.
     * @property {module:api/PlataformaMobileApi}
     */
    PlataformaMobileApi: PlataformaMobileApi,
    /**
     * The RiscoFraudeApi service constructor.
     * @property {module:api/RiscoFraudeApi}
     */
    RiscoFraudeApi: RiscoFraudeApi,
    /**
     * The ServicoContaApi service constructor.
     * @property {module:api/ServicoContaApi}
     */
    ServicoContaApi: ServicoContaApi,
    /**
     * The StatusParametroApi service constructor.
     * @property {module:api/StatusParametroApi}
     */
    StatusParametroApi: StatusParametroApi,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi,
    /**
     * The TransferenciaBancariaApi service constructor.
     * @property {module:api/TransferenciaBancariaApi}
     */
    TransferenciaBancariaApi: TransferenciaBancariaApi,
    /**
     * The UsuarioApi service constructor.
     * @property {module:api/UsuarioApi}
     */
    UsuarioApi: UsuarioApi,
    /**
     * The WebhookApi service constructor.
     * @property {module:api/WebhookApi}
     */
    WebhookApi: WebhookApi
  };

  return exports;
}));
