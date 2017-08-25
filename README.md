
# Run Project (Laravel and React.Js)


## Installation

Development environment requirements :
- [VirtualBox 5.1](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant 1.9](https://www.vagrantup.com/downloads.html)
- [Composer 1.3](https://getcomposer.org)

Setting up your development environment on your local machine with [Homestead](https://laravel.com/docs/5.4/homestead) :
```
$ git clone https://github.com/dangtienngoc/simple_laravel_react
$ cd simple_laravel_react
$ cp .env.dev .env
$ composer install
$ vagrant up
```

Now you can access the site via [http://192.168.10.10](http://192.168.10.10) or [http://boxinator.app](http://boxinator.app) if you added the domain to your hosts file.

## Before starting

The following commands must be executed on the virtual machine :
```
$ vagrant ssh
$ cd /home/vagrant/simple_laravel_react
```

You need to run the migrations :
```
$ php artisan migrate
```

And then, compile the assets :
```
$ npm install
$ npm run start
```

## Accessing the API

Clients can access to the REST API. API requests require authentication via token. You can create a new token in your user profil.

Then, you can use this token either as url parameter or in Authorization header :

```
# Get all shipping
GET http://boxinator.app/api/shipping
# Post shipping
POST http://boxinator.app/api/shipping
```

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.