# Pier.GlobaltagcontaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ajustarContaUsingPOST1**](GlobaltagcontaApi.md#ajustarContaUsingPOST1) | **POST** /api/contas/{id}/ajustes-financeiros | {{{conta_resource_ajustar_conta}}}
[**alterarProdutoUsingPOST**](GlobaltagcontaApi.md#alterarProdutoUsingPOST) | **POST** /api/contas/{id}/alterar-produto | {{{conta_resource_alterar_produto}}}
[**alterarTitularUsingPOST**](GlobaltagcontaApi.md#alterarTitularUsingPOST) | **POST** /api/contas/{id}/alterar-titular | {{{conta_resource_alterar_titular}}}
[**alterarVencimentoUsingPUT**](GlobaltagcontaApi.md#alterarVencimentoUsingPUT) | **PUT** /api/contas/{id}/alterar-vencimento | {{{conta_resource_alterar_vencimento}}}
[**ativarAnuidadeUsingPOST**](GlobaltagcontaApi.md#ativarAnuidadeUsingPOST) | **POST** /api/contas/{id}/atribuir-anuidade | {{{conta_resource_ativar_anuidade}}}
[**ativarEnvioFaturaEmailUsingPOST**](GlobaltagcontaApi.md#ativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/ativar-fatura-email | {{{conta_resource_ativar_envio_fatura_email}}}
[**bloquearUsingPOST1**](GlobaltagcontaApi.md#bloquearUsingPOST1) | **POST** /api/contas/{id}/bloquear | {{{conta_resource_bloquear}}}
[**cadastrarUsingPOST**](GlobaltagcontaApi.md#cadastrarUsingPOST) | **POST** /api/adesoes-pagamentos-sabados | {{{aderir_pagamento_sabado_recurso_cadastrar}}}
[**cancelarUsingPOST1**](GlobaltagcontaApi.md#cancelarUsingPOST1) | **POST** /api/contas/{id}/cancelar | {{{conta_resource_cancelar}}}
[**consultarBeneficioPagamentoAtrasoUsingGET**](GlobaltagcontaApi.md#consultarBeneficioPagamentoAtrasoUsingGET) | **GET** /api/contas/{id}/consultar-beneficio-pagamento-atraso | {{{conta_resource_consultar_beneficio_pagamento_atraso}}}
[**consultarBoletoEmitidoUsingGET**](GlobaltagcontaApi.md#consultarBoletoEmitidoUsingGET) | **GET** /api/contas/{id}/consultar-dados-pagamento-fatura | {{{conta_resource_consultar_boleto_emitido}}}
[**consultarDividaAtualizadaClienteUsingGET**](GlobaltagcontaApi.md#consultarDividaAtualizadaClienteUsingGET) | **GET** /api/contas/{id}/recuperar-divida-atualizada | {{{conta_resource_consultar_divida_atualizada_cliente}}}
[**consultarTaxasTarifasUsingGET**](GlobaltagcontaApi.md#consultarTaxasTarifasUsingGET) | **GET** /api/contas/{id}/consultar-taxas-tarifas | {{{conta_resource_consultar_taxas_tarifas}}}
[**consultarUsingGET1**](GlobaltagcontaApi.md#consultarUsingGET1) | **GET** /api/adesoes-pagamentos-sabados | {{{aderir_pagamento_sabado_recurso_consultar}}}
[**consultarUsingGET14**](GlobaltagcontaApi.md#consultarUsingGET14) | **GET** /api/contas/{id} | {{{conta_resource_consultar}}}
[**consultarUsingGET49**](GlobaltagcontaApi.md#consultarUsingGET49) | **GET** /api/contas/{id}/transferencias-creditos-cartoes/{id_transferencia} | {{{transferencia_resource_consultar}}}
[**desativarEnvioFaturaEmailUsingPOST**](GlobaltagcontaApi.md#desativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/desativar-fatura-email | {{{conta_resource_desativar_envio_fatura_email}}}
[**gerarBoletoRecargaUsingPOST**](GlobaltagcontaApi.md#gerarBoletoRecargaUsingPOST) | **POST** /api/contas/{id}/gerar-boleto-recarga | {{{conta_resource_gerar_boleto_recarga}}}
[**gerarCartaoEmbossingUsingPOST**](GlobaltagcontaApi.md#gerarCartaoEmbossingUsingPOST) | **POST** /api/contas/{id}/gerar-cartao-grafica | {{{conta_resource_gerar_cartao_embossing}}}
[**gerarCartaoProvisorioUsingPOST**](GlobaltagcontaApi.md#gerarCartaoProvisorioUsingPOST) | **POST** /api/contas/{id}/gerar-cartao-provisorio | {{{conta_resource_gerar_cartao_provisorio}}}
[**gerarCartaoUsingPOST**](GlobaltagcontaApi.md#gerarCartaoUsingPOST) | **POST** /api/contas/{id}/pessoas/{id_pessoa}/gerar-cartao | {{{conta_resource_gerar_cartao}}}
[**gerarCartaoVirtualUsingPOST**](GlobaltagcontaApi.md#gerarCartaoVirtualUsingPOST) | **POST** /api/contas/{id}/gerar-cartao-virtual | {{{conta_resource_gerar_cartao_virtual}}}
[**listarHistoricoAlteracoesLimitesUsingGET**](GlobaltagcontaApi.md#listarHistoricoAlteracoesLimitesUsingGET) | **GET** /api/contas/{id}/historicos-alteracoes-limites | {{{conta_resource_listar_historico_alteracoes_limites}}}
[**listarHistoricoAssessoriaUsingGET**](GlobaltagcontaApi.md#listarHistoricoAssessoriaUsingGET) | **GET** /api/contas/{id}/historicos-assessorias-cobranca | {{{conta_resource_listar_historico_assessoria}}}
[**listarHistoricoAtrasosFaturasUsingGET**](GlobaltagcontaApi.md#listarHistoricoAtrasosFaturasUsingGET) | **GET** /api/contas/{id}/historicos-faturas-atrasos | {{{conta_resource_listar_historico_atrasos_faturas}}}
[**listarNaoProcessadasUsingGET**](GlobaltagcontaApi.md#listarNaoProcessadasUsingGET) | **GET** /api/contas/{id}/transacoes/listar-nao-processadas | {{{transacoes_correntes_resource_listar_nao_processadas}}}
[**listarProcessadasUsingGET**](GlobaltagcontaApi.md#listarProcessadasUsingGET) | **GET** /api/contas/{id}/transacoes/listar-processadas | {{{transacoes_correntes_resource_listar_processadas}}}
[**listarUsingGET18**](GlobaltagcontaApi.md#listarUsingGET18) | **GET** /api/contas | {{{conta_resource_listar}}}
[**listarUsingGET58**](GlobaltagcontaApi.md#listarUsingGET58) | **GET** /api/contas/{id}/transacoes | {{{transacoes_correntes_resource_listar_nao_processadas_e_processadas}}}
[**listarUsingGET60**](GlobaltagcontaApi.md#listarUsingGET60) | **GET** /api/contas/{id}/transferencias-creditos-cartoes | {{{transferencia_resource_listar}}}
[**reativarUsingPOST1**](GlobaltagcontaApi.md#reativarUsingPOST1) | **POST** /api/contas/{id}/reativar | {{{conta_resource_reativar}}}
[**salvarUsingPOST8**](GlobaltagcontaApi.md#salvarUsingPOST8) | **POST** /api/contas | {{{conta_resource_salvar}}}
[**simularEmprestimoFinanciamentoUsingPOST**](GlobaltagcontaApi.md#simularEmprestimoFinanciamentoUsingPOST) | **POST** /api/contas/{id}/simular-emprestimos-financiamentos | {{{financiamento_resource_simular_emprestimo_financiamento}}}
[**transacoesUsingGET**](GlobaltagcontaApi.md#transacoesUsingGET) | **GET** /api/contas/{id}/timeline | {{{conta_resource_transacoes}}}
[**transferirUsingPOST1**](GlobaltagcontaApi.md#transferirUsingPOST1) | **POST** /api/contas/{id}/transferencias-creditos-cartoes | {{{transferencia_resource_transferir}}}


<a name="ajustarContaUsingPOST1"></a>
# **ajustarContaUsingPOST1**
> AjusteFinanceiroResponse ajustarContaUsingPOST1(id, idTipoAjuste, dataAjuste, valorAjuste, opts)

{{{conta_resource_ajustar_conta}}}

{{{conta_resource_ajustar_conta_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_ajustar_conta_param_id}}}

var idTipoAjuste = 789; // {Integer} {{{ajuste_persist_id_tipo_ajuste_value}}}

var dataAjuste = "dataAjuste_example"; // {String} {{{ajuste_persist_data_ajuste_value}}}

var valorAjuste = 3.4; // {Number} {{{ajuste_persist_valor_ajuste_value}}}

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'identificadorExterno': "identificadorExterno_example", // {String} {{{ajuste_persist_identificador_externo_value}}}
  'idTransacaoOriginal': 789 // {Integer} {{{ajuste_persist_id_transacao_original}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ajustarContaUsingPOST1(id, idTipoAjuste, dataAjuste, valorAjuste, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_ajustar_conta_param_id}}} | 
 **idTipoAjuste** | **Integer**| {{{ajuste_persist_id_tipo_ajuste_value}}} | 
 **dataAjuste** | **String**| {{{ajuste_persist_data_ajuste_value}}} | 
 **valorAjuste** | [**Number**](.md)| {{{ajuste_persist_valor_ajuste_value}}} | 
 **authorization** | **String**| Authorization | [optional] 
 **identificadorExterno** | **String**| {{{ajuste_persist_identificador_externo_value}}} | [optional] 
 **idTransacaoOriginal** | **Integer**| {{{ajuste_persist_id_transacao_original}}} | [optional] 

### Return type

[**AjusteFinanceiroResponse**](AjusteFinanceiroResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarProdutoUsingPOST"></a>
# **alterarProdutoUsingPOST**
> &#39;String&#39; alterarProdutoUsingPOST(id, request, opts)

{{{conta_resource_alterar_produto}}}

{{{conta_resource_alterar_produto_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_alterar_produto_param_id}}}

var request = new Pier.AlterarProdutoRequest(); // {AlterarProdutoRequest} request

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarProdutoUsingPOST(id, request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_alterar_produto_param_id}}} | 
 **request** | [**AlterarProdutoRequest**](AlterarProdutoRequest.md)| request | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarTitularUsingPOST"></a>
# **alterarTitularUsingPOST**
> ContaResponse alterarTitularUsingPOST(id, idPessoa, opts)

{{{conta_resource_alterar_titular}}}

{{{conta_resource_alterar_titular_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_alterar_titular_param_id_conta}}}

var idPessoa = 789; // {Integer} {{{conta_resource_alterar_titular_param_id_pessoa}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarTitularUsingPOST(id, idPessoa, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_alterar_titular_param_id_conta}}} | 
 **idPessoa** | **Integer**| {{{conta_resource_alterar_titular_param_id_pessoa}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarVencimentoUsingPUT"></a>
# **alterarVencimentoUsingPUT**
> ContaResponse alterarVencimentoUsingPUT(id, novoDiaVencimento, opts)

{{{conta_resource_alterar_vencimento}}}

{{{conta_resource_alterar_vencimento_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_alterar_vencimento_param_id}}}

var novoDiaVencimento = 56; // {Integer} {{{conta_resource_alterar_vencimento_param_novo_dia_vencimento}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarVencimentoUsingPUT(id, novoDiaVencimento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_alterar_vencimento_param_id}}} | 
 **novoDiaVencimento** | **Integer**| {{{conta_resource_alterar_vencimento_param_novo_dia_vencimento}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ativarAnuidadeUsingPOST"></a>
# **ativarAnuidadeUsingPOST**
> Object ativarAnuidadeUsingPOST(id, idAnuidade, opts)

{{{conta_resource_ativar_anuidade}}}

{{{conta_resource_ativar_anuidade_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_ativar_anuidade_param_id}}}

var idAnuidade = 789; // {Integer} {{{anuidade_request_id_anuidade_value}}}

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'DDD': "DDD_example", // {String} {{{anuidade_request_d_d_d_value}}}
  'celular': "celular_example", // {String} {{{anuidade_request_celular_value}}}
  'idOperadora': 789, // {Integer} {{{anuidade_request_id_operadora_value}}}
  'idOrigemComercial': 789 // {Integer} {{{anuidade_request_id_origem_comercial_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarAnuidadeUsingPOST(id, idAnuidade, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_ativar_anuidade_param_id}}} | 
 **idAnuidade** | **Integer**| {{{anuidade_request_id_anuidade_value}}} | 
 **authorization** | **String**| Authorization | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **DDD** | **String**| {{{anuidade_request_d_d_d_value}}} | [optional] 
 **celular** | **String**| {{{anuidade_request_celular_value}}} | [optional] 
 **idOperadora** | **Integer**| {{{anuidade_request_id_operadora_value}}} | [optional] 
 **idOrigemComercial** | **Integer**| {{{anuidade_request_id_origem_comercial_value}}} | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ativarEnvioFaturaEmailUsingPOST"></a>
# **ativarEnvioFaturaEmailUsingPOST**
> Object ativarEnvioFaturaEmailUsingPOST(id, opts)

{{{conta_resource_ativar_envio_fatura_email}}}

{{{conta_resource_ativar_envio_fatura_email_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_ativar_envio_fatura_email_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarEnvioFaturaEmailUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_ativar_envio_fatura_email_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bloquearUsingPOST1"></a>
# **bloquearUsingPOST1**
> ContaResponse bloquearUsingPOST1(id, idStatus, opts)

{{{conta_resource_bloquear}}}

{{{conta_resource_bloquear_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_bloquear_param_id}}}

var idStatus = 789; // {Integer} {{{conta_resource_bloquear_param_id_status}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.bloquearUsingPOST1(id, idStatus, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_bloquear_param_id}}} | 
 **idStatus** | **Integer**| {{{conta_resource_bloquear_param_id_status}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarUsingPOST"></a>
# **cadastrarUsingPOST**
> AdesaoPagamentoSabadoResponse cadastrarUsingPOST(id)

{{{aderir_pagamento_sabado_recurso_cadastrar}}}

{{{aderir_pagamento_sabado_recurso_cadastrar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{aderir_pagamento_sabado_recurso_cadastrar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{aderir_pagamento_sabado_recurso_cadastrar_param_id}}} | 

### Return type

[**AdesaoPagamentoSabadoResponse**](AdesaoPagamentoSabadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelarUsingPOST1"></a>
# **cancelarUsingPOST1**
> ContaResponse cancelarUsingPOST1(id, idStatus, opts)

{{{conta_resource_cancelar}}}

{{{conta_resource_cancelar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_cancelar_param_id}}}

var idStatus = 789; // {Integer} {{{conta_resource_cancelar_param_id_status}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarUsingPOST1(id, idStatus, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_cancelar_param_id}}} | 
 **idStatus** | **Integer**| {{{conta_resource_cancelar_param_id_status}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarBeneficioPagamentoAtrasoUsingGET"></a>
# **consultarBeneficioPagamentoAtrasoUsingGET**
> BeneficioPagamentoAtrasoResponse consultarBeneficioPagamentoAtrasoUsingGET(id, opts)

{{{conta_resource_consultar_beneficio_pagamento_atraso}}}

{{{conta_resource_consultar_beneficio_pagamento_atraso_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_consultar_beneficio_pagamento_atraso_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarBeneficioPagamentoAtrasoUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_consultar_beneficio_pagamento_atraso_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**BeneficioPagamentoAtrasoResponse**](BeneficioPagamentoAtrasoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarBoletoEmitidoUsingGET"></a>
# **consultarBoletoEmitidoUsingGET**
> BoletoResponse consultarBoletoEmitidoUsingGET(id, opts)

{{{conta_resource_consultar_boleto_emitido}}}

{{{conta_resource_consultar_boleto_emitido_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_consultar_boleto_emitido_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarBoletoEmitidoUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_consultar_boleto_emitido_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**BoletoResponse**](BoletoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarDividaAtualizadaClienteUsingGET"></a>
# **consultarDividaAtualizadaClienteUsingGET**
> DividaClienteResponse consultarDividaAtualizadaClienteUsingGET(id, opts)

{{{conta_resource_consultar_divida_atualizada_cliente}}}

{{{conta_resource_consultar_divida_atualizada_cliente_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_consultar_divida_atualizada_cliente_param_id}}}

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'dataVencimento': "dataVencimento_example", // {String} {{{divida_cliente_request_data_vencimento_value}}}
  'idEscritorioCobranca': 789 // {Integer} {{{divida_cliente_request_id_escritorio_cobranca_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarDividaAtualizadaClienteUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_consultar_divida_atualizada_cliente_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **dataVencimento** | **String**| {{{divida_cliente_request_data_vencimento_value}}} | [optional] 
 **idEscritorioCobranca** | **Integer**| {{{divida_cliente_request_id_escritorio_cobranca_value}}} | [optional] 

### Return type

[**DividaClienteResponse**](DividaClienteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTaxasTarifasUsingGET"></a>
# **consultarTaxasTarifasUsingGET**
> PageTaxasRefinanciamentoResponse consultarTaxasTarifasUsingGET(id, opts)

{{{conta_resource_consultar_taxas_tarifas}}}

{{{conta_resource_consultar_taxas_tarifas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_consultar_taxas_tarifas_param_id_conta}}}

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTaxasTarifasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_consultar_taxas_tarifas_param_id_conta}}} | 
 **authorization** | **String**| Authorization | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageTaxasRefinanciamentoResponse**](PageTaxasRefinanciamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET1"></a>
# **consultarUsingGET1**
> AdesaoPagamentoSabadoResponse consultarUsingGET1(id, dataVencimento)

{{{aderir_pagamento_sabado_recurso_consultar}}}

{{{aderir_pagamento_sabado_recurso_consultar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{aderir_pagamento_sabado_recurso_consultar_param_id}}}

var dataVencimento = "dataVencimento_example"; // {String} {{{aderir_pagamento_sabado_recurso_consultar_param_data_vencimento}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET1(id, dataVencimento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{aderir_pagamento_sabado_recurso_consultar_param_id}}} | 
 **dataVencimento** | **String**| {{{aderir_pagamento_sabado_recurso_consultar_param_data_vencimento}}} | 

### Return type

[**AdesaoPagamentoSabadoResponse**](AdesaoPagamentoSabadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET14"></a>
# **consultarUsingGET14**
> ContaDetalheResponse consultarUsingGET14(id, opts)

{{{conta_resource_consultar}}}

{{{conta_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_consultar_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET14(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_consultar_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ContaDetalheResponse**](ContaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET49"></a>
# **consultarUsingGET49**
> TransferenciaDetalheResponse consultarUsingGET49(id, idTransferencia)

{{{transferencia_resource_consultar}}}

{{{transferencia_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{transferencia_resource_consultar_param_id_conta}}}

var idTransferencia = 789; // {Integer} {{{transferencia_resource_consultar_param_id_transferencia}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET49(id, idTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transferencia_resource_consultar_param_id_conta}}} | 
 **idTransferencia** | **Integer**| {{{transferencia_resource_consultar_param_id_transferencia}}} | 

### Return type

[**TransferenciaDetalheResponse**](TransferenciaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarEnvioFaturaEmailUsingPOST"></a>
# **desativarEnvioFaturaEmailUsingPOST**
> Object desativarEnvioFaturaEmailUsingPOST(id, opts)

{{{conta_resource_desativar_envio_fatura_email}}}

{{{conta_resource_desativar_envio_fatura_email_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_desativar_envio_fatura_email_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarEnvioFaturaEmailUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_desativar_envio_fatura_email_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarBoletoRecargaUsingPOST"></a>
# **gerarBoletoRecargaUsingPOST**
> BoletoResponse gerarBoletoRecargaUsingPOST(id, valor, dataVencimento, opts)

{{{conta_resource_gerar_boleto_recarga}}}

{{{conta_resource_gerar_boleto_recarga_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_gerar_boleto_recarga_param_id}}}

var valor = 3.4; // {Number} {{{boleto_recarga_request_valor_value}}}

var dataVencimento = "dataVencimento_example"; // {String} {{{boleto_recarga_request_data_vencimento_value}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarBoletoRecargaUsingPOST(id, valor, dataVencimento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_gerar_boleto_recarga_param_id}}} | 
 **valor** | [**Number**](.md)| {{{boleto_recarga_request_valor_value}}} | 
 **dataVencimento** | **String**| {{{boleto_recarga_request_data_vencimento_value}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**BoletoResponse**](BoletoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarCartaoEmbossingUsingPOST"></a>
# **gerarCartaoEmbossingUsingPOST**
> CartaoEmbossingResponse gerarCartaoEmbossingUsingPOST(id, cartaoEmbossingRequest, opts)

{{{conta_resource_gerar_cartao_embossing}}}

{{{conta_resource_gerar_cartao_embossing_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_gerar_cartao_embossing_param_id}}}

var cartaoEmbossingRequest = new Pier.CartaoEmbossingRequest(); // {CartaoEmbossingRequest} cartaoEmbossingRequest

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarCartaoEmbossingUsingPOST(id, cartaoEmbossingRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_gerar_cartao_embossing_param_id}}} | 
 **cartaoEmbossingRequest** | [**CartaoEmbossingRequest**](CartaoEmbossingRequest.md)| cartaoEmbossingRequest | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoEmbossingResponse**](CartaoEmbossingResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarCartaoProvisorioUsingPOST"></a>
# **gerarCartaoProvisorioUsingPOST**
> CartaoImpressaoProvisorioResponse gerarCartaoProvisorioUsingPOST(id, opts)

{{{conta_resource_gerar_cartao_provisorio}}}

{{{conta_resource_gerar_cartao_provisorio_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_gerar_cartao_provisorio_param_id_conta}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarCartaoProvisorioUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_gerar_cartao_provisorio_param_id_conta}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoImpressaoProvisorioResponse**](CartaoImpressaoProvisorioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarCartaoUsingPOST"></a>
# **gerarCartaoUsingPOST**
> CartaoImpressaoResponse gerarCartaoUsingPOST(id, idPessoa, opts)

{{{conta_resource_gerar_cartao}}}

{{{conta_resource_gerar_cartao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_gerar_cartao_param_id}}}

var idPessoa = 789; // {Integer} {{{conta_resource_gerar_cartao_param_id_pessoa}}}

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'idTipoPlastico': 789 // {Integer} {{{conta_resource_gerar_cartao_param_id_tipo_plastico}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarCartaoUsingPOST(id, idPessoa, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_gerar_cartao_param_id}}} | 
 **idPessoa** | **Integer**| {{{conta_resource_gerar_cartao_param_id_pessoa}}} | 
 **authorization** | **String**| Authorization | [optional] 
 **idTipoPlastico** | **Integer**| {{{conta_resource_gerar_cartao_param_id_tipo_plastico}}} | [optional] 

### Return type

[**CartaoImpressaoResponse**](CartaoImpressaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarCartaoVirtualUsingPOST"></a>
# **gerarCartaoVirtualUsingPOST**
> CartaoImpressaoResponse gerarCartaoVirtualUsingPOST(id, dataValidade, opts)

{{{conta_resource_gerar_cartao_virtual}}}

{{{conta_resource_gerar_cartao_virtual_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_gerar_cartao_virtual_param_id}}}

var dataValidade = "dataValidade_example"; // {String} {{{conta_resource_gerar_cartao_virtual_param_data_validade}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarCartaoVirtualUsingPOST(id, dataValidade, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_gerar_cartao_virtual_param_id}}} | 
 **dataValidade** | **String**| {{{conta_resource_gerar_cartao_virtual_param_data_validade}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoImpressaoResponse**](CartaoImpressaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoAlteracoesLimitesUsingGET"></a>
# **listarHistoricoAlteracoesLimitesUsingGET**
> PageHistoricoEventosResponse listarHistoricoAlteracoesLimitesUsingGET(id, opts)

{{{conta_resource_listar_historico_alteracoes_limites}}}

{{{conta_resource_listar_historico_alteracoes_limites_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_listar_historico_alteracoes_limites_param_id}}}

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarHistoricoAlteracoesLimitesUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_listar_historico_alteracoes_limites_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageHistoricoEventosResponse**](PageHistoricoEventosResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoAssessoriaUsingGET"></a>
# **listarHistoricoAssessoriaUsingGET**
> PageHistoricoAssessoriaResponse listarHistoricoAssessoriaUsingGET(id, opts)

{{{conta_resource_listar_historico_assessoria}}}

{{{conta_resource_listar_historico_assessoria_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_listar_historico_assessoria_param_id}}}

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarHistoricoAssessoriaUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_listar_historico_assessoria_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageHistoricoAssessoriaResponse**](PageHistoricoAssessoriaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoAtrasosFaturasUsingGET"></a>
# **listarHistoricoAtrasosFaturasUsingGET**
> PageHistoricoAtrasoFaturaResponse listarHistoricoAtrasosFaturasUsingGET(id, opts)

{{{conta_resource_listar_historico_atrasos_faturas}}}

{{{conta_resource_listar_historico_atrasos_faturas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_listar_historico_atrasos_faturas_param_id}}}

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarHistoricoAtrasosFaturasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_listar_historico_atrasos_faturas_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageHistoricoAtrasoFaturaResponse**](PageHistoricoAtrasoFaturaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarNaoProcessadasUsingGET"></a>
# **listarNaoProcessadasUsingGET**
> PageTransacaoNaoProcessadaResponse listarNaoProcessadasUsingGET(id, opts)

{{{transacoes_correntes_resource_listar_nao_processadas}}}

{{{transacoes_correntes_resource_listar_nao_processadas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{transacoes_correntes_resource_listar_nao_processadas_param_id}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'dataInicio': "dataInicio_example", // {String} {{{transacoes_nao_processadas_request_data_inicio_value}}}
  'dataFim': "dataFim_example" // {String} {{{transacoes_nao_processadas_request_data_fim_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarNaoProcessadasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transacoes_correntes_resource_listar_nao_processadas_param_id}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **dataInicio** | **String**| {{{transacoes_nao_processadas_request_data_inicio_value}}} | [optional] 
 **dataFim** | **String**| {{{transacoes_nao_processadas_request_data_fim_value}}} | [optional] 

### Return type

[**PageTransacaoNaoProcessadaResponse**](PageTransacaoNaoProcessadaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarProcessadasUsingGET"></a>
# **listarProcessadasUsingGET**
> PageTransacoesCorrentesResponse listarProcessadasUsingGET(id, opts)

{{{transacoes_correntes_resource_listar_processadas}}}

{{{transacoes_correntes_resource_listar_processadas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{transacoes_correntes_resource_listar_processadas_param_id}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'dataVencimento': "dataVencimento_example", // {String} {{{transacoes_processadas_request_data_vencimento_value}}}
  'dataInicio': "dataInicio_example", // {String} {{{transacoes_processadas_request_data_inicio_value}}}
  'dataFim': "dataFim_example", // {String} {{{transacoes_processadas_request_data_fim_value}}}
  'idTipoTransacao': 789, // {Integer} {{{transacoes_processadas_request_tipo_transacao}}}
  'recuperaEncargos': 56 // {Integer} {{{transacoes_processadas_request_recupera_encargos}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarProcessadasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transacoes_correntes_resource_listar_processadas_param_id}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **dataVencimento** | **String**| {{{transacoes_processadas_request_data_vencimento_value}}} | [optional] 
 **dataInicio** | **String**| {{{transacoes_processadas_request_data_inicio_value}}} | [optional] 
 **dataFim** | **String**| {{{transacoes_processadas_request_data_fim_value}}} | [optional] 
 **idTipoTransacao** | **Integer**| {{{transacoes_processadas_request_tipo_transacao}}} | [optional] 
 **recuperaEncargos** | **Integer**| {{{transacoes_processadas_request_recupera_encargos}}} | [optional] 

### Return type

[**PageTransacoesCorrentesResponse**](PageTransacoesCorrentesResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET18"></a>
# **listarUsingGET18**
> PageContaResponse listarUsingGET18(opts)

{{{conta_resource_listar}}}

{{{conta_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idProduto': 789, // {Integer} {{{conta_request_id_produto_value}}}
  'idOrigemComercial': 789, // {Integer} {{{conta_request_id_origem_comercial_value}}}
  'idPessoa': 789, // {Integer} {{{conta_request_id_pessoa_value}}}
  'idStatusConta': 789, // {Integer} {{{conta_request_id_status_conta_value}}}
  'diaVencimento': 56, // {Integer} {{{conta_request_dia_vencimento_value}}}
  'melhorDiaCompra': 56, // {Integer} {{{conta_request_melhor_dia_compra_value}}}
  'dataStatusConta': "dataStatusConta_example", // {String} {{{conta_request_data_status_conta_value}}}
  'dataCadastro': "dataCadastro_example", // {String} {{{conta_request_data_cadastro_value}}}
  'dataUltimaAlteracaoVencimento': "dataUltimaAlteracaoVencimento_example" // {String} {{{conta_request_data_ultima_alteracao_vencimento_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET18(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idProduto** | **Integer**| {{{conta_request_id_produto_value}}} | [optional] 
 **idOrigemComercial** | **Integer**| {{{conta_request_id_origem_comercial_value}}} | [optional] 
 **idPessoa** | **Integer**| {{{conta_request_id_pessoa_value}}} | [optional] 
 **idStatusConta** | **Integer**| {{{conta_request_id_status_conta_value}}} | [optional] 
 **diaVencimento** | **Integer**| {{{conta_request_dia_vencimento_value}}} | [optional] 
 **melhorDiaCompra** | **Integer**| {{{conta_request_melhor_dia_compra_value}}} | [optional] 
 **dataStatusConta** | **String**| {{{conta_request_data_status_conta_value}}} | [optional] 
 **dataCadastro** | **String**| {{{conta_request_data_cadastro_value}}} | [optional] 
 **dataUltimaAlteracaoVencimento** | **String**| {{{conta_request_data_ultima_alteracao_vencimento_value}}} | [optional] 

### Return type

[**PageContaResponse**](PageContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET58"></a>
# **listarUsingGET58**
> PageTransacaoProcessadaNaoProcessadaResponse listarUsingGET58(id, opts)

{{{transacoes_correntes_resource_listar_nao_processadas_e_processadas}}}

{{{transacoes_correntes_resource_listar_nao_processadas_e_processadas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{transacoes_correntes_resource_listar_nao_processadas_param_id}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'dataVencimento': "dataVencimento_example", // {String} {{{transacoes_processadas_request_data_vencimento_value}}}
  'dataInicio': "dataInicio_example", // {String} {{{transacoes_processadas_request_data_inicio_value}}}
  'dataFim': "dataFim_example", // {String} {{{transacoes_processadas_request_data_fim_value}}}
  'idTipoTransacao': 789 // {Integer} {{{transacoes_processadas_request_tipo_transacao}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET58(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transacoes_correntes_resource_listar_nao_processadas_param_id}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **dataVencimento** | **String**| {{{transacoes_processadas_request_data_vencimento_value}}} | [optional] 
 **dataInicio** | **String**| {{{transacoes_processadas_request_data_inicio_value}}} | [optional] 
 **dataFim** | **String**| {{{transacoes_processadas_request_data_fim_value}}} | [optional] 
 **idTipoTransacao** | **Integer**| {{{transacoes_processadas_request_tipo_transacao}}} | [optional] 

### Return type

[**PageTransacaoProcessadaNaoProcessadaResponse**](PageTransacaoProcessadaNaoProcessadaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET60"></a>
# **listarUsingGET60**
> PageTransferenciaResponse listarUsingGET60(id, opts)

{{{transferencia_resource_listar}}}

{{{transferencia_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{transferencia_resource_listar_param_id}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idTransferencia': 789, // {Integer} {{{transferencia_request_id_transferencia_value}}}
  'idContaOrigem': 789, // {Integer} {{{transferencia_request_id_conta_origem_value}}}
  'idContaDestino': 789, // {Integer} {{{transferencia_request_id_conta_destino_value}}}
  'valorTransferencia': 3.4, // {Number} {{{transferencia_request_valor_transferencia_value}}}
  'dataTransferencia': "dataTransferencia_example" // {String} {{{transferencia_request_data_transferencia_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET60(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transferencia_resource_listar_param_id}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idTransferencia** | **Integer**| {{{transferencia_request_id_transferencia_value}}} | [optional] 
 **idContaOrigem** | **Integer**| {{{transferencia_request_id_conta_origem_value}}} | [optional] 
 **idContaDestino** | **Integer**| {{{transferencia_request_id_conta_destino_value}}} | [optional] 
 **valorTransferencia** | [**Number**](.md)| {{{transferencia_request_valor_transferencia_value}}} | [optional] 
 **dataTransferencia** | **String**| {{{transferencia_request_data_transferencia_value}}} | [optional] 

### Return type

[**PageTransferenciaResponse**](PageTransferenciaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reativarUsingPOST1"></a>
# **reativarUsingPOST1**
> Object reativarUsingPOST1(id, opts)

{{{conta_resource_reativar}}}

{{{conta_resource_reativar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_reativar_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.reativarUsingPOST1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_reativar_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST8"></a>
# **salvarUsingPOST8**
> ContaResponse salvarUsingPOST8(contaPersist, opts)

{{{conta_resource_salvar}}}

{{{conta_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var contaPersist = new Pier.ContaPersistValue(); // {ContaPersistValue} contaPersist

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST8(contaPersist, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contaPersist** | [**ContaPersistValue**](ContaPersistValue.md)| contaPersist | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="simularEmprestimoFinanciamentoUsingPOST"></a>
# **simularEmprestimoFinanciamentoUsingPOST**
> EmprestimoPessoalResponse simularEmprestimoFinanciamentoUsingPOST(id, request)

{{{financiamento_resource_simular_emprestimo_financiamento}}}

{{{financiamento_resource_simular_emprestimo_financiamento_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{financiamento_resource_simular_emprestimo_financiamento_param_id_conta}}}

var request = new Pier.EmprestimoPessoalRequest(); // {EmprestimoPessoalRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.simularEmprestimoFinanciamentoUsingPOST(id, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{financiamento_resource_simular_emprestimo_financiamento_param_id_conta}}} | 
 **request** | [**EmprestimoPessoalRequest**](EmprestimoPessoalRequest.md)| request | 

### Return type

[**EmprestimoPessoalResponse**](EmprestimoPessoalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transacoesUsingGET"></a>
# **transacoesUsingGET**
> PageTransacaoResponse transacoesUsingGET(id, opts)

{{{conta_resource_transacoes}}}

{{{conta_resource_transacoes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{conta_resource_transacoes_param_id}}}

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transacoesUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_resource_transacoes_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageTransacaoResponse**](PageTransacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferirUsingPOST1"></a>
# **transferirUsingPOST1**
> TransferenciaDetalheResponse transferirUsingPOST1(id, idContaDestino, valorTransferencia)

{{{transferencia_resource_transferir}}}

{{{transferencia_resource_transferir_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontaApi()

var id = 789; // {Integer} {{{transferencia_resource_transferir_param_id_conta_origem}}}

var idContaDestino = 789; // {Integer} {{{transferencia_resource_transferir_param_id_conta_destino}}}

var valorTransferencia = 3.4; // {Number} {{{transferencia_resource_transferir_param_valor_transferencia}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transferirUsingPOST1(id, idContaDestino, valorTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transferencia_resource_transferir_param_id_conta_origem}}} | 
 **idContaDestino** | **Integer**| {{{transferencia_resource_transferir_param_id_conta_destino}}} | 
 **valorTransferencia** | [**Number**](.md)| {{{transferencia_resource_transferir_param_valor_transferencia}}} | 

### Return type

[**TransferenciaDetalheResponse**](TransferenciaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

