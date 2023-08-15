const path = document.getElementById("app-path");
document.getElementById("open").addEventListener("click", async () => {
    window.app.exec(path.value);
});
document.getElementById("vscode").addEventListener("click", async () => {
    window.app.npmStart(path.value);
});
