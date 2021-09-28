
var ptGeo = new THREE.PlaneGeometry(10,20,10,10);

var txtPiso = new THREE.TextureLoader();
var pisoTxt = new txtPiso.load("pared/piso.png");
var piso = new THREE.Mesh(
    ptGeo,
    new THREE.MeshBasicMaterial({color:0xffffff, map:pisoTxt}));
piso.rotation.x = -Math.PI/2;
piso.rotation.z = Math.PI/2;
piso.position.y = -2;      

var txtTicho = new THREE.TextureLoader();
var tichoTxt = new txtTicho.load("pared/techo.png");
var ticho = new THREE.Mesh(
    ptGeo,
    new THREE.MeshBasicMaterial({color:0xffffff, map:tichoTxt}));
ticho.rotation.x = Math.PI/2;
ticho.rotation.z = Math.PI/2;
ticho.position.y = 1.5;

var paGeo = new THREE.PlaneGeometry(20, 3.5);
var txtPared = new THREE.TextureLoader();
var paredTxt = new txtPared.load("pared/pared.png");
var paMat = new THREE.MeshBasicMaterial({color:0xffffff, map:paredTxt});

var pared1 = new THREE.Mesh(paGeo, paMat);
pared1.position.set(0, -0.25, -5);
var pared2 = new THREE.Mesh(paGeo, paMat);
pared2.position.set(0, -0.25, 5);
pared2.rotation.y = Math.PI;

var pbGeo = new THREE.PlaneGeometry(10, 3.5);
var txtParedb = new THREE.TextureLoader();
var paredbTxt = new txtParedb.load("pared/paredb.png");
var pbMat = new THREE.MeshBasicMaterial({color:0xffffff, map:paredbTxt});

var pared3 = new THREE.Mesh(pbGeo, pbMat);
pared3.position.set(10, -0.25, 0);
pared3.rotation.y = -Math.PI/2;
var pared4 = new THREE.Mesh(pbGeo, pbMat);
pared4.position.set(-10, -0.25, 0);
pared4.rotation.y = Math.PI/2;

var cubo = new THREE.Mesh(
  new THREE.BoxGeometry(10.5,2.7,0.125),
  new THREE.MeshBasicMaterial({color:0xa6a6ae})
);
cubo.position.y = -.65;

scene.add(piso, ticho, pared1, pared2, pared3, pared4, cubo);

//cuadro 1
var txt1 = new THREE.TextureLoader().load("cuadros/c1.jpg");
var cdr1 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.87,0.88),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt1})
);
//borde cuadro 1
var cdrB1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.87,0.88,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr1.position.set(-8.5,0,-4.9);
cdrB1.position.set(-8.5,0,-4.925);
scene.add(cdr1,cdrB1);
//etiqueta 1
var txq1 = new THREE.TextureLoader().load("etiq/e1.jpg");
var etq1 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq1})
);
etq1.position.set(-7.765,0,-4.99);
scene.add(etq1);

//cuadro 2
var txt2 = new THREE.TextureLoader().load("cuadros/c2.jpg");
var cdr2 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.91,0.83),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt2})
);
//borde cuadro 2
var cdrB2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.91,0.83,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr2.position.set(-6.5,0,-4.9);
cdrB2.position.set(-6.5,0,-4.925);
scene.add(cdr2,cdrB2);
//etiqueta 2
var txq2 = new THREE.TextureLoader().load("etiq/e2.jpg");
var etq2 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq2})
);
etq2.position.set(-5.745,0,-4.99);
scene.add(etq2);

//cuadro 3
var txt3 = new THREE.TextureLoader().load("cuadros/c3.jpg");
var cdr3 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.96,0.75),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt3})
);
//borde cuadro 3
var cdrB3 = new THREE.Mesh(
    new THREE.BoxGeometry(0.96,0.75,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr3.position.set(-4.5,0,-4.9);
cdrB3.position.set(-4.5,0,-4.925);
scene.add(cdr3,cdrB3);
//etiqueta 3
var txq3 = new THREE.TextureLoader().load("etiq/e3.jpg");
var etq3 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq3})
);
etq3.position.set(-3.720,0,-4.99);
scene.add(etq3);

