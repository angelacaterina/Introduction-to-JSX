/**
 * Dichiariamo le variabili per poter utilizzare react
 *    var React = require("react");
 *    var ReactDOM = require("react-dom");
 * REACT
 *  ReactDOM.render(<h1>Hello World!</h1>,document.getElementById("root"));
 * JAVASCRIPT PURO (variante)
 *  var h1 = document.createElement("h1");
 *  h1.innerHTML = "Hello World!";
 *  document.getElementById("root").appendChild(h1);
 */

/** Step 2
 * utilizzo import per non dichiarare le variabili
 * per poter avere più di un elemento all'interno di react devo utilizzare un div, che ricchiuda tutti gli elemeneti di cui ho bisogno
 * - la prima parte dentro in render definisce ciò che vogliamo far vedere
 * - la seconda parte definiscie dove vogliamo mostrarlo
 */

//import
import React from "react";
import ReactDOM from "react-dom";
//React
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
