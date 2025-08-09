Notes:

Pipes can be used as a 
  - Transformer
  - Validator

Request Flow
Controller > Service > DTO > Entity > Database

Controller → validates with DTO → passes to Service → stores in Entity via TypeORM → DB.

