# Pier.GlobaltagcontamultiApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**criarCartoesMultiAppUsingPOST**](GlobaltagcontamultiApi.md#criarCartoesMultiAppUsingPOST) | **POST** /api/cartoes/gerar-cartoes-multiapp | {{{conta_resource_cadastrar_cartao_multiapp}}}
[**criarContasMultiAppUsingPOST**](GlobaltagcontamultiApi.md#criarContasMultiAppUsingPOST) | **POST** /api/contas/cadastrar-conta-multiapp | {{{conta_resource_cadastrar_conta_multiapp}}}


<a name="criarCartoesMultiAppUsingPOST"></a>
# **criarCartoesMultiAppUsingPOST**
> VinculoCartoesResponse criarCartoesMultiAppUsingPOST(cartaoMultiAppPersist)

{{{conta_resource_cadastrar_cartao_multiapp}}}

{{{conta_resource_cadastrar_cartao_multiapp_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontamultiApi()

var cartaoMultiAppPersist = new Pier.CartaoMultiAppPersistValue(); // {CartaoMultiAppPersistValue} cartaoMultiAppPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.criarCartoesMultiAppUsingPOST(cartaoMultiAppPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartaoMultiAppPersist** | [**CartaoMultiAppPersistValue**](CartaoMultiAppPersistValue.md)| cartaoMultiAppPersist | 

### Return type

[**VinculoCartoesResponse**](VinculoCartoesResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="criarContasMultiAppUsingPOST"></a>
# **criarContasMultiAppUsingPOST**
> ContaMultiAppResponse criarContasMultiAppUsingPOST(contaMultiAppPersist)

{{{conta_resource_cadastrar_conta_multiapp}}}

{{{conta_resource_cadastrar_conta_multiapp_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcontamultiApi()

var contaMultiAppPersist = new Pier.ContaMultiAppPersistValue(); // {ContaMultiAppPersistValue} contaMultiAppPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.criarContasMultiAppUsingPOST(contaMultiAppPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contaMultiAppPersist** | [**ContaMultiAppPersistValue**](ContaMultiAppPersistValue.md)| contaMultiAppPersist | 

### Return type

[**ContaMultiAppResponse**](ContaMultiAppResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

