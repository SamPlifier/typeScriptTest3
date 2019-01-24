/// <reference path="../../../typings/require.d.ts" />
/// <reference path="../../../../../../../node_modules/@types/requirejs/index.d.ts" />
require.config({
    baseUrl: 'scripts/amd-demo'
});
require(['bootstrapper'], function (bootstrapper) {
    bootstrapper.run();
});
// /Users/samdc/Desktop/psTypescriptFundamentals/typeScriptTest3/Before/TypeScriptAMD/TypeScriptAMD/scripts/amd-demo/scripts/amd-demo/main.js
