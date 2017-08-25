<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Shipping;

use Validator;

class ShippingController extends Controller {
	public function index() {
		$shipping = Shipping::all();

		if ( ! $shipping ) {
			throw new HttpException( 400, "Invalid data" );
		}

		return response()->json( $shipping, 200 );
	}


	/**
	 * @param Request $request
	 *  Save Shipping to database
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function store( Request $request ) {

		// validate data before saving
		$validator = Validator::make( $request->all(), [
			'name'  => 'required|min:2|max:255',
			'color' => 'required|min:2|max:255',
			'cost'  => 'required',
		] );

		if ( $validator->fails() ) {
			return response()->json( $validator->errors(), 400 );
		}

		$shipping = new Shipping;

		$shipping->name = $request->name;
		$shipping->color = $request->color;
		$shipping->cost = $request->cost;

		if ( $shipping->save() ) {
			return $shipping;
		}

		throw new HttpException( 400, "Invalid data" );
	}
}
