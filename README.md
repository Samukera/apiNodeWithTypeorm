
# apiNodeTypeorm

  This is the version 2.0 of the <https://github.com/Samukera/apiNode> repository.

  Technologies used: Nodejs, Typescript, Typeorm, PostgreSQL and others.


## Installation

To use this API, follow these steps:

```bash
  clone this repo
  
  npm i or yarn i or yarn
```

After this, you need configure the `ormconfig.json` with the data corresponding of the yours database postgres. Attention with the port, database and others parameters. And configure the `.env` with the example of the `.env.example` in this repo.

The next step is to run the scripts to create and prepopulate the database. So:
```js
npm run typeorm migration:run
```

You can see the scripts with this command:
```js
npm run typeorm migration:show
```

Then, finally you can run te API in your localhost using:
```js
npm run dev
```
    
## API Reference

The file with the routes are in the "insomnia" folder in the project, just import and use.

## City Routes 

#### Get City With Filters

```http
  GET http://localhost:3000/cities/
```
It is possible to filter the cities by name or state id and also both, for that just send the desired field and its data via query. NOTE: if you do not specify any filter, all cities will be returned

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | optional |
| `state`|`number`|optional|

`example: http://localhost:3000/cities/?name=Santa%20Maria&state=20`

#### Post Create City

```http
  POST http://localhost:3000/cities/createCity
```
It is expected to send a json body with the fields: name, stateId

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required** |
| `state`      | `number` | **Required** |

#### example: {"name": "Porto Alegre", "state": 20}

## Client Routes

#### Post Create Client

```http
  POST http://localhost:3000/clients/createClient
```
It is expected that a json body with the fields: name, genre, bornIn, age, cityId
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required** |
| `genre`|`char`|**Required**|
| `bornIn` | `date(yyyy-MM-dd)` | **Required** |
| `age`|`number`|**Required**|
|`cityId`| `number`|**Required**|

`example: { "name": "Usuário 2", "genre": "M", "bornIn": "2000-12-22", "age": 21, "city": 1 }`

#### Delete Remove Client

```http
  DEL http://localhost:3000/clients/:clientId
```
Dele the client from the given `:clientId`
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `clientId`      | `number` | **Required** id for the client |

#### example: http://localhost:3000/clients/1

#### Put Change Client Name

```http
  PUT http://localhost:3000/clients/:clientId/changeClientName
```
Updates the client name from the id provided in the route, the name must be sent via json body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `clientId`      | `number` | **Required** id for the client|
| `name`      | `string` | **Required** |

#### example: json body=> { "name": "Bia"} url => http://localhost:3000/clients/1/changeClientName

#### Get Client With Filters

```http
  GET http://localhost:3000/clients/
```
It is possible to filter clients via id or name and also both, for that just send the desired field and its data via query. NOTE: if you do not specify any filter, all clients will be returned

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `clientId`      | `number` | optional |
| `name`      | `string` | optional |

#### example: http://localhost:3000/clients/?clientId=1&name=Samuel%20Rech

OBS: States are includes
```
 {
       "stateId": 1,
       "name": "Acre",
       "uf": "AC"
   },
   {
       "stateId": 2,
       "name": "Alagoas",
       "uf": "AL"
   },
   {
       "stateId": 3,
       "name": "Amapá",
       "uf": "AP"
   },
   {
       "stateId": 4,
       "name": "Amazonas",
       "uf": "AM"
   },
   {
       "stateId": 5,
       "name": "Bahia",
       "uf": "BA"
   },
   {
       "stateId": 6,
       "name": "Ceará",
       "uf": "CE"
   },
   {
       "stateId": 7,
       "name": "Espírito Santo",
       "uf": "ES"
   },
   {
       "stateId": 8,
       "name": "Goiás",
       "uf": "GO"
   },
   {
       "stateId": 9,
       "name": "Maranhão",
       "uf": "MA"
   },
   {
       "stateId": 10,
       "name": "Mato Grosso",
       "uf": "MT"
   },
   {
       "stateId": 11,
       "name": "Mato Grosso do Sul",
       "uf": "MS"
   },
   {
       "stateId": 12,
       "name": "Minas Gerais",
       "uf": "MG"
   },
   {
       "stateId": 13,
       "name": "Pará",
       "uf": "PA"
   },
   {
       "stateId": 14,
       "name": "Paraíba",
       "uf": "PB"
   },
   {
       "stateId": 15,
       "name": "Paraná",
       "uf": "PR"
   },
   {
       "stateId": 16,
       "name": "Pernambuco",
       "uf": "PE"
   },
   {
       "stateId": 17,
       "name": "Piauí",
       "uf": "PI"
   },
   {
       "stateId": 18,
       "name": "Rio de Janeiro",
       "uf": "RJ"
   },
   {
       "stateId": 19,
       "name": "Rio Grande do Norte",
       "uf": "RN"
   },
   {
       "stateId": 20,
       "name": "Rio Grande do Sul",
       "uf": "RS"
  },
   {
       "stateId": 21,
       "name": "Rondônia",
       "uf": "RO"
   },
   {
       "stateId": 22,
       "name": "Roraima",
       "uf": "RR"
   },
   {
       "stateId": 23,
       "name": "Santa Catarina",
       "uf": "SC"
   },
   {
       "stateId": 24,
       "name": "São Paulo",
       "uf": "SP"
   },
   {
       "stateId": 25,
       "name": "Sergipe",
       "uf": "SE"
   },
   {
       "stateId": 26,
       "name": "Tocantins",
       "uf": "TO"
   },
   {
       "stateId": 27,
       "name": "Distrito Federal",
       "uf": "DF"
   }
```
