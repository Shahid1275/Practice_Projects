const hiddenRows = new Set();

function handleDropdownChange() {
    const dropdown = document.getElementById("dropdown").value;
    const rows = document.querySelectorAll("#topicsTable tbody tr");

    rows.forEach((row, index) => {
        const isHidden = hiddenRows.has(index);
        if (dropdown == "hide") {
            row.style.display = isHidden ? "" : "none";
        } else if (dropdown == "show") {
            row.style.display = isHidden ? "none" : "";
        }
    });
}

function toggleRows() {
    const rows = document.querySelectorAll("#topicsTable tbody tr");

    rows.forEach((row, index) => {
        const checkbox = row.querySelector(".rowCheckbox");
        if (checkbox.checked) {
            if (row.style.display === "none") {
                row.style.display = "";
                hiddenRows.delete(index);
            } else {
                row.style.display = "none";
                hiddenRows.add(index);
            }
            checkbox.checked = false;
        }
    });

    const toggleButton = document.getElementById("toggleButton");
    toggleButton.innerText = "Hide" , "show";
    handleDropdownChange();
}

function toggleMasterCheckbox() {
    const masterCheckbox = document.getElementById("masterCheckbox");
    const rowCheckboxes = document.querySelectorAll(".rowCheckbox");
    const isChecked = masterCheckbox.checked;

    rowCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("dropdown");
    const toggleButton = document.getElementById("toggleButton");
    const masterCheckbox = document.getElementById("masterCheckbox");

    dropdown.addEventListener("change", handleDropdownChange);
    toggleButton.addEventListener("click", toggleRows);
    masterCheckbox.addEventListener("click", toggleMasterCheckbox);
});
