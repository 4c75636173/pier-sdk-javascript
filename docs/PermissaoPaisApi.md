# Pier.PermissaoPaisApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarPaisUsingGET**](PermissaoPaisApi.md#consultarPaisUsingGET) | **GET** /api/paises/{id} | Apresenta dados de um determinado pa\u00EDs
[**listarContinentesUsingGET**](PermissaoPaisApi.md#listarContinentesUsingGET) | **GET** /api/continentes | Lista os continentes
[**listarPaisesUsingGET**](PermissaoPaisApi.md#listarPaisesUsingGET) | **GET** /api/paises | Lista os pa\u00EDses


<a name="consultarPaisUsingGET"></a>
# **consultarPaisUsingGET**
> PaisResponse consultarPaisUsingGET(id)

Apresenta dados de um determinado pa\u00EDs

Este m\u00E9todo permite consultar dados de um determinado pa\u00EDs a partir de seu codigo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PermissaoPaisApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do pa\u00EDs (id).


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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do pa\u00EDs (id). | 

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

Este recurso permite listar os continentes utilizados no recurso de permiss\u00E3o de uso do cart\u00E3o no exterior

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PermissaoPaisApi()

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

Lista os pa\u00EDses

Este recurso permite listar os pa\u00EDses.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PermissaoPaisApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'codigo': "codigo_example", // {String} C\u00F3digo do pa\u00EDs
  'sigla': "sigla_example", // {String} Sigla do pa\u00EDs
  'descricao': "descricao_example", // {String} Nome do pa\u00EDs
  'continente': "continente_example", // {String} Continente no qual o pa\u00EDs faz parte
  'flagAtivo': true // {Boolean} Atributo que representa se o pa\u00EDs est\u00E1 ativo
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **codigo** | **String**| C\u00F3digo do pa\u00EDs | [optional] 
 **sigla** | **String**| Sigla do pa\u00EDs | [optional] 
 **descricao** | **String**| Nome do pa\u00EDs | [optional] 
 **continente** | **String**| Continente no qual o pa\u00EDs faz parte | [optional] 
 **flagAtivo** | **Boolean**| Atributo que representa se o pa\u00EDs est\u00E1 ativo | [optional] 

### Return type

[**PagePaisResponse**](PagePaisResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

