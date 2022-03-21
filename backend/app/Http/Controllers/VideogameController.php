<?php

namespace App\Http\Controllers;

use App\Models\Videogame;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class VideogameController extends CoreController
{

    public function list() {

        //je crée un objet Videogame qui va appeler la méthode all
        $list = Videogame::all();
        //je return le résultat en json, grâce à la méthode sendJsonResponse du CoreController, et je lui dis de retourner également un code 200
        return $this->sendJsonResponse($list, 200);
    }

    public function add(Request $request) {
        // je crée un nouvel objet Videogame
        $videogame = new Videogame;

        // je définis le name et l'editor grâce au Request
        $videogame->name   = $request->input('name');
        $videogame->editor = $request->input('editor');

        // je sauvegarde dans la BDD
        $insertedRow = $videogame->save();
        // et je fais mes vérifications pour savoir si la ligne a été ajoutée en BDD
        if($insertedRow) {
            return response()->json($videogame, Response::HTTP_CREATED);
        } else {
            return response("", Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * /videogames/[id]
     * GET
     */
    public function read($id)
    {
        // Get item or send 404 response if not
        $item = Videogame::find($id);

        // Si on a un résultat
        if (!empty($item)) {
            // Return JSON of this list
            return $this->sendJsonResponse($item, 200);
        } else { // Sinon
            // HTTP status code 404 Not Found
            return $this->sendEmptyResponse(404);
        }
    }

    /**
     * /videogames/[id]/reviews
     * GET
     */
    public function getReviews($id)
    {
        // Get item or send 404 response if not
        $item = Videogame::find($id);

        // Si on a un résultat
        if (!empty($item)) {
            // Retrieve all related Reviews (thanks to Relationships)
            $reviews = $item->reviews->load(['videogame', 'platform']);
            // But, relationships with videogame & plaftorm are not configured yet
            // $reviews = $item->reviews;

            // Return JSON of this list
            // return $this->sendJsonResponse($reviews, 200);
            return $this->sendJsonResponse($reviews, 200);
        } else { // Sinon
            // HTTP status code 404 Not Found
            return $this->sendEmptyResponse(404);
        }
    }
}
