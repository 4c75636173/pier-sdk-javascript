# Pier.ContaDetalheResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id). | [optional] 
**idPessoa** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa Titular da Conta (id). | [optional] 
**nome** | **String** | Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;. | 
**idProduto** | **Integer** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do produto ao qual a conta faz parte. (id). | [optional] 
**idOrigemComercial** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id) que deu origem a Conta. | [optional] 
**nomeOrigemComercial** | **String** | Nome da origem comercial | 
**idFantasiaBasica** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Fantasia Basica (id). | [optional] 
**nomeFantasiaBasica** | **String** | Nome da Fantasia Basica | 
**idStatusConta** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do status atribuido a conta. | [optional] 
**statusConta** | **String** | Descri\u00C3\u00A7\u00C3\u00A3o do status da conta | [optional] 
**diaVencimento** | **Integer** | Apresenta o dia de vencimento. | [optional] 
**melhorDiaCompra** | **Integer** | Apresenta o melhor dia de compra. | [optional] 
**dataStatusConta** | **String** | Apresenta a data em que o idStatusConta atual fora atribu\u00C3\u00ADdo para ela. | [optional] 
**valorRenda** | **Number** | Valor da renda comprovada. | [optional] 
**dataCadastro** | **String** | Apresenta a data em que o cart\u00C3\u00A3o foi gerado. | [optional] 
**dataUltimaAlteracaoVencimento** | **String** | Apresenta a data da ultima altera\u00C3\u00A7\u00C3\u00A3o de vencimento. | [optional] 
**dataHoraUltimaCompra** | **String** | Apresenta a data da ultima altera\u00C3\u00A7\u00C3\u00A3o de vencimento. | [optional] 
**numeroAgencia** | **Integer** | N\u00C3\u00BAmero da ag\u00C3\u00AAncia. | [optional] 
**numeroContaCorrente** | **String** | N\u00C3\u00BAmero da conta corrente. | [optional] 
**formaEnvioFatura** | **String** | Forma de envio da fatura. | [optional] 
**titular** | **Boolean** | Apresenta se a pessoa \u00C3\u00A9 titular da conta. | [optional] 
**limiteGlobal** | **Number** | Apresenta o valor do limite de cr\u00C3\u00A9dito que o portador do cart\u00C3\u00A3o possui. | 
**limiteSaqueGlobal** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional. | 
**saldoDisponivelGlobal** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Nacionais. | 
**saldoDisponivelSaque** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento. | 
**diasAtraso** | **Integer** | Apresenta a quantidade de dias que a conta esta em atraso | [optional] 


