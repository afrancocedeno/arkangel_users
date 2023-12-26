## commands
```bash
nest new arkangel_users # create a nest app
nest generate res user # create a user crud
nest generate module # create a auth module
nest g gu auth/guards/api-key --flat # create a guard module
nest g cl shared/entities/default.entity --flat
nest g d auth/decorators/is-public # my custom decorator to handle access
sudo docker-compose up -d postgres
```

## resources
- [nest](https://docs.nestjs.com/)
- [nest cli](https://docs.nestjs.com/cli/usages)
- [nest and typeorm integration](https://docs.nestjs.com/techniques/database)
- [typeorm](https://typeorm.io/)

## considerations
- use a white brand nestjs app
- just learned about dockerize an entire app
- jsut learnd passporrt an alternative for crypto

## migrations usage
first create
```npm run migrations:show```
```npm run migrations:generate <path-to-migrations-dir/migration-name>```
then run
```npm run migrations:show```
```npm run migrations:run```
after making changes to entities run again
```npm run migrations:show```
```npm run migrations:generate <path-to-migrations-dir/migration-name>```
