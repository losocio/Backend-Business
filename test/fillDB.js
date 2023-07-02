const fillBusinesses = [
    {"name":"Ezmeralda Macklin","cif":92,"address":"01349 Hanover Avenue","email":"emacklin0@noaa.gov","phone":"1393897078","city":"Madrid","activity":"Financial and Banking","title":"Tagcat","summary":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","images":["http://dummyimage.com/173x100.png/ff4444/ffffff"],"texts":["In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."],"votes":3280,"votesPositive":38,"score":1,"reviews":[]},
    {"name":"Filberto Bere","cif":65,"address":"8 Derek Trail","email":"fbere1@abc.net.au","phone":"8404522465","city":"Santa Maria","activity":"Manufacturing and Industrial","title":"Wikivu","summary":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.","images":["http://dummyimage.com/217x100.png/ff4444/ffffff"],"texts":["Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."],"votes":4162,"votesPositive":610,"score":15,"reviews":[]},
    {"name":"Kiersten Fried","cif":23,"address":"01197 Caliangt Avenue","email":"kfried2@topsy.com","phone":"3348762994","city":"Lelystad","activity":"Food and Beverage","title":"BlogXS","summary":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","images":["http://dummyimage.com/138x100.png/cc0000/ffffff"],"texts":["Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."],"votes":7146,"votesPositive":5000,"score":70,"reviews":["Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."]},
    {"name":"Rosana McElane","cif":51,"address":"40 Springview Avenue","email":"rmcelane3@mail.ru","phone":"9886277490","city":"Lelystad","activity":"Financial and Banking","title":"Viva","summary":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","images":["http://dummyimage.com/182x100.png/ff4444/ffffff"],"texts":["Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."],"votes":6801,"votesPositive":3555,"score":52,"reviews":[]},
    {"name":"John Bondley","cif":6,"address":"981 Springs Park","email":"jbondley4@facebook.com","phone":"3147368859","city":"Hamamatsu","activity":"Arts and Entertainment","title":"Gabvine","summary":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","images":["http://dummyimage.com/191x100.png/5fa2dd/ffffff"],"texts":["Sed ante. Vivamus tortor. Duis mattis egestas metus."],"votes":8764,"votesPositive":2335,"score":27,"reviews":[]},
    {"name":"Phylys Antunes","cif":59,"address":"81478 Sachtjen Point","email":"pantunes5@histats.com","phone":"7753211679","city":"Gózd","activity":"Education and Training","title":"Edgeblab","summary":"Phasellus in felis. Donec semper sapien a libero. Nam dui.","images":["http://dummyimage.com/185x100.png/5fa2dd/ffffff"],"texts":["Phasellus in felis. Donec semper sapien a libero. Nam dui."],"votes":100,"votesPositive":71,"score":71,"reviews":["Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."]},
    {"name":"Riva Sone","cif":85,"address":"7801 Pine View Road","email":"rsone6@ehow.com","phone":"1685901673","city":"Särkisalo","activity":"Hospitality and Tourism","title":"Tazzy","summary":"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","images":["http://dummyimage.com/152x100.png/cc0000/ffffff"],"texts":["In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."],"votes":806,"votesPositive":65,"score":8,"reviews":["In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."]},
    {"name":"Sutton Haney","cif":99,"address":"189 Elmside Place","email":"shaney7@clickbank.net","phone":"4765954017","city":"La Mesa","activity":"Technology and Software","title":"Twitterbridge","summary":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","images":["http://dummyimage.com/213x100.png/5fa2dd/ffffff"],"texts":["Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."],"votes":5341,"votesPositive":5001,"score":94,"reviews":[]},
    {"name":"Jemimah Lawland","cif":48,"address":"12206 Sundown Way","email":"jlawland8@who.int","phone":"4793774972","city":"Madrid","activity":"Manufacturing and Industrial","title":"Thoughtbeat","summary":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","images":["http://dummyimage.com/181x100.png/cc0000/ffffff"],"texts":["Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."],"votes":3112,"votesPositive":1048,"score":34,"reviews":[]},
    {"name":"Jeremy Lijtelin","cif":69,"address":"15 Bunker Hill Parkway","email":"tiamo@aol.com","phone":"2251654720","city":"Lelystad","activity":"Education and Training","title":"Yoveo","summary":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","images":["http://dummyimage.com/184x100.png/cc0000/ffffff"],"texts":["Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."],"votes":7667,"votesPositive":6076,"score":79,"reviews":[]}
]

const fillUsers = [
    {"name":"Didi Nel","email":"dnel0@nbcnews.com","age":74,"password":"hY2{OZ0j@E*~*'I","city":"Lelystad","interests":"Education and Training","receivesOffers":false},
    {"name":"Halie Lamplough","email":"hlamplough1@unesco.org","age":17,"password":"eS1\\ffvB","city":"Tampa","interests":"Financial and Banking","receivesOffers":false},
    {"name":"Zola McSporrin","email":"zmcsporrin2@ning.com","age":66,"password":"rM1{_4_s8P}YVW","city":"Carmen","interests":"Retail","receivesOffers":false},
    {"name":"Jilleen Goney","email":"jgoney3@exblog.jp","age":92,"password":"bN5@,V(Iui","city":"Nogueira","interests":"Technology and Software","receivesOffers":true},
    {"name":"Petey Eskrick","email":"peskrick4@nydailynews.com","age":66,"password":"dF4`R$U*","city":"Ganyesa","interests":"Food and Beverage","receivesOffers":false},
    {"name":"Raphaela McCreery","email":"rmccreery5@creativecommons.org","age":70,"password":"bN8@`u$2yrh","city":"Madrid","interests":"Technology and Software","receivesOffers":false},
    {"name":"Michaella Poley","email":"mpoley6@nature.com","age":63,"password":"wW8?O4B8!At_nR),","city":"Madrid","interests":"Manufacturing and Industrial","receivesOffers":true},
    {"name":"Rosamund Pierse","email":"rpierse7@dot.gov","age":29,"password":"vV2@4d7E}&\\\"/_","city":"Lelystad","interests":"Manufacturing and Industrial","receivesOffers":false},
    {"name":"Shirline Slaney","email":"sslaney8@foxnews.com","age":62,"password":"mN8\\ob(8","city":"Saint-Rémi","interests":"Food and Beverage","receivesOffers":true},
    {"name":"Olympia Giovannacci","email":"ogiovannacci9@ow.ly","age":78,"password":"pS3\\IgUN","city":"Lelystad","interests":"Education and Training","receivesOffers":true}
]

module.exports = {fillUsers, fillBusinesses}