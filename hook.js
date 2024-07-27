function hook_dlopen_anti(soName = '') {
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {
            var pathptr = args[0];
            if (pathptr !== undefined && pathptr != null) {
                var path = ptr(pathptr).readCString();
                if(path.indexOf('libmsaoaidsec.so') >= 0){
                    ptr(pathptr).writeUtf8String("");
                }
                console.log('path: ',path)
            }
        }
    });
}


function hookSetParam2H5() {
    Java.perform(function() {
        const WebViewFragment = Java.use("com.sohu.sohuvideo.ui.fragment.WebViewFragment");

        WebViewFragment.setParam2H5.implementation = function() {
            console.log("Entering setParam2H5()");
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            this.setParam2H5();
        };
    });
}

function hookClassBMethodC() {
    Java.perform(function() {
        const ClassB = Java.use("com.sohu.sohuvideo.control.http.url.b");

        ClassB.c.implementation = function(str) {
            console.log("Entering b.c(String)");
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return true;
        };
    });
}



function hookGetSign2(){
    // 在 com.common.sdk.net.connect.http.cronet.model.Request 类中监听 addSignToRequest 方法
Java.perform(function() {
    var RequestClass = Java.use("com.common.sdk.net.connect.http.cronet.model.Request");
    RequestClass["addSignToRequest"].implementation = function() {
        // 打印函数调用栈
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        
        // 执行原始的 addSignToRequest 方法
        this.addSignToRequest();
    };
});
}


function check(){
    Java.perform(function() {
        var WebViewFragment = Java.use("com.sohu.sohuvideo.ui.fragment.WebViewFragment");
    
        WebViewFragment.initWebSetting.implementation = function(z2) {
            console.log("Entering initWebSetting()");
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return this.initWebSetting(z2);
        };
    });
}


function getResult(){
    // 在 com.common.sdk.net.connect.http.cronet.model.Request 类中监听 getSortParamsStr 方法
    Java.perform(function() {
        var RequestClass = Java.use("com.common.sdk.net.connect.http.cronet.model.Request");
        RequestClass["getSortParamsStr"].implementation = function(map, str) {
            // 打印函数调用栈
            // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            
            // 执行原始的 getSortParamsStr 方法并获取返回值
            var result = this.getSortParamsStr(map, str);
            
            // 打印返回值
            console.log("Return value: " + result);
            
            // 返回原始的结果
            return result;
        };
    });
}

function getSign3(){
    Java.perform(function() {
        var HashEncrypt = Java.use("com.android.sohu.sdk.common.encrypt.HashEncrypt");
    
        HashEncrypt.f.overload("java.lang.String").implementation = function(str) {
            console.log("[+] Entering HashEncrypt.f()");
            console.log("[+] Arguments: " + str);
    
            // 打印调用栈
            var stack = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
            console.log("[+] Call stack:\n" + stack);
    
            // 调用原始方法并获取返回值
            var result = this.f(str);
            console.log("[+] Return value: " + result);
    
            return result;
        }
    });
}

function getSign4(){
    Java.perform(function() {
        var Request = Java.use("com.common.sdk.net.connect.http.cronet.model.Request");
    
        Request.addHeader.overload("java.lang.String", "java.lang.String").implementation = function(str, str2) {
            console.log("[+] Entering Request.addHeader()");
            console.log("[+] First argument: " + str);
            console.log("[+] Second argument: " + str2);
    
    
            return;
        }
    });
}

