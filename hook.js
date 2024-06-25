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
