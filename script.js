let d1 = document.getElementById("data");

data.columns.forEach((column, i) => {
    const value = data.rows[0].values[i];

    const formattedValue =
        column.dataType === "DateTime" ?
        new Date(value)
        .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
        .replace(/ /g, ".") :
        value;

    d1.insertAdjacentHTML(
        "beforeend",
        `
    <div class="data_block">
        <div class="data_up">
         ${column.name}
        </div>
        <div class="data_down">
            ${formattedValue}
        </div>
    </div>
`
    );
});