# Pier.GlobaltagajustefinanceiroApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ajustarContaUsingPOST**](GlobaltagajustefinanceiroApi.md#ajustarContaUsingPOST) | **POST** /api/ajustes-financeiros | {{{ajuste_financeiro_resource_ajustar_conta}}}
[**consultarUsingGET3**](GlobaltagajustefinanceiroApi.md#consultarUsingGET3) | **GET** /api/ajustes-financeiros/{id} | {{{ajuste_financeiro_resource_consultar}}}
[**listarUsingGET2**](GlobaltagajustefinanceiroApi.md#listarUsingGET2) | **GET** /api/ajustes-financeiros | {{{ajuste_financeiro_resource_listar}}}


<a name="ajustarContaUsingPOST"></a>
# **ajustarContaUsingPOST**
> AjusteFinanceiroResponse ajustarContaUsingPOST(idTipoAjuste, dataAjuste, valorAjuste, idConta, opts)

{{{ajuste_financeiro_resource_ajustar_conta}}}

{{{ajuste_financeiro_resource_ajustar_conta_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagajustefinanceiroApi()

var idTipoAjuste = 789; // {Integer} {{{ajuste_financeiro_persist_id_tipo_ajuste_value}}}

var dataAjuste = "dataAjuste_example"; // {String} {{{ajuste_financeiro_persist_data_ajuste_value}}}

var valorAjuste = 3.4; // {Number} {{{ajuste_financeiro_persist_valor_ajuste_value}}}

var idConta = 789; // {Integer} {{{ajuste_financeiro_persist_id_conta_value}}}

var opts = { 
  'identificadorExterno': "identificadorExterno_example", // {String} {{{ajuste_financeiro_persist_identificador_externo_value}}}
  'idTransacaoOriginal': 789 // {Integer} {{{ajuste_persist_id_transacao_original}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ajustarContaUsingPOST(idTipoAjuste, dataAjuste, valorAjuste, idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTipoAjuste** | **Integer**| {{{ajuste_financeiro_persist_id_tipo_ajuste_value}}} | 
 **dataAjuste** | **String**| {{{ajuste_financeiro_persist_data_ajuste_value}}} | 
 **valorAjuste** | [**Number**](.md)| {{{ajuste_financeiro_persist_valor_ajuste_value}}} | 
 **idConta** | **Integer**| {{{ajuste_financeiro_persist_id_conta_value}}} | 
 **identificadorExterno** | **String**| {{{ajuste_financeiro_persist_identificador_externo_value}}} | [optional] 
 **idTransacaoOriginal** | **Integer**| {{{ajuste_persist_id_transacao_original}}} | [optional] 

### Return type

[**AjusteFinanceiroResponse**](AjusteFinanceiroResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET3"></a>
# **consultarUsingGET3**
> AjusteFinanceiroResponse consultarUsingGET3(id)

{{{ajuste_financeiro_resource_consultar}}}

{{{ajuste_financeiro_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagajustefinanceiroApi()

var id = 789; // {Integer} {{{ajuste_financeiro_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET3(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{ajuste_financeiro_resource_consultar_param_id}}} | 

### Return type

[**AjusteFinanceiroResponse**](AjusteFinanceiroResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET2"></a>
# **listarUsingGET2**
> PageAjusteResponse listarUsingGET2(opts)

{{{ajuste_financeiro_resource_listar}}}

{{{ajuste_financeiro_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagajustefinanceiroApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idTipoAjuste': 789, // {Integer} {{{ajuste_request_id_tipo_ajuste_value}}}
  'dataAjuste': "dataAjuste_example", // {String} {{{ajuste_request_data_ajuste_value}}}
  'valorAjuste': 3.4, // {Number} {{{ajuste_request_valor_ajuste_value}}}
  'identificadorExterno': "identificadorExterno_example", // {String} {{{ajuste_request_identificador_externo_value}}}
  'idConta': 789 // {Integer} {{{ajuste_request_id_conta_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idTipoAjuste** | **Integer**| {{{ajuste_request_id_tipo_ajuste_value}}} | [optional] 
 **dataAjuste** | **String**| {{{ajuste_request_data_ajuste_value}}} | [optional] 
 **valorAjuste** | [**Number**](.md)| {{{ajuste_request_valor_ajuste_value}}} | [optional] 
 **identificadorExterno** | **String**| {{{ajuste_request_identificador_externo_value}}} | [optional] 
 **idConta** | **Integer**| {{{ajuste_request_id_conta_value}}} | [optional] 

### Return type

[**PageAjusteResponse**](PageAjusteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

