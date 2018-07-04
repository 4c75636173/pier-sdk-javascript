# Pier.GlobaltagtiporesolucaocontestacaoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarTipoResolucaoContestacaoUsingGET**](GlobaltagtiporesolucaocontestacaoApi.md#listarTipoResolucaoContestacaoUsingGET) | **GET** /api/tipos-resolucoes-contestacoes | {{{tipo_resolucao_contestacao_resource_listar_tipo_contestacao}}}


<a name="listarTipoResolucaoContestacaoUsingGET"></a>
# **listarTipoResolucaoContestacaoUsingGET**
> PageTipoResolucaoContestacaoResponse listarTipoResolucaoContestacaoUsingGET(opts)

{{{tipo_resolucao_contestacao_resource_listar_tipo_contestacao}}}

{{{tipo_resolucao_contestacao_resource_listar_tipo_resolucao_contestacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtiporesolucaocontestacaoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idTipoResolucaoContestacao': 789, // {Integer} {{{tipo_resolucao_contestacao_request_idTipoResolucaoContestacao_value}}}
  'descricao': "descricao_example" // {String} {{{tipo_resolucao_contestacao_request_descricao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTipoResolucaoContestacaoUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idTipoResolucaoContestacao** | **Integer**| {{{tipo_resolucao_contestacao_request_idTipoResolucaoContestacao_value}}} | [optional] 
 **descricao** | **String**| {{{tipo_resolucao_contestacao_request_descricao_value}}} | [optional] 

### Return type

[**PageTipoResolucaoContestacaoResponse**](PageTipoResolucaoContestacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

