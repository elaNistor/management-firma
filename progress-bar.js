document.getElementById('add').addEventListener('click', () => {
    const loading=document.getElementById('loading').style
    if (!parseInt(loading.width)) {
        loading.width = '0%'    
    }
    if (parseInt(loading.width)+ 10 > 100) {
        loading.width = '0%'
    } else {
        loading.width = `${(parseInt(loading.width)+ 10)}%`
    }
});