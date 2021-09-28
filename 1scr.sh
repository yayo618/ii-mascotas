#!/bin/bash
pm=2.7
ppm=$(echo 'scale=2; -2+('$pm'/2)' | bc -l)
echo "
var ptGeo = new THREE.PlaneGeometry(10,20,10,10);

var txtPiso = new THREE.TextureLoader();
var pisoTxt = new txtPiso.load(\"pared/piso.png\");
var piso = new THREE.Mesh(
    ptGeo,
    new THREE.MeshBasicMaterial({color:0xffffff, map:pisoTxt}));
piso.rotation.x = -Math.PI/2;
piso.rotation.z = Math.PI/2;
piso.position.y = -2;      

var txtTicho = new THREE.TextureLoader();
var tichoTxt = new txtTicho.load(\"pared/techo.png\");
var ticho = new THREE.Mesh(
    ptGeo,
    new THREE.MeshBasicMaterial({color:0xffffff, map:tichoTxt}));
ticho.rotation.x = Math.PI/2;
ticho.rotation.z = Math.PI/2;
ticho.position.y = 1.5;

var paGeo = new THREE.PlaneGeometry(20, 3.5);
var txtPared = new THREE.TextureLoader();
var paredTxt = new txtPared.load(\"pared/pared.png\");
var paMat = new THREE.MeshBasicMaterial({color:0xffffff, map:paredTxt});

var pared1 = new THREE.Mesh(paGeo, paMat);
pared1.position.set(0, -0.25, -5);
var pared2 = new THREE.Mesh(paGeo, paMat);
pared2.position.set(0, -0.25, 5);
pared2.rotation.y = Math.PI;

var pbGeo = new THREE.PlaneGeometry(10, 3.5);
var txtParedb = new THREE.TextureLoader();
var paredbTxt = new txtParedb.load(\"pared/paredb.png\");
var pbMat = new THREE.MeshBasicMaterial({color:0xffffff, map:paredbTxt});

var pared3 = new THREE.Mesh(pbGeo, pbMat);
pared3.position.set(10, -0.25, 0);
pared3.rotation.y = -Math.PI/2;
var pared4 = new THREE.Mesh(pbGeo, pbMat);
pared4.position.set(-10, -0.25, 0);
pared4.rotation.y = Math.PI/2;

var cubo = new THREE.Mesh(
  new THREE.BoxGeometry(10.5,$pm,0.125),
  new THREE.MeshBasicMaterial({color:0xa6a6ae})
);
cubo.position.y = $ppm;

scene.add(piso, ticho, pared1, pared2, pared3, pared4, cubo);" > galeria.js


for i in {1..9}
do
let ww=$(identify \-format '%w' cuadros/c$i.jpg)
let hh=$(identify \-format '%h' cuadros/c$i.jpg)
w=$(awk 'BEGIN{printf "%.2f\n", ('$ww'/1000)}')
h=$(awk 'BEGIN{printf "%.2f\n", ('$hh'/1000)}')
pc=$(echo '('$i'*2)-10.5' | bc)
pe=$(echo 'scale=3; ('$i'*2)-10.2+('$w'/2)' | bc -l)
echo "
//cuadro $i
var txt$i = new THREE.TextureLoader().load(\"cuadros/c$i.jpg\");
var cdr$i = new THREE.Mesh(
    new THREE.PlaneGeometry($w,$h),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt$i})
);
//borde cuadro $i
var cdrB$i = new THREE.Mesh(
    new THREE.BoxGeometry($w,$h,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr$i.position.set($pc,0,-4.9);
cdrB$i.position.set($pc,0,-4.925);
scene.add(cdr$i,cdrB$i);
//etiqueta $i
var txq$i = new THREE.TextureLoader().load(\"etiq/e$i.jpg\");
var etq$i = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq$i})
);
etq$i.position.set($pe,0,-4.99);
scene.add(etq$i);" >> galeria.js
done
for i in {10..14}
do
let ww=$(identify \-format '%w' cuadros/c$i.jpg)
let hh=$(identify \-format '%h' cuadros/c$i.jpg)
w=$(awk 'BEGIN{printf "%.2f\n", ('$ww'/1000)}')
h=$(awk 'BEGIN{printf "%.2f\n", ('$hh'/1000)}')
pc=$(echo '(('$i'-9)*1.9)-6' | bc)
pe=$(echo 'scale=3; (('$i'-9)*1.9)-5.7+('$w'/2)' | bc -l)
echo "
//cuadro $i
var txt$i = new THREE.TextureLoader().load(\"cuadros/c$i.jpg\");
var cdr$i = new THREE.Mesh(
    new THREE.PlaneGeometry($w,$h),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt$i})
);
//borde cuadro $i
var cdrB$i = new THREE.Mesh(
    new THREE.BoxGeometry($w,$h,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr$i.position.set(9.9,0,$pc);
cdr$i.rotation.y -= Math.PI/2;
cdrB$i.position.set(9.925,0,$pc);
cdrB$i.rotation.y -= Math.PI/2;
scene.add(cdr$i,cdrB$i);
//etiqueta $i
var txq$i = new THREE.TextureLoader().load(\"etiq/e$i.jpg\");
var etq$i = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq$i})
);
etq$i.position.set(9.99,0,$pe);
etq$i.rotation.y -= Math.PI/2;
scene.add(etq$i);" >> galeria.js
done
for i in {15..23}
do
let ww=$(identify \-format '%w' cuadros/c$i.jpg)
let hh=$(identify \-format '%h' cuadros/c$i.jpg)
w=$(awk 'BEGIN{printf "%.2f\n", ('$ww'/1000)}')
h=$(awk 'BEGIN{printf "%.2f\n", ('$hh'/1000)}')
pc=$(echo '10-(('$i'-14)*2)' | bc)
pe=$(echo 'scale=3; 9.7-(('$i'-14)*2)-('$w'/2)' | bc -l)
echo "
//cuadro $i
var txt$i = new THREE.TextureLoader().load(\"cuadros/c$i.jpg\");
var cdr$i = new THREE.Mesh(
    new THREE.PlaneGeometry($w,$h),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt$i})
);
//borde cuadro $i
var cdrB$i = new THREE.Mesh(
    new THREE.BoxGeometry($w,$h,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr$i.position.set($pc,0,4.9);
cdr$i.rotation.y += Math.PI;
cdrB$i.position.set($pc,0,4.925);
cdrB$i.rotation.y += Math.PI;
scene.add(cdr$i,cdrB$i);
//etiqueta $i
var txq$i = new THREE.TextureLoader().load(\"etiq/e$i.jpg\");
var etq$i = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq$i})
);
etq$i.position.set($pe,0,4.99);
etq$i.rotation.y += Math.PI;
scene.add(etq$i);" >> galeria.js
done
for i in {24..28}
do
let ww=$(identify \-format '%w' cuadros/c$i.jpg)
let hh=$(identify \-format '%h' cuadros/c$i.jpg)
w=$(awk 'BEGIN{printf "%.2f\n", ('$ww'/1000)}')
h=$(awk 'BEGIN{printf "%.2f\n", ('$hh'/1000)}')
pc=$(echo '6-(('$i'-23)*1.9)' | bc)
pe=$(echo 'scale=3; 5.7-(('$i'-23)*1.9)-('$w'/2)' | bc -l)
echo "
//cuadro $i
var txt$i = new THREE.TextureLoader().load(\"cuadros/c$i.jpg\");
var cdr$i = new THREE.Mesh(
    new THREE.PlaneGeometry($w,$h),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt$i})
);
//borde cuadro $i
var cdrB$i = new THREE.Mesh(
    new THREE.BoxGeometry($w,$h,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr$i.position.set(-9.9,0,$pc);
cdr$i.rotation.y += Math.PI/2;
cdrB$i.position.set(-9.925,0,$pc);
cdrB$i.rotation.y += Math.PI/2;
scene.add(cdr$i,cdrB$i);
//etiqueta $i
var txq$i = new THREE.TextureLoader().load(\"etiq/e$i.jpg\");
var etq$i = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq$i})
);
etq$i.position.set(-9.99,0,$pe);
etq$i.rotation.y += Math.PI/2;
scene.add(etq$i);" >> galeria.js    
done
for i in {29..34}
do
#a determina inicio posicion
a=6.5
aa=$(echo ''$a'-0.3' | bc)
let ww=$(identify \-format '%w' cuadros/c$i.jpg)
let hh=$(identify \-format '%h' cuadros/c$i.jpg)
w=$(awk 'BEGIN{printf "%.2f\n", ('$ww'/1000)}')
h=$(awk 'BEGIN{printf "%.2f\n", ('$hh'/1000)}')
pc=$(echo '(('$i'-28)*1.8)-'$a'' | bc)
pe=$(echo 'scale=3; (('$i'-28)*1.8)-'$aa'+('$w'/2)' | bc -l)
echo "
//cuadro $i
var txt$i = new THREE.TextureLoader().load(\"cuadros/c$i.jpg\");
var cdr$i = new THREE.Mesh(
    new THREE.PlaneGeometry($w,$h),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt$i})
);
//borde cuadro $i
var cdrB$i = new THREE.Mesh(
    new THREE.BoxGeometry($w,$h,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr$i.position.set($pc,0,0.05+0.0625);
cdrB$i.position.set($pc,0,0.025+0.0625);
scene.add(cdr$i,cdrB$i);
//etiqueta $i
var txq$i = new THREE.TextureLoader().load(\"etiq/e$i.jpg\");
var etq$i = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq$i})
);
etq$i.position.set($pe,0,0.001+0.0625);
scene.add(etq$i);" >> galeria.js
done
for i in {35..40}
do
#a determina inicio posicion
a=6.5
aa=$(echo ''$a'-0.3' | bc)
let ww=$(identify \-format '%w' cuadros/c$i.jpg)
let hh=$(identify \-format '%h' cuadros/c$i.jpg)
w=$(awk 'BEGIN{printf "%.2f\n", ('$ww'/1000)}')
h=$(awk 'BEGIN{printf "%.2f\n", ('$hh'/1000)}')
pc=$(echo ''$a'-(('$i'-34)*1.8)' | bc)
pe=$(echo 'scale=3; '$aa'-(('$i'-34)*1.8)-('$w'/2)' | bc -l)
echo "
//cuadro $i
var txt$i = new THREE.TextureLoader().load(\"cuadros/c$i.jpg\");
var cdr$i = new THREE.Mesh(
    new THREE.PlaneGeometry($w,$h),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txt$i})
);
//borde cuadro $i
var cdrB$i = new THREE.Mesh(
    new THREE.BoxGeometry($w,$h,0.05,0),
    new THREE.MeshBasicMaterial({color:0x46284B})
);
cdr$i.position.set($pc,0,-0.05-0.0625);
cdr$i.rotation.y += Math.PI;
cdrB$i.position.set($pc,0,-0.025-0.0625);
cdrB$i.rotation.y += Math.PI;
scene.add(cdr$i,cdrB$i);
//etiqueta $i
var txq$i = new THREE.TextureLoader().load(\"etiq/e$i.jpg\");
var etq$i = new THREE.Mesh(
    new THREE.PlaneGeometry(0.405,0.166),
    new THREE.MeshBasicMaterial({color:0xffffff,map:txq$i})
);
etq$i.position.set($pe,0,-0.001-0.0625);
etq$i.rotation.y += Math.PI;
scene.add(etq$i);" >> galeria.js
done
