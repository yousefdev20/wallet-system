<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::updateOrCreate(
            ['email' => 'admin@admin.com'],
            ['email' => 'admin@admin.com', 'password' => Hash::make('admin123')]
        );
        User::updateOrCreate(
            ['email' => 'yousef.dev20@gmail.com'],
            ['email' => 'yousef.dev20@gmail.com', 'password' => Hash::make('dev'), 'name' => 'yousef']
        );
    }
}
