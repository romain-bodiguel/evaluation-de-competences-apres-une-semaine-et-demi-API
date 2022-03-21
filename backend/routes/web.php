<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// --------- VIDEOGAMES ---------

$router->get(
    'videogames',
    [
        'as' => 'videogame-list',
        'uses' => 'VideogameController@list'
    ]
);

$router->post(
    'videogames',
    [
        'as' => 'videogame-add',
        'uses' => 'VideogameController@add'
    ]
);

$router->get(
    'videogames/{id}',
    [
        'as' => 'videogame-read',
        'uses' => 'VideogameController@read'
    ]
);

$router->get(
    'videogames/{id}/reviews',
    [
        'as' => 'videogame-getreviews',
        'uses' => 'VideogameController@getReviews'
    ]
);


// --------- REVIEWS ---------

$router->get(
    'reviews',
    [
        'as' => 'review-list',
        'uses' => 'ReviewController@list'
    ]
);
