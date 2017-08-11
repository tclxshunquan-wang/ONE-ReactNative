package com.simpleapp;

import android.app.Activity;
import android.app.LoaderManager;
import android.content.Loader;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactInstanceManagerBuilder;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactRootView;
import com.facebook.react.cxxbridge.JSBundleLoader;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    public String getMainComponentName() {
        return "SimpleApp";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        delegate da=new delegate(this,getMainComponentName());
        return da;
    }

    class delegate extends ReactActivityDelegate{

         public delegate(Activity activity, @Nullable String mainComponentName) {
                 super(activity, mainComponentName);
         }

         public delegate(FragmentActivity fragmentActivity, @Nullable String mainComponentName) {
             super(fragmentActivity, mainComponentName);
         }

        @Override
        protected void loadApp(String appKey) {
            Log.e("TGA-----loadApp",appKey);
            super.loadApp(appKey);
        }


        @Override
        public ReactInstanceManager getReactInstanceManager() {
            ReactInstanceManagerBuilder build=ReactInstanceManager.builder().setApplication(getApplication()).setBundleAssetName("123").setJSBundleLoader(JSBundleLoader.createFileLoader(""));
            return build.build();
        }
    }
}
