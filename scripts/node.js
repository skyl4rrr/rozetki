$(".whatis").click(function () {
  $("html, body").animate(
    { scrollTop: $(".whatis-section").offset().top },
    800
  );
});
$(".howuse").click(function () {
  $("html, body").animate(
    { scrollTop: $(".howuse-section").offset().top },
    800
  );
});
$(".in").click(function () {
  $("html, body").animate({ scrollTop: $(".in-section").offset().top }, 800);
});
$(".history").click(function () {
  $("html, body").animate({ scrollTop: $("footer").offset().top }, 800);
});
$(".corpus").click(function () {
  $(".in-btn-p").text(
    "Корпус розетки — это её внешняя оболочка, обычно сделанная из прочного негорючего пластика. Он защищает внутренние части розетки от повреждений, а нас — от случайного контакта с током. Корпус крепится к стене с помощью винтов или специальных клипс. На корпусе часто бывают надписи, обозначающие допустимое напряжение и тип розетки, а также отверстия, в которые вставляется вилка устройства."
  );
});
$(".contact").click(function () {
  $(".in-btn-p").text(
    "Контакты — это металлические пластины внутри розетки, через которые проходит электрический ток. Когда мы вставляем вилку устройства, металлические штыри вилки входят в контакт с этими пластинами, замыкая цепь. Контакты сделаны из материалов, которые хорошо проводят ток, например, меди или латуни, что позволяет передавать электричество с минимальными потерями. Контакты также могут иметь пружинные элементы, чтобы плотнее держать вилку на месте и обеспечить надёжное соединение."
  );
});
$(".klemm").click(function () {
  $(".in-btn-p").text(
    "Клеммы — это точки подключения проводов, идущих от электросети к розетке. Обычно есть две или три клеммы: одна для «фазы», одна для «нуля» и, если есть, ещё одна для заземления. Провода от домашней электросети подключаются к клеммам с помощью винтового зажима или других креплений, чтобы обеспечить надёжный контакт. Клеммы позволяют электричеству поступать из сети в контакты розетки и затем передаваться к подключённому устройству."
  );
});
$(".earth").click(function () {
  $(".in-btn-p").text(
    "Заземление — это дополнительный контакт в розетке, который предназначен для защиты от короткого замыкания и других проблем с электричеством. Он соединён с землёй (буквально с проводом, ведущим в землю или к заземляющему контуру), что позволяет перенаправить лишний ток в случае неисправности. Это предотвращает опасное накопление электричества на корпусе прибора и снижает риск поражения током. Заземляющий контакт — это два дополнительных металлических контакта, которые расположены выше или ниже основных отверстий, и к ним прикасаются специальные части вилки заземлённых устройств."
  );
});

$(".logo-text-z").click(function () {
  $(".preview-text").text("Morrison one love <3");
  setTimeout(function () {
    $(".preview-text").text(
      "Розетки — порой неподвластная нашему понимаю вещь, с одной стороны просто втыкаешь вилку в гнездо и все работает, но это же слишком просто, а настоящие програмисты легких путей не ищут, поэтому прежде чем засунуть вилку в розетку, стоит прочитать то, что мы расскажем."
    );
  }, 3000);
});
$(".info-box-symbol-one").click(function () {
  $(".history-text-one").toggleClass("hidden");
  $(".info-box-symbol-one").toggleClass("info-box-symbol-one-active");
});
$(".info-box-symbol-two").click(function () {
  $(".history-text-two").toggleClass("hidden");
  $(".info-box-symbol-two").toggleClass("info-box-symbol-two-active");
});
