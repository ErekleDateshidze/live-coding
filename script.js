let person = { name: "erekle", lastname: "dateshidze", age: 22 }

const table = document.getElementById('table')


function buildTable() {
    const headers = Object.keys(person)
    headers.forEach(function (rame) {
        const tableHead = document.createElement('th')
        table.appendChild(tableHead)
        tableHead.innerHTML = `${rame}`
    })

    const rows = Object.values(person)
    rows.forEach(function (rame2) {
        const tableRow = document.createElement('td')
        table.appendChild(tableRow)
        tableRow.innerHTML = `${rame2}`
    })
}

buildTable()
// alert(Object.keys(person))


// buildTable(){
//     const headers = Object.keys(this.data[0])
//     .map((headers) => {
//         return `<th>${headers}</th>`
//     })
//     .join("")

//     const rows = this.data.slice(1).map((row)=>{
//         const values = Object.values(row)
//         .map((values)=>{
//             return `<td>${values}</td>`
//         })
//         .join("")
//         return `<tr>${values}</tr>`
//     })
//     this.el.innerHTML = `
//         <thead>${headers}</thead>
//         <tbody>${rows}</tbody>
//     `
// }}

// new DataTable();
