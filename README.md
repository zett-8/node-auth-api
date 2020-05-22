# Node Api Server With JWT Auth

## Auth
- Passport
- Passport-JWT

## JWT
![jwt](https://github.com/Zett-8/images/blob/master/jwt/jwt.png)

## Testing
- Jest
- Supertest

## DB
- Sequelize

#### memo 
create model
```terminal
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

make migration file
```terminal
npx sequelize-cli migration:generate --name migration-user
```

run migrate
```terminal
npx sequelize-cli db:migrate
```

undo migrate
```terminal
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all
```

create seed file
```terminal
npx sequelize-cli seed:generate --name demo-user
```

added seeds
```terminal
npx sequelize-cli db:seed:all
```

undo seeds
```terminal
npx sequelize-cli db:seed:undo
npx sequelize-cli db:seed:undo:all
```
