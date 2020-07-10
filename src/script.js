import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MyWidget(),
    ),
  );
}

class MyWidget extends StatefulWidget {
   @override
  _MyWidgetState createState() => _MyWidgetState();
  
}

class _MyWidgetState extends State<MyWidget>{
  
  var colors = [Colors.teal, Colors.red, Colors.green, Colors.purple, Colors.blue, Colors.blue[200], Colors.blue[400], Colors.yellow, Colors.orange, Colors.pink[300], Colors.red[300], Colors.green[300], Colors.purple[300], Colors.orange[200]];
  
  var currentColor = Colors.white;
  var currentButtonColor = Colors.black;
  
  void changeColor(){
     int random = Random().nextInt(colors.length);
      int randomButton = Random().nextInt(colors.length);
    setState((){
      currentColor = colors[random];
      currentButtonColor = colors[randomButton];
    });
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: currentColor,
      body: Center(
        child: RaisedButton(
          color: currentButtonColor,
          onPressed: changeColor,
          child: Text("Change Me", style: TextStyle(color: Colors.white, fontSize: 20)),
        ),
      ),
    );
  }
}
