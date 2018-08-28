# Pier.BinchaveresourceApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarBinChaveUsingPUT**](BinchaveresourceApi.md#alterarBinChaveUsingPUT) | **PUT** /api/bins-chaves/{id} | alterarBinChave
[**consultarUsingGET10**](BinchaveresourceApi.md#consultarUsingGET10) | **GET** /api/bins-chaves/{id} | consultar
[**listarBinChaveUsingGET**](BinchaveresourceApi.md#listarBinChaveUsingGET) | **GET** /api/bins-chaves | listarBinChave
[**salvarUsingPOST4**](BinchaveresourceApi.md#salvarUsingPOST4) | **POST** /api/bins-chaves | salvar


<a name="alterarBinChaveUsingPUT"></a>
# **alterarBinChaveUsingPUT**
> Object alterarBinChaveUsingPUT(id, request, login)

alterarBinChave

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.BinchaveresourceApi()

var id = 789; // {Integer} id

var request = new Pier.BinChaveUpdate(); // {BinChaveUpdate} request

var login = "login_example"; // {String} login


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarBinChaveUsingPUT(id, request, login, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 
 **request** | [**BinChaveUpdate**](BinChaveUpdate.md)| request | 
 **login** | **String**| login | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET10"></a>
# **consultarUsingGET10**
> Object consultarUsingGET10(id)

consultar

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.BinchaveresourceApi()

var id = 789; // {Integer} id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET10(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarBinChaveUsingGET"></a>
# **listarBinChaveUsingGET**
> Object listarBinChaveUsingGET(opts)

listarBinChave

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.BinchaveresourceApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} 
  'idTipoChave': 789, // {Integer} 
  'idBin': 789, // {Integer} 
  'chave': "chave_example", // {String} 
  'checkValue': "checkValue_example", // {String} 
  'validade': "validade_example", // {String} 
  'flagDescriptografado': true, // {Boolean} 
  'label': "label_example" // {String} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarBinChaveUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**|  | [optional] 
 **idTipoChave** | **Integer**|  | [optional] 
 **idBin** | **Integer**|  | [optional] 
 **chave** | **String**|  | [optional] 
 **checkValue** | **String**|  | [optional] 
 **validade** | **String**|  | [optional] 
 **flagDescriptografado** | **Boolean**|  | [optional] 
 **label** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST4"></a>
# **salvarUsingPOST4**
> Object salvarUsingPOST4(binChavePersist, login)

salvar

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.BinchaveresourceApi()

var binChavePersist = new Pier.BinChavePersist(); // {BinChavePersist} binChavePersist

var login = "login_example"; // {String} login


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST4(binChavePersist, login, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binChavePersist** | [**BinChavePersist**](BinChavePersist.md)| binChavePersist | 
 **login** | **String**| login | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

