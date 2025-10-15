'use strict';

// 1 - Search for tag names:
const task1EL = document.querySelectorAll('.sample_class');
function getTag(elements) {
  const out = [];
  for (const el of elements) out.push(el.tagName.toLowerCase());
  return out;
}

// 2 - Search for class names:
const task2EL = document.getElementById('sample_id');
function getClass(element) {
  if (!element) return [];
  return Array.from(element.classList);
}

// 3 - Search for text:
const task3Root = document.querySelector('.sample_class_2');
const task3EL = task3Root ? task3Root.querySelectorAll('li') : [];
function getInnerText(elements) {
  const out = [];
  for (const el of elements) out.push(el.innerText);
  return out;
}

// 4 - Search for link addresses:
const task4EL = document.querySelectorAll('a');
function getAddress(elements) {
  const out = [];
  for (const el of elements) {
    if (el.hasAttribute('href')) out.push(el.getAttribute('href'));
  }
  return out;
}

// 5 - Search for child tags:
const task5Root = document.querySelector('.sample_class_3');
const task5EL = task5Root ? task5Root.children : [];

console.log(getTag(task1EL));
console.log(getClass(task2EL));
console.log(getInnerText(task3EL));
console.log(getAddress(task4EL));
console.log(getTag(task5EL));