//cuadro 4
var txt4 = new THREE.TextureLoader().load("cuadros/c4.jpg");
var cdr4 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75,0.97),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt4})
);
//borde cuadro 4
var cdrB4 = new THREE.Mesh(
    new THREE.BoxGeometry(0.75,0.97,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr4.position.set(-2.5,0,-4.9);
cdrB4.position.set(-2.5,0,-4.925);
scene.add(cdr4,cdrB4);
//etiqueta 4
var txq4 = new THREE.TextureLoader().load("etiq/e4.jpg");
var etq4 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq4})
);
etq4.position.set(-1.825,0,-4.99);
scene.add(etq4);

//cuadro 5
var txt5 = new THREE.TextureLoader().load("cuadros/c5.jpg");
var cdr5 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.74,0.97),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt5})
);
//borde cuadro 5
var cdrB5 = new THREE.Mesh(
    new THREE.BoxGeometry(0.74,0.97,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr5.position.set(-.5,0,-4.9);
cdrB5.position.set(-.5,0,-4.925);
scene.add(cdr5,cdrB5);
//etiqueta 5
var txq5 = new THREE.TextureLoader().load("etiq/e5.jpg");
var etq5 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq5})
);
etq5.position.set(.170,0,-4.99);
scene.add(etq5);

//cuadro 6
var txt6 = new THREE.TextureLoader().load("cuadros/c6.jpg");
var cdr6 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.84,0.89),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt6})
);
//borde cuadro 6
var cdrB6 = new THREE.Mesh(
    new THREE.BoxGeometry(0.84,0.89,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr6.position.set(1.5,0,-4.9);
cdrB6.position.set(1.5,0,-4.925);
scene.add(cdr6,cdrB6);
//etiqueta 6
var txq6 = new THREE.TextureLoader().load("etiq/e6.jpg");
var etq6 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq6})
);
etq6.position.set(2.220,0,-4.99);
scene.add(etq6);

//cuadro 7
var txt7 = new THREE.TextureLoader().load("cuadros/c7.jpg");
var cdr7 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.76,0.97),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt7})
);
//borde cuadro 7
var cdrB7 = new THREE.Mesh(
    new THREE.BoxGeometry(0.76,0.97,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr7.position.set(3.5,0,-4.9);
cdrB7.position.set(3.5,0,-4.925);
scene.add(cdr7,cdrB7);
//etiqueta 7
var txq7 = new THREE.TextureLoader().load("etiq/e7.jpg");
var etq7 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq7})
);
etq7.position.set(4.180,0,-4.99);
scene.add(etq7);

//cuadro 8
var txt8 = new THREE.TextureLoader().load("cuadros/c8.jpg");
var cdr8 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.85,0.89),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt8})
);
//borde cuadro 8
var cdrB8 = new THREE.Mesh(
    new THREE.BoxGeometry(0.85,0.89,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr8.position.set(5.5,0,-4.9);
cdrB8.position.set(5.5,0,-4.925);
scene.add(cdr8,cdrB8);
//etiqueta 8
var txq8 = new THREE.TextureLoader().load("etiq/e8.jpg");
var etq8 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq8})
);
etq8.position.set(6.225,0,-4.99);
scene.add(etq8);

//cuadro 9
var txt9 = new THREE.TextureLoader().load("cuadros/c9.jpg");
var cdr9 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.76,0.98),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt9})
);
//borde cuadro 9
var cdrB9 = new THREE.Mesh(
    new THREE.BoxGeometry(0.76,0.98,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr9.position.set(7.5,0,-4.9);
cdrB9.position.set(7.5,0,-4.925);
scene.add(cdr9,cdrB9);
//etiqueta 9
var txq9 = new THREE.TextureLoader().load("etiq/e9.jpg");
var etq9 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq9})
);
etq9.position.set(8.180,0,-4.99);
scene.add(etq9);

