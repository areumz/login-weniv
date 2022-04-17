function chngicon() {
    let img = document.getElementById('icon_check_empty').src;
    if(img.indexOf('icon_check_empty.png')!=-1) {
        document.getElementById('icon_check_empty').src="img/icon_check.png"; 
    } else {
        document.getElementById('icon_check_empty').src="img/icon_check_empty.png"; 
    }
}