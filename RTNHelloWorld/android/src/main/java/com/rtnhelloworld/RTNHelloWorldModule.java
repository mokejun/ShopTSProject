package com.RTNHelloWorld;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.helloworld.NativeHelloWorldSpec;

public class RTNHelloWorldModule extends NativeHelloWorldSpec {

    public static String NAME = "RTNHelloWorld";

    RTNHelloWorldModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @Override
    public String print(String a) {
       return a;
    }
}