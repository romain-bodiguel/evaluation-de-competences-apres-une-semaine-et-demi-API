<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class CoreController extends BaseController
{
    /**
     * Provide a centralized display of a JSON, with CORS, to all Controllers
     *
     * @param mixed $data
     * @param integer $httpStatusCode
     * @return void
     */
    protected function sendJsonResponse($data, $httpStatusCode = 200)
    {
        // Return response, with headers
        return response()->json($data, $httpStatusCode)
            ->header('Access-Control-Allow-Origin', '*') // autorise l'accès via XHR depuis n'importe quel domaine
            ->header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    }

    /**
     * Provide a centralized empty response, with CORS, to all Controllers
     *
     * @param integer $httpStatusCode
     * @return void
     */
    protected function sendEmptyResponse($httpStatusCode = 200)
    {
        // Return response, with headers
        return response('', $httpStatusCode)
            ->header('Access-Control-Allow-Origin', '*') // autorise l'accès via XHR depuis n'importe quel domaine
            ->header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    }
}
