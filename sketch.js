var margin = 30;
var ellipseSize = 20;

function setup() {
  createCanvas(1200, 700);
  background(200);

  // var gridBig = new EasyGrid({
  //   x: margin,
  //   y: margin,
  //   width: width - margin * 2,
  //   height: height - margin * 2,
  //   gutter: 20,
  //   columns: 5,
  //   rows: 5
  // });
  //
  // var gridSmall = new EasyGrid({
  //   x: 0,
  //   y: 0,
  //   width: gridBig.state.moduleWidth,
  //   height: gridBig.state.moduleHeight,
  //   gutter: 0,
  //   columns: 2,
  //   rows: 4
  // });
  //
  //
  // for (var i = 0; i < gridBig.modules.length; i++) {
  //   push();
  //   var mod = gridBig.modules[i];
  //   translate(mod.x, mod.y);
  //   rect(0, 0, mod.width, mod.height);
  //   for (var j = 0; j < gridSmall.modules.length; j++) {
  //     var modSmall = gridSmall.modules[j];
  //     push();
  //     translate(modSmall.x, modSmall.y);
  //     // accorindg to 0 0
  //     rect(0, 0, modSmall.width, modSmall.height);
  //     pop();
  //
  //   }
  //   pop();
  // };


  var grid1 = new EasyGrid({
    x: 30,
    y: 30,
    width: width / 12,
    height: height / 5,
    gutter: 0,
    columns: 2,
    rows: 4
  });

  var grid2 = new EasyGrid({
    x: 100 + width / 12,
    y: 30,
    width: width / 12,
    height: height / 5,
    gutter: 0,
    columns: 2,
    rows: 4
  });

  var grid3 = new EasyGrid({
    x: 180 + width / 6,
    y: 30,
    width: width / 12,
    height: height / 5,
    gutter: 0,
    columns: 2,
    rows: 4
  });

  var grid4 = new EasyGrid({
    x: 150 + width / 3,
    y: 30,
    width: width / 12,
    height: height / 5,
    gutter: 0,
    columns: 2,
    rows: 4
  });


  var grid5 = new EasyGrid({
    x: 320 + width / 3,
    y: 30,
    width: width / 12,
    height: height / 5,
    gutter: 0,
    columns: 2,
    rows: 4
  });

  var grid6 = new EasyGrid({
    x: 500 + width / 3,
    y: 30,
    width: width / 12,
    height: height / 5,
    gutter: 0,
    columns: 2,
    rows: 4
  });

  //letter a
  for (var i = 0; i < grid1.modules.length; i++) {
    var mod = grid1.modules[i];
    var a1 = grid1.modules[1];
    var a2 = grid1.modules[2];
    var a3 = grid1.modules[3];
    var a6 = grid1.modules[6];
    var a7 = grid1.modules[7];
    noFill();
    noStroke();
    rect(mod.x, mod.y, mod.width, mod.height);

    push();
    fill(255);
    ellipse(a1.x, a1.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(a2.x, a2.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(a3.x + mod.width, a3.y, ellipseSize, ellipseSize);
    fill(255);
    ellipse(a2.x, a2.y + mod.height, ellipseSize, ellipseSize);
    fill(0);
    ellipse(a3.x, a3.y + mod.height, ellipseSize, ellipseSize);
    fill(255);
    ellipse(a3.x + mod.width, a3.y + mod.height, ellipseSize, ellipseSize);
    fill(0);
    ellipse(a6.x, a6.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(a7.x + mod.width, a7.y, ellipseSize, ellipseSize);
    fill(255);
    ellipse(a6.x, a6.y + mod.height, ellipseSize, ellipseSize);
    fill(255);
    ellipse(a7.x + mod.width, a7.y + mod.height, ellipseSize, ellipseSize);
    pop();
  }

  //letter c
  for (var i = 0; i < grid2.modules.length; i++) {
    var mod2 = grid2.modules[i];
    // var c0 = grad2.modules[0];
    var c1 = grid2.modules[1];
    var c2 = grid2.modules[2];
    var c3 = grid2.modules[3];
    var c6 = grid2.modules[6];
    var c7 = grid2.modules[7];
    // noFill();
    // noStroke();
    rect(mod2.x, mod2.y, mod2.width, mod2.height);

    push();
    fill(255);
    ellipse(c1.x - mod2.width, c1.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(c1.x, c1.y, ellipseSize, ellipseSize);
    fill(255);
    ellipse(c1.x + mod.width, c1.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(c1.x - mod2.width, c1.y + mod.height, ellipseSize, ellipseSize);
    fill(255);
    ellipse(c1.x - mod2.width, c1.y + mod.height * 2, ellipseSize, ellipseSize);
    fill(0);
    ellipse(c1.x - mod2.width, c1.y + mod.height * 3, ellipseSize, ellipseSize);
    fill(255);
    ellipse(c1.x - mod2.width, c1.y + mod.height * 4, ellipseSize, ellipseSize);
    fill(0);
    ellipse(c1.x, c1.y + mod.height * 4, ellipseSize, ellipseSize);
    fill(255);
    ellipse(c1.x + mod.width, c1.y + mod.height * 4, ellipseSize, ellipseSize);
    pop();
  };
  //letter h
  for (var i = 0; i < grid3.modules.length; i++) {
    var mod3 = grid3.modules[i];
    // var c0 = grad2.modules[0];
    var h1 = grid3.modules[1];
    // var c2 = grid2.modules[2];
    // var c3 = grid2.modules[3];
    // var c6 = grid2.modules[6];
    // var c7 = grid2.modules[7];
    // noFill();
    // noStroke();
    rect(mod3.x, mod3.y, mod3.width, mod3.height);
    push();
    fill(255);
    ellipse(h1.x - mod3.width, h1.y, ellipseSize, ellipseSize);
    fill(255);
    ellipse(h1.x + mod3.width, h1.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(h1.x - mod3.width, h1.y + mod3.height, ellipseSize, ellipseSize);
    fill(0);
    ellipse(h1.x + mod3.width, h1.y + mod3.height, ellipseSize, ellipseSize);
    fill(255);
    ellipse(h1.x - mod3.width, h1.y + mod3.height * 2, ellipseSize, ellipseSize);
    fill(0);
    ellipse(h1.x, h1.y + mod3.height * 2, ellipseSize, ellipseSize);
    fill(255);
    ellipse(h1.x + mod3.width, h1.y + mod3.height * 2, ellipseSize, ellipseSize);
    fill(0);
    ellipse(h1.x - mod3.width, h1.y + mod3.height * 3, ellipseSize, ellipseSize);
    fill(0);
    ellipse(h1.x + mod3.width, h1.y + mod3.height * 3, ellipseSize, ellipseSize);
    fill(255);
    ellipse(h1.x - mod3.width, h1.y + mod3.height * 4, ellipseSize, ellipseSize);
    fill(255);
    ellipse(h1.x + mod3.width, h1.y + mod3.height * 4, ellipseSize, ellipseSize);

    pop();
  };
  //letter e
  for (var i = 0; i < grid4.modules.length; i++) {
    var mod4 = grid4.modules[i];
    // var c0 = grad2.modules[0];
    var e1 = grid4.modules[1];
    // var c2 = grid2.modules[2];
    // var c3 = grid2.modules[3];
    // var c6 = grid2.modules[6];
    // var c7 = grid2.modules[7];
    // noFill();
    // noStroke();
    rect(mod4.x, mod4.y, mod4.width, mod4.height);
    push();
    fill(0);
    ellipse(e1.x - mod4.width, e1.y, ellipseSize, ellipseSize);
    fill(255);
    ellipse(e1.x, e1.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(e1.x + mod4.width, e1.y, ellipseSize, ellipseSize);
    fill(255);
    ellipse(e1.x - mod4.width, e1.y + mod4.height, ellipseSize, ellipseSize);
    fill(0);
    ellipse(e1.x - mod4.width, e1.y + mod4.height * 2, ellipseSize, ellipseSize);
    fill(255);
    ellipse(e1.x, e1.y + mod4.height * 2, ellipseSize, ellipseSize);
    fill(0);
    ellipse(e1.x + mod4.width, e1.y + mod4.height * 2, ellipseSize, ellipseSize);
    fill(255);
    ellipse(e1.x - mod4.width, e1.y + mod4.height * 3, ellipseSize, ellipseSize);
    fill(0);
    ellipse(e1.x - mod4.width, e1.y + mod4.height * 4, ellipseSize, ellipseSize);
    fill(255);
    ellipse(e1.x, e1.y + mod4.height * 4, ellipseSize, ellipseSize);
    fill(0);
    ellipse(e1.x + mod4.width, e1.y + mod4.height * 4, ellipseSize, ellipseSize);
    pop();
  };
  //letter s
  for (var i = 0; i < grid5.modules.length; i++) {
    var mod5 = grid5.modules[i];
    // var c0 = grad2.modules[0];
    var s1 = grid5.modules[1];
    // var c2 = grid2.modules[2];
    // var c3 = grid2.modules[3];
    // var c6 = grid2.modules[6];
    // var c7 = grid2.modules[7];
    // noFill();
    // noStroke();
    rect(mod5.x, mod5.y, mod5.width, mod5.height);
    push();
    fill(255);
    ellipse(s1.x - mod5.width, s1.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(s1.x, s1.y, ellipseSize, ellipseSize);
    fill(255);
    ellipse(s1.x + mod5.width, s1.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(s1.x - mod5.width, s1.y + mod5.height, ellipseSize, ellipseSize);
    fill(255);
    ellipse(s1.x - mod5.width, s1.y + mod5.height * 2, ellipseSize, ellipseSize);
    fill(0);
    ellipse(s1.x, s1.y + mod5.height * 2, ellipseSize, ellipseSize);
    fill(255);
    ellipse(s1.x + mod5.width, s1.y + mod5.height * 2, ellipseSize, ellipseSize);
    fill(0);
    ellipse(s1.x + mod5.width, s1.y + mod5.height * 3, ellipseSize, ellipseSize);
    fill(255);
    ellipse(s1.x - mod5.width, s1.y + mod5.height * 4, ellipseSize, ellipseSize);
    fill(0);
    ellipse(s1.x, s1.y + mod5.height * 4, ellipseSize, ellipseSize);
    fill(255);
    ellipse(s1.x + mod5.width, s1.y + mod5.height * 4, ellipseSize, ellipseSize);
    pop();
  };

  for (var i = 0; i < grid6.modules.length; i++) {
    var mod6 = grid6.modules[i];
    // var c0 = grad2.modules[0];
    var ss1 = grid6.modules[1];
    // var c2 = grid2.modules[2];
    // var c3 = grid2.modules[3];
    // var c6 = grid2.modules[6];
    // var c7 = grid2.modules[7];
    // noFill();
    // noStroke();
    rect(mod6.x, mod6.y, mod6.width, mod6.height);
    push();
    fill(255);
    ellipse(ss1.x - mod5.width, ss1.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(ss1.x, ss1.y, ellipseSize, ellipseSize);
    fill(255);
    ellipse(ss1.x + mod5.width, ss1.y, ellipseSize, ellipseSize);
    fill(0);
    ellipse(ss1.x - mod5.width, ss1.y + mod5.height, ellipseSize, ellipseSize);
    fill(255);
    ellipse(ss1.x - mod5.width, ss1.y + mod5.height * 2, ellipseSize, ellipseSize);
    fill(0);
    ellipse(ss1.x, ss1.y + mod5.height * 2, ellipseSize, ellipseSize);
    fill(255);
    ellipse(ss1.x + mod5.width, ss1.y + mod5.height * 2, ellipseSize, ellipseSize);
    fill(0);
    ellipse(ss1.x + mod5.width, ss1.y + mod5.height * 3, ellipseSize, ellipseSize);
    fill(255);
    ellipse(ss1.x - mod5.width, ss1.y + mod5.height * 4, ellipseSize, ellipseSize);
    fill(0);
    ellipse(ss1.x, ss1.y + mod5.height * 4, ellipseSize, ellipseSize);
    fill(255);
    ellipse(ss1.x + mod5.width, ss1.y + mod5.height * 4, ellipseSize, ellipseSize);
    pop();
  };
}




function draw() {

}