let horizon = window.innerHeight / 1.5;
let skySize = window.innerHeight - horizon;
let grassSize = horizon;

function backDrop(url, left, bottom, width, height) {
  for (let i = 0; i < width; i++) {
    for (let x = 0; x < height; x++) {
      newImage(url, left + i * 100, bottom + x * 100);
    }
  }
}

function newImage(url, left, bottom) {
  let object = document.createElement("img");
  object.src = url;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}

function newItem(url, left, bottom) {
  let object = newImage(url, left, bottom);

  object.addEventListener("dblclick", () => {
    object.remove();
  });
}

backDrop("assets/grass.png", 0, 0, window.innerWidth / 100, grassSize / 100);
backDrop("assets/sky.png", 0, horizon, window.innerWidth / 100, skySize / 100);

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

newItem("assets/sword.png", 500, 405);
newItem("assets/sheild.png", 165, 185);
newItem("assets/staff.png", 600, 100);
