<!-- <p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT). -->



After Install Laravel 

Run cmd for install inertia
composer require inertiajs/inertia-laravel

Add a root template 
Create file app.blade.php in resource/view 
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale-1.0, maximum-scale=1.0" />
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <script src="{{ mix('/js/app.js') }}" defer></script>
    </head>
    <body>
        @inertia
    </body>
</html>

Setup a middleware 
For that create a middleware 
php artisan inertia:middleware

Go to Kernel.php and in web section add 
 'web' => [
            // -----
            \App\Http\Middleware\HandleInertiaRequests::class,
        ],

Install Dependencies 
npm install @inertiajs/inertia @inertiajs/inertia-react

In resource/js/app.js file add
import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react"; // Correct casing


createInertiaApp({
    resolve: name => import(`./Pages/${name}`), // Fixed the dot in front of Pages
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    }
});

Create A Test.js in your resource/js/Pages folder
import React from 'react';
import { Head } from '@inertiajs/inertia-react';


export default function Test() {
    return (
        <h1>Welcome Successfully Inertia Integrated in Laravel Admin</h1>
    )
}


Install babel plugins
Code splitting breaks apart the various pages of your application into smaller bundles, which are then loaded on demand when visiting new pages. This can significantly reduce the size of the initial JavaScript bundle, improving the time first to render. To use code splitting with Inertia, you'll need to enable dynamic imports. That’s why you'll need a Babel plugin to make this work.

For install 
npm install @babel/plugin-syntax-dynamic-import

Now in root directory create a file .babelrc
{
    "presets": [
        "@babel/preset-react"
    ]
}

Then run
npm install
npm ci
npm install --save-dev @babel/preset-react
 npm install react-dom

Then create and build your React app 
npm run dev
Create a middleware 
php artisan make:controller TestController

 use Inertia\Inertia;


public function show() {
        return Inertia::render('Test');
    }

Create a route
Route::get('/test', [TestController::class, 'show']);

