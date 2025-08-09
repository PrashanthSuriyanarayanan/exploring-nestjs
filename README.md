Notes:

Pipes can be used as a 
  - Transformer
  - Validator

Request Flow
Controller > Service > DTO > Entity > Database

Controller → validates with DTO → passes to Service → stores in Entity via TypeORM → DB.

Host Mapping to test CORS
echo 127.0.0.1 localhost nest-poc.com >> C:\Windows\System32\Drivers\etc\hosts

echo ::1 localhost nest-poc.com >> C:\Windows\System32\Drivers\etc\hosts