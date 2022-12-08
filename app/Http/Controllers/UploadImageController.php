<?php

namespace App\Http\Controllers;

use App\Http\Services\FileService;
use Illuminate\Http\Request;


class UploadImageController extends Controller
{
    public function editorImage(Request $request)
    {
        $request->validate(["image" => "required|image|mimes:png,jpg", "folder" => "required|string"]);
        $fileName = FileService::uploadFile($request->image, "editor", $request->folder);
        return asset($request->folder . "/" . $fileName);
    }
    public function listImageEditor(Request $request)
    {
        $folder = $request->folder;
        $files = FileService::listFilePublic($folder);
        return response()->json(["data" => $files]);
    }
}