//cuadro 10
var txt10 = new THREE.TextureLoader().load("cuadros/c10.jpg");
var cdr10 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.93,0.83),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt10})
);
//borde cuadro 10
var cdrB10 = new THREE.Mesh(
    new THREE.BoxGeometry(0.93,0.83,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr10.position.set(9.9,0,-4.1);
cdr10.rotation.y -= Math.PI/2;
cdrB10.position.set(9.925,0,-4.1);
cdrB10.rotation.y -= Math.PI/2;
scene.add(cdr10,cdrB10);
//etiqueta 10
var txq10 = new THREE.TextureLoader().load("etiq/e10.jpg");
var etq10 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq10})
);
etq10.position.set(9.99,0,-3.335);
etq10.rotation.y -= Math.PI/2;
scene.add(etq10);

//cuadro 11
var txt11 = new THREE.TextureLoader().load("cuadros/c11.jpg");
var cdr11 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.78,0.96),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt11})
);
//borde cuadro 11
var cdrB11 = new THREE.Mesh(
    new THREE.BoxGeometry(0.78,0.96,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr11.position.set(9.9,0,-2.2);
cdr11.rotation.y -= Math.PI/2;
cdrB11.position.set(9.925,0,-2.2);
cdrB11.rotation.y -= Math.PI/2;
scene.add(cdr11,cdrB11);
//etiqueta 11
var txq11 = new THREE.TextureLoader().load("etiq/e11.jpg");
var etq11 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq11})
);
etq11.position.set(9.99,0,-1.510);
etq11.rotation.y -= Math.PI/2;
scene.add(etq11);

//cuadro 12
var txt12 = new THREE.TextureLoader().load("cuadros/c12.jpg");
var cdr12 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.78,0.94),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt12})
);
//borde cuadro 12
var cdrB12 = new THREE.Mesh(
    new THREE.BoxGeometry(0.78,0.94,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr12.position.set(9.9,0,-.3);
cdr12.rotation.y -= Math.PI/2;
cdrB12.position.set(9.925,0,-.3);
cdrB12.rotation.y -= Math.PI/2;
scene.add(cdr12,cdrB12);
//etiqueta 12
var txq12 = new THREE.TextureLoader().load("etiq/e12.jpg");
var etq12 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq12})
);
etq12.position.set(9.99,0,.390);
etq12.rotation.y -= Math.PI/2;
scene.add(etq12);

//cuadro 13
var txt13 = new THREE.TextureLoader().load("cuadros/c13.jpg");
var cdr13 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.91,0.83),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt13})
);
//borde cuadro 13
var cdrB13 = new THREE.Mesh(
    new THREE.BoxGeometry(0.91,0.83,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr13.position.set(9.9,0,1.6);
cdr13.rotation.y -= Math.PI/2;
cdrB13.position.set(9.925,0,1.6);
cdrB13.rotation.y -= Math.PI/2;
scene.add(cdr13,cdrB13);
//etiqueta 13
var txq13 = new THREE.TextureLoader().load("etiq/e13.jpg");
var etq13 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq13})
);
etq13.position.set(9.99,0,2.355);
etq13.rotation.y -= Math.PI/2;
scene.add(etq13);

//cuadro 14
var txt14 = new THREE.TextureLoader().load("cuadros/c14.jpg");
var cdr14 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.98,0.73),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt14})
);
//borde cuadro 14
var cdrB14 = new THREE.Mesh(
    new THREE.BoxGeometry(0.98,0.73,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr14.position.set(9.9,0,3.5);
cdr14.rotation.y -= Math.PI/2;
cdrB14.position.set(9.925,0,3.5);
cdrB14.rotation.y -= Math.PI/2;
scene.add(cdr14,cdrB14);
//etiqueta 14
var txq14 = new THREE.TextureLoader().load("etiq/e14.jpg");
var etq14 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq14})
);
etq14.position.set(9.99,0,4.290);
etq14.rotation.y -= Math.PI/2;
scene.add(etq14);

