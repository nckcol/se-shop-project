const gantt = require("./gantt.json");

const sortedGantt = gantt.list.sort((a, b) => a.position - b.position);

console.log("| Назва | Тривалiсть | Виконавець |");
console.log("| ----- | :--------: | ---------- |");

sortedGantt.map(item => {
  console.log(`| ${item.text} | ${item.duration} | ${item.asignee} |`);
});
