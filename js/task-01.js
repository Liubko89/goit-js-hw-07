const categories = document.querySelector("#categories");

const arrItems = [...categories.children];

const showUl = (arr) => {
  const countItems = arr.length;
  console.log(`Number of categories ${countItems}`);

  arr.forEach((el) => {
    const title = el.firstElementChild.textContent;
    console.log(`Category ${title}`);

    const innerList = el.lastElementChild;
    const children = innerList.children.length;
    console.log(`Elements ${children}`);
  });
};

showUl(arrItems);
