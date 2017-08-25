<?php

namespace App\Http\Controllers;

use App\Shipping;
use Illuminate\Http\Request;
use Validator;

class ShippingController extends Controller
{
    public function index()
    {
        $shipping = Shipping::all();

        if (!$shipping) {
            throw new HttpException(400, "Invalid data");
        }

        return response()->json($shipping, 200);
    }

    /**
     * @param Request $request
     *  Save Shipping to database
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        // validate data before saving
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2|max:255',
            'color' => 'required',
            'country' => 'required',
            'weight' => 'required',
        ]);

        if ($validator->fails()) {

            $errors = array(
                "errors" => $validator->errors(),
            );

            return response()->json($errors, 200);
        }

        $shipping = new Shipping;

        $shipping->name = $request->name;
        $shipping->color = $request->color;
        $shipping->country = $request->country;
        $shipping->weight = $request->weight;

        if ($shipping->save()) {
            return $shipping;
        }

        throw new HttpException(400, "Invalid data");
    }
}
