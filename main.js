const checkboxItems = document.querySelectorAll(".custom-checkbox-item");
const checkboxes = document.querySelectorAll(
  '.custom-checkbox-item input[type="checkbox"]'
);
const customCheckboxes = document.querySelectorAll(".custom-checkbox");

checkboxItems.forEach((checkbox, id) => {
  checkbox.addEventListener("click", () => {
    customCheckboxes[id].classList.remove("unchecked");
  });
});

document.querySelector("#select-all-pages").addEventListener("click", () => {
  customCheckboxes.forEach((checkbox) => {
    checkbox.classList.remove("unchecked");
  });

  const selectAllCheckbox = document.querySelector(
    '#select-all-pages input[type="checkbox"]'
  );

  if (selectAllCheckbox.checked) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  } else {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
});
