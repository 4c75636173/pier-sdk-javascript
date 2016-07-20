# Pier

Pier - JavaScript client for Pier
Gest\u00C3\u00A3o de pagamento eletr\u00C3\u00B4nicos como servi\u00C3\u00A7o
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 2.0.0
- Build date: 2016-07-20T09:51:53.607-03:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://pierlabs.io](http://pierlabs.io)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install Pier --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/Pier
then install it via:

```shell
npm install YOUR_USERNAME/Pier --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Pier = require('Pier');

var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var api = new Pier.CartaoApi()

var idConta = 56; // {Integer} ID da Conta

var idCartao = 56; // {Integer} ID do Cart\u00C3\u00A3o que deseja cancelar

var motivo = 56; // {Integer} Motivo do bloqueio

var opts = { 
  'observacao': "observacao_example" // {String} Alguma observa\u00C3\u00A7\u00C3\u00A3o para o bloqueio
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.bloquearCartaoUsingPOST(idConta, idCartao, motivo, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Pier.CartaoApi* | [**bloquearCartaoUsingPOST**](docs/CartaoApi.md#bloquearCartaoUsingPOST) | **POST** /api/contas/{idConta}/cartoes/{idCartao}/bloquear | Bloqueia um cart\u00C3\u00A3o
*Pier.CartaoApi* | [**consultarCartaoUsingGET**](docs/CartaoApi.md#consultarCartaoUsingGET) | **GET** /api/contas/{idConta}/cartoes/{idCartao} | Retorna um cart\u00C3\u00A3o
*Pier.CartaoApi* | [**consultarCartoesUsingGET**](docs/CartaoApi.md#consultarCartoesUsingGET) | **GET** /api/contas/{idConta}/cartoes | Retorna todos os cart\u00C3\u00B5es
*Pier.CartaoApi* | [**desbloquearCartaoUsingPOST**](docs/CartaoApi.md#desbloquearCartaoUsingPOST) | **POST** /api/contas/{idConta}/cartoes/{idCartao}/desbloquear | Desbloqueia um cart\u00C3\u00A3o
*Pier.CartaoApi* | [**embossadoCartaoUsingPUT**](docs/CartaoApi.md#embossadoCartaoUsingPUT) | **PUT** /api/contas/{idConta}/cartoes/{idCartao}/embossado | Embossado
*Pier.ContaApi* | [**buscarContaUsingGET**](docs/ContaApi.md#buscarContaUsingGET) | **GET** /api/contas/buscar | Buscar contas
*Pier.ContaApi* | [**consultarContaUsingGET**](docs/ContaApi.md#consultarContaUsingGET) | **GET** /api/contas/{idConta} | Retorna uma conta
*Pier.ContaApi* | [**consultarExtratoFaturasUsingGET**](docs/ContaApi.md#consultarExtratoFaturasUsingGET) | **GET** /api/contas/{idConta}/faturas | Retorna os extratos
*Pier.ContaApi* | [**consultarSaldosLimitesUsingGET**](docs/ContaApi.md#consultarSaldosLimitesUsingGET) | **GET** /api/contas/{idConta}/limites | Retorna o limite
*Pier.TokenApi* | [**callbackUsingPOST**](docs/TokenApi.md#callbackUsingPOST) | **POST** /api/tokens/callback | /tokens/callback
*Pier.TokenApi* | [**validarUsingPOST**](docs/TokenApi.md#validarUsingPOST) | **POST** /api/tokens/validar | /tokens/validar


## Documentation for Models

 - [Pier.AuthToken](docs/AuthToken.md)
 - [Pier.BodyAccessToken](docs/BodyAccessToken.md)
 - [Pier.CancelarCartaoResponse](docs/CancelarCartaoResponse.md)
 - [Pier.CartaoResponse](docs/CartaoResponse.md)
 - [Pier.ConsultarCartaoResponse](docs/ConsultarCartaoResponse.md)
 - [Pier.ConsultarContaCartaoResponse](docs/ConsultarContaCartaoResponse.md)
 - [Pier.ConsultarContaResponse](docs/ConsultarContaResponse.md)
 - [Pier.ConsultarExtratoContaResponse](docs/ConsultarExtratoContaResponse.md)
 - [Pier.ConsultarSaldoLimitesResponse](docs/ConsultarSaldoLimitesResponse.md)
 - [Pier.ContaCartaoResponse](docs/ContaCartaoResponse.md)
 - [Pier.ContaResponse](docs/ContaResponse.md)
 - [Pier.DesbloquearCartaoResponse](docs/DesbloquearCartaoResponse.md)
 - [Pier.EmbossadoCartaoResponse](docs/EmbossadoCartaoResponse.md)
 - [Pier.ExtraInfo](docs/ExtraInfo.md)
 - [Pier.ExtratoResponse](docs/ExtratoResponse.md)
 - [Pier.PessoaFisicaResponse](docs/PessoaFisicaResponse.md)
 - [Pier.SaldoLimiteResponse](docs/SaldoLimiteResponse.md)


## Documentation for Authorization


### access_token

- **Type**: API key
- **API key parameter name**: access_token
- **Location**: HTTP header

### client_id

- **Type**: API key
- **API key parameter name**: client_id
- **Location**: HTTP header