//cuadro 15
var txt15 = new THREE.TextureLoader().load("cuadros/c15.jpg");
var cdr15 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.85,0.90),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt15})
);
//borde cuadro 15
var cdrB15 = new THREE.Mesh(
    new THREE.BoxGeometry(0.85,0.90,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr15.position.set(8,0,4.9);
cdr15.rotation.y += Math.PI;
cdrB15.position.set(8,0,4.925);
cdrB15.rotation.y += Math.PI;
scene.add(cdr15,cdrB15);
//etiqueta 15
var txq15 = new THREE.TextureLoader().load("etiq/e15.jpg");
var etq15 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq15})
);
etq15.position.set(7.275,0,4.99);
etq15.rotation.y += Math.PI;
scene.add(etq15);

//cuadro 16
var txt16 = new THREE.TextureLoader().load("cuadros/c16.jpg");
var cdr16 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.74,0.95),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt16})
);
//borde cuadro 16
var cdrB16 = new THREE.Mesh(
    new THREE.BoxGeometry(0.74,0.95,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr16.position.set(6,0,4.9);
cdr16.rotation.y += Math.PI;
cdrB16.position.set(6,0,4.925);
cdrB16.rotation.y += Math.PI;
scene.add(cdr16,cdrB16);
//etiqueta 16
var txq16 = new THREE.TextureLoader().load("etiq/e16.jpg");
var etq16 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq16})
);
etq16.position.set(5.330,0,4.99);
etq16.rotation.y += Math.PI;
scene.add(etq16);

//cuadro 17
var txt17 = new THREE.TextureLoader().load("cuadros/c17.jpg");
var cdr17 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.80,0.93),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt17})
);
//borde cuadro 17
var cdrB17 = new THREE.Mesh(
    new THREE.BoxGeometry(0.80,0.93,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr17.position.set(4,0,4.9);
cdr17.rotation.y += Math.PI;
cdrB17.position.set(4,0,4.925);
cdrB17.rotation.y += Math.PI;
scene.add(cdr17,cdrB17);
//etiqueta 17
var txq17 = new THREE.TextureLoader().load("etiq/e17.jpg");
var etq17 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq17})
);
etq17.position.set(3.300,0,4.99);
etq17.rotation.y += Math.PI;
scene.add(etq17);

//cuadro 18
var txt18 = new THREE.TextureLoader().load("cuadros/c18.jpg");
var cdr18 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.92,0.82),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt18})
);
//borde cuadro 18
var cdrB18 = new THREE.Mesh(
    new THREE.BoxGeometry(0.92,0.82,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr18.position.set(2,0,4.9);
cdr18.rotation.y += Math.PI;
cdrB18.position.set(2,0,4.925);
cdrB18.rotation.y += Math.PI;
scene.add(cdr18,cdrB18);
//etiqueta 18
var txq18 = new THREE.TextureLoader().load("etiq/e18.jpg");
var etq18 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq18})
);
etq18.position.set(1.240,0,4.99);
etq18.rotation.y += Math.PI;
scene.add(etq18);

//cuadro 19
var txt19 = new THREE.TextureLoader().load("cuadros/c19.jpg");
var cdr19 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.94,0.77),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt19})
);
//borde cuadro 19
var cdrB19 = new THREE.Mesh(
    new THREE.BoxGeometry(0.94,0.77,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr19.position.set(0,0,4.9);
cdr19.rotation.y += Math.PI;
cdrB19.position.set(0,0,4.925);
cdrB19.rotation.y += Math.PI;
scene.add(cdr19,cdrB19);
//etiqueta 19
var txq19 = new THREE.TextureLoader().load("etiq/e19.jpg");
var etq19 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq19})
);
etq19.position.set(-.770,0,4.99);
etq19.rotation.y += Math.PI;
scene.add(etq19);

