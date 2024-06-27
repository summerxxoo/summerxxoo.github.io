function hook_dlopen_anti(soName = '') {
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {
            var pathptr = args[0];
            if (pathptr !== undefined && pathptr != null) {
                var path = ptr(pathptr).readCString();
                if(path.indexOf('libmsaoaidsec.so') >= 0){
                    ptr(pathptr).writeUtf8String("");
                }
                // console.log('path: ',path)
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

function hookGetSign(){
    // 在 com.sohu.qianfan.base.net.SohuHttpModule 类中监听 getHeaders 方法
    Java.perform(function() {
        var SohuHttpModule = Java.use("com.sohu.qianfan.base.net.SohuHttpModule");
        SohuHttpModule["getHeaders"].implementation = function(originalHeader) {
            // 打印函数调用栈
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            
            // 执行原始的 getHeaders 方法
            return this.getHeaders(originalHeader);
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


hook_dlopen_anti();
// getResult();
getSign3();
hookGetSign();
// hookSetParam2H5();
// hookClassBMethodC();


