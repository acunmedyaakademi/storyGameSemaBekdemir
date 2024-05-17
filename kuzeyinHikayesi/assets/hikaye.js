alert(
  "Kuzey, küçük kasabanın sakin bir köşesinde yaşayan genç bir maceraperestti. En iyi arkadaşı ve sadık yol arkadaşı köpeği Coni ile birlikte, kasabanın etrafındaki ormanları keşfetmeyi çok seviyordu. Bir gün, kasabanın hemen dışındaki eski bir malikanenin gizemini keşfetmeye karar verdiler.Kuzey'in elinde haritasıyla, Coni ile birlikte yola çıktılar. Eski malikanenin etrafındaki orman, gizem dolu ve ürperticiydi. Yol boyunca birçok seçenekleri olan yol ayrımlarıyla karşılaştılar. \n\n "
);


let secim = prompt(
  " ilk yol ayrımında  karşılarına büyük bir malikane ve orman çıkar ne taraftan gideceklerine  karar vermek için durup bir süre düşünürler. \n\n 1.Doğrudan malikaneye gitmeyi seçmek \n\n  2.Ormanın derinliklerinde gizlenmiş bir mağarayı araştırmak. \n \n Kuzey'in seçimini yapmasına yardımcı olabilir misiniz?"
);

if (secim == 1) {
  prompt(
    "Kuzey, merakla malikanenin kapısına yaklaştı. Paslı kapı tokmağına uzanırken kalbi hızlı hızlı atıyordu. Coni, sadık köpeği, heyecanla kuyruğunu sallıyordu.\n Kuzey, kapıyı çaldı ve bir süre bekledi. Ancak kapı beklediği gibi açılmadı. \n \n 1. Kapıyı tekrar çalmak ve içeri girmek \n \n 2. Kapının etrafını dolaşmak ve başka bir giriş aramak \n \n Kuzey'in ne yapacağına karar vermesine yardımcı olur musunuz?"
  );

  if (secim == 1) {
    prompt(
      "Kuzey, kapıyı bir kez daha tokmaklamaya karar verdi. Bu sefer, paslı kapının gıcırtılı sesi daha da belirgindi. Beklediği gibi, kapı biraz daha açıldı ve içeriden hafif bir ışık sızdığını fark etti. Cesaretini toplayarak, Kuzey ve Coni içeri adım attılar.Girdiklerinde, karşılarında geniş bir salon vardı. Mobilyalar tozla kaplıydı ve odanın sonunda devasa bir taht gözüküyordu. Kuzey, tahtın yanında duran eski bir kitabı fark etti. Kitabı alıp tozunu silmeye başladı ve sayfalarını çevirdi. Birdenbire, kitabın içinde gizli bir bölme olduğunu fark etti. \n \n 1) Gizli bölümü incelemek  \n\n  2) Odanın diğer köşelerini keşfetmek"
    );
    if (secim == 1) {
      prompt(
        "Kuzey, merakla eski kitaptaki gizli bölümü incelemeye başladı. Kitabın içindeki gizli bölüm, bir mektupla doluydu. Mektubun üzerinde toz tabakası vardı ve eski görünüyordu. Kuzey, mektubu dikkatlice açtı ve içindeki yazıları okumaya başladı. Mektup, malikanenin eski sahibine aitti ve kayıp bir hazineden bahsediyordu. Kuzey'in kalbi heyecanla çarpmaya başladı, çünkü hazinenin yerini bulma fırsatını yakalamıştı."
      );

    } else if (secim == 2) 
      
      {prompt("Kuzey, odanın diğer köşelerini araştırmaya başladı. Odanın bir köşesinde, eski bir kitaplık ve üzerinde tozlanmış bir koleksiyon vardı. Kuzey, kitaplığın raflarını karıştırmaya başladı ve eski defterlerin arasında bir not buldu. Not, malikanenin gizemli geçidini ve içinde saklı olan sırları açıklayan ipuçlarını içeriyordu.");} 
      else {alert("lütfen hikayenin sonu için geçerli bi değer girin.")}} 
      
      else if (secim ==2 ) 
      {prompt("Kuzey, kapının etrafında dolaşırken, duvarlardaki eski taşları ve pencerenin kenarındaki yosunları inceledi. Birden, duvarda bir tuhaflık fark etti. Bir taşın arkasına gizlenmiş gibi duran bir mekanizma vardı. Dikkatlice mekanizmayı itti ve taş duvarın içine kaydı. Arkasında, karanlık bir koridor belirdi. \n 1) Koridora doğru ilerlemek \n 2) Geri dönüp başka bir yol aramak");
      if(secim == 1 )
      {prompt("Kuzey, cesaretle koridora doğru ilerledi. Odanın içine girdiğinde, karşısında muhteşem bir manzara ile karşılaştı. Odanın ortasında, eski bir sandık vardı ve sandığın içinde, yıllar önce kaybolmuş olduğu düşünülen malikanenin mirasını taşıyan bir hazine buldu. Kuzey, bu keşiften dolayı büyük bir sevinçle doldu ve hazineyi kasabaya geri götürmeye karar verdi. Köy halkı, Kuzey'e cesareti ve keşfi için minnettarlıkla ödüllendirdi. Kuzey ve Coni, artık kasabanın kahramanları olarak anılacaktı.")}
      else if (secim == 2) 
      {prompt("Kuzey, geri dönerek farklı bir yol aramaya karar verdi. Ana koridora geri döndüğünde, farklı bir yöne doğru ilerlemeye başladı. Derinlere doğru yol alırken, bir mağaranın girişini keşfetti ve içeriye doğru adım attı. Mağaranın içinde, eski bir tünelin içine doğru devam eden bir geçit buldu. Bu tünel, başka bir maceranın başlangıcı olacaktı. Kuzey ve Coni, keşfettikleri yeni yerleri keşfetmeye devam ederek, bilinmeyenin peşine düşmeye karar verdiler.")}
      else{alert("lütfen hikayenin sonu için geçerli bi değer girin.")}
  }
} else if (secim == 2) {
  prompt("Kuzey, ormanın gizemli derinliklerinde ilerliyordu. Coni, sadık köpeği, heyecanla yanında koşuyordu. Yoğun ağaçlar arasında ilerlerken, bir mağara açığı keşfettiler. Kuzey, mağaranın karanlık girişine doğru ilerledi, cesaretini toplamaya çalışarak.\n\n 1. Mağaranın karanlık girişinden içeri doğru adım atmak \n \n 2. Mağaranın çevresini inceleyip girişe alternatif bir yol bulmaya çalışmak\n \n Kuzey'in ne yapacağına karar vermesine yardımcı olur musunuz?");
   if (secim == 1 ){prompt("Karanlık mağara içine adım attığında, etrafındaki karanlık yutucu gibiydi. Kuzey, mağaranın içinde ilerledikçe, duvarlarına tutunarak ve dikkatlice adım atarak ilerlemeye çalıştı. Derinliklerde ilerledikçe, önünde beliren ışık huzmeleriyle birlikte, mağaranın içinde muhteşem bir oda keşfetti. Duvarlarda eski semboller ve yazılar vardı, ortada ise eski bir sandık duruyordu. Kuzey, sandığı açtığında, içinde yüzyıllardır kayıp olan bir hazineyi buldu. Coni ile birlikte, bu keşifle birlikte büyük bir sevinç yaşadılar.");} 
   else if (secim == 2){prompt("Kuzey, mağaranın çevresini dikkatlice incelemeye başladı. Bir süre araştırdıktan sonra, mağaranın yanında bir kayanın altında gizli bir giriş keşfetti. Bu giriş, ana girişten daha gizliydi ve üzerinde eski bir sembolün oyulduğunu fark etti. Kararlılıkla sembolü inceledi ve içeriye doğru ilerledi. Girişten geçtikten sonra, karşısına çıkan manzara, Kuzey'i şaşırttı. Giriş, başka bir mağaraya açılıyordu ve mağaranın içinde daha fazla gizemli oda ve sırlarla doluydu.")} 
   else {alert("lütfen hikayenin sonu için geçerli bi değer girin.")}
}
else {alert("lütfen hikayenin sonu için geçerli bi değer girin.")}
