import { Header } from "../component/header.js";
const app = document.getElementById("app");

app.innerHTML = `
  ${Header()}
  <main>
    <p>Welcome to my portfolio</p>
  </main>
`;