import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-tertiary">
        Tertiary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>

      <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div class="alert alert-secondary" role="alert">
        This is a secondary alert—check it out!
      </div>
      <div class="alert alert-tertiary" role="alert">
        This is a tertiary alert—check it out!
      </div>
      <div class="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      <div class="alert alert-warning" role="alert">
        This is a warning alert—check it out!
      </div>
      <div class="alert alert-info" role="alert">
        This is a info alert—check it out!
      </div>
      <div class="alert alert-light" role="alert">
        This is a light alert—check it out!
      </div>
      <div class="alert alert-dark" role="alert">
        This is a dark alert—check it out!
      </div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
