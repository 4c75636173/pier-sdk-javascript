# Pier.GlobaltagfaturaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarFaturaUsingGET1**](GlobaltagfaturaApi.md#consultarFaturaUsingGET1) | **GET** /api/faturas/{dataVencimento} | {{{fatura_resource_consultar_fatura}}}
[**consultarLancamentosFuturosFaturaUsingGET1**](GlobaltagfaturaApi.md#consultarLancamentosFuturosFaturaUsingGET1) | **GET** /api/contas/{id}/faturas/planos-parcelamento | {{{fatura_conta_resource_consultar_lancamentos_futuros_fatura}}}
[**enviarFaturaEmailUsingPOST**](GlobaltagfaturaApi.md#enviarFaturaEmailUsingPOST) | **POST** /api/contas/{id}/faturas/{dataVencimento}/enviar-email | {{{fatura_conta_resource_enviar_fatura_email}}}
[**listarFaturasUsingGET1**](GlobaltagfaturaApi.md#listarFaturasUsingGET1) | **GET** /api/faturas | {{{fatura_resource_listar_faturas}}}
[**visualizarDocumentoUsingGET**](GlobaltagfaturaApi.md#visualizarDocumentoUsingGET) | **GET** /api/contas/{id}/faturas/{dataVencimento}/arquivo.pdf | {{{fatura_conta_resource_visualizar_documento}}}


<a name="consultarFaturaUsingGET1"></a>
# **consultarFaturaUsingGET1**
> FaturaDetalheResponse consultarFaturaUsingGET1(dataVencimento, idConta)

{{{fatura_resource_consultar_fatura}}}

{{{fatura_resource_consultar_fatura_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturaApi()

var dataVencimento = "dataVencimento_example"; // {String} {{{fatura_resource_consultar_fatura_param_data_vencimento}}}

var idConta = 789; // {Integer} {{{fatura_resource_consultar_fatura_param_id_conta}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarFaturaUsingGET1(dataVencimento, idConta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataVencimento** | **String**| {{{fatura_resource_consultar_fatura_param_data_vencimento}}} | 
 **idConta** | **Integer**| {{{fatura_resource_consultar_fatura_param_id_conta}}} | 

### Return type

[**FaturaDetalheResponse**](FaturaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarLancamentosFuturosFaturaUsingGET1"></a>
# **consultarLancamentosFuturosFaturaUsingGET1**
> PagePlanoParcelamentoResponse consultarLancamentosFuturosFaturaUsingGET1(id, dataVencimentoPadrao, opts)

{{{fatura_conta_resource_consultar_lancamentos_futuros_fatura}}}

{{{fatura_conta_resource_consultar_lancamentos_futuros_fatura_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturaApi()

var id = 789; // {Integer} {{{fatura_conta_resource_consultar_lancamentos_futuros_fatura_param_id_conta}}}

var dataVencimentoPadrao = "dataVencimentoPadrao_example"; // {String} {{{plano_parcelamento_request_data_vencimento_padrao_value}}}

var opts = { 
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
api.consultarLancamentosFuturosFaturaUsingGET1(id, dataVencimentoPadrao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{fatura_conta_resource_consultar_lancamentos_futuros_fatura_param_id_conta}}} | 
 **dataVencimentoPadrao** | **String**| {{{plano_parcelamento_request_data_vencimento_padrao_value}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PagePlanoParcelamentoResponse**](PagePlanoParcelamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="enviarFaturaEmailUsingPOST"></a>
# **enviarFaturaEmailUsingPOST**
> Object enviarFaturaEmailUsingPOST(id, dataVencimento, opts)

{{{fatura_conta_resource_enviar_fatura_email}}}

{{{fatura_conta_resource_enviar_fatura_email_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturaApi()

var id = 789; // {Integer} {{{fatura_conta_resource_enviar_fatura_email_param_id_conta}}}

var dataVencimento = "dataVencimento_example"; // {String} {{{fatura_conta_resource_enviar_fatura_email_param_data_vencimento}}}

var opts = { 
  'email': "email_example" // {String} {{{fatura_conta_resource_enviar_fatura_email_param_email}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.enviarFaturaEmailUsingPOST(id, dataVencimento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{fatura_conta_resource_enviar_fatura_email_param_id_conta}}} | 
 **dataVencimento** | **String**| {{{fatura_conta_resource_enviar_fatura_email_param_data_vencimento}}} | 
 **email** | **String**| {{{fatura_conta_resource_enviar_fatura_email_param_email}}} | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarFaturasUsingGET1"></a>
# **listarFaturasUsingGET1**
> PageFaturaResponse listarFaturasUsingGET1(idConta, opts)

{{{fatura_resource_listar_faturas}}}

{{{fatura_resource_listar_faturas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturaApi()

var idConta = 789; // {Integer} {{{fatura_resource_listar_faturas_param_id_conta}}}

var opts = { 
  'situacaoProcessamento': "TODAS", // {String} {{{fatura_resource_listar_faturas_param_situacao_processamento}}}
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
api.listarFaturasUsingGET1(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{fatura_resource_listar_faturas_param_id_conta}}} | 
 **situacaoProcessamento** | **String**| {{{fatura_resource_listar_faturas_param_situacao_processamento}}} | [optional] [default to TODAS]
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageFaturaResponse**](PageFaturaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="visualizarDocumentoUsingGET"></a>
# **visualizarDocumentoUsingGET**
> Object visualizarDocumentoUsingGET(id, dataVencimento, opts)

{{{fatura_conta_resource_visualizar_documento}}}

{{{fatura_conta_resource_visualizar_documento_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturaApi()

var id = 789; // {Integer} {{{fatura_conta_resource_visualizar_documento_param_id_conta}}}

var dataVencimento = "dataVencimento_example"; // {String} {{{fatura_conta_resource_visualizar_documento_param_data_vencimento}}}

var opts = { 
  'flagApenasDemostrativo': true, // {Boolean} {{{fatura_conta_resource_enviar_fatura_email_param_flag_apenas_demostrativo}}}
  'flagRegistraBoleto': true // {Boolean} {{{fatura_conta_resource_enviar_fatura_email_param_flag_registra_boleto}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.visualizarDocumentoUsingGET(id, dataVencimento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{fatura_conta_resource_visualizar_documento_param_id_conta}}} | 
 **dataVencimento** | **String**| {{{fatura_conta_resource_visualizar_documento_param_data_vencimento}}} | 
 **flagApenasDemostrativo** | **Boolean**| {{{fatura_conta_resource_enviar_fatura_email_param_flag_apenas_demostrativo}}} | [optional] 
 **flagRegistraBoleto** | **Boolean**| {{{fatura_conta_resource_enviar_fatura_email_param_flag_registra_boleto}}} | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/pdf

