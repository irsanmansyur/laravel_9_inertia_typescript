<?php

namespace App\Http\Controllers;

use App\Events\SettingUpdateEvent;
use App\Http\Requests\SettingRequest;
use App\Http\Requests\SettingUpdateRequest;
use App\Http\Resources\SettingResource;
use App\Http\Services\FileService;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        return Inertia::render("setting/index", [
            "setting" => new SettingResource(Setting::first())
        ]);
    }
    public function store(SettingRequest $settingRequest)
    {
        $data = $settingRequest->validated();
        $data['options']['logo'] = FileService::uploadFile($settingRequest->options['logo'], "STG", "settings");
        $setting = Setting::create($data);
        return back()->with(["success" => "Setting berhasil di tambahkan", "setting" => $setting]);
    }
    public function update(Setting $setting, SettingUpdateRequest $settingUpdateRequest)
    {
        $data = $settingUpdateRequest->validated();
        if (isset($data['options']['logo'])) {
            $data['options']['logo'] = FileService::uploadFile($data['options']['logo'], "STG", "settings");
            if (isset($setting->options['logo']))
                FileService::deleteFile($setting->options['logo'], "settings");
        } else {
            if (isset($setting->options['logo']))
                $data['options']['logo'] = $setting->options['logo'];
        }
        $setting->update($data);

        // running event
        event(new SettingUpdateEvent($setting));

        return back()->with(["success" => "Setting berhasil di update", "setting" => $setting]);
    }
}
