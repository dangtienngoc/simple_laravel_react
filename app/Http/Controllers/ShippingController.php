<?php

namespace App\Http\Controllers;

use Illuminate\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ShippingController extends Controller {

	public function index() {
		$books = Book::paginate( 10 );
		if ( ! $books ) {
			throw new HttpException( 400, "Invalid data" );
		}

		return response()->json(
			$books,
			200
		);
	}
}