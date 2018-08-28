# Pier.GlobaltaxasrefinanciamentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarUsingGET51**](GlobaltaxasrefinanciamentoApi.md#listarUsingGET51) | **GET** /api/taxas-refinanciamento | {{{taxas_refinanciamento_listar}}}


<a name="listarUsingGET51"></a>
# **listarUsingGET51**
> PageTaxasRefinanciamentoResponse listarUsingGET51(opts)

{{{taxas_refinanciamento_listar}}}

{{{taxas_refinanciamento_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaxasrefinanciamentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{taxas_refinanciamento_request_id_value}}}
  'idProduto': 789, // {Integer} {{{taxas_refinanciamento_request_id_produto_value}}}
  'dataEntrada': "dataEntrada_example", // {String} {{{taxas_refinanciamento_request_data_entrada_value}}}
  'vencimento': "vencimento_example" // {String} {{{taxas_refinanciamento_request_vencimento_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET51(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{taxas_refinanciamento_request_id_value}}} | [optional] 
 **idProduto** | **Integer**| {{{taxas_refinanciamento_request_id_produto_value}}} | [optional] 
 **dataEntrada** | **String**| {{{taxas_refinanciamento_request_data_entrada_value}}} | [optional] 
 **vencimento** | **String**| {{{taxas_refinanciamento_request_vencimento_value}}} | [optional] 

### Return type

[**PageTaxasRefinanciamentoResponse**](PageTaxasRefinanciamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