//cuadro 20
var txt20 = new THREE.TextureLoader().load("cuadros/c20.jpg");
var cdr20 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.74,0.97),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt20})
);
//borde cuadro 20
var cdrB20 = new THREE.Mesh(
    new THREE.BoxGeometry(0.74,0.97,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr20.position.set(-2,0,4.9);
cdr20.rotation.y += Math.PI;
cdrB20.position.set(-2,0,4.925);
cdrB20.rotation.y += Math.PI;
scene.add(cdr20,cdrB20);
//etiqueta 20
var txq20 = new THREE.TextureLoader().load("etiq/e20.jpg");
var etq20 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq20})
);
etq20.position.set(-2.670,0,4.99);
etq20.rotation.y += Math.PI;
scene.add(etq20);

//cuadro 21
var txt21 = new THREE.TextureLoader().load("cuadros/c21.jpg");
var cdr21 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.99,0.71),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt21})
);
//borde cuadro 21
var cdrB21 = new THREE.Mesh(
    new THREE.BoxGeometry(0.99,0.71,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr21.position.set(-4,0,4.9);
cdr21.rotation.y += Math.PI;
cdrB21.position.set(-4,0,4.925);
cdrB21.rotation.y += Math.PI;
scene.add(cdr21,cdrB21);
//etiqueta 21
var txq21 = new THREE.TextureLoader().load("etiq/e21.jpg");
var etq21 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq21})
);
etq21.position.set(-4.795,0,4.99);
etq21.rotation.y += Math.PI;
scene.add(etq21);

//cuadro 22
var txt22 = new THREE.TextureLoader().load("cuadros/c22.jpg");
var cdr22 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.92,0.79),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt22})
);
//borde cuadro 22
var cdrB22 = new THREE.Mesh(
    new THREE.BoxGeometry(0.92,0.79,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr22.position.set(-6,0,4.9);
cdr22.rotation.y += Math.PI;
cdrB22.position.set(-6,0,4.925);
cdrB22.rotation.y += Math.PI;
scene.add(cdr22,cdrB22);
//etiqueta 22
var txq22 = new THREE.TextureLoader().load("etiq/e22.jpg");
var etq22 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq22})
);
etq22.position.set(-6.760,0,4.99);
etq22.rotation.y += Math.PI;
scene.add(etq22);

//cuadro 23
var txt23 = new THREE.TextureLoader().load("cuadros/c23.jpg");
var cdr23 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.96,0.77),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt23})
);
//borde cuadro 23
var cdrB23 = new THREE.Mesh(
    new THREE.BoxGeometry(0.96,0.77,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr23.position.set(-8,0,4.9);
cdr23.rotation.y += Math.PI;
cdrB23.position.set(-8,0,4.925);
cdrB23.rotation.y += Math.PI;
scene.add(cdr23,cdrB23);
//etiqueta 23
var txq23 = new THREE.TextureLoader().load("etiq/e23.jpg");
var etq23 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq23})
);
etq23.position.set(-8.780,0,4.99);
etq23.rotation.y += Math.PI;
scene.add(etq23);

//cuadro 24
var txt24 = new THREE.TextureLoader().load("cuadros/c24.jpg");
var cdr24 = new THREE.Mesh(
    new THREE.PlaneGeometry(1.04,0.65),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt24})
);
//borde cuadro 24
var cdrB24 = new THREE.Mesh(
    new THREE.BoxGeometry(1.04,0.65,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr24.position.set(-9.9,0,4.1);
cdr24.rotation.y += Math.PI/2;
cdrB24.position.set(-9.925,0,4.1);
cdrB24.rotation.y += Math.PI/2;
scene.add(cdr24,cdrB24);
//etiqueta 24
var txq24 = new THREE.TextureLoader().load("etiq/e24.jpg");
var etq24 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq24})
);
etq24.position.set(-9.99,0,3.280);
etq24.rotation.y += Math.PI/2;
scene.add(etq24);

