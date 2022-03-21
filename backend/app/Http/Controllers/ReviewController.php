<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends CoreController
{
    /**
     * /reviews
     * GET
     */
    public function list()
    {
        // Get all items
        $list = Review::all();

        // Return JSON of this list
        return $this->sendJsonResponse($list, 200);
    }
}
