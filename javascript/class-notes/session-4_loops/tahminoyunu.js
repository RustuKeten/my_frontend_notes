//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

let devam;
do{
    let hak= 5;

    const rastgeleSayi = Math.floor(Math.random()*100 +1);
    console.log(rastgeleSayi);

    do{
    const tahmin = prompt('Lütfen 0-100 arası sayı giriniz:')
    hak-=1;
    if(tahmin == rastgeleSayi){
        console.log(`tebrikler ${5- hak} denemede bildiniz.💖`);
        break
    }else{
        console.log(`dikkat ${hak} kaldı.`);
        if (tahmin<rastgeleSayi){
        console.log(`arttır🔼`);
    }else{
        console.log(`azalt 🔽`);
    
    }while(hak >0);

    if( hak === 0){
    console.log('üzgünüz oyunu kaybettiniz💔');
    }
    const devam = prompt('yeniden oynamak ister misiniz e/h?');
    } while(devam=='e' || devam=='E');
    console.log('Yine Bekleriz');

