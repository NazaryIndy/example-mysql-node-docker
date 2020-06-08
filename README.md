![Node + Docker](https://raw.githubusercontent.com/Osedea/nodock/master/docs/images/nodock.jpg)

<a name="Requirements"></a>
## Requirements

* [Docker Engine 17.06+](https://docs.docker.com/engine/installation/)
* [Docker Compose 1.8+](https://docs.docker.com/compose/install/)

<a name="Installation"></a>
## Installation
Tested on macOS. For Ubuntu might use sudo for docker (see https://docs.docker.com/engine/install/linux-postinstall/)
```bash
# Clone the Project
git clone roonyx.team:2222/alexey.chubukov/nodejs-api-docker-template.git

cd /nodejs-api-docker-template
cp ./.env.dist ./.env
cp ./config.json.dist ./config/config.json

#Make build in detached mode (up-build-d) or with logs if need (up-build)
make up-build-d

#Go to mysql container and check mydb databaase
make console-mysql
mysql -uroot -p
# Set password value
use mydb
# if mydb databse is not exist, create it:
# Run "CREATE DATABASE mydb" and exit from mysql and container
exit 
exit
# Go inside node container
make console-node

# Run following inside the container
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
exit

```


<a name="Workspace"></a>
## Workspace
npm installed inside the node container. If you want to install new modules, you need to do it instde the container. Use "make console-node" and other commands from Makefile. Add your own commands to Makefile.

Use "npx sequelize-cli" to run sequelize client console commands inside node container.

<a name="API"></a>
## API endpoints
By default you have 1 model and 4 endpoints

GET: /api/all
```http://localhost:3000/api/all```

POST: /api/new
```http://localhost:3000/api/new```

PUT: /api/update/{id}
```http://localhost:3000/api/update/{id}```

PUT: /api/delete/{id}
```http://localhost:3000/api/delete/{id}```