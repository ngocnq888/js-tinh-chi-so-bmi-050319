var a = prompt('Nhập chiều cao :');
    a = Number(a);
var b = prompt('Nhập cân năng : ');
    b = Number(b);
var c = b/(a*a);
    c = Number(c);
    if (c < 18.5){
        alert('ban qua gay ! ') ;
    }
    else
        if (c <= 25 ){ alert(' : Chi so BMI cua ban Trung Binh !');
        }
        else
            if (c < 30){
            alert( c + ' : BMI kha cao, tien beo phi');
                }
            else {
                alert(c + ' : BMI qua cao, ban bi beo phi !');
                }
    

