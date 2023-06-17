// h1 {...}
// .pcl {...}
// #pid {...}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pcl = document.querySelector('.pcl');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    pcl,
    pid,
    input,
});

h1.innerHTML = "Cambio de <br> titulo";
h1.innerText = "Cambio de titulo";
// console.log(h1.getAttribute("class"));
// h1.setAttribute("class","blue");

h1.classList.add("Red")
h1.classList.remove("plc")

input.value = "456";
const img = document.createElement("img");
img.setAttribute("src", "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

pid.append(img);