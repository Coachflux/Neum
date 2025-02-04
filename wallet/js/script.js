
function saveText() {
    let text = document.getElementById("pasteInput").value;
    
    if (text.trim() === "") {
        alert("Please paste some text before submitting.");
        return;
    }

    localStorage.setItem("pastedText", text);
    document.getElementById("statusMessage").textContent = "Text saved successfully!";
}