//cuadro 25
var txt25 = new THREE.TextureLoader().load("cuadros/c25.jpg");
var cdr25 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.73,1.00),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt25})
);
//borde cuadro 25
var cdrB25 = new THREE.Mesh(
    new THREE.BoxGeometry(0.73,1.00,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr25.position.set(-9.9,0,2.2);
cdr25.rotation.y += Math.PI/2;
cdrB25.position.set(-9.925,0,2.2);
cdrB25.rotation.y += Math.PI/2;
scene.add(cdr25,cdrB25);
//etiqueta 25
var txq25 = new THREE.TextureLoader().load("etiq/e25.jpg");
var etq25 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq25})
);
etq25.position.set(-9.99,0,1.535);
etq25.rotation.y += Math.PI/2;
scene.add(etq25);

//cuadro 26
var txt26 = new THREE.TextureLoader().load("cuadros/c26.jpg");
var cdr26 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.80,0.94),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt26})
);
//borde cuadro 26
var cdrB26 = new THREE.Mesh(
    new THREE.BoxGeometry(0.80,0.94,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr26.position.set(-9.9,0,.3);
cdr26.rotation.y += Math.PI/2;
cdrB26.position.set(-9.925,0,.3);
cdrB26.rotation.y += Math.PI/2;
scene.add(cdr26,cdrB26);
//etiqueta 26
var txq26 = new THREE.TextureLoader().load("etiq/e26.jpg");
var etq26 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq26})
);
etq26.position.set(-9.99,0,-.400);
etq26.rotation.y += Math.PI/2;
scene.add(etq26);

//cuadro 27
var txt27 = new THREE.TextureLoader().load("cuadros/c27.jpg");
var cdr27 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.97,0.74),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt27})
);
//borde cuadro 27
var cdrB27 = new THREE.Mesh(
    new THREE.BoxGeometry(0.97,0.74,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr27.position.set(-9.9,0,-1.6);
cdr27.rotation.y += Math.PI/2;
cdrB27.position.set(-9.925,0,-1.6);
cdrB27.rotation.y += Math.PI/2;
scene.add(cdr27,cdrB27);
//etiqueta 27
var txq27 = new THREE.TextureLoader().load("etiq/e27.jpg");
var etq27 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq27})
);
etq27.position.set(-9.99,0,-2.385);
etq27.rotation.y += Math.PI/2;
scene.add(etq27);

//cuadro 28
var txt28 = new THREE.TextureLoader().load("cuadros/c28.jpg");
var cdr28 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.99,0.73),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt28})
);
//borde cuadro 28
var cdrB28 = new THREE.Mesh(
    new THREE.BoxGeometry(0.99,0.73,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr28.position.set(-9.9,0,-3.5);
cdr28.rotation.y += Math.PI/2;
cdrB28.position.set(-9.925,0,-3.5);
cdrB28.rotation.y += Math.PI/2;
scene.add(cdr28,cdrB28);
//etiqueta 28
var txq28 = new THREE.TextureLoader().load("etiq/e28.jpg");
var etq28 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq28})
);
etq28.position.set(-9.99,0,-4.295);
etq28.rotation.y += Math.PI/2;
scene.add(etq28);

//cuadro 29
var txt29 = new THREE.TextureLoader().load("cuadros/c29.jpg");
var cdr29 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75,0.98),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt29})
);
//borde cuadro 29
var cdrB29 = new THREE.Mesh(
    new THREE.BoxGeometry(0.75,0.98,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr29.position.set(-4.7,0,0.05+0.0625);
cdrB29.position.set(-4.7,0,0.025+0.0625);
scene.add(cdr29,cdrB29);
//etiqueta 29
var txq29 = new THREE.TextureLoader().load("etiq/e29.jpg");
var etq29 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq29})
);
etq29.position.set(-4.025,0,0.001+0.0625);
scene.add(etq29);

