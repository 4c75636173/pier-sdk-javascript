(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AcordoDetalheResponse', './model/AcordoResponse', './model/AdesaoPagamentoSabadoResponse', './model/AdicionalDetalheResponse', './model/AdicionalPersist', './model/AdicionalResponse', './model/AdicionalUpdate', './model/AjusteFinanceiroResponse', './model/AlterarProdutoRequest', './model/AnexoNotificacaoEmailRequest', './model/AntecipacaoResponse', './model/AntecipacaoSimuladaDetalhesResponse', './model/AntecipacaoSimuladaLoteResponse', './model/AntecipacaoSimuladaResponse', './model/AnuidadeResponse', './model/AplicacaoMobileEmissorResponse', './model/AplicacaoMobilePersistValue', './model/AplicacaoMobileResponse', './model/AplicacaoMobileUpdateValue', './model/ArquivoAUDResponse', './model/ArquivoAjusteLoteResponse', './model/ArquivoDetalheResponse', './model/ArquivoDetalhesPersist', './model/ArquivoParametroAUDResponse', './model/ArquivoParametroResponse', './model/ArquivoPersist', './model/ArquivoResponse', './model/AtendimentoClienteResponse', './model/AtribuirAssinaturaClientePersist', './model/AuthToken', './model/AutorizacaoOnUsRequest', './model/AvisoViagemResponse', './model/BancoResponse', './model/BasePartialUpdateValue', './model/BasePersistValue', './model/BaseResponse', './model/BaseUpdateValue', './model/BeneficioPagamentoAtrasoResponse', './model/BinResponse', './model/BodyAccessToken', './model/BoletoEmailRequest', './model/BoletoListarResponse', './model/BoletoRequest', './model/BoletoResponse', './model/CampanhaPersist', './model/CampanhaResponse', './model/CampanhaUpdateValue', './model/CampoCodificadoDescricaoResponse', './model/CancelamentoTransacaoOnUsRequest', './model/CancelamentoTransacaoPorIdCartaoRequest', './model/CartaoDetalheResponse', './model/CartaoEmbossingRequest', './model/CartaoEmbossingResponse', './model/CartaoEmissorResponse', './model/CartaoImpressaoProvisorioResponse', './model/CartaoImpressaoResponse', './model/CartaoMultiAppImpressaoResponse', './model/CartaoPayAtualizarChaveResponse', './model/CartaoPayCadastroResponse', './model/CartaoPayConfirmarChaveResponse', './model/CartaoPayDetalheResponse', './model/CartaoPayKeyUpdate', './model/CartaoPayPersist', './model/CartaoPayResponse', './model/CartaoPayUpdate', './model/CartaoResponse', './model/CdtDetalheOportunidadeAUD', './model/CdtTipoResolucaoContestacao', './model/ChaveCriptografiaRequest', './model/ChaveCriptografiaResponse', './model/CodigoChargebackResponse', './model/CodigoSegurancaEMAILPersist', './model/CodigoSegurancaResponse', './model/CodigoSegurancaSMSPersist', './model/CodigoSegurancaSMSRequest', './model/CompraContestadaCartaoDetalheResponse', './model/CompraContestadaCartaoResponse', './model/CompraContestadaTransacaoResponse', './model/CompraResponse', './model/ConfiguracaoEmailPersist', './model/ConfiguracaoEmailResponse', './model/ConfiguracaoRegistroCobrancaPersist', './model/ConfiguracaoRegistroCobrancaResponse', './model/ConfiguracaoRotativoDetalheResponse', './model/ConfiguracaoRotativoPersist', './model/ConsultaCadastroEstabelecimentoDTO', './model/ContaBancariaPortadorPersistValue', './model/ContaBancariaPortadorResponse', './model/ContaBancariaPortadorUpdateValue', './model/ContaDebitoRecorrentePersistValue', './model/ContaDebitoRecorrenteResponse', './model/ContaDetalheResponse', './model/ContaHistoricoPagamentoResponse', './model/ContaPersistValue', './model/ContaResponse', './model/ControleSegurancaDispositivoPersistencia', './model/ControleSegurancaDispositivoResponse', './model/ControleSegurancaDispositivoUpdateValor', './model/ControleTentativaCadastroResponse', './model/ControleVencimentoResponse', './model/ConvenioPersist', './model/ConvenioResponse', './model/DadosCartaoImpressaoResponse', './model/DadosCartaoResponse', './model/DadosPortadorRequest', './model/DesfazimentoTransacaoOnUsRequest', './model/DetalheAjusteLoteResponse', './model/DetalheAjusteLoteUpdate', './model/DetalheOperacaoResponse', './model/DetalheOportunidadePersistValue', './model/DetalheOportunidadeResponse', './model/DetalheOportunidadeUpdateValue', './model/DetalhesFaturaConsignadaResponse', './model/DetalhesFaturaResponse', './model/DispositivoPersistValue', './model/DispositivoResponse', './model/DividaClienteResponse', './model/DocumentoDetalhadoResponse', './model/DocumentoDetalheResponse', './model/DocumentoIntegracaoResponse', './model/DocumentoParametrosRequest', './model/DocumentoResponse', './model/DocumentoTemplatePersist', './model/DocumentoTemplateResponse', './model/EmissorPierResponse', './model/EmprestimoPessoalRequest', './model/EmprestimoPessoalResponse', './model/EnderecoAprovadoPersistValue', './model/EnderecoAprovadoResponse', './model/EnderecoResponse', './model/EntidadeResponse', './model/EstabelecimentoPersist', './model/EstabelecimentoResponse', './model/EstabelecimentoUpdate', './model/EstagioCartaoResponse', './model/EstagioCartaoUpdate', './model/ExtraInfo', './model/FantasiaBasicaResponse', './model/FaqResponse', './model/FaturaConsignadaDetalheResponse', './model/FaturaConsignadaResponse', './model/FaturaDetalheResponse', './model/FaturaFechadaResponse', './model/FaturaResponse', './model/GradePendenteRequest', './model/GrupoChargebackResponse', './model/GrupoEconomicoDTO', './model/GrupoEconomicoResponse', './model/GrupoOrigemComercialResponse', './model/HistoricoAssessoriaResponse', './model/HistoricoAtrasoFaturaResponse', './model/HistoricoEventosResponse', './model/HistoricoImpressaoCartaoResponse', './model/HistoricoPagamentoResponse', './model/HistoricoTelefoneResponse', './model/InscricaoAPNResponse', './model/InscricaoApnPersistencia', './model/IntegracaoEmissorPersist', './model/IntegracaoEmissorResponse', './model/IntegrarArquivoRequest', './model/IntegrarDocumentoRequest', './model/JobResponse', './model/LancamentoFaturaResponse', './model/LimiteDisponibilidadeResponse', './model/LogAcessoUsuarioPersistencia', './model/LogAcessoUsuarioResposta', './model/LoteCartoesPrePagosResponse', './model/MCCResponse', './model/MapOfstringAndstring', './model/MaquinetaPersist', './model/MaquinetaResponse', './model/MaquinetaUpdate', './model/MoedaResponse', './model/NotificacaoEmailRequest', './model/NotificacaoPushResponseValue', './model/NotificacaoResponse', './model/NotificacaoSMSResponse', './model/OperacaoCredorPersist', './model/OperacaoCredorResponse', './model/OperacaoCredorUpdate', './model/OperacaoResponse', './model/OperadoraResponse', './model/OportunidadeAUDResponse', './model/OportunidadePersistValue', './model/OportunidadeResponse', './model/OportunidadeUpdateValue', './model/OrigemComercialPersist', './model/OrigemComercialResponse', './model/OrigemComercialUpdate', './model/PageAcordoResponse', './model/PageAjusteResponse', './model/PageAnuidadeResponse', './model/PageAplicacaoMobileResponse', './model/PageArquivoAUDResponse', './model/PageArquivoAjusteLoteResponse', './model/PageArquivoResponse', './model/PageAtendimentoClienteResponse', './model/PageAvisoViagemResponse', './model/PageBancoResponse', './model/PageBaseResponse', './model/PageBinResponse', './model/PageBoletoListarResponse', './model/PageCampanhaResponse', './model/PageCampoCodificadoDescricaoResponse', './model/PageCartaoPayResponse', './model/PageCartaoResponse', './model/PageCodigoChargebackResponse', './model/PageCodigoSegurancaResponse', './model/PageCompraContestadaCartaoResponse', './model/PageCompraContestadaTransacaoResponse', './model/PageCompraResponse', './model/PageConfiguracaoEmailResponse', './model/PageConfiguracaoRotativoResponse', './model/PageContaBancariaPortadorResponse', './model/PageContaDebitoRecorrenteResponse', './model/PageContaDetalheResponse', './model/PageContaHistoricoPagamentoResponse', './model/PageContaResponse', './model/PageControleSegurancaDispositivoResponse', './model/PageControleVencimentoResponse', './model/PageConvenioResponse', './model/PageDetalheAjusteLoteResponse', './model/PageDispositivoResponse', './model/PageDocumentoResponse', './model/PageDocumentoTemplateResponse', './model/PageEmissorPierResponse', './model/PageEnderecoResponse', './model/PageEntidadeResponse', './model/PageEstabelecimentoResponse', './model/PageEstagioCartaoResponse', './model/PageFantasiaBasicaResponse', './model/PageFaqResponse', './model/PageFaturaConsignadaResponse', './model/PageFaturaFechadaResponse', './model/PageFaturaResponse', './model/PageGrupoChargebackResponse', './model/PageGrupoEconomicoResponse', './model/PageGrupoOrigemComercialResponse', './model/PageHistoricoAssessoriaResponse', './model/PageHistoricoAtrasoFaturaResponse', './model/PageHistoricoEventosResponse', './model/PageHistoricoPagamentoResponse', './model/PageInscricaoAPNResponse', './model/PageJobResponse', './model/PageLoteCartoesPrePagosResponse', './model/PageMCCResponse', './model/PageMaquinetaResponse', './model/PageMoedaResponse', './model/PageOperacaoCredorResponse', './model/PageOperacaoResponse', './model/PageOperadoraResponse', './model/PageOportunidadeAUDResponse', './model/PageOportunidadeResponse', './model/PageOrigemComercialResponse', './model/PagePaisResponse', './model/PagePerfilResponse', './model/PagePermissaoResponse', './model/PagePessoaDetalheResponse', './model/PagePessoaResponse', './model/PagePlanoParcelamentoResponse', './model/PagePlataformaMobileResponse', './model/PagePortadorResponse', './model/PageProdutoResponse', './model/PagePromotorResponse', './model/PagePropostaResponse', './model/PagePushResponse', './model/PageRiscoFraudeResponseValue', './model/PageSMSEnvioResponse', './model/PageSMSResponse', './model/PageStatusArquivoResponse', './model/PageStatusCartaoResponse', './model/PageStatusContaResponse', './model/PageStatusContestacaoResponse', './model/PageStatusImpressaoResponse', './model/PageStatusOportunidadeAUDResponse', './model/PageStatusOportunidadeResponse', './model/PageStatusPropostaResponse', './model/PageTaxasRefinanciamentoResponse', './model/PageTelefoneEstabelecimentoResponse', './model/PageTelefoneResponse', './model/PageTemplateNotificacaoResponse', './model/PageTerminalResponse', './model/PageTipoAjusteResponse', './model/PageTipoArquivoResponse', './model/PageTipoBoletoResponse', './model/PageTipoCampanhaResponse', './model/PageTipoChaveResponse', './model/PageTipoDebitoRecorrenteResponse', './model/PageTipoEnderecoResponse', './model/PageTipoEstabelecimentoResponse', './model/PageTipoFaturamentoPorContaResponse', './model/PageTipoFaturamentoResponse', './model/PageTipoOportunidadeAUDResponse', './model/PageTipoOportunidadeResponse', './model/PageTipoOrigemComercialResponse', './model/PageTipoResolucaoContestacaoResponse', './model/PageTipoTelefoneResponse', './model/PageTipoTemplateResponse', './model/PageTipoTerminalResponse', './model/PageTokenResponse', './model/PageTransacaoNaoProcessadaResponse', './model/PageTransacaoProcessadaNaoProcessadaResponse', './model/PageTransacaoResponse', './model/PageTransacoesCorrentesResponse', './model/PageTransferenciaBancariaResponse', './model/PageTransferenciaCreditoContaBancariaResponse', './model/PageTransferenciaResponse', './model/PageUsuarioContasResponse', './model/PageUsuarioResponse', './model/PageUsuarioTokenResponse', './model/PageVinculoEstabelecimentoAdquirenteResponse', './model/PageVinculoOperacaoResponse', './model/PageWebHookResponse', './model/PaisResponse', './model/ParametroEmissorResponse', './model/ParametroProdutoResponse', './model/ParcelamentoTransferenciaResponse', './model/PerfilPersist', './model/PerfilResponse', './model/PerfilUpdate', './model/PermissaoPersist', './model/PermissaoResponse', './model/PermissaoUpdate', './model/PessoaDetalheResponse', './model/PessoaFisicaAprovadaPersistValue', './model/PessoaFisicaAprovadaResponse', './model/PessoaJuridicaAprovadaPersist', './model/PessoaJuridicaAprovadaResponse', './model/PessoaResponse', './model/PlanoCampanhaPersist', './model/PlanoCampanhaResponse', './model/PlanoCampanhaUpdateValue', './model/PlanoParcelamentoEmprestimoResponse', './model/PlanoParcelamentoResponse', './model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest', './model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse', './model/PlataformaMobilePersistValue', './model/PlataformaMobileResponse', './model/PlataformaMobileUpdateValue', './model/PortadorResponse', './model/ProdutoDetalhesResponse', './model/ProdutoOrigemResponse', './model/ProdutoResponse', './model/PromotorResponse', './model/PropostaResponse', './model/PropriedadeDocumentoRequest', './model/PushAPNSPersistValue', './model/PushFCMGCMPersistValue', './model/ReferenciaComercialAprovadoPersistValue', './model/ReferenciaComercialAprovadoResponse', './model/ReferenciaIdPersist', './model/RiscoFraudeDetalhadoResponse', './model/RiscoFraudeResponseValue', './model/SMSEnvioResponse', './model/SMSPersistValue', './model/SocioAprovadoPersistValue', './model/SocioAprovadoResponse', './model/StatusArquivoResponse', './model/StatusCartaoResponse', './model/StatusContaResponse', './model/StatusContestacaoResponse', './model/StatusImpressaoResponse', './model/StatusOportunidadeAUDResponse', './model/StatusOportunidadePersistValue', './model/StatusOportunidadeResponse', './model/StatusPropostaResponse', './model/StatusPropostaUpdate', './model/TaxaAntecipacaoRequest', './model/TaxaJurosContaListaResponse', './model/TaxaJurosContaPersistValue', './model/TaxaJurosContaResponse', './model/TaxasRefinanciamentoResponse', './model/TelefoneAdicionalPersist', './model/TelefoneAdicionalUpdate', './model/TelefoneEstabelecimentoPersist', './model/TelefoneEstabelecimentoResponse', './model/TelefoneEstabelecimentoUpdate', './model/TelefonePessoaAprovadaPersistValue', './model/TelefonePessoaAprovadaResponse', './model/TelefoneResponse', './model/TemplateNotificacaoDetalheResponse', './model/TemplateNotificacaoResponse', './model/TerminalPersist', './model/TerminalResponse', './model/TerminalUpdateValue', './model/TipoAjusteResponse', './model/TipoArquivoResponse', './model/TipoBoletoResponse', './model/TipoCampanhaResponse', './model/TipoChaveResponse', './model/TipoDebitoRecorrenteResponse', './model/TipoEnderecoResponse', './model/TipoEstabelecimentoResponse', './model/TipoFaturamentoPersistValue', './model/TipoFaturamentoPorContaPersistValue', './model/TipoFaturamentoPorContaResponse', './model/TipoFaturamentoResponse', './model/TipoOperacaoResponse', './model/TipoOportunidadeAUDResponse', './model/TipoOportunidadePersistValue', './model/TipoOportunidadeResponse', './model/TipoOrigemComercialResponse', './model/TipoResolucaoResponse', './model/TipoTelefoneResponse', './model/TipoTemplateRequest', './model/TipoTemplateResponse', './model/TipoTerminalResponse', './model/TipoTransacaoAjusteResponse', './model/TokenPartialUpdateValue', './model/TokenPersistValue', './model/TokenResponse', './model/TokenUpdateValue', './model/TransacaoCorrenteResponse', './model/TransacaoNaoProcessadaResponse', './model/TransacaoOnUsPorIdCartaoRequest', './model/TransacaoOnUsRequest', './model/TransacaoOnUsResponse', './model/TransacaoPayQueryRequest', './model/TransacaoPayQueryResponse', './model/TransacaoPaySecureRequest', './model/TransacaoProcessadaNaoProcessadaResponse', './model/TransacoesCorrentesResponse', './model/TransferenciaBancariaPersistValue', './model/TransferenciaBancariaResponse', './model/TransferenciaCreditoContaBancariaListaResponse', './model/TransferenciaCreditoContaBancariaPersistValue', './model/TransferenciaCreditoContaBancariaResponse', './model/TransferenciaDetalheResponse', './model/TransferenciaResponse', './model/UsuarioContasResponse', './model/UsuarioLdapPersist', './model/UsuarioPersistencia', './model/UsuarioResponse', './model/UsuarioSenhaFortePersistencia', './model/UsuarioTokenPersistencia', './model/UsuarioTokenResponse', './model/UsuarioUpdateValue', './model/UsuarioldapUpdateObjectDescription', './model/ValidaCVVRequest', './model/ValidaCartaoResponse', './model/ValidaSenhaCartaoResponse', './model/VinculoEstabelecimentoAdquirentePersist', './model/VinculoEstabelecimentoAdquirenteResponse', './model/VinculoOperacaoPersist', './model/VinculoOperacaoResponse', './model/WebHookPersistValue', './model/WebHookResponse', './api/GlobaltagbinApi', './api/GlobaltagtipochaveApi', './api/GlobaltagajustefinanceiroApi', './api/GlobaltagantecipacaoApi', './api/GlobaltagaplicacaomobileApi', './api/GlobaltagarquivoApi', './api/GlobaltagautorizacaoApi', './api/GlobaltagavisoviagemApi', './api/GlobaltagbaseApi', './api/GlobaltagboletoApi', './api/GlobaltagcadastroclienteApi', './api/GlobaltagcadastrogeralApi', './api/GlobaltagcartaoApi', './api/GlobaltagchavecriptografiaApi', './api/GlobaltagcompracontestadaApi', './api/GlobaltagcontaApi', './api/GlobaltagdebitorecorrenteApi', './api/GlobaltagdispositivoApi', './api/GlobaltagdocumentoApi', './api/GlobaltagendereconacionalApi', './api/GlobaltagestabelecimentoApi', './api/GlobaltagfaqApi', './api/GlobaltagfaturaApi', './api/GlobaltagfaturamentoApi', './api/GlobaltaggrupochagebackApi', './api/GlobaltaginscricaoapnApi', './api/GlobaltagjobApi', './api/GlobaltaglimiteApi', './api/GlobaltaglimitedisponibilidadeApi', './api/GlobaltaglogApi', './api/GlobaltagnotificacaoApi', './api/GlobaltagoportunidadeApi', './api/GlobaltagpagamentoApi', './api/GlobaltagparametroemissorApi', './api/GlobaltagpayApi', './api/GlobaltagpermissaopaisApi', './api/GlobaltagplataformamobileApi', './api/GlobaltagpropostaApi', './api/GlobaltagriscofraudeApi', './api/GlobaltagservicocontaApi', './api/GlobaltagsmsApi', './api/GlobaltagstatuscontestacaoApi', './api/GlobaltagstatusparametroApi', './api/GlobaltagtiporesolucaocontestacaoApi', './api/GlobaltagtokenApi', './api/GlobaltagtransferenciabancariaApi', './api/GlobaltagusuarioApi', './api/GlobaltagusuariotokenApi', './api/GlobaltagwebhookApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AcordoDetalheResponse'), require('./model/AcordoResponse'), require('./model/AdesaoPagamentoSabadoResponse'), require('./model/AdicionalDetalheResponse'), require('./model/AdicionalPersist'), require('./model/AdicionalResponse'), require('./model/AdicionalUpdate'), require('./model/AjusteFinanceiroResponse'), require('./model/AlterarProdutoRequest'), require('./model/AnexoNotificacaoEmailRequest'), require('./model/AntecipacaoResponse'), require('./model/AntecipacaoSimuladaDetalhesResponse'), require('./model/AntecipacaoSimuladaLoteResponse'), require('./model/AntecipacaoSimuladaResponse'), require('./model/AnuidadeResponse'), require('./model/AplicacaoMobileEmissorResponse'), require('./model/AplicacaoMobilePersistValue'), require('./model/AplicacaoMobileResponse'), require('./model/AplicacaoMobileUpdateValue'), require('./model/ArquivoAUDResponse'), require('./model/ArquivoAjusteLoteResponse'), require('./model/ArquivoDetalheResponse'), require('./model/ArquivoDetalhesPersist'), require('./model/ArquivoParametroAUDResponse'), require('./model/ArquivoParametroResponse'), require('./model/ArquivoPersist'), require('./model/ArquivoResponse'), require('./model/AtendimentoClienteResponse'), require('./model/AtribuirAssinaturaClientePersist'), require('./model/AuthToken'), require('./model/AutorizacaoOnUsRequest'), require('./model/AvisoViagemResponse'), require('./model/BancoResponse'), require('./model/BasePartialUpdateValue'), require('./model/BasePersistValue'), require('./model/BaseResponse'), require('./model/BaseUpdateValue'), require('./model/BeneficioPagamentoAtrasoResponse'), require('./model/BinResponse'), require('./model/BodyAccessToken'), require('./model/BoletoEmailRequest'), require('./model/BoletoListarResponse'), require('./model/BoletoRequest'), require('./model/BoletoResponse'), require('./model/CampanhaPersist'), require('./model/CampanhaResponse'), require('./model/CampanhaUpdateValue'), require('./model/CampoCodificadoDescricaoResponse'), require('./model/CancelamentoTransacaoOnUsRequest'), require('./model/CancelamentoTransacaoPorIdCartaoRequest'), require('./model/CartaoDetalheResponse'), require('./model/CartaoEmbossingRequest'), require('./model/CartaoEmbossingResponse'), require('./model/CartaoEmissorResponse'), require('./model/CartaoImpressaoProvisorioResponse'), require('./model/CartaoImpressaoResponse'), require('./model/CartaoMultiAppImpressaoResponse'), require('./model/CartaoPayAtualizarChaveResponse'), require('./model/CartaoPayCadastroResponse'), require('./model/CartaoPayConfirmarChaveResponse'), require('./model/CartaoPayDetalheResponse'), require('./model/CartaoPayKeyUpdate'), require('./model/CartaoPayPersist'), require('./model/CartaoPayResponse'), require('./model/CartaoPayUpdate'), require('./model/CartaoResponse'), require('./model/CdtDetalheOportunidadeAUD'), require('./model/CdtTipoResolucaoContestacao'), require('./model/ChaveCriptografiaRequest'), require('./model/ChaveCriptografiaResponse'), require('./model/CodigoChargebackResponse'), require('./model/CodigoSegurancaEMAILPersist'), require('./model/CodigoSegurancaResponse'), require('./model/CodigoSegurancaSMSPersist'), require('./model/CodigoSegurancaSMSRequest'), require('./model/CompraContestadaCartaoDetalheResponse'), require('./model/CompraContestadaCartaoResponse'), require('./model/CompraContestadaTransacaoResponse'), require('./model/CompraResponse'), require('./model/ConfiguracaoEmailPersist'), require('./model/ConfiguracaoEmailResponse'), require('./model/ConfiguracaoRegistroCobrancaPersist'), require('./model/ConfiguracaoRegistroCobrancaResponse'), require('./model/ConfiguracaoRotativoDetalheResponse'), require('./model/ConfiguracaoRotativoPersist'), require('./model/ConsultaCadastroEstabelecimentoDTO'), require('./model/ContaBancariaPortadorPersistValue'), require('./model/ContaBancariaPortadorResponse'), require('./model/ContaBancariaPortadorUpdateValue'), require('./model/ContaDebitoRecorrentePersistValue'), require('./model/ContaDebitoRecorrenteResponse'), require('./model/ContaDetalheResponse'), require('./model/ContaHistoricoPagamentoResponse'), require('./model/ContaPersistValue'), require('./model/ContaResponse'), require('./model/ControleSegurancaDispositivoPersistencia'), require('./model/ControleSegurancaDispositivoResponse'), require('./model/ControleSegurancaDispositivoUpdateValor'), require('./model/ControleTentativaCadastroResponse'), require('./model/ControleVencimentoResponse'), require('./model/ConvenioPersist'), require('./model/ConvenioResponse'), require('./model/DadosCartaoImpressaoResponse'), require('./model/DadosCartaoResponse'), require('./model/DadosPortadorRequest'), require('./model/DesfazimentoTransacaoOnUsRequest'), require('./model/DetalheAjusteLoteResponse'), require('./model/DetalheAjusteLoteUpdate'), require('./model/DetalheOperacaoResponse'), require('./model/DetalheOportunidadePersistValue'), require('./model/DetalheOportunidadeResponse'), require('./model/DetalheOportunidadeUpdateValue'), require('./model/DetalhesFaturaConsignadaResponse'), require('./model/DetalhesFaturaResponse'), require('./model/DispositivoPersistValue'), require('./model/DispositivoResponse'), require('./model/DividaClienteResponse'), require('./model/DocumentoDetalhadoResponse'), require('./model/DocumentoDetalheResponse'), require('./model/DocumentoIntegracaoResponse'), require('./model/DocumentoParametrosRequest'), require('./model/DocumentoResponse'), require('./model/DocumentoTemplatePersist'), require('./model/DocumentoTemplateResponse'), require('./model/EmissorPierResponse'), require('./model/EmprestimoPessoalRequest'), require('./model/EmprestimoPessoalResponse'), require('./model/EnderecoAprovadoPersistValue'), require('./model/EnderecoAprovadoResponse'), require('./model/EnderecoResponse'), require('./model/EntidadeResponse'), require('./model/EstabelecimentoPersist'), require('./model/EstabelecimentoResponse'), require('./model/EstabelecimentoUpdate'), require('./model/EstagioCartaoResponse'), require('./model/EstagioCartaoUpdate'), require('./model/ExtraInfo'), require('./model/FantasiaBasicaResponse'), require('./model/FaqResponse'), require('./model/FaturaConsignadaDetalheResponse'), require('./model/FaturaConsignadaResponse'), require('./model/FaturaDetalheResponse'), require('./model/FaturaFechadaResponse'), require('./model/FaturaResponse'), require('./model/GradePendenteRequest'), require('./model/GrupoChargebackResponse'), require('./model/GrupoEconomicoDTO'), require('./model/GrupoEconomicoResponse'), require('./model/GrupoOrigemComercialResponse'), require('./model/HistoricoAssessoriaResponse'), require('./model/HistoricoAtrasoFaturaResponse'), require('./model/HistoricoEventosResponse'), require('./model/HistoricoImpressaoCartaoResponse'), require('./model/HistoricoPagamentoResponse'), require('./model/HistoricoTelefoneResponse'), require('./model/InscricaoAPNResponse'), require('./model/InscricaoApnPersistencia'), require('./model/IntegracaoEmissorPersist'), require('./model/IntegracaoEmissorResponse'), require('./model/IntegrarArquivoRequest'), require('./model/IntegrarDocumentoRequest'), require('./model/JobResponse'), require('./model/LancamentoFaturaResponse'), require('./model/LimiteDisponibilidadeResponse'), require('./model/LogAcessoUsuarioPersistencia'), require('./model/LogAcessoUsuarioResposta'), require('./model/LoteCartoesPrePagosResponse'), require('./model/MCCResponse'), require('./model/MapOfstringAndstring'), require('./model/MaquinetaPersist'), require('./model/MaquinetaResponse'), require('./model/MaquinetaUpdate'), require('./model/MoedaResponse'), require('./model/NotificacaoEmailRequest'), require('./model/NotificacaoPushResponseValue'), require('./model/NotificacaoResponse'), require('./model/NotificacaoSMSResponse'), require('./model/OperacaoCredorPersist'), require('./model/OperacaoCredorResponse'), require('./model/OperacaoCredorUpdate'), require('./model/OperacaoResponse'), require('./model/OperadoraResponse'), require('./model/OportunidadeAUDResponse'), require('./model/OportunidadePersistValue'), require('./model/OportunidadeResponse'), require('./model/OportunidadeUpdateValue'), require('./model/OrigemComercialPersist'), require('./model/OrigemComercialResponse'), require('./model/OrigemComercialUpdate'), require('./model/PageAcordoResponse'), require('./model/PageAjusteResponse'), require('./model/PageAnuidadeResponse'), require('./model/PageAplicacaoMobileResponse'), require('./model/PageArquivoAUDResponse'), require('./model/PageArquivoAjusteLoteResponse'), require('./model/PageArquivoResponse'), require('./model/PageAtendimentoClienteResponse'), require('./model/PageAvisoViagemResponse'), require('./model/PageBancoResponse'), require('./model/PageBaseResponse'), require('./model/PageBinResponse'), require('./model/PageBoletoListarResponse'), require('./model/PageCampanhaResponse'), require('./model/PageCampoCodificadoDescricaoResponse'), require('./model/PageCartaoPayResponse'), require('./model/PageCartaoResponse'), require('./model/PageCodigoChargebackResponse'), require('./model/PageCodigoSegurancaResponse'), require('./model/PageCompraContestadaCartaoResponse'), require('./model/PageCompraContestadaTransacaoResponse'), require('./model/PageCompraResponse'), require('./model/PageConfiguracaoEmailResponse'), require('./model/PageConfiguracaoRotativoResponse'), require('./model/PageContaBancariaPortadorResponse'), require('./model/PageContaDebitoRecorrenteResponse'), require('./model/PageContaDetalheResponse'), require('./model/PageContaHistoricoPagamentoResponse'), require('./model/PageContaResponse'), require('./model/PageControleSegurancaDispositivoResponse'), require('./model/PageControleVencimentoResponse'), require('./model/PageConvenioResponse'), require('./model/PageDetalheAjusteLoteResponse'), require('./model/PageDispositivoResponse'), require('./model/PageDocumentoResponse'), require('./model/PageDocumentoTemplateResponse'), require('./model/PageEmissorPierResponse'), require('./model/PageEnderecoResponse'), require('./model/PageEntidadeResponse'), require('./model/PageEstabelecimentoResponse'), require('./model/PageEstagioCartaoResponse'), require('./model/PageFantasiaBasicaResponse'), require('./model/PageFaqResponse'), require('./model/PageFaturaConsignadaResponse'), require('./model/PageFaturaFechadaResponse'), require('./model/PageFaturaResponse'), require('./model/PageGrupoChargebackResponse'), require('./model/PageGrupoEconomicoResponse'), require('./model/PageGrupoOrigemComercialResponse'), require('./model/PageHistoricoAssessoriaResponse'), require('./model/PageHistoricoAtrasoFaturaResponse'), require('./model/PageHistoricoEventosResponse'), require('./model/PageHistoricoPagamentoResponse'), require('./model/PageInscricaoAPNResponse'), require('./model/PageJobResponse'), require('./model/PageLoteCartoesPrePagosResponse'), require('./model/PageMCCResponse'), require('./model/PageMaquinetaResponse'), require('./model/PageMoedaResponse'), require('./model/PageOperacaoCredorResponse'), require('./model/PageOperacaoResponse'), require('./model/PageOperadoraResponse'), require('./model/PageOportunidadeAUDResponse'), require('./model/PageOportunidadeResponse'), require('./model/PageOrigemComercialResponse'), require('./model/PagePaisResponse'), require('./model/PagePerfilResponse'), require('./model/PagePermissaoResponse'), require('./model/PagePessoaDetalheResponse'), require('./model/PagePessoaResponse'), require('./model/PagePlanoParcelamentoResponse'), require('./model/PagePlataformaMobileResponse'), require('./model/PagePortadorResponse'), require('./model/PageProdutoResponse'), require('./model/PagePromotorResponse'), require('./model/PagePropostaResponse'), require('./model/PagePushResponse'), require('./model/PageRiscoFraudeResponseValue'), require('./model/PageSMSEnvioResponse'), require('./model/PageSMSResponse'), require('./model/PageStatusArquivoResponse'), require('./model/PageStatusCartaoResponse'), require('./model/PageStatusContaResponse'), require('./model/PageStatusContestacaoResponse'), require('./model/PageStatusImpressaoResponse'), require('./model/PageStatusOportunidadeAUDResponse'), require('./model/PageStatusOportunidadeResponse'), require('./model/PageStatusPropostaResponse'), require('./model/PageTaxasRefinanciamentoResponse'), require('./model/PageTelefoneEstabelecimentoResponse'), require('./model/PageTelefoneResponse'), require('./model/PageTemplateNotificacaoResponse'), require('./model/PageTerminalResponse'), require('./model/PageTipoAjusteResponse'), require('./model/PageTipoArquivoResponse'), require('./model/PageTipoBoletoResponse'), require('./model/PageTipoCampanhaResponse'), require('./model/PageTipoChaveResponse'), require('./model/PageTipoDebitoRecorrenteResponse'), require('./model/PageTipoEnderecoResponse'), require('./model/PageTipoEstabelecimentoResponse'), require('./model/PageTipoFaturamentoPorContaResponse'), require('./model/PageTipoFaturamentoResponse'), require('./model/PageTipoOportunidadeAUDResponse'), require('./model/PageTipoOportunidadeResponse'), require('./model/PageTipoOrigemComercialResponse'), require('./model/PageTipoResolucaoContestacaoResponse'), require('./model/PageTipoTelefoneResponse'), require('./model/PageTipoTemplateResponse'), require('./model/PageTipoTerminalResponse'), require('./model/PageTokenResponse'), require('./model/PageTransacaoNaoProcessadaResponse'), require('./model/PageTransacaoProcessadaNaoProcessadaResponse'), require('./model/PageTransacaoResponse'), require('./model/PageTransacoesCorrentesResponse'), require('./model/PageTransferenciaBancariaResponse'), require('./model/PageTransferenciaCreditoContaBancariaResponse'), require('./model/PageTransferenciaResponse'), require('./model/PageUsuarioContasResponse'), require('./model/PageUsuarioResponse'), require('./model/PageUsuarioTokenResponse'), require('./model/PageVinculoEstabelecimentoAdquirenteResponse'), require('./model/PageVinculoOperacaoResponse'), require('./model/PageWebHookResponse'), require('./model/PaisResponse'), require('./model/ParametroEmissorResponse'), require('./model/ParametroProdutoResponse'), require('./model/ParcelamentoTransferenciaResponse'), require('./model/PerfilPersist'), require('./model/PerfilResponse'), require('./model/PerfilUpdate'), require('./model/PermissaoPersist'), require('./model/PermissaoResponse'), require('./model/PermissaoUpdate'), require('./model/PessoaDetalheResponse'), require('./model/PessoaFisicaAprovadaPersistValue'), require('./model/PessoaFisicaAprovadaResponse'), require('./model/PessoaJuridicaAprovadaPersist'), require('./model/PessoaJuridicaAprovadaResponse'), require('./model/PessoaResponse'), require('./model/PlanoCampanhaPersist'), require('./model/PlanoCampanhaResponse'), require('./model/PlanoCampanhaUpdateValue'), require('./model/PlanoParcelamentoEmprestimoResponse'), require('./model/PlanoParcelamentoResponse'), require('./model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest'), require('./model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse'), require('./model/PlataformaMobilePersistValue'), require('./model/PlataformaMobileResponse'), require('./model/PlataformaMobileUpdateValue'), require('./model/PortadorResponse'), require('./model/ProdutoDetalhesResponse'), require('./model/ProdutoOrigemResponse'), require('./model/ProdutoResponse'), require('./model/PromotorResponse'), require('./model/PropostaResponse'), require('./model/PropriedadeDocumentoRequest'), require('./model/PushAPNSPersistValue'), require('./model/PushFCMGCMPersistValue'), require('./model/ReferenciaComercialAprovadoPersistValue'), require('./model/ReferenciaComercialAprovadoResponse'), require('./model/ReferenciaIdPersist'), require('./model/RiscoFraudeDetalhadoResponse'), require('./model/RiscoFraudeResponseValue'), require('./model/SMSEnvioResponse'), require('./model/SMSPersistValue'), require('./model/SocioAprovadoPersistValue'), require('./model/SocioAprovadoResponse'), require('./model/StatusArquivoResponse'), require('./model/StatusCartaoResponse'), require('./model/StatusContaResponse'), require('./model/StatusContestacaoResponse'), require('./model/StatusImpressaoResponse'), require('./model/StatusOportunidadeAUDResponse'), require('./model/StatusOportunidadePersistValue'), require('./model/StatusOportunidadeResponse'), require('./model/StatusPropostaResponse'), require('./model/StatusPropostaUpdate'), require('./model/TaxaAntecipacaoRequest'), require('./model/TaxaJurosContaListaResponse'), require('./model/TaxaJurosContaPersistValue'), require('./model/TaxaJurosContaResponse'), require('./model/TaxasRefinanciamentoResponse'), require('./model/TelefoneAdicionalPersist'), require('./model/TelefoneAdicionalUpdate'), require('./model/TelefoneEstabelecimentoPersist'), require('./model/TelefoneEstabelecimentoResponse'), require('./model/TelefoneEstabelecimentoUpdate'), require('./model/TelefonePessoaAprovadaPersistValue'), require('./model/TelefonePessoaAprovadaResponse'), require('./model/TelefoneResponse'), require('./model/TemplateNotificacaoDetalheResponse'), require('./model/TemplateNotificacaoResponse'), require('./model/TerminalPersist'), require('./model/TerminalResponse'), require('./model/TerminalUpdateValue'), require('./model/TipoAjusteResponse'), require('./model/TipoArquivoResponse'), require('./model/TipoBoletoResponse'), require('./model/TipoCampanhaResponse'), require('./model/TipoChaveResponse'), require('./model/TipoDebitoRecorrenteResponse'), require('./model/TipoEnderecoResponse'), require('./model/TipoEstabelecimentoResponse'), require('./model/TipoFaturamentoPersistValue'), require('./model/TipoFaturamentoPorContaPersistValue'), require('./model/TipoFaturamentoPorContaResponse'), require('./model/TipoFaturamentoResponse'), require('./model/TipoOperacaoResponse'), require('./model/TipoOportunidadeAUDResponse'), require('./model/TipoOportunidadePersistValue'), require('./model/TipoOportunidadeResponse'), require('./model/TipoOrigemComercialResponse'), require('./model/TipoResolucaoResponse'), require('./model/TipoTelefoneResponse'), require('./model/TipoTemplateRequest'), require('./model/TipoTemplateResponse'), require('./model/TipoTerminalResponse'), require('./model/TipoTransacaoAjusteResponse'), require('./model/TokenPartialUpdateValue'), require('./model/TokenPersistValue'), require('./model/TokenResponse'), require('./model/TokenUpdateValue'), require('./model/TransacaoCorrenteResponse'), require('./model/TransacaoNaoProcessadaResponse'), require('./model/TransacaoOnUsPorIdCartaoRequest'), require('./model/TransacaoOnUsRequest'), require('./model/TransacaoOnUsResponse'), require('./model/TransacaoPayQueryRequest'), require('./model/TransacaoPayQueryResponse'), require('./model/TransacaoPaySecureRequest'), require('./model/TransacaoProcessadaNaoProcessadaResponse'), require('./model/TransacoesCorrentesResponse'), require('./model/TransferenciaBancariaPersistValue'), require('./model/TransferenciaBancariaResponse'), require('./model/TransferenciaCreditoContaBancariaListaResponse'), require('./model/TransferenciaCreditoContaBancariaPersistValue'), require('./model/TransferenciaCreditoContaBancariaResponse'), require('./model/TransferenciaDetalheResponse'), require('./model/TransferenciaResponse'), require('./model/UsuarioContasResponse'), require('./model/UsuarioLdapPersist'), require('./model/UsuarioPersistencia'), require('./model/UsuarioResponse'), require('./model/UsuarioSenhaFortePersistencia'), require('./model/UsuarioTokenPersistencia'), require('./model/UsuarioTokenResponse'), require('./model/UsuarioUpdateValue'), require('./model/UsuarioldapUpdateObjectDescription'), require('./model/ValidaCVVRequest'), require('./model/ValidaCartaoResponse'), require('./model/ValidaSenhaCartaoResponse'), require('./model/VinculoEstabelecimentoAdquirentePersist'), require('./model/VinculoEstabelecimentoAdquirenteResponse'), require('./model/VinculoOperacaoPersist'), require('./model/VinculoOperacaoResponse'), require('./model/WebHookPersistValue'), require('./model/WebHookResponse'), require('./api/GlobaltagbinApi'), require('./api/GlobaltagtipochaveApi'), require('./api/GlobaltagajustefinanceiroApi'), require('./api/GlobaltagantecipacaoApi'), require('./api/GlobaltagaplicacaomobileApi'), require('./api/GlobaltagarquivoApi'), require('./api/GlobaltagautorizacaoApi'), require('./api/GlobaltagavisoviagemApi'), require('./api/GlobaltagbaseApi'), require('./api/GlobaltagboletoApi'), require('./api/GlobaltagcadastroclienteApi'), require('./api/GlobaltagcadastrogeralApi'), require('./api/GlobaltagcartaoApi'), require('./api/GlobaltagchavecriptografiaApi'), require('./api/GlobaltagcompracontestadaApi'), require('./api/GlobaltagcontaApi'), require('./api/GlobaltagdebitorecorrenteApi'), require('./api/GlobaltagdispositivoApi'), require('./api/GlobaltagdocumentoApi'), require('./api/GlobaltagendereconacionalApi'), require('./api/GlobaltagestabelecimentoApi'), require('./api/GlobaltagfaqApi'), require('./api/GlobaltagfaturaApi'), require('./api/GlobaltagfaturamentoApi'), require('./api/GlobaltaggrupochagebackApi'), require('./api/GlobaltaginscricaoapnApi'), require('./api/GlobaltagjobApi'), require('./api/GlobaltaglimiteApi'), require('./api/GlobaltaglimitedisponibilidadeApi'), require('./api/GlobaltaglogApi'), require('./api/GlobaltagnotificacaoApi'), require('./api/GlobaltagoportunidadeApi'), require('./api/GlobaltagpagamentoApi'), require('./api/GlobaltagparametroemissorApi'), require('./api/GlobaltagpayApi'), require('./api/GlobaltagpermissaopaisApi'), require('./api/GlobaltagplataformamobileApi'), require('./api/GlobaltagpropostaApi'), require('./api/GlobaltagriscofraudeApi'), require('./api/GlobaltagservicocontaApi'), require('./api/GlobaltagsmsApi'), require('./api/GlobaltagstatuscontestacaoApi'), require('./api/GlobaltagstatusparametroApi'), require('./api/GlobaltagtiporesolucaocontestacaoApi'), require('./api/GlobaltagtokenApi'), require('./api/GlobaltagtransferenciabancariaApi'), require('./api/GlobaltagusuarioApi'), require('./api/GlobaltagusuariotokenApi'), require('./api/GlobaltagwebhookApi'));
  }
}(function(ApiClient, AcordoDetalheResponse, AcordoResponse, AdesaoPagamentoSabadoResponse, AdicionalDetalheResponse, AdicionalPersist, AdicionalResponse, AdicionalUpdate, AjusteFinanceiroResponse, AlterarProdutoRequest, AnexoNotificacaoEmailRequest, AntecipacaoResponse, AntecipacaoSimuladaDetalhesResponse, AntecipacaoSimuladaLoteResponse, AntecipacaoSimuladaResponse, AnuidadeResponse, AplicacaoMobileEmissorResponse, AplicacaoMobilePersistValue, AplicacaoMobileResponse, AplicacaoMobileUpdateValue, ArquivoAUDResponse, ArquivoAjusteLoteResponse, ArquivoDetalheResponse, ArquivoDetalhesPersist, ArquivoParametroAUDResponse, ArquivoParametroResponse, ArquivoPersist, ArquivoResponse, AtendimentoClienteResponse, AtribuirAssinaturaClientePersist, AuthToken, AutorizacaoOnUsRequest, AvisoViagemResponse, BancoResponse, BasePartialUpdateValue, BasePersistValue, BaseResponse, BaseUpdateValue, BeneficioPagamentoAtrasoResponse, BinResponse, BodyAccessToken, BoletoEmailRequest, BoletoListarResponse, BoletoRequest, BoletoResponse, CampanhaPersist, CampanhaResponse, CampanhaUpdateValue, CampoCodificadoDescricaoResponse, CancelamentoTransacaoOnUsRequest, CancelamentoTransacaoPorIdCartaoRequest, CartaoDetalheResponse, CartaoEmbossingRequest, CartaoEmbossingResponse, CartaoEmissorResponse, CartaoImpressaoProvisorioResponse, CartaoImpressaoResponse, CartaoMultiAppImpressaoResponse, CartaoPayAtualizarChaveResponse, CartaoPayCadastroResponse, CartaoPayConfirmarChaveResponse, CartaoPayDetalheResponse, CartaoPayKeyUpdate, CartaoPayPersist, CartaoPayResponse, CartaoPayUpdate, CartaoResponse, CdtDetalheOportunidadeAUD, CdtTipoResolucaoContestacao, ChaveCriptografiaRequest, ChaveCriptografiaResponse, CodigoChargebackResponse, CodigoSegurancaEMAILPersist, CodigoSegurancaResponse, CodigoSegurancaSMSPersist, CodigoSegurancaSMSRequest, CompraContestadaCartaoDetalheResponse, CompraContestadaCartaoResponse, CompraContestadaTransacaoResponse, CompraResponse, ConfiguracaoEmailPersist, ConfiguracaoEmailResponse, ConfiguracaoRegistroCobrancaPersist, ConfiguracaoRegistroCobrancaResponse, ConfiguracaoRotativoDetalheResponse, ConfiguracaoRotativoPersist, ConsultaCadastroEstabelecimentoDTO, ContaBancariaPortadorPersistValue, ContaBancariaPortadorResponse, ContaBancariaPortadorUpdateValue, ContaDebitoRecorrentePersistValue, ContaDebitoRecorrenteResponse, ContaDetalheResponse, ContaHistoricoPagamentoResponse, ContaPersistValue, ContaResponse, ControleSegurancaDispositivoPersistencia, ControleSegurancaDispositivoResponse, ControleSegurancaDispositivoUpdateValor, ControleTentativaCadastroResponse, ControleVencimentoResponse, ConvenioPersist, ConvenioResponse, DadosCartaoImpressaoResponse, DadosCartaoResponse, DadosPortadorRequest, DesfazimentoTransacaoOnUsRequest, DetalheAjusteLoteResponse, DetalheAjusteLoteUpdate, DetalheOperacaoResponse, DetalheOportunidadePersistValue, DetalheOportunidadeResponse, DetalheOportunidadeUpdateValue, DetalhesFaturaConsignadaResponse, DetalhesFaturaResponse, DispositivoPersistValue, DispositivoResponse, DividaClienteResponse, DocumentoDetalhadoResponse, DocumentoDetalheResponse, DocumentoIntegracaoResponse, DocumentoParametrosRequest, DocumentoResponse, DocumentoTemplatePersist, DocumentoTemplateResponse, EmissorPierResponse, EmprestimoPessoalRequest, EmprestimoPessoalResponse, EnderecoAprovadoPersistValue, EnderecoAprovadoResponse, EnderecoResponse, EntidadeResponse, EstabelecimentoPersist, EstabelecimentoResponse, EstabelecimentoUpdate, EstagioCartaoResponse, EstagioCartaoUpdate, ExtraInfo, FantasiaBasicaResponse, FaqResponse, FaturaConsignadaDetalheResponse, FaturaConsignadaResponse, FaturaDetalheResponse, FaturaFechadaResponse, FaturaResponse, GradePendenteRequest, GrupoChargebackResponse, GrupoEconomicoDTO, GrupoEconomicoResponse, GrupoOrigemComercialResponse, HistoricoAssessoriaResponse, HistoricoAtrasoFaturaResponse, HistoricoEventosResponse, HistoricoImpressaoCartaoResponse, HistoricoPagamentoResponse, HistoricoTelefoneResponse, InscricaoAPNResponse, InscricaoApnPersistencia, IntegracaoEmissorPersist, IntegracaoEmissorResponse, IntegrarArquivoRequest, IntegrarDocumentoRequest, JobResponse, LancamentoFaturaResponse, LimiteDisponibilidadeResponse, LogAcessoUsuarioPersistencia, LogAcessoUsuarioResposta, LoteCartoesPrePagosResponse, MCCResponse, MapOfstringAndstring, MaquinetaPersist, MaquinetaResponse, MaquinetaUpdate, MoedaResponse, NotificacaoEmailRequest, NotificacaoPushResponseValue, NotificacaoResponse, NotificacaoSMSResponse, OperacaoCredorPersist, OperacaoCredorResponse, OperacaoCredorUpdate, OperacaoResponse, OperadoraResponse, OportunidadeAUDResponse, OportunidadePersistValue, OportunidadeResponse, OportunidadeUpdateValue, OrigemComercialPersist, OrigemComercialResponse, OrigemComercialUpdate, PageAcordoResponse, PageAjusteResponse, PageAnuidadeResponse, PageAplicacaoMobileResponse, PageArquivoAUDResponse, PageArquivoAjusteLoteResponse, PageArquivoResponse, PageAtendimentoClienteResponse, PageAvisoViagemResponse, PageBancoResponse, PageBaseResponse, PageBinResponse, PageBoletoListarResponse, PageCampanhaResponse, PageCampoCodificadoDescricaoResponse, PageCartaoPayResponse, PageCartaoResponse, PageCodigoChargebackResponse, PageCodigoSegurancaResponse, PageCompraContestadaCartaoResponse, PageCompraContestadaTransacaoResponse, PageCompraResponse, PageConfiguracaoEmailResponse, PageConfiguracaoRotativoResponse, PageContaBancariaPortadorResponse, PageContaDebitoRecorrenteResponse, PageContaDetalheResponse, PageContaHistoricoPagamentoResponse, PageContaResponse, PageControleSegurancaDispositivoResponse, PageControleVencimentoResponse, PageConvenioResponse, PageDetalheAjusteLoteResponse, PageDispositivoResponse, PageDocumentoResponse, PageDocumentoTemplateResponse, PageEmissorPierResponse, PageEnderecoResponse, PageEntidadeResponse, PageEstabelecimentoResponse, PageEstagioCartaoResponse, PageFantasiaBasicaResponse, PageFaqResponse, PageFaturaConsignadaResponse, PageFaturaFechadaResponse, PageFaturaResponse, PageGrupoChargebackResponse, PageGrupoEconomicoResponse, PageGrupoOrigemComercialResponse, PageHistoricoAssessoriaResponse, PageHistoricoAtrasoFaturaResponse, PageHistoricoEventosResponse, PageHistoricoPagamentoResponse, PageInscricaoAPNResponse, PageJobResponse, PageLoteCartoesPrePagosResponse, PageMCCResponse, PageMaquinetaResponse, PageMoedaResponse, PageOperacaoCredorResponse, PageOperacaoResponse, PageOperadoraResponse, PageOportunidadeAUDResponse, PageOportunidadeResponse, PageOrigemComercialResponse, PagePaisResponse, PagePerfilResponse, PagePermissaoResponse, PagePessoaDetalheResponse, PagePessoaResponse, PagePlanoParcelamentoResponse, PagePlataformaMobileResponse, PagePortadorResponse, PageProdutoResponse, PagePromotorResponse, PagePropostaResponse, PagePushResponse, PageRiscoFraudeResponseValue, PageSMSEnvioResponse, PageSMSResponse, PageStatusArquivoResponse, PageStatusCartaoResponse, PageStatusContaResponse, PageStatusContestacaoResponse, PageStatusImpressaoResponse, PageStatusOportunidadeAUDResponse, PageStatusOportunidadeResponse, PageStatusPropostaResponse, PageTaxasRefinanciamentoResponse, PageTelefoneEstabelecimentoResponse, PageTelefoneResponse, PageTemplateNotificacaoResponse, PageTerminalResponse, PageTipoAjusteResponse, PageTipoArquivoResponse, PageTipoBoletoResponse, PageTipoCampanhaResponse, PageTipoChaveResponse, PageTipoDebitoRecorrenteResponse, PageTipoEnderecoResponse, PageTipoEstabelecimentoResponse, PageTipoFaturamentoPorContaResponse, PageTipoFaturamentoResponse, PageTipoOportunidadeAUDResponse, PageTipoOportunidadeResponse, PageTipoOrigemComercialResponse, PageTipoResolucaoContestacaoResponse, PageTipoTelefoneResponse, PageTipoTemplateResponse, PageTipoTerminalResponse, PageTokenResponse, PageTransacaoNaoProcessadaResponse, PageTransacaoProcessadaNaoProcessadaResponse, PageTransacaoResponse, PageTransacoesCorrentesResponse, PageTransferenciaBancariaResponse, PageTransferenciaCreditoContaBancariaResponse, PageTransferenciaResponse, PageUsuarioContasResponse, PageUsuarioResponse, PageUsuarioTokenResponse, PageVinculoEstabelecimentoAdquirenteResponse, PageVinculoOperacaoResponse, PageWebHookResponse, PaisResponse, ParametroEmissorResponse, ParametroProdutoResponse, ParcelamentoTransferenciaResponse, PerfilPersist, PerfilResponse, PerfilUpdate, PermissaoPersist, PermissaoResponse, PermissaoUpdate, PessoaDetalheResponse, PessoaFisicaAprovadaPersistValue, PessoaFisicaAprovadaResponse, PessoaJuridicaAprovadaPersist, PessoaJuridicaAprovadaResponse, PessoaResponse, PlanoCampanhaPersist, PlanoCampanhaResponse, PlanoCampanhaUpdateValue, PlanoParcelamentoEmprestimoResponse, PlanoParcelamentoResponse, PlanoParcelamentoTransferenciaCreditoContaBancariaRequest, PlanoParcelamentoTransferenciaCreditoContaBancariaResponse, PlataformaMobilePersistValue, PlataformaMobileResponse, PlataformaMobileUpdateValue, PortadorResponse, ProdutoDetalhesResponse, ProdutoOrigemResponse, ProdutoResponse, PromotorResponse, PropostaResponse, PropriedadeDocumentoRequest, PushAPNSPersistValue, PushFCMGCMPersistValue, ReferenciaComercialAprovadoPersistValue, ReferenciaComercialAprovadoResponse, ReferenciaIdPersist, RiscoFraudeDetalhadoResponse, RiscoFraudeResponseValue, SMSEnvioResponse, SMSPersistValue, SocioAprovadoPersistValue, SocioAprovadoResponse, StatusArquivoResponse, StatusCartaoResponse, StatusContaResponse, StatusContestacaoResponse, StatusImpressaoResponse, StatusOportunidadeAUDResponse, StatusOportunidadePersistValue, StatusOportunidadeResponse, StatusPropostaResponse, StatusPropostaUpdate, TaxaAntecipacaoRequest, TaxaJurosContaListaResponse, TaxaJurosContaPersistValue, TaxaJurosContaResponse, TaxasRefinanciamentoResponse, TelefoneAdicionalPersist, TelefoneAdicionalUpdate, TelefoneEstabelecimentoPersist, TelefoneEstabelecimentoResponse, TelefoneEstabelecimentoUpdate, TelefonePessoaAprovadaPersistValue, TelefonePessoaAprovadaResponse, TelefoneResponse, TemplateNotificacaoDetalheResponse, TemplateNotificacaoResponse, TerminalPersist, TerminalResponse, TerminalUpdateValue, TipoAjusteResponse, TipoArquivoResponse, TipoBoletoResponse, TipoCampanhaResponse, TipoChaveResponse, TipoDebitoRecorrenteResponse, TipoEnderecoResponse, TipoEstabelecimentoResponse, TipoFaturamentoPersistValue, TipoFaturamentoPorContaPersistValue, TipoFaturamentoPorContaResponse, TipoFaturamentoResponse, TipoOperacaoResponse, TipoOportunidadeAUDResponse, TipoOportunidadePersistValue, TipoOportunidadeResponse, TipoOrigemComercialResponse, TipoResolucaoResponse, TipoTelefoneResponse, TipoTemplateRequest, TipoTemplateResponse, TipoTerminalResponse, TipoTransacaoAjusteResponse, TokenPartialUpdateValue, TokenPersistValue, TokenResponse, TokenUpdateValue, TransacaoCorrenteResponse, TransacaoNaoProcessadaResponse, TransacaoOnUsPorIdCartaoRequest, TransacaoOnUsRequest, TransacaoOnUsResponse, TransacaoPayQueryRequest, TransacaoPayQueryResponse, TransacaoPaySecureRequest, TransacaoProcessadaNaoProcessadaResponse, TransacoesCorrentesResponse, TransferenciaBancariaPersistValue, TransferenciaBancariaResponse, TransferenciaCreditoContaBancariaListaResponse, TransferenciaCreditoContaBancariaPersistValue, TransferenciaCreditoContaBancariaResponse, TransferenciaDetalheResponse, TransferenciaResponse, UsuarioContasResponse, UsuarioLdapPersist, UsuarioPersistencia, UsuarioResponse, UsuarioSenhaFortePersistencia, UsuarioTokenPersistencia, UsuarioTokenResponse, UsuarioUpdateValue, UsuarioldapUpdateObjectDescription, ValidaCVVRequest, ValidaCartaoResponse, ValidaSenhaCartaoResponse, VinculoEstabelecimentoAdquirentePersist, VinculoEstabelecimentoAdquirenteResponse, VinculoOperacaoPersist, VinculoOperacaoResponse, WebHookPersistValue, WebHookResponse, GlobaltagbinApi, GlobaltagtipochaveApi, GlobaltagajustefinanceiroApi, GlobaltagantecipacaoApi, GlobaltagaplicacaomobileApi, GlobaltagarquivoApi, GlobaltagautorizacaoApi, GlobaltagavisoviagemApi, GlobaltagbaseApi, GlobaltagboletoApi, GlobaltagcadastroclienteApi, GlobaltagcadastrogeralApi, GlobaltagcartaoApi, GlobaltagchavecriptografiaApi, GlobaltagcompracontestadaApi, GlobaltagcontaApi, GlobaltagdebitorecorrenteApi, GlobaltagdispositivoApi, GlobaltagdocumentoApi, GlobaltagendereconacionalApi, GlobaltagestabelecimentoApi, GlobaltagfaqApi, GlobaltagfaturaApi, GlobaltagfaturamentoApi, GlobaltaggrupochagebackApi, GlobaltaginscricaoapnApi, GlobaltagjobApi, GlobaltaglimiteApi, GlobaltaglimitedisponibilidadeApi, GlobaltaglogApi, GlobaltagnotificacaoApi, GlobaltagoportunidadeApi, GlobaltagpagamentoApi, GlobaltagparametroemissorApi, GlobaltagpayApi, GlobaltagpermissaopaisApi, GlobaltagplataformamobileApi, GlobaltagpropostaApi, GlobaltagriscofraudeApi, GlobaltagservicocontaApi, GlobaltagsmsApi, GlobaltagstatuscontestacaoApi, GlobaltagstatusparametroApi, GlobaltagtiporesolucaocontestacaoApi, GlobaltagtokenApi, GlobaltagtransferenciabancariaApi, GlobaltagusuarioApi, GlobaltagusuariotokenApi, GlobaltagwebhookApi) {
  'use strict';

  /**
   * Gest\u00E3o de pagamento eletr\u00F4nicos como servi\u00E7o.<br>
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
   * @version 2.68.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AcordoDetalheResponse model constructor.
     * @property {module:model/AcordoDetalheResponse}
     */
    AcordoDetalheResponse: AcordoDetalheResponse,
    /**
     * The AcordoResponse model constructor.
     * @property {module:model/AcordoResponse}
     */
    AcordoResponse: AcordoResponse,
    /**
     * The AdesaoPagamentoSabadoResponse model constructor.
     * @property {module:model/AdesaoPagamentoSabadoResponse}
     */
    AdesaoPagamentoSabadoResponse: AdesaoPagamentoSabadoResponse,
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
     * The AplicacaoMobileEmissorResponse model constructor.
     * @property {module:model/AplicacaoMobileEmissorResponse}
     */
    AplicacaoMobileEmissorResponse: AplicacaoMobileEmissorResponse,
    /**
     * The AplicacaoMobilePersistValue model constructor.
     * @property {module:model/AplicacaoMobilePersistValue}
     */
    AplicacaoMobilePersistValue: AplicacaoMobilePersistValue,
    /**
     * The AplicacaoMobileResponse model constructor.
     * @property {module:model/AplicacaoMobileResponse}
     */
    AplicacaoMobileResponse: AplicacaoMobileResponse,
    /**
     * The AplicacaoMobileUpdateValue model constructor.
     * @property {module:model/AplicacaoMobileUpdateValue}
     */
    AplicacaoMobileUpdateValue: AplicacaoMobileUpdateValue,
    /**
     * The ArquivoAUDResponse model constructor.
     * @property {module:model/ArquivoAUDResponse}
     */
    ArquivoAUDResponse: ArquivoAUDResponse,
    /**
     * The ArquivoAjusteLoteResponse model constructor.
     * @property {module:model/ArquivoAjusteLoteResponse}
     */
    ArquivoAjusteLoteResponse: ArquivoAjusteLoteResponse,
    /**
     * The ArquivoDetalheResponse model constructor.
     * @property {module:model/ArquivoDetalheResponse}
     */
    ArquivoDetalheResponse: ArquivoDetalheResponse,
    /**
     * The ArquivoDetalhesPersist model constructor.
     * @property {module:model/ArquivoDetalhesPersist}
     */
    ArquivoDetalhesPersist: ArquivoDetalhesPersist,
    /**
     * The ArquivoParametroAUDResponse model constructor.
     * @property {module:model/ArquivoParametroAUDResponse}
     */
    ArquivoParametroAUDResponse: ArquivoParametroAUDResponse,
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
     * The AvisoViagemResponse model constructor.
     * @property {module:model/AvisoViagemResponse}
     */
    AvisoViagemResponse: AvisoViagemResponse,
    /**
     * The BancoResponse model constructor.
     * @property {module:model/BancoResponse}
     */
    BancoResponse: BancoResponse,
    /**
     * The BasePartialUpdateValue model constructor.
     * @property {module:model/BasePartialUpdateValue}
     */
    BasePartialUpdateValue: BasePartialUpdateValue,
    /**
     * The BasePersistValue model constructor.
     * @property {module:model/BasePersistValue}
     */
    BasePersistValue: BasePersistValue,
    /**
     * The BaseResponse model constructor.
     * @property {module:model/BaseResponse}
     */
    BaseResponse: BaseResponse,
    /**
     * The BaseUpdateValue model constructor.
     * @property {module:model/BaseUpdateValue}
     */
    BaseUpdateValue: BaseUpdateValue,
    /**
     * The BeneficioPagamentoAtrasoResponse model constructor.
     * @property {module:model/BeneficioPagamentoAtrasoResponse}
     */
    BeneficioPagamentoAtrasoResponse: BeneficioPagamentoAtrasoResponse,
    /**
     * The BinResponse model constructor.
     * @property {module:model/BinResponse}
     */
    BinResponse: BinResponse,
    /**
     * The BodyAccessToken model constructor.
     * @property {module:model/BodyAccessToken}
     */
    BodyAccessToken: BodyAccessToken,
    /**
     * The BoletoEmailRequest model constructor.
     * @property {module:model/BoletoEmailRequest}
     */
    BoletoEmailRequest: BoletoEmailRequest,
    /**
     * The BoletoListarResponse model constructor.
     * @property {module:model/BoletoListarResponse}
     */
    BoletoListarResponse: BoletoListarResponse,
    /**
     * The BoletoRequest model constructor.
     * @property {module:model/BoletoRequest}
     */
    BoletoRequest: BoletoRequest,
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
     * The CampanhaUpdateValue model constructor.
     * @property {module:model/CampanhaUpdateValue}
     */
    CampanhaUpdateValue: CampanhaUpdateValue,
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
     * The CartaoEmissorResponse model constructor.
     * @property {module:model/CartaoEmissorResponse}
     */
    CartaoEmissorResponse: CartaoEmissorResponse,
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
     * The CartaoMultiAppImpressaoResponse model constructor.
     * @property {module:model/CartaoMultiAppImpressaoResponse}
     */
    CartaoMultiAppImpressaoResponse: CartaoMultiAppImpressaoResponse,
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
     * The CdtTipoResolucaoContestacao model constructor.
     * @property {module:model/CdtTipoResolucaoContestacao}
     */
    CdtTipoResolucaoContestacao: CdtTipoResolucaoContestacao,
    /**
     * The ChaveCriptografiaRequest model constructor.
     * @property {module:model/ChaveCriptografiaRequest}
     */
    ChaveCriptografiaRequest: ChaveCriptografiaRequest,
    /**
     * The ChaveCriptografiaResponse model constructor.
     * @property {module:model/ChaveCriptografiaResponse}
     */
    ChaveCriptografiaResponse: ChaveCriptografiaResponse,
    /**
     * The CodigoChargebackResponse model constructor.
     * @property {module:model/CodigoChargebackResponse}
     */
    CodigoChargebackResponse: CodigoChargebackResponse,
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
     * The CompraContestadaCartaoDetalheResponse model constructor.
     * @property {module:model/CompraContestadaCartaoDetalheResponse}
     */
    CompraContestadaCartaoDetalheResponse: CompraContestadaCartaoDetalheResponse,
    /**
     * The CompraContestadaCartaoResponse model constructor.
     * @property {module:model/CompraContestadaCartaoResponse}
     */
    CompraContestadaCartaoResponse: CompraContestadaCartaoResponse,
    /**
     * The CompraContestadaTransacaoResponse model constructor.
     * @property {module:model/CompraContestadaTransacaoResponse}
     */
    CompraContestadaTransacaoResponse: CompraContestadaTransacaoResponse,
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
     * The ConsultaCadastroEstabelecimentoDTO model constructor.
     * @property {module:model/ConsultaCadastroEstabelecimentoDTO}
     */
    ConsultaCadastroEstabelecimentoDTO: ConsultaCadastroEstabelecimentoDTO,
    /**
     * The ContaBancariaPortadorPersistValue model constructor.
     * @property {module:model/ContaBancariaPortadorPersistValue}
     */
    ContaBancariaPortadorPersistValue: ContaBancariaPortadorPersistValue,
    /**
     * The ContaBancariaPortadorResponse model constructor.
     * @property {module:model/ContaBancariaPortadorResponse}
     */
    ContaBancariaPortadorResponse: ContaBancariaPortadorResponse,
    /**
     * The ContaBancariaPortadorUpdateValue model constructor.
     * @property {module:model/ContaBancariaPortadorUpdateValue}
     */
    ContaBancariaPortadorUpdateValue: ContaBancariaPortadorUpdateValue,
    /**
     * The ContaDebitoRecorrentePersistValue model constructor.
     * @property {module:model/ContaDebitoRecorrentePersistValue}
     */
    ContaDebitoRecorrentePersistValue: ContaDebitoRecorrentePersistValue,
    /**
     * The ContaDebitoRecorrenteResponse model constructor.
     * @property {module:model/ContaDebitoRecorrenteResponse}
     */
    ContaDebitoRecorrenteResponse: ContaDebitoRecorrenteResponse,
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
     * The ContaPersistValue model constructor.
     * @property {module:model/ContaPersistValue}
     */
    ContaPersistValue: ContaPersistValue,
    /**
     * The ContaResponse model constructor.
     * @property {module:model/ContaResponse}
     */
    ContaResponse: ContaResponse,
    /**
     * The ControleSegurancaDispositivoPersistencia model constructor.
     * @property {module:model/ControleSegurancaDispositivoPersistencia}
     */
    ControleSegurancaDispositivoPersistencia: ControleSegurancaDispositivoPersistencia,
    /**
     * The ControleSegurancaDispositivoResponse model constructor.
     * @property {module:model/ControleSegurancaDispositivoResponse}
     */
    ControleSegurancaDispositivoResponse: ControleSegurancaDispositivoResponse,
    /**
     * The ControleSegurancaDispositivoUpdateValor model constructor.
     * @property {module:model/ControleSegurancaDispositivoUpdateValor}
     */
    ControleSegurancaDispositivoUpdateValor: ControleSegurancaDispositivoUpdateValor,
    /**
     * The ControleTentativaCadastroResponse model constructor.
     * @property {module:model/ControleTentativaCadastroResponse}
     */
    ControleTentativaCadastroResponse: ControleTentativaCadastroResponse,
    /**
     * The ControleVencimentoResponse model constructor.
     * @property {module:model/ControleVencimentoResponse}
     */
    ControleVencimentoResponse: ControleVencimentoResponse,
    /**
     * The ConvenioPersist model constructor.
     * @property {module:model/ConvenioPersist}
     */
    ConvenioPersist: ConvenioPersist,
    /**
     * The ConvenioResponse model constructor.
     * @property {module:model/ConvenioResponse}
     */
    ConvenioResponse: ConvenioResponse,
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
     * The DadosPortadorRequest model constructor.
     * @property {module:model/DadosPortadorRequest}
     */
    DadosPortadorRequest: DadosPortadorRequest,
    /**
     * The DesfazimentoTransacaoOnUsRequest model constructor.
     * @property {module:model/DesfazimentoTransacaoOnUsRequest}
     */
    DesfazimentoTransacaoOnUsRequest: DesfazimentoTransacaoOnUsRequest,
    /**
     * The DetalheAjusteLoteResponse model constructor.
     * @property {module:model/DetalheAjusteLoteResponse}
     */
    DetalheAjusteLoteResponse: DetalheAjusteLoteResponse,
    /**
     * The DetalheAjusteLoteUpdate model constructor.
     * @property {module:model/DetalheAjusteLoteUpdate}
     */
    DetalheAjusteLoteUpdate: DetalheAjusteLoteUpdate,
    /**
     * The DetalheOperacaoResponse model constructor.
     * @property {module:model/DetalheOperacaoResponse}
     */
    DetalheOperacaoResponse: DetalheOperacaoResponse,
    /**
     * The DetalheOportunidadePersistValue model constructor.
     * @property {module:model/DetalheOportunidadePersistValue}
     */
    DetalheOportunidadePersistValue: DetalheOportunidadePersistValue,
    /**
     * The DetalheOportunidadeResponse model constructor.
     * @property {module:model/DetalheOportunidadeResponse}
     */
    DetalheOportunidadeResponse: DetalheOportunidadeResponse,
    /**
     * The DetalheOportunidadeUpdateValue model constructor.
     * @property {module:model/DetalheOportunidadeUpdateValue}
     */
    DetalheOportunidadeUpdateValue: DetalheOportunidadeUpdateValue,
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
     * The DispositivoPersistValue model constructor.
     * @property {module:model/DispositivoPersistValue}
     */
    DispositivoPersistValue: DispositivoPersistValue,
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
     * The EmissorPierResponse model constructor.
     * @property {module:model/EmissorPierResponse}
     */
    EmissorPierResponse: EmissorPierResponse,
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
     * The EnderecoAprovadoPersistValue model constructor.
     * @property {module:model/EnderecoAprovadoPersistValue}
     */
    EnderecoAprovadoPersistValue: EnderecoAprovadoPersistValue,
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
     * The EntidadeResponse model constructor.
     * @property {module:model/EntidadeResponse}
     */
    EntidadeResponse: EntidadeResponse,
    /**
     * The EstabelecimentoPersist model constructor.
     * @property {module:model/EstabelecimentoPersist}
     */
    EstabelecimentoPersist: EstabelecimentoPersist,
    /**
     * The EstabelecimentoResponse model constructor.
     * @property {module:model/EstabelecimentoResponse}
     */
    EstabelecimentoResponse: EstabelecimentoResponse,
    /**
     * The EstabelecimentoUpdate model constructor.
     * @property {module:model/EstabelecimentoUpdate}
     */
    EstabelecimentoUpdate: EstabelecimentoUpdate,
    /**
     * The EstagioCartaoResponse model constructor.
     * @property {module:model/EstagioCartaoResponse}
     */
    EstagioCartaoResponse: EstagioCartaoResponse,
    /**
     * The EstagioCartaoUpdate model constructor.
     * @property {module:model/EstagioCartaoUpdate}
     */
    EstagioCartaoUpdate: EstagioCartaoUpdate,
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
     * The GrupoChargebackResponse model constructor.
     * @property {module:model/GrupoChargebackResponse}
     */
    GrupoChargebackResponse: GrupoChargebackResponse,
    /**
     * The GrupoEconomicoDTO model constructor.
     * @property {module:model/GrupoEconomicoDTO}
     */
    GrupoEconomicoDTO: GrupoEconomicoDTO,
    /**
     * The GrupoEconomicoResponse model constructor.
     * @property {module:model/GrupoEconomicoResponse}
     */
    GrupoEconomicoResponse: GrupoEconomicoResponse,
    /**
     * The GrupoOrigemComercialResponse model constructor.
     * @property {module:model/GrupoOrigemComercialResponse}
     */
    GrupoOrigemComercialResponse: GrupoOrigemComercialResponse,
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
     * The HistoricoPagamentoResponse model constructor.
     * @property {module:model/HistoricoPagamentoResponse}
     */
    HistoricoPagamentoResponse: HistoricoPagamentoResponse,
    /**
     * The HistoricoTelefoneResponse model constructor.
     * @property {module:model/HistoricoTelefoneResponse}
     */
    HistoricoTelefoneResponse: HistoricoTelefoneResponse,
    /**
     * The InscricaoAPNResponse model constructor.
     * @property {module:model/InscricaoAPNResponse}
     */
    InscricaoAPNResponse: InscricaoAPNResponse,
    /**
     * The InscricaoApnPersistencia model constructor.
     * @property {module:model/InscricaoApnPersistencia}
     */
    InscricaoApnPersistencia: InscricaoApnPersistencia,
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
     * The IntegrarArquivoRequest model constructor.
     * @property {module:model/IntegrarArquivoRequest}
     */
    IntegrarArquivoRequest: IntegrarArquivoRequest,
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
     * The LogAcessoUsuarioPersistencia model constructor.
     * @property {module:model/LogAcessoUsuarioPersistencia}
     */
    LogAcessoUsuarioPersistencia: LogAcessoUsuarioPersistencia,
    /**
     * The LogAcessoUsuarioResposta model constructor.
     * @property {module:model/LogAcessoUsuarioResposta}
     */
    LogAcessoUsuarioResposta: LogAcessoUsuarioResposta,
    /**
     * The LoteCartoesPrePagosResponse model constructor.
     * @property {module:model/LoteCartoesPrePagosResponse}
     */
    LoteCartoesPrePagosResponse: LoteCartoesPrePagosResponse,
    /**
     * The MCCResponse model constructor.
     * @property {module:model/MCCResponse}
     */
    MCCResponse: MCCResponse,
    /**
     * The MapOfstringAndstring model constructor.
     * @property {module:model/MapOfstringAndstring}
     */
    MapOfstringAndstring: MapOfstringAndstring,
    /**
     * The MaquinetaPersist model constructor.
     * @property {module:model/MaquinetaPersist}
     */
    MaquinetaPersist: MaquinetaPersist,
    /**
     * The MaquinetaResponse model constructor.
     * @property {module:model/MaquinetaResponse}
     */
    MaquinetaResponse: MaquinetaResponse,
    /**
     * The MaquinetaUpdate model constructor.
     * @property {module:model/MaquinetaUpdate}
     */
    MaquinetaUpdate: MaquinetaUpdate,
    /**
     * The MoedaResponse model constructor.
     * @property {module:model/MoedaResponse}
     */
    MoedaResponse: MoedaResponse,
    /**
     * The NotificacaoEmailRequest model constructor.
     * @property {module:model/NotificacaoEmailRequest}
     */
    NotificacaoEmailRequest: NotificacaoEmailRequest,
    /**
     * The NotificacaoPushResponseValue model constructor.
     * @property {module:model/NotificacaoPushResponseValue}
     */
    NotificacaoPushResponseValue: NotificacaoPushResponseValue,
    /**
     * The NotificacaoResponse model constructor.
     * @property {module:model/NotificacaoResponse}
     */
    NotificacaoResponse: NotificacaoResponse,
    /**
     * The NotificacaoSMSResponse model constructor.
     * @property {module:model/NotificacaoSMSResponse}
     */
    NotificacaoSMSResponse: NotificacaoSMSResponse,
    /**
     * The OperacaoCredorPersist model constructor.
     * @property {module:model/OperacaoCredorPersist}
     */
    OperacaoCredorPersist: OperacaoCredorPersist,
    /**
     * The OperacaoCredorResponse model constructor.
     * @property {module:model/OperacaoCredorResponse}
     */
    OperacaoCredorResponse: OperacaoCredorResponse,
    /**
     * The OperacaoCredorUpdate model constructor.
     * @property {module:model/OperacaoCredorUpdate}
     */
    OperacaoCredorUpdate: OperacaoCredorUpdate,
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
     * The OportunidadePersistValue model constructor.
     * @property {module:model/OportunidadePersistValue}
     */
    OportunidadePersistValue: OportunidadePersistValue,
    /**
     * The OportunidadeResponse model constructor.
     * @property {module:model/OportunidadeResponse}
     */
    OportunidadeResponse: OportunidadeResponse,
    /**
     * The OportunidadeUpdateValue model constructor.
     * @property {module:model/OportunidadeUpdateValue}
     */
    OportunidadeUpdateValue: OportunidadeUpdateValue,
    /**
     * The OrigemComercialPersist model constructor.
     * @property {module:model/OrigemComercialPersist}
     */
    OrigemComercialPersist: OrigemComercialPersist,
    /**
     * The OrigemComercialResponse model constructor.
     * @property {module:model/OrigemComercialResponse}
     */
    OrigemComercialResponse: OrigemComercialResponse,
    /**
     * The OrigemComercialUpdate model constructor.
     * @property {module:model/OrigemComercialUpdate}
     */
    OrigemComercialUpdate: OrigemComercialUpdate,
    /**
     * The PageAcordoResponse model constructor.
     * @property {module:model/PageAcordoResponse}
     */
    PageAcordoResponse: PageAcordoResponse,
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
     * The PageArquivoAUDResponse model constructor.
     * @property {module:model/PageArquivoAUDResponse}
     */
    PageArquivoAUDResponse: PageArquivoAUDResponse,
    /**
     * The PageArquivoAjusteLoteResponse model constructor.
     * @property {module:model/PageArquivoAjusteLoteResponse}
     */
    PageArquivoAjusteLoteResponse: PageArquivoAjusteLoteResponse,
    /**
     * The PageArquivoResponse model constructor.
     * @property {module:model/PageArquivoResponse}
     */
    PageArquivoResponse: PageArquivoResponse,
    /**
     * The PageAtendimentoClienteResponse model constructor.
     * @property {module:model/PageAtendimentoClienteResponse}
     */
    PageAtendimentoClienteResponse: PageAtendimentoClienteResponse,
    /**
     * The PageAvisoViagemResponse model constructor.
     * @property {module:model/PageAvisoViagemResponse}
     */
    PageAvisoViagemResponse: PageAvisoViagemResponse,
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
     * The PageBinResponse model constructor.
     * @property {module:model/PageBinResponse}
     */
    PageBinResponse: PageBinResponse,
    /**
     * The PageBoletoListarResponse model constructor.
     * @property {module:model/PageBoletoListarResponse}
     */
    PageBoletoListarResponse: PageBoletoListarResponse,
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
     * The PageCodigoChargebackResponse model constructor.
     * @property {module:model/PageCodigoChargebackResponse}
     */
    PageCodigoChargebackResponse: PageCodigoChargebackResponse,
    /**
     * The PageCodigoSegurancaResponse model constructor.
     * @property {module:model/PageCodigoSegurancaResponse}
     */
    PageCodigoSegurancaResponse: PageCodigoSegurancaResponse,
    /**
     * The PageCompraContestadaCartaoResponse model constructor.
     * @property {module:model/PageCompraContestadaCartaoResponse}
     */
    PageCompraContestadaCartaoResponse: PageCompraContestadaCartaoResponse,
    /**
     * The PageCompraContestadaTransacaoResponse model constructor.
     * @property {module:model/PageCompraContestadaTransacaoResponse}
     */
    PageCompraContestadaTransacaoResponse: PageCompraContestadaTransacaoResponse,
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
     * The PageContaDebitoRecorrenteResponse model constructor.
     * @property {module:model/PageContaDebitoRecorrenteResponse}
     */
    PageContaDebitoRecorrenteResponse: PageContaDebitoRecorrenteResponse,
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
     * The PageControleSegurancaDispositivoResponse model constructor.
     * @property {module:model/PageControleSegurancaDispositivoResponse}
     */
    PageControleSegurancaDispositivoResponse: PageControleSegurancaDispositivoResponse,
    /**
     * The PageControleVencimentoResponse model constructor.
     * @property {module:model/PageControleVencimentoResponse}
     */
    PageControleVencimentoResponse: PageControleVencimentoResponse,
    /**
     * The PageConvenioResponse model constructor.
     * @property {module:model/PageConvenioResponse}
     */
    PageConvenioResponse: PageConvenioResponse,
    /**
     * The PageDetalheAjusteLoteResponse model constructor.
     * @property {module:model/PageDetalheAjusteLoteResponse}
     */
    PageDetalheAjusteLoteResponse: PageDetalheAjusteLoteResponse,
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
     * The PageEmissorPierResponse model constructor.
     * @property {module:model/PageEmissorPierResponse}
     */
    PageEmissorPierResponse: PageEmissorPierResponse,
    /**
     * The PageEnderecoResponse model constructor.
     * @property {module:model/PageEnderecoResponse}
     */
    PageEnderecoResponse: PageEnderecoResponse,
    /**
     * The PageEntidadeResponse model constructor.
     * @property {module:model/PageEntidadeResponse}
     */
    PageEntidadeResponse: PageEntidadeResponse,
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
     * The PageGrupoChargebackResponse model constructor.
     * @property {module:model/PageGrupoChargebackResponse}
     */
    PageGrupoChargebackResponse: PageGrupoChargebackResponse,
    /**
     * The PageGrupoEconomicoResponse model constructor.
     * @property {module:model/PageGrupoEconomicoResponse}
     */
    PageGrupoEconomicoResponse: PageGrupoEconomicoResponse,
    /**
     * The PageGrupoOrigemComercialResponse model constructor.
     * @property {module:model/PageGrupoOrigemComercialResponse}
     */
    PageGrupoOrigemComercialResponse: PageGrupoOrigemComercialResponse,
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
     * The PageHistoricoPagamentoResponse model constructor.
     * @property {module:model/PageHistoricoPagamentoResponse}
     */
    PageHistoricoPagamentoResponse: PageHistoricoPagamentoResponse,
    /**
     * The PageInscricaoAPNResponse model constructor.
     * @property {module:model/PageInscricaoAPNResponse}
     */
    PageInscricaoAPNResponse: PageInscricaoAPNResponse,
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
     * The PageMCCResponse model constructor.
     * @property {module:model/PageMCCResponse}
     */
    PageMCCResponse: PageMCCResponse,
    /**
     * The PageMaquinetaResponse model constructor.
     * @property {module:model/PageMaquinetaResponse}
     */
    PageMaquinetaResponse: PageMaquinetaResponse,
    /**
     * The PageMoedaResponse model constructor.
     * @property {module:model/PageMoedaResponse}
     */
    PageMoedaResponse: PageMoedaResponse,
    /**
     * The PageOperacaoCredorResponse model constructor.
     * @property {module:model/PageOperacaoCredorResponse}
     */
    PageOperacaoCredorResponse: PageOperacaoCredorResponse,
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
     * The PagePaisResponse model constructor.
     * @property {module:model/PagePaisResponse}
     */
    PagePaisResponse: PagePaisResponse,
    /**
     * The PagePerfilResponse model constructor.
     * @property {module:model/PagePerfilResponse}
     */
    PagePerfilResponse: PagePerfilResponse,
    /**
     * The PagePermissaoResponse model constructor.
     * @property {module:model/PagePermissaoResponse}
     */
    PagePermissaoResponse: PagePermissaoResponse,
    /**
     * The PagePessoaDetalheResponse model constructor.
     * @property {module:model/PagePessoaDetalheResponse}
     */
    PagePessoaDetalheResponse: PagePessoaDetalheResponse,
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
     * The PagePropostaResponse model constructor.
     * @property {module:model/PagePropostaResponse}
     */
    PagePropostaResponse: PagePropostaResponse,
    /**
     * The PagePushResponse model constructor.
     * @property {module:model/PagePushResponse}
     */
    PagePushResponse: PagePushResponse,
    /**
     * The PageRiscoFraudeResponseValue model constructor.
     * @property {module:model/PageRiscoFraudeResponseValue}
     */
    PageRiscoFraudeResponseValue: PageRiscoFraudeResponseValue,
    /**
     * The PageSMSEnvioResponse model constructor.
     * @property {module:model/PageSMSEnvioResponse}
     */
    PageSMSEnvioResponse: PageSMSEnvioResponse,
    /**
     * The PageSMSResponse model constructor.
     * @property {module:model/PageSMSResponse}
     */
    PageSMSResponse: PageSMSResponse,
    /**
     * The PageStatusArquivoResponse model constructor.
     * @property {module:model/PageStatusArquivoResponse}
     */
    PageStatusArquivoResponse: PageStatusArquivoResponse,
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
     * The PageStatusContestacaoResponse model constructor.
     * @property {module:model/PageStatusContestacaoResponse}
     */
    PageStatusContestacaoResponse: PageStatusContestacaoResponse,
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
     * The PageStatusPropostaResponse model constructor.
     * @property {module:model/PageStatusPropostaResponse}
     */
    PageStatusPropostaResponse: PageStatusPropostaResponse,
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
     * The PageTipoArquivoResponse model constructor.
     * @property {module:model/PageTipoArquivoResponse}
     */
    PageTipoArquivoResponse: PageTipoArquivoResponse,
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
     * The PageTipoChaveResponse model constructor.
     * @property {module:model/PageTipoChaveResponse}
     */
    PageTipoChaveResponse: PageTipoChaveResponse,
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
     * The PageTipoEstabelecimentoResponse model constructor.
     * @property {module:model/PageTipoEstabelecimentoResponse}
     */
    PageTipoEstabelecimentoResponse: PageTipoEstabelecimentoResponse,
    /**
     * The PageTipoFaturamentoPorContaResponse model constructor.
     * @property {module:model/PageTipoFaturamentoPorContaResponse}
     */
    PageTipoFaturamentoPorContaResponse: PageTipoFaturamentoPorContaResponse,
    /**
     * The PageTipoFaturamentoResponse model constructor.
     * @property {module:model/PageTipoFaturamentoResponse}
     */
    PageTipoFaturamentoResponse: PageTipoFaturamentoResponse,
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
     * The PageTipoOrigemComercialResponse model constructor.
     * @property {module:model/PageTipoOrigemComercialResponse}
     */
    PageTipoOrigemComercialResponse: PageTipoOrigemComercialResponse,
    /**
     * The PageTipoResolucaoContestacaoResponse model constructor.
     * @property {module:model/PageTipoResolucaoContestacaoResponse}
     */
    PageTipoResolucaoContestacaoResponse: PageTipoResolucaoContestacaoResponse,
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
     * The PageTipoTerminalResponse model constructor.
     * @property {module:model/PageTipoTerminalResponse}
     */
    PageTipoTerminalResponse: PageTipoTerminalResponse,
    /**
     * The PageTokenResponse model constructor.
     * @property {module:model/PageTokenResponse}
     */
    PageTokenResponse: PageTokenResponse,
    /**
     * The PageTransacaoNaoProcessadaResponse model constructor.
     * @property {module:model/PageTransacaoNaoProcessadaResponse}
     */
    PageTransacaoNaoProcessadaResponse: PageTransacaoNaoProcessadaResponse,
    /**
     * The PageTransacaoProcessadaNaoProcessadaResponse model constructor.
     * @property {module:model/PageTransacaoProcessadaNaoProcessadaResponse}
     */
    PageTransacaoProcessadaNaoProcessadaResponse: PageTransacaoProcessadaNaoProcessadaResponse,
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
     * The PageUsuarioContasResponse model constructor.
     * @property {module:model/PageUsuarioContasResponse}
     */
    PageUsuarioContasResponse: PageUsuarioContasResponse,
    /**
     * The PageUsuarioResponse model constructor.
     * @property {module:model/PageUsuarioResponse}
     */
    PageUsuarioResponse: PageUsuarioResponse,
    /**
     * The PageUsuarioTokenResponse model constructor.
     * @property {module:model/PageUsuarioTokenResponse}
     */
    PageUsuarioTokenResponse: PageUsuarioTokenResponse,
    /**
     * The PageVinculoEstabelecimentoAdquirenteResponse model constructor.
     * @property {module:model/PageVinculoEstabelecimentoAdquirenteResponse}
     */
    PageVinculoEstabelecimentoAdquirenteResponse: PageVinculoEstabelecimentoAdquirenteResponse,
    /**
     * The PageVinculoOperacaoResponse model constructor.
     * @property {module:model/PageVinculoOperacaoResponse}
     */
    PageVinculoOperacaoResponse: PageVinculoOperacaoResponse,
    /**
     * The PageWebHookResponse model constructor.
     * @property {module:model/PageWebHookResponse}
     */
    PageWebHookResponse: PageWebHookResponse,
    /**
     * The PaisResponse model constructor.
     * @property {module:model/PaisResponse}
     */
    PaisResponse: PaisResponse,
    /**
     * The ParametroEmissorResponse model constructor.
     * @property {module:model/ParametroEmissorResponse}
     */
    ParametroEmissorResponse: ParametroEmissorResponse,
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
     * The PerfilPersist model constructor.
     * @property {module:model/PerfilPersist}
     */
    PerfilPersist: PerfilPersist,
    /**
     * The PerfilResponse model constructor.
     * @property {module:model/PerfilResponse}
     */
    PerfilResponse: PerfilResponse,
    /**
     * The PerfilUpdate model constructor.
     * @property {module:model/PerfilUpdate}
     */
    PerfilUpdate: PerfilUpdate,
    /**
     * The PermissaoPersist model constructor.
     * @property {module:model/PermissaoPersist}
     */
    PermissaoPersist: PermissaoPersist,
    /**
     * The PermissaoResponse model constructor.
     * @property {module:model/PermissaoResponse}
     */
    PermissaoResponse: PermissaoResponse,
    /**
     * The PermissaoUpdate model constructor.
     * @property {module:model/PermissaoUpdate}
     */
    PermissaoUpdate: PermissaoUpdate,
    /**
     * The PessoaDetalheResponse model constructor.
     * @property {module:model/PessoaDetalheResponse}
     */
    PessoaDetalheResponse: PessoaDetalheResponse,
    /**
     * The PessoaFisicaAprovadaPersistValue model constructor.
     * @property {module:model/PessoaFisicaAprovadaPersistValue}
     */
    PessoaFisicaAprovadaPersistValue: PessoaFisicaAprovadaPersistValue,
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
     * The PlanoCampanhaUpdateValue model constructor.
     * @property {module:model/PlanoCampanhaUpdateValue}
     */
    PlanoCampanhaUpdateValue: PlanoCampanhaUpdateValue,
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
     * The PlataformaMobilePersistValue model constructor.
     * @property {module:model/PlataformaMobilePersistValue}
     */
    PlataformaMobilePersistValue: PlataformaMobilePersistValue,
    /**
     * The PlataformaMobileResponse model constructor.
     * @property {module:model/PlataformaMobileResponse}
     */
    PlataformaMobileResponse: PlataformaMobileResponse,
    /**
     * The PlataformaMobileUpdateValue model constructor.
     * @property {module:model/PlataformaMobileUpdateValue}
     */
    PlataformaMobileUpdateValue: PlataformaMobileUpdateValue,
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
     * The PropostaResponse model constructor.
     * @property {module:model/PropostaResponse}
     */
    PropostaResponse: PropostaResponse,
    /**
     * The PropriedadeDocumentoRequest model constructor.
     * @property {module:model/PropriedadeDocumentoRequest}
     */
    PropriedadeDocumentoRequest: PropriedadeDocumentoRequest,
    /**
     * The PushAPNSPersistValue model constructor.
     * @property {module:model/PushAPNSPersistValue}
     */
    PushAPNSPersistValue: PushAPNSPersistValue,
    /**
     * The PushFCMGCMPersistValue model constructor.
     * @property {module:model/PushFCMGCMPersistValue}
     */
    PushFCMGCMPersistValue: PushFCMGCMPersistValue,
    /**
     * The ReferenciaComercialAprovadoPersistValue model constructor.
     * @property {module:model/ReferenciaComercialAprovadoPersistValue}
     */
    ReferenciaComercialAprovadoPersistValue: ReferenciaComercialAprovadoPersistValue,
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
     * The RiscoFraudeResponseValue model constructor.
     * @property {module:model/RiscoFraudeResponseValue}
     */
    RiscoFraudeResponseValue: RiscoFraudeResponseValue,
    /**
     * The SMSEnvioResponse model constructor.
     * @property {module:model/SMSEnvioResponse}
     */
    SMSEnvioResponse: SMSEnvioResponse,
    /**
     * The SMSPersistValue model constructor.
     * @property {module:model/SMSPersistValue}
     */
    SMSPersistValue: SMSPersistValue,
    /**
     * The SocioAprovadoPersistValue model constructor.
     * @property {module:model/SocioAprovadoPersistValue}
     */
    SocioAprovadoPersistValue: SocioAprovadoPersistValue,
    /**
     * The SocioAprovadoResponse model constructor.
     * @property {module:model/SocioAprovadoResponse}
     */
    SocioAprovadoResponse: SocioAprovadoResponse,
    /**
     * The StatusArquivoResponse model constructor.
     * @property {module:model/StatusArquivoResponse}
     */
    StatusArquivoResponse: StatusArquivoResponse,
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
     * The StatusContestacaoResponse model constructor.
     * @property {module:model/StatusContestacaoResponse}
     */
    StatusContestacaoResponse: StatusContestacaoResponse,
    /**
     * The StatusImpressaoResponse model constructor.
     * @property {module:model/StatusImpressaoResponse}
     */
    StatusImpressaoResponse: StatusImpressaoResponse,
    /**
     * The StatusOportunidadeAUDResponse model constructor.
     * @property {module:model/StatusOportunidadeAUDResponse}
     */
    StatusOportunidadeAUDResponse: StatusOportunidadeAUDResponse,
    /**
     * The StatusOportunidadePersistValue model constructor.
     * @property {module:model/StatusOportunidadePersistValue}
     */
    StatusOportunidadePersistValue: StatusOportunidadePersistValue,
    /**
     * The StatusOportunidadeResponse model constructor.
     * @property {module:model/StatusOportunidadeResponse}
     */
    StatusOportunidadeResponse: StatusOportunidadeResponse,
    /**
     * The StatusPropostaResponse model constructor.
     * @property {module:model/StatusPropostaResponse}
     */
    StatusPropostaResponse: StatusPropostaResponse,
    /**
     * The StatusPropostaUpdate model constructor.
     * @property {module:model/StatusPropostaUpdate}
     */
    StatusPropostaUpdate: StatusPropostaUpdate,
    /**
     * The TaxaAntecipacaoRequest model constructor.
     * @property {module:model/TaxaAntecipacaoRequest}
     */
    TaxaAntecipacaoRequest: TaxaAntecipacaoRequest,
    /**
     * The TaxaJurosContaListaResponse model constructor.
     * @property {module:model/TaxaJurosContaListaResponse}
     */
    TaxaJurosContaListaResponse: TaxaJurosContaListaResponse,
    /**
     * The TaxaJurosContaPersistValue model constructor.
     * @property {module:model/TaxaJurosContaPersistValue}
     */
    TaxaJurosContaPersistValue: TaxaJurosContaPersistValue,
    /**
     * The TaxaJurosContaResponse model constructor.
     * @property {module:model/TaxaJurosContaResponse}
     */
    TaxaJurosContaResponse: TaxaJurosContaResponse,
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
     * The TelefoneEstabelecimentoPersist model constructor.
     * @property {module:model/TelefoneEstabelecimentoPersist}
     */
    TelefoneEstabelecimentoPersist: TelefoneEstabelecimentoPersist,
    /**
     * The TelefoneEstabelecimentoResponse model constructor.
     * @property {module:model/TelefoneEstabelecimentoResponse}
     */
    TelefoneEstabelecimentoResponse: TelefoneEstabelecimentoResponse,
    /**
     * The TelefoneEstabelecimentoUpdate model constructor.
     * @property {module:model/TelefoneEstabelecimentoUpdate}
     */
    TelefoneEstabelecimentoUpdate: TelefoneEstabelecimentoUpdate,
    /**
     * The TelefonePessoaAprovadaPersistValue model constructor.
     * @property {module:model/TelefonePessoaAprovadaPersistValue}
     */
    TelefonePessoaAprovadaPersistValue: TelefonePessoaAprovadaPersistValue,
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
     * The TerminalPersist model constructor.
     * @property {module:model/TerminalPersist}
     */
    TerminalPersist: TerminalPersist,
    /**
     * The TerminalResponse model constructor.
     * @property {module:model/TerminalResponse}
     */
    TerminalResponse: TerminalResponse,
    /**
     * The TerminalUpdateValue model constructor.
     * @property {module:model/TerminalUpdateValue}
     */
    TerminalUpdateValue: TerminalUpdateValue,
    /**
     * The TipoAjusteResponse model constructor.
     * @property {module:model/TipoAjusteResponse}
     */
    TipoAjusteResponse: TipoAjusteResponse,
    /**
     * The TipoArquivoResponse model constructor.
     * @property {module:model/TipoArquivoResponse}
     */
    TipoArquivoResponse: TipoArquivoResponse,
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
     * The TipoChaveResponse model constructor.
     * @property {module:model/TipoChaveResponse}
     */
    TipoChaveResponse: TipoChaveResponse,
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
     * The TipoEstabelecimentoResponse model constructor.
     * @property {module:model/TipoEstabelecimentoResponse}
     */
    TipoEstabelecimentoResponse: TipoEstabelecimentoResponse,
    /**
     * The TipoFaturamentoPersistValue model constructor.
     * @property {module:model/TipoFaturamentoPersistValue}
     */
    TipoFaturamentoPersistValue: TipoFaturamentoPersistValue,
    /**
     * The TipoFaturamentoPorContaPersistValue model constructor.
     * @property {module:model/TipoFaturamentoPorContaPersistValue}
     */
    TipoFaturamentoPorContaPersistValue: TipoFaturamentoPorContaPersistValue,
    /**
     * The TipoFaturamentoPorContaResponse model constructor.
     * @property {module:model/TipoFaturamentoPorContaResponse}
     */
    TipoFaturamentoPorContaResponse: TipoFaturamentoPorContaResponse,
    /**
     * The TipoFaturamentoResponse model constructor.
     * @property {module:model/TipoFaturamentoResponse}
     */
    TipoFaturamentoResponse: TipoFaturamentoResponse,
    /**
     * The TipoOperacaoResponse model constructor.
     * @property {module:model/TipoOperacaoResponse}
     */
    TipoOperacaoResponse: TipoOperacaoResponse,
    /**
     * The TipoOportunidadeAUDResponse model constructor.
     * @property {module:model/TipoOportunidadeAUDResponse}
     */
    TipoOportunidadeAUDResponse: TipoOportunidadeAUDResponse,
    /**
     * The TipoOportunidadePersistValue model constructor.
     * @property {module:model/TipoOportunidadePersistValue}
     */
    TipoOportunidadePersistValue: TipoOportunidadePersistValue,
    /**
     * The TipoOportunidadeResponse model constructor.
     * @property {module:model/TipoOportunidadeResponse}
     */
    TipoOportunidadeResponse: TipoOportunidadeResponse,
    /**
     * The TipoOrigemComercialResponse model constructor.
     * @property {module:model/TipoOrigemComercialResponse}
     */
    TipoOrigemComercialResponse: TipoOrigemComercialResponse,
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
     * The TipoTerminalResponse model constructor.
     * @property {module:model/TipoTerminalResponse}
     */
    TipoTerminalResponse: TipoTerminalResponse,
    /**
     * The TipoTransacaoAjusteResponse model constructor.
     * @property {module:model/TipoTransacaoAjusteResponse}
     */
    TipoTransacaoAjusteResponse: TipoTransacaoAjusteResponse,
    /**
     * The TokenPartialUpdateValue model constructor.
     * @property {module:model/TokenPartialUpdateValue}
     */
    TokenPartialUpdateValue: TokenPartialUpdateValue,
    /**
     * The TokenPersistValue model constructor.
     * @property {module:model/TokenPersistValue}
     */
    TokenPersistValue: TokenPersistValue,
    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse: TokenResponse,
    /**
     * The TokenUpdateValue model constructor.
     * @property {module:model/TokenUpdateValue}
     */
    TokenUpdateValue: TokenUpdateValue,
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
     * The TransacaoProcessadaNaoProcessadaResponse model constructor.
     * @property {module:model/TransacaoProcessadaNaoProcessadaResponse}
     */
    TransacaoProcessadaNaoProcessadaResponse: TransacaoProcessadaNaoProcessadaResponse,
    /**
     * The TransacoesCorrentesResponse model constructor.
     * @property {module:model/TransacoesCorrentesResponse}
     */
    TransacoesCorrentesResponse: TransacoesCorrentesResponse,
    /**
     * The TransferenciaBancariaPersistValue model constructor.
     * @property {module:model/TransferenciaBancariaPersistValue}
     */
    TransferenciaBancariaPersistValue: TransferenciaBancariaPersistValue,
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
     * The TransferenciaCreditoContaBancariaPersistValue model constructor.
     * @property {module:model/TransferenciaCreditoContaBancariaPersistValue}
     */
    TransferenciaCreditoContaBancariaPersistValue: TransferenciaCreditoContaBancariaPersistValue,
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
     * The UsuarioContasResponse model constructor.
     * @property {module:model/UsuarioContasResponse}
     */
    UsuarioContasResponse: UsuarioContasResponse,
    /**
     * The UsuarioLdapPersist model constructor.
     * @property {module:model/UsuarioLdapPersist}
     */
    UsuarioLdapPersist: UsuarioLdapPersist,
    /**
     * The UsuarioPersistencia model constructor.
     * @property {module:model/UsuarioPersistencia}
     */
    UsuarioPersistencia: UsuarioPersistencia,
    /**
     * The UsuarioResponse model constructor.
     * @property {module:model/UsuarioResponse}
     */
    UsuarioResponse: UsuarioResponse,
    /**
     * The UsuarioSenhaFortePersistencia model constructor.
     * @property {module:model/UsuarioSenhaFortePersistencia}
     */
    UsuarioSenhaFortePersistencia: UsuarioSenhaFortePersistencia,
    /**
     * The UsuarioTokenPersistencia model constructor.
     * @property {module:model/UsuarioTokenPersistencia}
     */
    UsuarioTokenPersistencia: UsuarioTokenPersistencia,
    /**
     * The UsuarioTokenResponse model constructor.
     * @property {module:model/UsuarioTokenResponse}
     */
    UsuarioTokenResponse: UsuarioTokenResponse,
    /**
     * The UsuarioUpdateValue model constructor.
     * @property {module:model/UsuarioUpdateValue}
     */
    UsuarioUpdateValue: UsuarioUpdateValue,
    /**
     * The UsuarioldapUpdateObjectDescription model constructor.
     * @property {module:model/UsuarioldapUpdateObjectDescription}
     */
    UsuarioldapUpdateObjectDescription: UsuarioldapUpdateObjectDescription,
    /**
     * The ValidaCVVRequest model constructor.
     * @property {module:model/ValidaCVVRequest}
     */
    ValidaCVVRequest: ValidaCVVRequest,
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
     * The VinculoEstabelecimentoAdquirentePersist model constructor.
     * @property {module:model/VinculoEstabelecimentoAdquirentePersist}
     */
    VinculoEstabelecimentoAdquirentePersist: VinculoEstabelecimentoAdquirentePersist,
    /**
     * The VinculoEstabelecimentoAdquirenteResponse model constructor.
     * @property {module:model/VinculoEstabelecimentoAdquirenteResponse}
     */
    VinculoEstabelecimentoAdquirenteResponse: VinculoEstabelecimentoAdquirenteResponse,
    /**
     * The VinculoOperacaoPersist model constructor.
     * @property {module:model/VinculoOperacaoPersist}
     */
    VinculoOperacaoPersist: VinculoOperacaoPersist,
    /**
     * The VinculoOperacaoResponse model constructor.
     * @property {module:model/VinculoOperacaoResponse}
     */
    VinculoOperacaoResponse: VinculoOperacaoResponse,
    /**
     * The WebHookPersistValue model constructor.
     * @property {module:model/WebHookPersistValue}
     */
    WebHookPersistValue: WebHookPersistValue,
    /**
     * The WebHookResponse model constructor.
     * @property {module:model/WebHookResponse}
     */
    WebHookResponse: WebHookResponse,
    /**
     * The GlobaltagbinApi service constructor.
     * @property {module:api/GlobaltagbinApi}
     */
    GlobaltagbinApi: GlobaltagbinApi,
    /**
     * The GlobaltagtipochaveApi service constructor.
     * @property {module:api/GlobaltagtipochaveApi}
     */
    GlobaltagtipochaveApi: GlobaltagtipochaveApi,
    /**
     * The GlobaltagajustefinanceiroApi service constructor.
     * @property {module:api/GlobaltagajustefinanceiroApi}
     */
    GlobaltagajustefinanceiroApi: GlobaltagajustefinanceiroApi,
    /**
     * The GlobaltagantecipacaoApi service constructor.
     * @property {module:api/GlobaltagantecipacaoApi}
     */
    GlobaltagantecipacaoApi: GlobaltagantecipacaoApi,
    /**
     * The GlobaltagaplicacaomobileApi service constructor.
     * @property {module:api/GlobaltagaplicacaomobileApi}
     */
    GlobaltagaplicacaomobileApi: GlobaltagaplicacaomobileApi,
    /**
     * The GlobaltagarquivoApi service constructor.
     * @property {module:api/GlobaltagarquivoApi}
     */
    GlobaltagarquivoApi: GlobaltagarquivoApi,
    /**
     * The GlobaltagautorizacaoApi service constructor.
     * @property {module:api/GlobaltagautorizacaoApi}
     */
    GlobaltagautorizacaoApi: GlobaltagautorizacaoApi,
    /**
     * The GlobaltagavisoviagemApi service constructor.
     * @property {module:api/GlobaltagavisoviagemApi}
     */
    GlobaltagavisoviagemApi: GlobaltagavisoviagemApi,
    /**
     * The GlobaltagbaseApi service constructor.
     * @property {module:api/GlobaltagbaseApi}
     */
    GlobaltagbaseApi: GlobaltagbaseApi,
    /**
     * The GlobaltagboletoApi service constructor.
     * @property {module:api/GlobaltagboletoApi}
     */
    GlobaltagboletoApi: GlobaltagboletoApi,
    /**
     * The GlobaltagcadastroclienteApi service constructor.
     * @property {module:api/GlobaltagcadastroclienteApi}
     */
    GlobaltagcadastroclienteApi: GlobaltagcadastroclienteApi,
    /**
     * The GlobaltagcadastrogeralApi service constructor.
     * @property {module:api/GlobaltagcadastrogeralApi}
     */
    GlobaltagcadastrogeralApi: GlobaltagcadastrogeralApi,
    /**
     * The GlobaltagcartaoApi service constructor.
     * @property {module:api/GlobaltagcartaoApi}
     */
    GlobaltagcartaoApi: GlobaltagcartaoApi,
    /**
     * The GlobaltagchavecriptografiaApi service constructor.
     * @property {module:api/GlobaltagchavecriptografiaApi}
     */
    GlobaltagchavecriptografiaApi: GlobaltagchavecriptografiaApi,
    /**
     * The GlobaltagcompracontestadaApi service constructor.
     * @property {module:api/GlobaltagcompracontestadaApi}
     */
    GlobaltagcompracontestadaApi: GlobaltagcompracontestadaApi,
    /**
     * The GlobaltagcontaApi service constructor.
     * @property {module:api/GlobaltagcontaApi}
     */
    GlobaltagcontaApi: GlobaltagcontaApi,
    /**
     * The GlobaltagdebitorecorrenteApi service constructor.
     * @property {module:api/GlobaltagdebitorecorrenteApi}
     */
    GlobaltagdebitorecorrenteApi: GlobaltagdebitorecorrenteApi,
    /**
     * The GlobaltagdispositivoApi service constructor.
     * @property {module:api/GlobaltagdispositivoApi}
     */
    GlobaltagdispositivoApi: GlobaltagdispositivoApi,
    /**
     * The GlobaltagdocumentoApi service constructor.
     * @property {module:api/GlobaltagdocumentoApi}
     */
    GlobaltagdocumentoApi: GlobaltagdocumentoApi,
    /**
     * The GlobaltagendereconacionalApi service constructor.
     * @property {module:api/GlobaltagendereconacionalApi}
     */
    GlobaltagendereconacionalApi: GlobaltagendereconacionalApi,
    /**
     * The GlobaltagestabelecimentoApi service constructor.
     * @property {module:api/GlobaltagestabelecimentoApi}
     */
    GlobaltagestabelecimentoApi: GlobaltagestabelecimentoApi,
    /**
     * The GlobaltagfaqApi service constructor.
     * @property {module:api/GlobaltagfaqApi}
     */
    GlobaltagfaqApi: GlobaltagfaqApi,
    /**
     * The GlobaltagfaturaApi service constructor.
     * @property {module:api/GlobaltagfaturaApi}
     */
    GlobaltagfaturaApi: GlobaltagfaturaApi,
    /**
     * The GlobaltagfaturamentoApi service constructor.
     * @property {module:api/GlobaltagfaturamentoApi}
     */
    GlobaltagfaturamentoApi: GlobaltagfaturamentoApi,
    /**
     * The GlobaltaggrupochagebackApi service constructor.
     * @property {module:api/GlobaltaggrupochagebackApi}
     */
    GlobaltaggrupochagebackApi: GlobaltaggrupochagebackApi,
    /**
     * The GlobaltaginscricaoapnApi service constructor.
     * @property {module:api/GlobaltaginscricaoapnApi}
     */
    GlobaltaginscricaoapnApi: GlobaltaginscricaoapnApi,
    /**
     * The GlobaltagjobApi service constructor.
     * @property {module:api/GlobaltagjobApi}
     */
    GlobaltagjobApi: GlobaltagjobApi,
    /**
     * The GlobaltaglimiteApi service constructor.
     * @property {module:api/GlobaltaglimiteApi}
     */
    GlobaltaglimiteApi: GlobaltaglimiteApi,
    /**
     * The GlobaltaglimitedisponibilidadeApi service constructor.
     * @property {module:api/GlobaltaglimitedisponibilidadeApi}
     */
    GlobaltaglimitedisponibilidadeApi: GlobaltaglimitedisponibilidadeApi,
    /**
     * The GlobaltaglogApi service constructor.
     * @property {module:api/GlobaltaglogApi}
     */
    GlobaltaglogApi: GlobaltaglogApi,
    /**
     * The GlobaltagnotificacaoApi service constructor.
     * @property {module:api/GlobaltagnotificacaoApi}
     */
    GlobaltagnotificacaoApi: GlobaltagnotificacaoApi,
    /**
     * The GlobaltagoportunidadeApi service constructor.
     * @property {module:api/GlobaltagoportunidadeApi}
     */
    GlobaltagoportunidadeApi: GlobaltagoportunidadeApi,
    /**
     * The GlobaltagpagamentoApi service constructor.
     * @property {module:api/GlobaltagpagamentoApi}
     */
    GlobaltagpagamentoApi: GlobaltagpagamentoApi,
    /**
     * The GlobaltagparametroemissorApi service constructor.
     * @property {module:api/GlobaltagparametroemissorApi}
     */
    GlobaltagparametroemissorApi: GlobaltagparametroemissorApi,
    /**
     * The GlobaltagpayApi service constructor.
     * @property {module:api/GlobaltagpayApi}
     */
    GlobaltagpayApi: GlobaltagpayApi,
    /**
     * The GlobaltagpermissaopaisApi service constructor.
     * @property {module:api/GlobaltagpermissaopaisApi}
     */
    GlobaltagpermissaopaisApi: GlobaltagpermissaopaisApi,
    /**
     * The GlobaltagplataformamobileApi service constructor.
     * @property {module:api/GlobaltagplataformamobileApi}
     */
    GlobaltagplataformamobileApi: GlobaltagplataformamobileApi,
    /**
     * The GlobaltagpropostaApi service constructor.
     * @property {module:api/GlobaltagpropostaApi}
     */
    GlobaltagpropostaApi: GlobaltagpropostaApi,
    /**
     * The GlobaltagriscofraudeApi service constructor.
     * @property {module:api/GlobaltagriscofraudeApi}
     */
    GlobaltagriscofraudeApi: GlobaltagriscofraudeApi,
    /**
     * The GlobaltagservicocontaApi service constructor.
     * @property {module:api/GlobaltagservicocontaApi}
     */
    GlobaltagservicocontaApi: GlobaltagservicocontaApi,
    /**
     * The GlobaltagsmsApi service constructor.
     * @property {module:api/GlobaltagsmsApi}
     */
    GlobaltagsmsApi: GlobaltagsmsApi,
    /**
     * The GlobaltagstatuscontestacaoApi service constructor.
     * @property {module:api/GlobaltagstatuscontestacaoApi}
     */
    GlobaltagstatuscontestacaoApi: GlobaltagstatuscontestacaoApi,
    /**
     * The GlobaltagstatusparametroApi service constructor.
     * @property {module:api/GlobaltagstatusparametroApi}
     */
    GlobaltagstatusparametroApi: GlobaltagstatusparametroApi,
    /**
     * The GlobaltagtiporesolucaocontestacaoApi service constructor.
     * @property {module:api/GlobaltagtiporesolucaocontestacaoApi}
     */
    GlobaltagtiporesolucaocontestacaoApi: GlobaltagtiporesolucaocontestacaoApi,
    /**
     * The GlobaltagtokenApi service constructor.
     * @property {module:api/GlobaltagtokenApi}
     */
    GlobaltagtokenApi: GlobaltagtokenApi,
    /**
     * The GlobaltagtransferenciabancariaApi service constructor.
     * @property {module:api/GlobaltagtransferenciabancariaApi}
     */
    GlobaltagtransferenciabancariaApi: GlobaltagtransferenciabancariaApi,
    /**
     * The GlobaltagusuarioApi service constructor.
     * @property {module:api/GlobaltagusuarioApi}
     */
    GlobaltagusuarioApi: GlobaltagusuarioApi,
    /**
     * The GlobaltagusuariotokenApi service constructor.
     * @property {module:api/GlobaltagusuariotokenApi}
     */
    GlobaltagusuariotokenApi: GlobaltagusuariotokenApi,
    /**
     * The GlobaltagwebhookApi service constructor.
     * @property {module:api/GlobaltagwebhookApi}
     */
    GlobaltagwebhookApi: GlobaltagwebhookApi
  };

  return exports;
}));
