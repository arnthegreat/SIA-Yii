<?php

return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=yii2basic',
    'username' => 'root',
    'password' => '','enableLogging' => true,
'logConfig' => [
    'class' => 'yii\log\DbTarget',
    'levels' => ['error', 'warning'],
    'categories' => ['yii\db\*'],
    'logVars' => [],
    'except' => [
        'yii\db\*',
    ],
],
    'charset' => 'utf8',

    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => 60,
    //'schemaCache' => 'cache',
];