//cuadro 30
var txt30 = new THREE.TextureLoader().load("cuadros/c30.jpg");
var cdr30 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.96,0.75),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt30})
);
//borde cuadro 30
var cdrB30 = new THREE.Mesh(
    new THREE.BoxGeometry(0.96,0.75,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr30.position.set(-2.9,0,0.05+0.0625);
cdrB30.position.set(-2.9,0,0.025+0.0625);
scene.add(cdr30,cdrB30);
//etiqueta 30
var txq30 = new THREE.TextureLoader().load("etiq/e30.jpg");
var etq30 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq30})
);
etq30.position.set(-2.120,0,0.001+0.0625);
scene.add(etq30);

//cuadro 31
var txt31 = new THREE.TextureLoader().load("cuadros/c31.jpg");
var cdr31 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75,0.98),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt31})
);
//borde cuadro 31
var cdrB31 = new THREE.Mesh(
    new THREE.BoxGeometry(0.75,0.98,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr31.position.set(-1.1,0,0.05+0.0625);
cdrB31.position.set(-1.1,0,0.025+0.0625);
scene.add(cdr31,cdrB31);
//etiqueta 31
var txq31 = new THREE.TextureLoader().load("etiq/e31.jpg");
var etq31 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq31})
);
etq31.position.set(-.425,0,0.001+0.0625);
scene.add(etq31);

//cuadro 32
var txt32 = new THREE.TextureLoader().load("cuadros/c32.jpg");
var cdr32 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.79,0.93),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt32})
);
//borde cuadro 32
var cdrB32 = new THREE.Mesh(
    new THREE.BoxGeometry(0.79,0.93,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr32.position.set(.7,0,0.05+0.0625);
cdrB32.position.set(.7,0,0.025+0.0625);
scene.add(cdr32,cdrB32);
//etiqueta 32
var txq32 = new THREE.TextureLoader().load("etiq/e32.jpg");
var etq32 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq32})
);
etq32.position.set(1.395,0,0.001+0.0625);
scene.add(etq32);

//cuadro 33
var txt33 = new THREE.TextureLoader().load("cuadros/c33.jpg");
var cdr33 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.74,0.95),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt33})
);
//borde cuadro 33
var cdrB33 = new THREE.Mesh(
    new THREE.BoxGeometry(0.74,0.95,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr33.position.set(2.5,0,0.05+0.0625);
cdrB33.position.set(2.5,0,0.025+0.0625);
scene.add(cdr33,cdrB33);
//etiqueta 33
var txq33 = new THREE.TextureLoader().load("etiq/e33.jpg");
var etq33 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq33})
);
etq33.position.set(3.170,0,0.001+0.0625);
scene.add(etq33);

//cuadro 34
var txt34 = new THREE.TextureLoader().load("cuadros/c34.jpg");
var cdr34 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.74,0.99),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt34})
);
//borde cuadro 34
var cdrB34 = new THREE.Mesh(
    new THREE.BoxGeometry(0.74,0.99,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr34.position.set(4.3,0,0.05+0.0625);
cdrB34.position.set(4.3,0,0.025+0.0625);
scene.add(cdr34,cdrB34);
//etiqueta 34
var txq34 = new THREE.TextureLoader().load("etiq/e34.jpg");
var etq34 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq34})
);
etq34.position.set(4.970,0,0.001+0.0625);
scene.add(etq34);

//cuadro 35
var txt35 = new THREE.TextureLoader().load("cuadros/c35.jpg");
var cdr35 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.79,0.94),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt35})
);
//borde cuadro 35
var cdrB35 = new THREE.Mesh(
    new THREE.BoxGeometry(0.79,0.94,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr35.position.set(4.7,0,-0.05-0.0625);
cdr35.rotation.y += Math.PI;
cdrB35.position.set(4.7,0,-0.025-0.0625);
cdrB35.rotation.y += Math.PI;
scene.add(cdr35,cdrB35);
//etiqueta 35
var txq35 = new THREE.TextureLoader().load("etiq/e35.jpg");
var etq35 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq35})
);
etq35.position.set(4.005,0,-0.001-0.0625);
etq35.rotation.y += Math.PI;
scene.add(etq35);

