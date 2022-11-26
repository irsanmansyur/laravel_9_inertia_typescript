<?php

namespace App\Http\Middleware;

use App\Http\Resources\SettingResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Foundation\Application;


class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed[]
     */
    public function share(Request $request)
    {
        $setting = new SettingResource(getSettingApp());
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'can' => $request->user() ? $request->user()->getPermissionArray() : []
            ],
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            "settings_app" => $setting->toArray($request),
            "flash" => fn () => $request->session()->only(['message', 'success', 'danger']),
            "time_render" => microtime(true) - LARAVEL_START,
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
