
# wallet-system

``` 
PHP -v  ~7.4.16
Laravel -v 8.0.38
Laravel Sunctum package
Vue -v 3.0
 ```
### Maintainer
```
(Yousef)
```

### Implementation Note
```
wallet service to make every thing readable testable cleanable
i developed facade class (WalletFacade), which take the own implementation
from base method inside wallet model.
now we have two main action (withdraw, deposit).

#simple way
WalletFacade::deposit(amount);

#simple way
WalletFacade::withdraw(amount);

UnacceptedTransactionException
Exception to inform when Exception catched it UnacceptedTransactionException and reportd on log,
render default message for user.

Observer design pattern 
1. WalletObserver
2. TransactionObserver
3. UserObserver
4. PaymentGatewayObserver

how the wallet created?
when the user regester through regester page the user observer class listen any action from user
after that the application will create new wallet. 

Configration file i create constants file to declear main const variable.

Middleware CheckPaymentIsMultiCurrency
this middleware work as a pipeline when the admin choose multi currency when transaction 
this class will convert to correct value.

Validation
every validation class located inside request classes.

node we have dynamic validation on DepositRequest class
because every payment gateway have defirrent configration.   

Requests

Guards
we have two guard (admin, client)

Routes
I created new route file (admin) to store in seperate way all admin requests.

Database
I created new ER digram to show database procces located inside database directory

regarding design (front-end) i am already build application and move it on this application 
the desgin located on (fronend branch).     
```
###Note
```
I had added the docker service on this application to service every service via docker,
below there are all services we are used in this project. (docker optional not mandatory)
```
### Services

```
1. PHP -v ~7.4 (with all php extenstion)
2. mysql -v 8.0
3. supervisord or any web service
4. redis server, or local driver
```

### Front-end Services

```
1. Vue-cli -v 3.0
2. Vuex
3. VueRouter
4. Apexcharts
```

#### you can use artisan command on server what is useful artisan command in laravel (high recommend)
``` bash
1. clean cache, view, routes, config type:
   php artisan optimize:clear
2. clear the logs files. (custom command)
you can use this options (--file, --from) optional
   php artisan log:clear
3. composer dump-autoload
4. to push the data type this command make sure type the previous command before. 
    php artisan db:seed
4. to migrate database type this command. (just in first time)
   php artisan migrate
5. if do you like take backup from database structure type this command.
   php artisan migrate:generate
6. store all config file, routing, view, cache. (high recommend)
   php artisan route:cache
   php artisan config:cache
   php artisan view:cache

--if we have new files or new class (service provider) to serve this application such as mail, seeder, etc...   
(composer dump-autoload)
--if do you like upgrade packages and laravel framework. (danger command in production)  
(composer update)
--if you dont have vendor directory in production type this command:
(composer install)
--if PHP version not compatible with your platform type this command instead of:
(composer install--ignore-platform-reqs)
--if the node_modal does not exist, or do you want develop new feature in production.
npm install
### serve application on any empty port.

```
###Docker command
```
```

### Finally type this command (all in one) 
just when use docker
```
make 
```