//cuadro 36
var txt36 = new THREE.TextureLoader().load("cuadros/c36.jpg");
var cdr36 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.98,0.74),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt36})
);
//borde cuadro 36
var cdrB36 = new THREE.Mesh(
    new THREE.BoxGeometry(0.98,0.74,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr36.position.set(2.9,0,-0.05-0.0625);
cdr36.rotation.y += Math.PI;
cdrB36.position.set(2.9,0,-0.025-0.0625);
cdrB36.rotation.y += Math.PI;
scene.add(cdr36,cdrB36);
//etiqueta 36
var txq36 = new THREE.TextureLoader().load("etiq/e36.jpg");
var etq36 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq36})
);
etq36.position.set(2.110,0,-0.001-0.0625);
etq36.rotation.y += Math.PI;
scene.add(etq36);

//cuadro 37
var txt37 = new THREE.TextureLoader().load("cuadros/c37.jpg");
var cdr37 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.97,0.74),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt37})
);
//borde cuadro 37
var cdrB37 = new THREE.Mesh(
    new THREE.BoxGeometry(0.97,0.74,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr37.position.set(1.1,0,-0.05-0.0625);
cdr37.rotation.y += Math.PI;
cdrB37.position.set(1.1,0,-0.025-0.0625);
cdrB37.rotation.y += Math.PI;
scene.add(cdr37,cdrB37);
//etiqueta 37
var txq37 = new THREE.TextureLoader().load("etiq/e37.jpg");
var etq37 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq37})
);
etq37.position.set(.315,0,-0.001-0.0625);
etq37.rotation.y += Math.PI;
scene.add(etq37);

//cuadro 38
var txt38 = new THREE.TextureLoader().load("cuadros/c38.jpg");
var cdr38 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.96,0.75),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt38})
);
//borde cuadro 38
var cdrB38 = new THREE.Mesh(
    new THREE.BoxGeometry(0.96,0.75,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr38.position.set(-.7,0,-0.05-0.0625);
cdr38.rotation.y += Math.PI;
cdrB38.position.set(-.7,0,-0.025-0.0625);
cdrB38.rotation.y += Math.PI;
scene.add(cdr38,cdrB38);
//etiqueta 38
var txq38 = new THREE.TextureLoader().load("etiq/e38.jpg");
var etq38 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq38})
);
etq38.position.set(-1.480,0,-0.001-0.0625);
etq38.rotation.y += Math.PI;
scene.add(etq38);

//cuadro 39
var txt39 = new THREE.TextureLoader().load("cuadros/c39.jpg");
var cdr39 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75,0.96),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt39})
);
//borde cuadro 39
var cdrB39 = new THREE.Mesh(
    new THREE.BoxGeometry(0.75,0.96,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr39.position.set(-2.5,0,-0.05-0.0625);
cdr39.rotation.y += Math.PI;
cdrB39.position.set(-2.5,0,-0.025-0.0625);
cdrB39.rotation.y += Math.PI;
scene.add(cdr39,cdrB39);
//etiqueta 39
var txq39 = new THREE.TextureLoader().load("etiq/e39.jpg");
var etq39 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq39})
);
etq39.position.set(-3.175,0,-0.001-0.0625);
etq39.rotation.y += Math.PI;
scene.add(etq39);

//cuadro 40
var txt40 = new THREE.TextureLoader().load("cuadros/c40.jpg");
var cdr40 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.82,0.91),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt40})
);
//borde cuadro 40
var cdrB40 = new THREE.Mesh(
    new THREE.BoxGeometry(0.82,0.91,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr40.position.set(-4.3,0,-0.05-0.0625);
cdr40.rotation.y += Math.PI;
cdrB40.position.set(-4.3,0,-0.025-0.0625);
cdrB40.rotation.y += Math.PI;
scene.add(cdr40,cdrB40);
//etiqueta 40
var txq40 = new THREE.TextureLoader().load("etiq/e40.jpg");
var etq40 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq40})
);
etq40.position.set(-5.010,0,-0.001-0.0625);
etq40.rotation.y += Math.PI;
scene.add(etq40);
