# Pier.PermissaoPaisesApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarPaisUsingGET**](PermissaoPaisesApi.md#consultarPaisUsingGET) | **GET** /api/paises/{id} | Apresenta dados de um determinado pa\u00C3\u00ADs
[**listarContinentesUsingGET**](PermissaoPaisesApi.md#listarContinentesUsingGET) | **GET** /api/continentes | Lista os continentes
[**listarPaisesUsingGET**](PermissaoPaisesApi.md#listarPaisesUsingGET) | **GET** /api/paises | Lista os pa\u00C3\u00ADses


<a name="consultarPaisUsingGET"></a>
# **consultarPaisUsingGET**
> PaisResponse consultarPaisUsingGET(id)

Apresenta dados de um determinado pa\u00C3\u00ADs

Este m\u00C3\u00A9todo permite consultar dados de um determinado pa\u00C3\u00ADs a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PermissaoPaisesApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do pa\u00C3\u00ADs (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarPaisUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do pa\u00C3\u00ADs (id). | 

### Return type

[**PaisResponse**](PaisResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarContinentesUsingGET"></a>
# **listarContinentesUsingGET**
> [Object] listarContinentesUsingGET

Lista os continentes

Este recurso permite listar os continentes utilizados no recurso de permiss\u00C3\u00A3o de uso do cart\u00C3\u00A3o no exterior

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PermissaoPaisesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarContinentesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarPaisesUsingGET"></a>
# **listarPaisesUsingGET**
> PagePaisResponse listarPaisesUsingGET(opts)

Lista os pa\u00C3\u00ADses

Este recurso permite listar os pa\u00C3\u00ADses.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PermissaoPaisesApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'codigo': "codigo_example", // {String} C\u00C3\u00B3digo do pa\u00C3\u00ADs
  'sigla': "sigla_example", // {String} Sigla do pa\u00C3\u00ADs
  'descricao': "descricao_example", // {String} Nome do pa\u00C3\u00ADs
  'continente': "continente_example", // {String} Continente no qual o pa\u00C3\u00ADs faz parte
  'flagAtivo': true // {Boolean} Atributo que representa se o pa\u00C3\u00ADs est\u00C3\u00A1 ativo
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarPaisesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **codigo** | **String**| C\u00C3\u00B3digo do pa\u00C3\u00ADs | [optional] 
 **sigla** | **String**| Sigla do pa\u00C3\u00ADs | [optional] 
 **descricao** | **String**| Nome do pa\u00C3\u00ADs | [optional] 
 **continente** | **String**| Continente no qual o pa\u00C3\u00ADs faz parte | [optional] 
 **flagAtivo** | **Boolean**| Atributo que representa se o pa\u00C3\u00ADs est\u00C3\u00A1 ativo | [optional] 

### Return type

[**PagePaisResponse**](PagePaisResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

