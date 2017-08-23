# Pier.CartaoResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o. | [optional] 
**flagTitular** | **Integer** | Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: (1: Titular, 0: Adicional). | [optional] 
**idPessoa** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o cart\u00C3\u00A3o pertence | [optional] 
**sequencialCartao** | **Integer** | N\u00C3\u00BAmero sequencial do cart\u00C3\u00A3o | [optional] 
**idConta** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o cart\u00C3\u00A3o pertence. | [optional] 
**idStatus** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o. | [optional] 
**dataStatus** | **String** | Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver. | [optional] 
**idEstagio** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o. | [optional] 
**dataEstagio** | **String** | Apresenta a data em que o idEstagio atual do cart\u00C3\u00A3o fora aplicado, quando houver. | [optional] 
**numeroBin** | **Integer** | N\u00C3\u00BAmero do bin do cart\u00C3\u00A3o. | [optional] 
**numeroCartao** | **String** | Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o. | [optional] 
**numeroCartaoHash** | **Integer** | N\u00C3\u00BAmero do cart\u00C3\u00A3o hash. | [optional] 
**numeroCartaoCriptografado** | **String** | N\u00C3\u00BAmero do cart\u00C3\u00A3o criptografado. | [optional] 
**dataEmissao** | **String** | Apresenta a data de emiss\u00C3\u00A3o do cart\u00C3\u00A3o. | [optional] 
**dataValidade** | **String** | Apresenta a data de validade do cart\u00C3\u00A3o em formato yyyy-MM, quando houver. | [optional] 
**cartaoVirtual** | **Integer** | Apresenta o status que informa se o cart\u00C3\u00A3o \u00C3\u00A9 virtual. Sendo: (1: True, 0: False). | [optional] 
**impressaoAvulsa** | **Integer** | Quando ativa, indica que o cart\u00C3\u00A3o fora impresso na Origem Comercial. | [optional] 
**dataImpressao** | **String** | Apresenta a data em que o cart\u00C3\u00A3o fora impresso, caso impress\u00C3\u00A3o em loja, ou a data em que ele fora inclu\u00C3\u00ADdo no arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica. | [optional] 
**nomeArquivoImpressao** | **String** | Apresenta o nome do arquivo onde o cart\u00C3\u00A3o fora inclu\u00C3\u00ADdo para impress\u00C3\u00A3o por uma gr\u00C3\u00A1fica, quando houver. | [optional] 
**idProduto** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence. | [optional] 
**nomeImpresso** | **String** | Apresenta o nome impresso no cart\u00C3\u00A3o. | [optional] 
**codigoDesbloqueio** | **String** | Apresenta um c\u00C3\u00B3digo espec\u00C3\u00ADfico para ser utilizado como vari\u00C3\u00A1vel no processo de desbloqueio do cart\u00C3\u00A3o para emissores que querem usar esta funcionalidade. | [optional] 