function hookXhs() {
    // let Webview = Java.use("android.webkit.WebView");

    // // inspect settings of android.webkit.WebView class
    // Java.choose("android.webkit.WebView", {
    //     // check if there are any running webview instances
    //     onMatch: function(instance) {
    //         // webview must be running on the main thread, so scheduleOnMainThread() will force the function to run on the main thread
    //         Java.scheduleOnMainThread(function(){
    //             console.log('[+] Found an instance(s): ', instance);
    //             console.log('\n[+] Javascript Enable =>',instance.getSettings().getJavaScriptEnabled());
    //             console.log('\n[+] AllowUniversalAccessFromFileURLs Enable =>',instance.getSettings().getAllowUniversalAccessFromFileURLs());
    //             console.log('\n[+] AllowFileAccessFromFileURLs Enable =>',instance.getSettings().getAllowFileAccessFromFileURLs());
    //             console.log('\n[+] AllowFileAccess Enable =>',instance.getSettings().getAllowFileAccess());

    //             // 打印函数调用栈
    //             console.log('\n[+] Call Stack:');
    //             Java.perform(function() {
    //                 console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
    //             });
    //         });
    //     },
    //     onComplete: function() {
    //         console.log("Finished enumerating instances!");
    //     }
    // });

    // // inspect Javascript Bridge
    // Webview.addJavascriptInterface.overload('java.lang.Object', 'java.lang.String').implementation = function(obj, name) {
    //     console.log('\n[+] Bridge Call=>',name);

    //     // 打印函数调用栈
    //     console.log('\n[+] Call Stack:');
    //     Java.perform(function() {
    //         console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
    //     });

    //     this.addJavascriptInterface.overload('java.lang.Object', 'java.lang.String').call(this,obj, name);
    // }
    Java.perform(function() {
        // var WebView = Java.use("android.webkit.WebView");
    
        // // 处理 loadUrl(String url) 版本
        // WebView.loadUrl.overload('java.lang.String').implementation = function(url) {
        //     console.log("loadUrl(String url) called with url: " + url);
        //     console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        //     return this.loadUrl(url);
        // };
    
        // // 处理 loadUrl(String url, Map<String, String> additionalHttpHeaders) 版本
        // WebView.loadUrl.overload('java.lang.String', 'java.util.Map').implementation = function(url, headers) {
        //     console.log("loadUrl(String url, Map<String, String> additionalHttpHeaders) called with url: " + url + " and headers: " + headers);
        //     console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        //     return this.loadUrl(url, headers);
        // };
        // let c = Java.use("j16.c");
        // c["o"].implementation = function () {
        //     console.log(`c.o is called`);
        //     let result = this["o"]();
        //     console.log(`c.o result=${result}`);
        //             // 遍历并打印 List 中的元素
        //     console.log("o() returned a List containing:");
        //     for (var i = 0; i < result.size(); i++) {
        //         console.log("- " + result.get(i));
        //     }

        //     // 返回原始方法的返回值
        //     return result;

        // };
        // let p = Java.use("h26.p");
        // p["I"].implementation = function (host) {
        //     console.log(`p.I is called: host=${host}`);
        //     let result = this["I"](host);
        //     console.log(`p.I result=${result}`);
        //     return result;
        // };
        // Save this as a Frida script (e.g. 'hook_evaluatejavascript.js')

// Define a function to print the function call stack


        // Hook the 'evaluateJavascript' method


        let b = Java.use("b26.b");
        b["O"].implementation = function (str, webview) {
            console.log(`b.O is called: str=${str}, webview=${webview}`);
        // 打印函数调用栈
        console.log('\n[+] Call Stack:');
        Java.perform(function() {
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        });

            this["O"](str, webview);
        };
        let XhsWebViewBridgeV2 = Java.use("com.xingin.xywebview.bridge.XhsWebViewBridgeV2");
        XhsWebViewBridgeV2["getUserInfo"].implementation = function (param) {
            console.log(`XhsWebViewBridgeV2.getUserInfo is called: param=${param}`);
            this["getUserInfo"](param);
        };
    });
}
function hookXhsWebview(){
    Java.perform(function () {
        var WebView = Java.use("android.webkit.WebView");
    
        WebView.addJavascriptInterface.implementation = function (obj, name) {
            // 打印函数调用栈
            console.log("addJavascriptInterface called:");
            console.log(Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join("\n"));
    
            // 打印函数参数
            console.log("Object: " + obj);
            console.log("Name: " + name);
    
            // 调用原始的 addJavascriptInterface 方法
            return this.addJavascriptInterface(obj, name);
        };
    });
}


function hookEvaluateJavaScript(){
    var WebView = Java.use('android.webkit.WebView');
    WebView.evaluateJavascript.overload('java.lang.String', 'android.webkit.ValueCallback').implementation = function(script, callback) {
        console.log('Intercepted evaluateJavascript()');
    // 打印函数调用栈
    console.log('\n[+] Call Stack:');
    Java.perform(function() {
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
    });

        return this.evaluateJavascript(script, callback);
    };
}


function hookzdm(){
    Java.perform(function() {
        // var hook = Java.use('java.lang.String');
        // hook.contains.implementation = function(str) {
        // console.log('String.contains() called with argument: ' + str);
        // // 打印函数调用栈
        // console.log('\n[+] Call Stack:');
        // Java.perform(function() {
        //     console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        // });

        //     return this.contains(str);
        // };
        let CommonWebviewClient = Java.use("com.smzdm.client.base.detail.webview.CommonWebviewClient");

        CommonWebviewClient["loadUrl"].implementation = function (str, webView) {
            console.log('\n[+] Call Stack:');
            Java.perform(function() {
                console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            });
            console.log(`CommonWebviewClient.loadUrl is called: str=${str}, webView=${webView}`);
            this["loadUrl"](str, webView);
        };
    });
}

function hookdida(){
    Java.perform(function() {
        var WebView = Java.use("android.webkit.WebView");
    
        // 处理 loadUrl(String url) 版本
        WebView.loadUrl.overload('java.lang.String').implementation = function(url) {
            console.log("loadUrl(String url) called with url: " + url);
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return this.loadUrl(url);
        };
    
        // 处理 loadUrl(String url, Map<String, String> additionalHttpHeaders) 版本
        WebView.loadUrl.overload('java.lang.String', 'java.util.Map').implementation = function(url, headers) {
            console.log("loadUrl(String url, Map<String, String> additionalHttpHeaders) called with url: " + url + " and headers: " + headers);
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return this.loadUrl(url, headers);
        }
    });

}


hook_dlopen_anti();
hookdida();
// hookzdm();
// hookXhs();
// hookXhsWebview();
// getResult();
// getSign3();
// hookGetSign();
// hookSetParam2H5();
// hookClassBMethodC();


