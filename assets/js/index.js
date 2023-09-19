      var isim = "Ahmet";
      var soyisim = "Yılmaz";
      var fullisim = isim + " " + soyisim
      var yas = 30;
      var buYil = new Date().getFullYear();
      var yetiskinMi = yas > 18;

      console.log(yetiskinMi);
      console.log("Merhaba Dünya");
      console.log(isim, soyisim);
      console.log(fullisim);
      console.log(fullisim, yas);
      console.log("Doğum yılı:", buYil - yas);
      console.log(2 ** 3);
      // function scrollFn() {
      //    if (window.pageYOffset > 100) {
      //       document.getElementById("menu").classList.add("menu-scroll");
      //    } else {
      //       document.getElementById("menu").classList.remove("menu-scroll");
      //    }
      // }