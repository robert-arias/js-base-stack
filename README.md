# Base stack - JavaScript

This is the base stack for a JavaScript (js) full-stack application. To hasten development, Docker has been used to run the frontend and the backend containers, configured with NGINX.
 - *Docker compose version*: `1.27`

## Installation steps
The full-stack consists of:
- Docker
- Frontend
- Backend
- Reverse proxy

**Notes**:
> - For installation purposes, it will be assumed that you're on the root project for each step.
> - It's recommended to use NVM to switch and automatically detect the correct NodeJS version.

### Docker
All the stack is containerized to easen development. No custom images are used.

**Disclaimer**
> The `docker-compose` configuration is for *local development ONLY*.
### Backend
The backend consists of the API and the database.

### API
For the API, `Express` will be used to handle build the endpoints, handle the authentication and authorization.
Follow the next steps to correctly set it up.

- Go to `./api`
- Run `npm i`

#### Database
For the database, `PostgreSQL` is used to store all the application data.
Follow the next steps to correctly set it up.

- Go to `./database`
- Run `vim .env`
- Add the following enviroment variables:
    ```
    POSTGRES_USER=username
    POSTGRES_PASSWORD=password
    POSTGRES_DB=database
    ```
- Save the file

### Reverse Proxy
The server used to proxy request is `NGINX`.

**Disclaimer**
> The `default.conf` configuration is for *local development ONLY*.