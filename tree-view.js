export default function createTreeView(json, container) {
  if (typeof json === "object") {
    const ul = document.createElement("ul");
    container.appendChild(ul);
    for (const key in json) {
      const li = document.createElement("li");
      const span = document.createElement("span")
      span.classList.add('key')
      span.textContent = `${key}: `
      li.appendChild(span);
      if (typeof json[key] === "object") {
        createTreeView(json[key], li)
      } else {
        const spanValue = document.createElement("span")
        spanValue.classList.add('value')
        spanValue.textContent = json[key]
        li.appendChild(spanValue)
      }
      ul.appendChild(li)
    }
  }
}
