/* global Phaser */

// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Apr 2022
// This file contains the JS functions for index.html

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Splash Scene")
  }

  create(data) {}

  updat(time, delta) {}
}

export default SplashScene
