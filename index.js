var inp = document.getElementById('pp')
let folder = document.getElementById('folder')
let table = document.getElementById('table')
let header = document.getElementById('header')


inp.addEventListener("change",()=>{
    let arr= [...inp.files]
    // console.log(arr)
    folder.style.display='none'
    table.style.display = 'flex'
    header.style.display = 'flex'

    // To convert size
    function formatBytes(bytes, decimals = 1) {
        let tb = 1024*1024*1024*1024;
        if (bytes === 0) return '0 Bytes';
        if (bytes >= tb )return (bytes/tb).toFixed(1) + " TB"
    
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    document.getElementById('test1').innerHTML = arr.map(user => 
        `
        <tbody>
        <tr class="table__elements">
        <td></td>
        <td>${user.name}</td>
        <td>${formatBytes(user.size)}</td>
        </tr>
   
        </tbody>
        `
    ).join('')
})


