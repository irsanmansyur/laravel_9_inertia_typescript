<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;
use Opcodes\LogViewer\Facades\LogViewer;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Model::preventLazyLoading(!$this->app->isProduction());
        Model::handleLazyLoadingViolationUsing(function ($model, $relation) {
            $class = get_class($model);
            info("Attempted to lazy load [{$relation}] on model [{$class}].");
        });
        LogViewer::auth(function ($request) {
            return $request->user() && in_array($request->user()->email, ['irsan00mansyur@gmail.com',]);
        });
    }
}
