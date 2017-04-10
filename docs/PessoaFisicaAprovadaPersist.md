# Pier.PessoaFisicaAprovadaPersist

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nome** | **String** | Apresenta o nome completo da pessoa fisica. | 
**nomeMae** | **String** | Apresenta o nome da m\u00C3\u00A3e da pessoa fisica | [optional] 
**dataNascimento** | [**ModelDate**](ModelDate.md) | Data de Nascimento da Pessoa. Essa data deve ser informada no formato aaaa-MM-dd. | [optional] 
**sexo** | **String** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino). | [optional] 
**cpf** | **String** | N\u00C3\u00BAmero do Cadastro de Pessoa Fisica (CPF) | 
**numeroIdentidade** | **String** | N\u00C3\u00BAmero da Identidade | [optional] 
**orgaoExpedidorIdentidade** | **String** | Org\u00C3\u00A3o expedidor do RG. | [optional] 
**unidadeFederativaIdentidade** | **String** | Sigla da Unidade Federativa de onde foi expedido a Identidade | [optional] 
**dataEmissaoIdentidade** | [**ModelDate**](ModelDate.md) | Data emiss\u00C3\u00A3o da identidade no formato aaaa-MM-dd | [optional] 
**idEstadoCivil** | **Integer** | Id Estado civil da pessoa fisica | [optional] 
**profissao** | **String** | Profiss\u00C3\u00A3o da pessoa fisica | [optional] 
**idNaturezaOcupacao** | **Integer** | Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica | [optional] 
**idNacionalidade** | **Integer** | Id Nacionalidade da pessoa fisica | [optional] 
**idOrigemComercial** | **Integer** | Id da origem comercial | 
**idProduto** | **Integer** | Id do produto | 
**numeroAgencia** | **Integer** | N\u00C3\u00BAmero da ag\u00C3\u00AAncia. | [optional] 
**numeroContaCorrente** | **String** | N\u00C3\u00BAmero da conta corrente. | [optional] 
**email** | **String** | Email da pessoa fisica | [optional] 
**diaVencimento** | **Integer** | Dia vencimento | 
**nomeImpresso** | **String** | Nome que deve ser impresso no cart\u00C3\u00A3o | [optional] 
**nomeEmpresa** | **String** | Nome que deve ser impresso no cart\u00C3\u00A3o | [optional] 
**telefones** | [**[TelefonePessoaAprovadaPersist]**](TelefonePessoaAprovadaPersist.md) | Apresenta os telefones da empresa | [optional] 
**enderecos** | [**[EnderecoAprovadoPersist]**](EnderecoAprovadoPersist.md) | Pode ser informado os seguintes tipos de endere\u00C3\u00A7o: Residencial, Comercial, e Outros | 


