# Pier.FaturaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarLancamentosFuturosFaturaUsingGET1**](FaturaApi.md#consultarLancamentosFuturosFaturaUsingGET1) | **GET** /api/contas/{id}/faturas/planos-parcelamento | Listar planos de parcelamento


<a name="consultarLancamentosFuturosFaturaUsingGET1"></a>
# **consultarLancamentosFuturosFaturaUsingGET1**
> PagePlanoParcelamentoResponse consultarLancamentosFuturosFaturaUsingGET1(id, dataVencimentoPadrao, opts)

Listar planos de parcelamento

Lista os planos de parcelamento da fatura de uma conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.FaturaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var dataVencimentoPadrao = "dataVencimentoPadrao_example"; // {String} Indica a data de vencimento padr\u00C3\u00A3o das faturas

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
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
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **dataVencimentoPadrao** | **String**| Indica a data de vencimento padr\u00C3\u00A3o das faturas | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PagePlanoParcelamentoResponse**](PagePlanoParcelamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

