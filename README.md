# About

This repository is just a playground for me to explore NestJs framework with my friends.

## Request Flow

```mermaid
flowchart TD;
    A[Client Request] --> B[API Gateway]
    B --> C[Controller]
    C --> D[Validates with DTO]
    D --> E[Service]
    E --> F[Stores in Entity via TypeORM]
    F --> G[Database]
```

## Host Mapping

```cmd
  echo 127.0.0.1 localhost nest-poc.com >> C:\Windows\System32\Drivers\etc\hosts

  echo ::1 localhost nest-poc.com >> C:\Windows\System32\Drivers\etc\hosts
```
