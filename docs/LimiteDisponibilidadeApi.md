# Pier.LimiteDisponibilidadeApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT9**](LimiteDisponibilidadeApi.md#alterarUsingPUT9) | **PUT** /api/limites-disponibilidades | Realiza a altera\u00E7\u00E3o dos limites da conta
[**consultarUsingGET20**](LimiteDisponibilidadeApi.md#consultarUsingGET20) | **GET** /api/limites-disponibilidades | Apresenta os limites da conta


<a name="alterarUsingPUT9"></a>
# **alterarUsingPUT9**
> LimiteDisponibilidadeResponse alterarUsingPUT9(idConta, opts)

Realiza a altera\u00E7\u00E3o dos limites da conta

Esse recurso permite realizar a altera\u00E7\u00E3o dos Limites de uma determinada Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.LimiteDisponibilidadeApi()

var idConta = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da Conta.

var opts = { 
  'limiteGlobal': 3.4, // {Number} Apresenta o valor do limite de cr\u00E9dito que o portador do cart\u00E3o possui.
  'limiteCompra': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para uso exclusivo em Compras Nacionais.
  'limiteParcelado': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para realizar transa\u00E7\u00F5es de compras parceladas.
  'limiteParcelas': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade.
  'limiteSaqueGlobal': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Nacional.
  'limiteSaquePeriodo': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Nacional dentro de cada ciclo de faturamento.
  'limiteConsignado': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00E9dito que ele poder\u00E1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00E1rio/vencimentos.
  'limiteInternacionalCompra': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para uso exclusivo em Compras Internacionais.
  'limiteInternacionalParcelado': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para realizar transa\u00E7\u00F5es Internacionais de Compras Parceladas.
  'limiteInternacionalParcelas': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade.
  'limiteInternacionalSaqueGlobal': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Internacional.
  'limiteInternacionalSaquePeriodo': 3.4, // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Internacional dentro de cada ciclo de faturamento.
  'limiteMaximo': 3.4 // {Number} Valor m\u00E1ximo do limite de cr\u00E9dito para realizar transa\u00E7\u00F5es.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT9(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da Conta. | 
 **limiteGlobal** | [**Number**](.md)| Apresenta o valor do limite de cr\u00E9dito que o portador do cart\u00E3o possui. | [optional] 
 **limiteCompra** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para uso exclusivo em Compras Nacionais. | [optional] 
 **limiteParcelado** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para realizar transa\u00E7\u00F5es de compras parceladas. | [optional] 
 **limiteParcelas** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade. | [optional] 
 **limiteSaqueGlobal** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Nacional. | [optional] 
 **limiteSaquePeriodo** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Nacional dentro de cada ciclo de faturamento. | [optional] 
 **limiteConsignado** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00E9dito que ele poder\u00E1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00E1rio/vencimentos. | [optional] 
 **limiteInternacionalCompra** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para uso exclusivo em Compras Internacionais. | [optional] 
 **limiteInternacionalParcelado** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para realizar transa\u00E7\u00F5es Internacionais de Compras Parceladas. | [optional] 
 **limiteInternacionalParcelas** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade. | [optional] 
 **limiteInternacionalSaqueGlobal** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Internacional. | [optional] 
 **limiteInternacionalSaquePeriodo** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Internacional dentro de cada ciclo de faturamento. | [optional] 
 **limiteMaximo** | [**Number**](.md)| Valor m\u00E1ximo do limite de cr\u00E9dito para realizar transa\u00E7\u00F5es. | [optional] 

### Return type

[**LimiteDisponibilidadeResponse**](LimiteDisponibilidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET20"></a>
# **consultarUsingGET20**
> LimiteDisponibilidadeResponse consultarUsingGET20(idConta)

Apresenta os limites da conta

Este m\u00E9todo permite consultar os Limites configurados para uma determinada Conta, a partir do c\u00F3digo de identifica\u00E7\u00E3o da conta (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.LimiteDisponibilidadeApi()

var idConta = 789; // {Integer} Id Conta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET20(idConta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| Id Conta | 

### Return type

[**LimiteDisponibilidadeResponse**](LimiteDisponibilidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

