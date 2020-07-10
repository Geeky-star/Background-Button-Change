define('dartpad_main', ['dart_sdk', 'flutter_web'], (function load__dartpad_main(dart_sdk, flutter_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = flutter_web.src__widgets__framework;
  const colors = flutter_web.src__material__colors;
  const scaffold = flutter_web.src__material__scaffold;
  const basic = flutter_web.src__widgets__basic;
  const raised_button = flutter_web.src__material__raised_button;
  const text = flutter_web.src__widgets__text;
  const text_style = flutter_web.src__painting__text_style;
  const binding = flutter_web.src__widgets__binding;
  const app = flutter_web.src__material__app;
  var bootstrap = Object.create(dart.library);
  var main = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var ColorL = () => (ColorL = dart.constFn(dart.legacy(ui.Color)))();
  var JSArrayOfColorL = () => (JSArrayOfColorL = dart.constFn(_interceptors.JSArray$(ColorL())))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "file:///tmp/dartpadVOJASJ/main.dart";
  bootstrap.main = function main$() {
    return async.async(dart.void, function* main$() {
      yield ui.webOnlyInitializePlatform();
      main.main();
    });
  };
  main.MyWidget = class MyWidget extends framework.StatefulWidget {
    createState() {
      return new main._MyWidgetState.new();
    }
  };
  (main.MyWidget.new = function() {
    main.MyWidget.__proto__.new.call(this);
    ;
  }).prototype = main.MyWidget.prototype;
  dart.addTypeTests(main.MyWidget);
  dart.addTypeCaches(main.MyWidget);
  dart.setMethodSignature(main.MyWidget, () => ({
    __proto__: dart.getMethods(main.MyWidget.__proto__),
    createState: dart.fnType(dart.legacy(main._MyWidgetState), [])
  }));
  dart.setLibraryUri(main.MyWidget, L0);
  main._MyWidgetState = class _MyWidgetState extends framework.State$(dart.legacy(main.MyWidget)) {
    changeColor() {
      let random = math.Random.new().nextInt(this.colors[$length]);
      let randomButton = math.Random.new().nextInt(this.colors[$length]);
      this.setState(dart.fn(() => {
        this.currentColor = this.colors[$_get](random);
        this.currentButtonColor = this.colors[$_get](randomButton);
      }, VoidToNullN()));
    }
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: this.currentColor, body: new basic.Center.new({child: new raised_button.RaisedButton.new({color: this.currentButtonColor, onPressed: dart.bind(this, 'changeColor'), child: new text.Text.new("Change Me", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 20.0})})})})});
    }
  };
  (main._MyWidgetState.new = function() {
    this.colors = JSArrayOfColorL().of([colors.Colors.teal, colors.Colors.red, colors.Colors.green, colors.Colors.purple, colors.Colors.blue, colors.Colors.blue._get(200), colors.Colors.blue._get(400), colors.Colors.yellow, colors.Colors.orange, colors.Colors.pink._get(300), colors.Colors.red._get(300), colors.Colors.green._get(300), colors.Colors.purple._get(300), colors.Colors.orange._get(200)]);
    this.currentColor = colors.Colors.white;
    this.currentButtonColor = colors.Colors.black;
    main._MyWidgetState.__proto__.new.call(this);
    ;
  }).prototype = main._MyWidgetState.prototype;
  dart.addTypeTests(main._MyWidgetState);
  dart.addTypeCaches(main._MyWidgetState);
  dart.setMethodSignature(main._MyWidgetState, () => ({
    __proto__: dart.getMethods(main._MyWidgetState.__proto__),
    changeColor: dart.fnType(dart.void, []),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main._MyWidgetState, L0);
  dart.setFieldSignature(main._MyWidgetState, () => ({
    __proto__: dart.getFields(main._MyWidgetState.__proto__),
    colors: dart.fieldType(dart.legacy(core.List$(dart.legacy(ui.Color)))),
    currentColor: dart.fieldType(dart.legacy(ui.Color)),
    currentButtonColor: dart.fieldType(dart.legacy(ui.Color))
  }));
  main.main = function main$0() {
    binding.runApp(new app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new main.MyWidget.new()}));
  };
  dart.trackLibraries("dartpad_main", {
    "file:///tmp/dartpadVOJASJ/bootstrap.dart": bootstrap,
    "file:///tmp/dartpadVOJASJ/main.dart": main
  }, {
  }, null);
  // Exports:
  return {
    tmp__dartpadVOJASJ__bootstrap: bootstrap,
    tmp__dartpadVOJASJ__main: main
  };
}));

//# sourceMappingURL=main.dart.js.map