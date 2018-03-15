# Pier.LimiteApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarHistoricoAlteracoesLimitesUsingGET**](LimiteApi.md#listarHistoricoAlteracoesLimitesUsingGET) | **GET** /api/contas/{id}/historicos-alteracoes-limites | Lista o hist\u00F3rico de altera\u00E7\u00F5es de limites da conta


<a name="listarHistoricoAlteracoesLimitesUsingGET"></a>
# **listarHistoricoAlteracoesLimitesUsingGET**
> PageHistoricoEventosResponse listarHistoricoAlteracoesLimitesUsingGET(id, opts)

Lista o hist\u00F3rico de altera\u00E7\u00F5es de limites da conta

Este recurso consulta o hist\u00F3rico com as altera\u00E7\u00F5es de limites da conta informada

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.LimiteApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageHistoricoEventosResponse**](PageHistoricoEventosResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

