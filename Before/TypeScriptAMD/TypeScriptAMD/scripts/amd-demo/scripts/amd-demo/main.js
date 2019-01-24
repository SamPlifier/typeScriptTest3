/// <reference path="/Users/samdc/Desktop/psTypescriptFundamentals/typeScriptTest3/Before/TypeScriptAMD/TypeScriptAMD/scripts/typings/require.d.ts" />
require.config({
    baseUrl: 'scripts/amd-demo'
});
require(['bootstrapper'], function (bootstrapper) {
    bootstrapper.run();
});
