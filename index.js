const data = [
  {
    name: [
      `<ul>
        <li>Оголошена змінна customer</li>
        <li>Значення змінної customer — це об'єкт із властивостями та методами</li>
        <li>Виклик customer.getDiscount() повертає поточне значення властивості discount</li>
        <li>Виклик customer.setDiscount(0.15) оновлює значення властивості discount</li>
        <li>Виклик customer.getBalance() повертає поточне значення властивості balance.</li>
        <li>Виклик customer.getOrders() повертає поточне значення властивості orders</li>
        <li>Виклик customer.addOrder(5000, "Steak") додає "Steak" у масив значень властивості orders та оновлює баланс</li>
        <li>Метод getBalance об'єкта customer використовує this</li>
        <li>Метод getDiscount об'єкта customer використовує this</li>
        <li>Метод setDiscount об'єкта customer використовує this</li>
        <li>Метод getOrders об'єкта customer використовує this</li>
        <li>Метод addOrder об'єкта customer використовує this</li>
        <li>Код отформатирован Prettier</li>
      </ul>`,
    ],
  },
  {
    name: [
      `<ul>
        <li>Створи клас Storage, який створюватиме об'єкти для управління складом товарів.Клас очікує лише один аргумент — початковий масив товарів який записується до створеного об'єкта в приватну властивість items.</li>
        <li>getItems() — повертає масив поточних товарів у приватній властивості items.</li>
        <li>addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.</li>
        <li>removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.</li>
        <li>Оголошений клас Storage</li>
        <li>У класі Storage оголошений метод getItems</li>
        <li>У класі Storage оголошений метод addItem</li>
        <li>У класі Storage оголошений метод removeItem</li>
        <li>Властивість items у класі Storage оголошена приватною</li>
        <li>Метод getItems повертає значення приватної властивості items екземпляра класу, який його викликає</li>
        <li>Метод addItem змінює значення приватної властивості items екземпляра класу, який його викликає</li>
        <li>Метод removeItem змінює значення приватної властивості items екземпляра класу, який його викликає</li>
        <li>У результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage — це об'єкт</li>
        <li>У об’єкта storage немає публічної властивості items</li>
        <li>Перший виклик storage.getItems() одразу після ініціалізації екземпляра повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]</li>
        <li>Другий виклик storage.getItems() після виклику storage.addItem("Droid") повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]</li>
        <li>Третій виклик storage.getItems()після виклику storage.removeItem("Prolonger") повертає масив ["Nanitoids", "Antigravitator", "Droid"]</li>
        </ul>`,
    ],
  },
  {
    name: [
      `<ul>
        <li>Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.</li>
        <li>getValue() — повертає поточне значення приватної властивості value.</li>
        <li>padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.</li>
        <li>padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.</li>
        <li>padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.</li>
        <li>Оголошений клас StringBuilder</li>
        <li>Властивість value у класі StringBuilder оголошена приватною</li>
        <li>У класі StringBuilder оголошений метод getValue</li>
        <li>Метод getValue повертає значення приватної властивості value екземпляра класу, який його викликає</li>
        <li>У класі StringBuilder оголошений метод padEnd</li>
        <li>Метод padEnd змінює значення приватної властивості value екземпляра класу, який його викликає</li>
        <li>У класі StringBuilder оголошений метод padStart</li>
        <li>Метод padStart змінює приватну властивість value екземпляра класу, який його викликає</li>
        <li>У класі StringBuilder оголошений метод padBoth</li>
        <li>Метод padBoth змінює значення приватної властивості value екземпляра класу, який його викликає</li>
        <li>У результаті виклику new StringBuilder(".") значення приватної змінної builder — це об'єкт</li>
        <li>Об'єкт builder не містить публічну властивість value</li>
        <li>Перший виклик builder.getValue() одразу після ініціалізації екземпляра повертає рядок .</li>
        <li>Другий виклик builder.getValue() після виклику builder.padStart("^") повертає рядок ^.</li>
        <li>Третій виклик builder.getValue() після виклику builder.padEnd("^") повертає рядок ^.^</li>
        <li>Четвертий виклик builder.getValue() після виклику builder.padBoth("=") повертає рядок =^.^=</li>
        </ul>`,
    ],
  },
];
const buttons = document.querySelectorAll('.btn-resources');
const tabContent = document.querySelector('#tab-content');
buttons.forEach(el => el.addEventListener('click', handleClickTab));

function handleClickTab(e) {
  buttons.forEach((el, index) => {
        el.classList.remove('active');
      },
  );
  e.target.classList.add('active');
  tabContent.innerHTML = data[e.target.dataset.number].name;
}
