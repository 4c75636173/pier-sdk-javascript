# Pier.CartaoResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o do Cart\u00E3o. | [optional] 
**flagTitular** | **Integer** | Apresenta o tipo do Portador do cart\u00E3o, sendo: (1: Titular, 0: Adicional). | [optional] 
**idPessoa** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa a qual o cart\u00E3o pertence | [optional] 
**sequencialCartao** | **Integer** | N\u00FAmero sequencial do cart\u00E3o | [optional] 
**idConta** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o da Conta a qual o cart\u00E3o pertence. | [optional] 
**idStatus** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o do Status do Cart\u00E3o. | [optional] 
**dataStatus** | **String** | Apresenta a data em que o idStatusCartao atual do cart\u00E3o fora aplicado, quando houver. | [optional] 
**idEstagio** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o do Est\u00E1gio de Impress\u00E3o do Cart\u00E3o. | [optional] 
**dataEstagio** | **String** | Apresenta a data em que o idEstagio atual do cart\u00E3o fora aplicado, quando houver. | [optional] 
**numeroBin** | **Integer** | N\u00FAmero do bin do cart\u00E3o. | [optional] 
**numeroCartao** | **String** | Apresenta o n\u00FAmero do cart\u00E3o. | [optional] 
**numeroCartaoHash** | **Integer** | N\u00FAmero do cart\u00E3o hash. | [optional] 
**numeroCartaoCriptografado** | **String** | N\u00FAmero do cart\u00E3o criptografado. | [optional] 
**dataEmissao** | **String** | Apresenta a data de emiss\u00E3o do cart\u00E3o. | [optional] 
**dataValidade** | **String** | Apresenta a data de validade do cart\u00E3o em formato yyyy-MM, quando houver. | [optional] 
**cartaoVirtual** | **Integer** | Apresenta o status que informa se o cart\u00E3o \u00E9 virtual. Sendo: (1: True, 0: False). | [optional] 
**impressaoAvulsa** | **Integer** | Quando ativa, indica que o cart\u00E3o fora impresso na Origem Comercial. | [optional] 
**dataImpressao** | **String** | Apresenta a data em que o cart\u00E3o fora impresso, caso impress\u00E3o em loja, ou a data em que ele fora inclu\u00EDdo no arquivo para impress\u00E3o via gr\u00E1fica. | [optional] 
**nomeArquivoImpressao** | **String** | Apresenta o nome do arquivo onde o cart\u00E3o fora inclu\u00EDdo para impress\u00E3o por uma gr\u00E1fica, quando houver. | [optional] 
**idProduto** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o do Produto a qual o cart\u00E3o pertence. | [optional] 
**nomeImpresso** | **String** | Apresenta o nome impresso no cart\u00E3o. | [optional] 
**codigoDesbloqueio** | **String** | Apresenta um c\u00F3digo espec\u00EDfico para ser utilizado como vari\u00E1vel no processo de desbloqueio do cart\u00E3o para emissores que querem usar esta funcionalidade. | [optional] 


