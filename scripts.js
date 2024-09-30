document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const btnAdd = document.getElementById("btnAdd");
  const list = document.querySelector(".list");
  const alertBox = document.getElementById("alertBox");
  const alertMessage = document.getElementById("alertMessage");
  const closeAlert = document.getElementById("closeAlert");

  function showAlert(message) {
    alertMessage.textContent = message;
    alertBox.classList.add("show");
    alertBox.classList.remove("hidden");

    setTimeout(() => {
      alertBox.classList.remove("show");
      alertBox.classList.add("hidden");
    }, 3000);
  }

  closeAlert.addEventListener("click", function () {
    alertBox.classList.remove("show");
    alertBox.classList.add("hidden");
  });

  function addItem() {
    const itemText = inputText.value.trim();
    if (itemText === "") {
      showAlert("Por favor, insira um item válido!");
      return;
    }

    const newItem = document.createElement("li");
    newItem.classList.add("item");

    newItem.innerHTML = `
      <label>
        <input type="checkbox" name="item" /> ${itemText}
      </label>
      <button><i class="fas fa-trash"></i></button>
    `;

    const deleteButton = newItem.querySelector("button");
    deleteButton.addEventListener("click", function () {
      const removedItemText = newItem.querySelector("label").innerText.trim();
      newItem.remove();
      showAlert(`O item "${removedItemText}" foi removido da lista!`);
    });

    list.appendChild(newItem);
    inputText.value = "";
  }

  btnAdd.addEventListener("click", function () {
    addItem();
  });

  inputText.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addItem();
    }
  });

  list.querySelectorAll("li").forEach(function (item) {
    const deleteButton = item.querySelector("button");
    deleteButton.addEventListener("click", function () {
      const removedItemText = item.querySelector("label").innerText.trim();
      item.remove();
      showAlert(`O item "${removedItemText}" foi removido da lista!`);
    });
  });
});
