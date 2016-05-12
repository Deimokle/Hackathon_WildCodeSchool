// Distance : 27.123 km
// Altitudes : Maxi 30 m  Mini 0 m
// Dénivelées : ~ +5 m  -5 m
// Type de trace : Vtt  Cyclotourisme

// 27km
// longe le marais de brière
// le golf de La Baule st denac

// à plus de 80% sur piste cyclable en stabilisé

// circuit réalisé par la communauté d'agglomération de St Nazaire (CARENE)

// Load the Visualization API and the columnchart package.
google.load('visualization', '1', {packages: ['columnchart']});

function initMap() {
  // The following path marks a path from Mt. Whitney, the highest point in the
  // continental United States to Badwater, Death Valley, the lowest point.
  var path = 
[{lat: 43.216313000, lng: 5.623157000},
{lat: 43.216405000, lng: 5.623058000},
{lat: 43.216444000, lng: 5.622942000},
{lat: 43.216431000, lng: 5.622816000},
{lat: 43.216372000, lng: 5.622699000},
{lat: 43.216339000, lng: 5.622582000},
{lat: 43.216293000, lng: 5.622475000},
{lat: 43.216254000, lng: 5.622331000},
{lat: 43.216208000, lng: 5.622187000},
{lat: 43.216385000, lng: 5.621891000},
{lat: 43.216490000, lng: 5.621873000},
{lat: 43.216596000, lng: 5.621864000},
{lat: 43.216688000, lng: 5.621909000},
{lat: 43.216773000, lng: 5.621953000},
{lat: 43.216858000, lng: 5.621998000},
{lat: 43.216944000, lng: 5.622034000},
{lat: 43.217029000, lng: 5.622070000},
{lat: 43.217121000, lng: 5.622061000},
{lat: 43.217213000, lng: 5.622052000},
{lat: 43.217312000, lng: 5.622025000},
{lat: 43.217410000, lng: 5.621998000},
{lat: 43.217509000, lng: 5.621989000},
{lat: 43.217456000, lng: 5.622088000},
{lat: 43.217463000, lng: 5.622214000},
{lat: 43.217542000, lng: 5.622304000},
{lat: 43.217647000, lng: 5.622304000},
{lat: 43.217719000, lng: 5.622214000},
{lat: 43.218324000, lng: 5.621325000},
{lat: 43.218284000, lng: 5.621199000},
{lat: 43.218271000, lng: 5.621073000},
{lat: 43.218258000, lng: 5.620920000},
{lat: 43.218284000, lng: 5.620786000},
{lat: 43.218356000, lng: 5.620687000},
{lat: 43.218455000, lng: 5.620696000},
{lat: 43.218521000, lng: 5.620804000},
{lat: 43.218580000, lng: 5.620920000},
{lat: 43.218645000, lng: 5.621019000},
{lat: 43.218731000, lng: 5.621091000},
{lat: 43.218783000, lng: 5.621190000},
{lat: 43.218875000, lng: 5.621226000},
{lat: 43.218961000, lng: 5.621298000},
{lat: 43.219033000, lng: 5.621388000},
{lat: 43.219086000, lng: 5.621522000},
{lat: 43.219158000, lng: 5.621594000},
{lat: 43.219243000, lng: 5.621666000},
{lat: 43.219342000, lng: 5.621702000},
{lat: 43.219440000, lng: 5.621738000},
{lat: 43.219539000, lng: 5.621756000},
{lat: 43.219637000, lng: 5.621783000},
{lat: 43.219729000, lng: 5.621783000},
{lat: 43.219828000, lng: 5.621756000},
{lat: 43.219927000, lng: 5.621792000},
{lat: 43.220012000, lng: 5.621837000},
{lat: 43.220091000, lng: 5.621918000},
{lat: 43.220176000, lng: 5.621989000},
{lat: 43.220262000, lng: 5.622043000},
{lat: 43.220354000, lng: 5.622061000},
{lat: 43.220452000, lng: 5.622106000},
{lat: 43.220531000, lng: 5.622187000},
{lat: 43.220630000, lng: 5.622232000},
{lat: 43.220728000, lng: 5.622223000},
{lat: 43.220833000, lng: 5.622223000},
{lat: 43.220932000, lng: 5.622205000},
{lat: 43.221030000, lng: 5.622187000},
{lat: 43.221142000, lng: 5.622178000},
{lat: 43.221234000, lng: 5.622133000},
{lat: 43.221326000, lng: 5.622088000},
{lat: 43.221418000, lng: 5.622034000},
{lat: 43.222088000, lng: 5.621109000},
{lat: 43.222101000, lng: 5.620974000},
{lat: 43.222101000, lng: 5.620849000},
{lat: 43.222081000, lng: 5.620705000},
{lat: 43.222101000, lng: 5.620579000},
{lat: 43.222127000, lng: 5.620426000},
{lat: 43.222154000, lng: 5.620265000},
{lat: 43.222193000, lng: 5.620139000},
{lat: 43.222219000, lng: 5.620013000},
{lat: 43.222239000, lng: 5.619869000},
{lat: 43.222259000, lng: 5.619744000},
{lat: 43.222318000, lng: 5.618010000},
{lat: 43.222351000, lng: 5.617884000},
{lat: 43.222403000, lng: 5.617758000},
{lat: 43.222443000, lng: 5.617615000},
{lat: 43.222489000, lng: 5.617498000},
{lat: 43.222502000, lng: 5.617345000},
{lat: 43.222502000, lng: 5.617201000},
{lat: 43.222482000, lng: 5.617076000},
{lat: 43.222476000, lng: 5.616932000},
{lat: 43.222482000, lng: 5.616779000},
{lat: 43.222482000, lng: 5.616635000},
{lat: 43.222476000, lng: 5.616510000},
{lat: 43.222476000, lng: 5.616357000},
{lat: 43.222469000, lng: 5.616231000},
{lat: 43.222476000, lng: 5.616096000},
{lat: 43.222449000, lng: 5.615980000},
{lat: 43.222495000, lng: 5.615863000},
{lat: 43.222568000, lng: 5.615782000},
{lat: 43.222666000, lng: 5.615755000},
{lat: 43.222765000, lng: 5.615719000},
{lat: 43.223540000, lng: 5.615162000},
{lat: 43.223599000, lng: 5.615045000},
{lat: 43.223651000, lng: 5.614938000},
{lat: 43.223724000, lng: 5.614839000},
{lat: 43.223803000, lng: 5.614740000},
{lat: 43.223829000, lng: 5.614614000},
{lat: 43.223849000, lng: 5.614471000},
{lat: 43.223862000, lng: 5.614345000},
{lat: 43.223881000, lng: 5.614201000},
{lat: 43.223895000, lng: 5.614066000},
{lat: 43.223908000, lng: 5.613941000},
{lat: 43.223908000, lng: 5.613797000},
{lat: 43.223901000, lng: 5.613671000},
{lat: 43.223875000, lng: 5.613545000},
{lat: 43.223849000, lng: 5.613411000},
{lat: 43.223809000, lng: 5.613294000},
{lat: 43.223743000, lng: 5.613186000},
{lat: 43.223717000, lng: 5.613069000},
{lat: 43.223665000, lng: 5.612952000},
{lat: 43.223573000, lng: 5.612889000},
{lat: 43.223468000, lng: 5.612845000},
{lat: 43.223389000, lng: 5.612773000},
{lat: 43.223310000, lng: 5.612710000},
{lat: 43.223638000, lng: 5.612404000},
{lat: 43.223737000, lng: 5.612386000},
{lat: 43.223829000, lng: 5.612413000},
{lat: 43.223921000, lng: 5.612440000},
{lat: 43.224013000, lng: 5.612467000},
{lat: 43.224092000, lng: 5.612548000},
{lat: 43.224170000, lng: 5.612620000},
{lat: 43.224269000, lng: 5.612683000},
{lat: 43.224341000, lng: 5.612773000},
{lat: 43.224420000, lng: 5.612872000},
{lat: 43.224492000, lng: 5.612961000},
{lat: 43.224578000, lng: 5.612997000},
{lat: 43.224670000, lng: 5.613033000},
{lat: 43.224775000, lng: 5.613078000},
{lat: 43.224873000, lng: 5.613159000},
{lat: 43.224985000, lng: 5.613249000},
{lat: 43.225070000, lng: 5.613303000},
{lat: 43.226299000, lng: 5.613249000},
{lat: 43.226404000, lng: 5.613159000},
{lat: 43.226496000, lng: 5.613069000},
{lat: 43.226581000, lng: 5.613015000},
{lat: 43.226667000, lng: 5.612916000},
{lat: 43.226732000, lng: 5.612827000},
{lat: 43.226811000, lng: 5.612755000},
{lat: 43.226910000, lng: 5.612674000},
{lat: 43.227015000, lng: 5.612665000},
{lat: 43.227107000, lng: 5.612665000},
{lat: 43.227192000, lng: 5.612701000},
{lat: 43.227291000, lng: 5.612746000},
{lat: 43.227370000, lng: 5.612809000},
{lat: 43.227462000, lng: 5.612854000},
{lat: 43.227534000, lng: 5.612925000},
{lat: 43.227606000, lng: 5.613015000},
{lat: 43.227705000, lng: 5.613078000},
{lat: 43.227783000, lng: 5.613168000},
{lat: 43.227869000, lng: 5.613258000},
{lat: 43.227941000, lng: 5.613339000},
{lat: 43.228033000, lng: 5.613411000},
{lat: 43.228132000, lng: 5.613482000},
{lat: 43.228210000, lng: 5.613581000},
{lat: 43.228289000, lng: 5.613644000},
{lat: 43.229150000, lng: 5.614300000},
{lat: 43.229261000, lng: 5.614264000},
{lat: 43.229360000, lng: 5.614246000},
{lat: 43.229465000, lng: 5.614228000},
{lat: 43.229564000, lng: 5.614237000},
{lat: 43.229662000, lng: 5.614255000},
{lat: 43.229761000, lng: 5.614273000},
{lat: 43.229853000, lng: 5.614309000},
{lat: 43.229938000, lng: 5.614345000},
{lat: 43.229971000, lng: 5.614462000},
{lat: 43.230010000, lng: 5.614578000},
{lat: 43.230004000, lng: 5.614704000},
{lat: 43.230030000, lng: 5.614839000},
{lat: 43.230109000, lng: 5.614965000},
{lat: 43.231304000, lng: 5.614695000},
{lat: 43.231396000, lng: 5.614677000},
{lat: 43.231495000, lng: 5.614650000},
{lat: 43.231587000, lng: 5.614632000},
{lat: 43.231672000, lng: 5.614587000},
{lat: 43.231764000, lng: 5.614542000},
{lat: 43.231849000, lng: 5.614497000},
{lat: 43.231941000, lng: 5.614399000},
{lat: 43.232033000, lng: 5.614327000},
{lat: 43.232125000, lng: 5.614255000},
{lat: 43.232217000, lng: 5.614183000},
{lat: 43.232303000, lng: 5.614147000},
{lat: 43.232408000, lng: 5.614102000},
{lat: 43.232500000, lng: 5.614066000},
{lat: 43.232605000, lng: 5.614039000},
{lat: 43.232697000, lng: 5.614012000},
{lat: 43.232808000, lng: 5.613976000},
{lat: 43.232900000, lng: 5.613958000},
{lat: 43.233005000, lng: 5.613941000},
{lat: 43.233124000, lng: 5.613914000},
{lat: 43.233216000, lng: 5.613923000},
{lat: 43.233314000, lng: 5.613941000},
{lat: 43.233426000, lng: 5.613985000},
{lat: 43.233524000, lng: 5.614039000},
{lat: 43.233623000, lng: 5.614102000},
{lat: 43.234661000, lng: 5.614156000},
{lat: 43.234766000, lng: 5.614138000},
{lat: 43.234871000, lng: 5.614138000},
{lat: 43.234982000, lng: 5.614129000},
{lat: 43.235088000, lng: 5.614102000},
{lat: 43.235186000, lng: 5.614075000},
{lat: 43.235298000, lng: 5.614048000},
{lat: 43.235409000, lng: 5.614039000},
{lat: 43.235521000, lng: 5.614039000},
{lat: 43.235626000, lng: 5.614057000},
{lat: 43.235731000, lng: 5.614048000},
{lat: 43.235823000, lng: 5.614039000},
{lat: 43.235928000, lng: 5.614012000},
{lat: 43.236040000, lng: 5.613967000},
{lat: 43.236132000, lng: 5.613896000},
{lat: 43.236224000, lng: 5.613842000},
{lat: 43.236822000, lng: 5.612872000},
{lat: 43.236848000, lng: 5.612746000},
{lat: 43.236874000, lng: 5.612602000},
{lat: 43.236900000, lng: 5.612458000},
{lat: 43.236927000, lng: 5.612324000},
{lat: 43.236940000, lng: 5.612198000},
{lat: 43.236959000, lng: 5.612063000},
{lat: 43.236959000, lng: 5.611910000},
{lat: 43.237518000, lng: 5.610725000},
{lat: 43.237597000, lng: 5.610626000},
{lat: 43.237695000, lng: 5.610536000},
{lat: 43.237774000, lng: 5.610473000},
{lat: 43.237866000, lng: 5.610419000},
{lat: 43.237951000, lng: 5.610374000},
{lat: 43.238037000, lng: 5.610338000},
{lat: 43.238135000, lng: 5.610320000},
{lat: 43.238227000, lng: 5.610329000},
{lat: 43.238319000, lng: 5.610302000},
{lat: 43.238411000, lng: 5.610239000},
{lat: 43.238496000, lng: 5.610177000},
{lat: 43.238569000, lng: 5.610105000},
{lat: 43.238634000, lng: 5.610015000},
{lat: 43.238706000, lng: 5.609934000},
{lat: 43.238759000, lng: 5.609826000},
{lat: 43.238825000, lng: 5.609727000},
{lat: 43.238904000, lng: 5.609611000},
{lat: 43.238963000, lng: 5.609512000},
{lat: 43.239022000, lng: 5.609413000},
{lat: 43.239094000, lng: 5.609332000},
{lat: 43.239147000, lng: 5.609233000},
{lat: 43.239199000, lng: 5.609126000},
{lat: 43.239258000, lng: 5.609018000},
{lat: 43.239311000, lng: 5.608910000},
{lat: 43.239363000, lng: 5.608793000},
{lat: 43.239409000, lng: 5.608658000},
{lat: 43.239435000, lng: 5.608533000},
{lat: 43.239435000, lng: 5.608407000},
{lat: 43.239396000, lng: 5.608290000},
{lat: 43.239350000, lng: 5.608182000},
{lat: 43.239317000, lng: 5.608057000},
{lat: 43.239324000, lng: 5.607931000},
{lat: 43.239278000, lng: 5.607778000},
{lat: 43.239206000, lng: 5.607688000},
{lat: 43.239127000, lng: 5.607607000},
{lat: 43.239921000, lng: 5.608119000},
{lat: 43.239994000, lng: 5.608191000},
{lat: 43.240046000, lng: 5.608290000},
{lat: 43.240092000, lng: 5.608407000},
{lat: 43.240119000, lng: 5.608533000},
{lat: 43.240460000, lng: 5.609844000},
{lat: 43.240545000, lng: 5.609934000},
{lat: 43.240631000, lng: 5.610006000},
{lat: 43.240710000, lng: 5.610105000},
{lat: 43.240769000, lng: 5.610204000},
{lat: 43.240821000, lng: 5.610311000},
{lat: 43.240893000, lng: 5.610419000},
{lat: 43.240966000, lng: 5.610491000},
{lat: 43.241038000, lng: 5.610563000},
{lat: 43.241091000, lng: 5.610662000},
{lat: 43.241176000, lng: 5.610734000},
{lat: 43.241242000, lng: 5.610859000},
{lat: 43.241294000, lng: 5.610976000},
{lat: 43.241885000, lng: 5.611650000},
{lat: 43.241944000, lng: 5.611758000},
{lat: 43.241997000, lng: 5.611883000},
{lat: 43.242049000, lng: 5.612000000},
{lat: 43.242128000, lng: 5.612090000},
{lat: 43.242181000, lng: 5.612225000},
{lat: 43.242233000, lng: 5.612333000},
{lat: 43.242292000, lng: 5.612449000},
{lat: 43.242384000, lng: 5.612530000},
{lat: 43.242470000, lng: 5.612584000},
{lat: 43.242522000, lng: 5.612692000},
{lat: 43.242562000, lng: 5.612818000},
{lat: 43.242555000, lng: 5.612943000},
{lat: 43.242516000, lng: 5.613087000},
{lat: 43.242502000, lng: 5.613222000},
{lat: 43.242476000, lng: 5.613348000},
{lat: 43.242450000, lng: 5.613473000},
{lat: 43.242411000, lng: 5.613626000},
{lat: 43.242384000, lng: 5.613743000},
{lat: 43.242365000, lng: 5.613896000},
{lat: 43.242358000, lng: 5.614057000},
{lat: 43.242351000, lng: 5.614183000},
{lat: 43.242391000, lng: 5.614327000},
{lat: 43.242457000, lng: 5.614471000},
{lat: 43.242548000, lng: 5.614569000},
{lat: 43.243284000, lng: 5.615001000},
{lat: 43.243396000, lng: 5.614983000},
{lat: 43.243507000, lng: 5.614965000},
{lat: 43.243619000, lng: 5.614983000},
{lat: 43.243704000, lng: 5.615027000},
{lat: 43.243737000, lng: 5.615162000},
{lat: 43.243737000, lng: 5.615342000},
{lat: 43.243737000, lng: 5.615504000},
{lat: 43.243724000, lng: 5.615656000},
{lat: 43.243724000, lng: 5.615845000},
{lat: 43.243731000, lng: 5.615980000},
{lat: 43.243757000, lng: 5.616114000},
{lat: 43.243770000, lng: 5.616285000},
{lat: 43.243790000, lng: 5.616411000},
{lat: 43.243809000, lng: 5.616537000},
{lat: 43.243816000, lng: 5.616671000},
{lat: 43.243796000, lng: 5.616824000},
{lat: 43.243777000, lng: 5.616986000},
{lat: 43.243015000, lng: 5.619510000},
{lat: 43.242969000, lng: 5.619672000},
{lat: 43.242936000, lng: 5.619816000},
{lat: 43.242897000, lng: 5.619959000},
{lat: 43.242837000, lng: 5.620085000},
{lat: 43.242785000, lng: 5.620193000},
{lat: 43.242739000, lng: 5.620310000},
{lat: 43.242673000, lng: 5.620462000},
{lat: 43.242601000, lng: 5.620606000},
{lat: 43.242542000, lng: 5.620759000},
{lat: 43.242483000, lng: 5.620893000},
{lat: 43.242443000, lng: 5.621082000},
{lat: 43.242430000, lng: 5.621235000},
{lat: 43.242424000, lng: 5.621406000},
{lat: 43.242404000, lng: 5.621594000},
{lat: 43.242371000, lng: 5.621774000},
{lat: 43.242305000, lng: 5.621953000},
{lat: 43.242214000, lng: 5.622115000},
{lat: 43.242128000, lng: 5.622268000},
{lat: 43.242043000, lng: 5.622430000},
{lat: 43.241957000, lng: 5.622582000},
{lat: 43.241734000, lng: 5.624118000},
{lat: 43.241708000, lng: 5.624334000},
{lat: 43.241688000, lng: 5.624559000},
{lat: 43.241675000, lng: 5.624756000},
{lat: 43.241636000, lng: 5.624909000},
{lat: 43.241616000, lng: 5.625062000},
{lat: 43.241603000, lng: 5.625187000},
{lat: 43.241609000, lng: 5.625349000},
{lat: 43.241622000, lng: 5.625502000},
{lat: 43.241609000, lng: 5.625664000},
{lat: 43.241590000, lng: 5.625798000},
{lat: 43.241583000, lng: 5.625924000},
{lat: 43.241603000, lng: 5.626050000},
{lat: 43.241649000, lng: 5.626194000},
{lat: 43.241688000, lng: 5.626319000},
{lat: 43.241754000, lng: 5.626445000},
{lat: 43.241813000, lng: 5.626580000},
{lat: 43.241865000, lng: 5.626679000},
{lat: 43.241944000, lng: 5.626804000},
{lat: 43.242010000, lng: 5.626912000},
{lat: 43.242115000, lng: 5.627038000},
{lat: 43.242194000, lng: 5.627128000},
{lat: 43.242286000, lng: 5.627263000},
{lat: 43.242332000, lng: 5.627379000},
{lat: 43.242378000, lng: 5.627514000},
{lat: 43.242437000, lng: 5.627622000},
{lat: 43.242502000, lng: 5.627739000},
{lat: 43.242568000, lng: 5.627864000},
{lat: 43.242240000, lng: 5.630272000},
{lat: 43.242246000, lng: 5.630407000},
{lat: 43.242233000, lng: 5.630532000},
{lat: 43.242220000, lng: 5.630658000},
{lat: 43.242266000, lng: 5.630802000},
{lat: 43.242299000, lng: 5.630928000},
{lat: 43.242325000, lng: 5.631044000},
{lat: 43.242345000, lng: 5.631170000},
{lat: 43.242371000, lng: 5.631323000},
{lat: 43.242397000, lng: 5.631440000},
{lat: 43.242437000, lng: 5.631574000},
{lat: 43.242463000, lng: 5.631691000},
{lat: 43.242502000, lng: 5.631844000},
{lat: 43.242555000, lng: 5.631997000},
{lat: 43.242608000, lng: 5.632122000},
{lat: 43.242647000, lng: 5.632275000},
{lat: 43.242700000, lng: 5.632401000},
{lat: 43.243048000, lng: 5.633874000},
{lat: 43.243094000, lng: 5.633982000},
{lat: 43.243153000, lng: 5.634099000},
{lat: 43.243225000, lng: 5.634189000},
{lat: 43.243297000, lng: 5.634287000},
{lat: 43.243376000, lng: 5.634395000},
{lat: 43.243428000, lng: 5.634503000},
{lat: 43.243501000, lng: 5.634611000},
{lat: 43.243553000, lng: 5.634728000},
{lat: 43.243566000, lng: 5.634862000},
{lat: 43.243580000, lng: 5.634997000},
{lat: 43.243580000, lng: 5.635123000},
{lat: 43.243553000, lng: 5.635258000},
{lat: 43.243573000, lng: 5.635419000},
{lat: 43.243580000, lng: 5.635590000},
{lat: 43.243606000, lng: 5.635761000},
{lat: 43.243625000, lng: 5.635913000},
{lat: 43.243645000, lng: 5.636039000},
{lat: 43.243619000, lng: 5.636174000},
{lat: 43.243540000, lng: 5.636066000},
{lat: 43.243514000, lng: 5.635949000},
{lat: 43.243501000, lng: 5.635823000},
{lat: 43.243468000, lng: 5.635698000},
{lat: 43.243402000, lng: 5.635581000},
{lat: 43.243317000, lng: 5.635491000},
{lat: 43.243212000, lng: 5.635482000},
{lat: 43.243126000, lng: 5.635554000},
{lat: 43.243048000, lng: 5.635653000},
{lat: 43.242975000, lng: 5.635734000},
{lat: 43.241288000, lng: 5.637108000},
{lat: 43.241182000, lng: 5.637207000},
{lat: 43.241071000, lng: 5.637279000},
{lat: 43.240972000, lng: 5.637342000},
{lat: 43.240861000, lng: 5.637431000},
{lat: 43.240749000, lng: 5.637548000},
{lat: 43.240650000, lng: 5.637692000},
{lat: 43.240565000, lng: 5.637845000},
{lat: 43.240480000, lng: 5.637997000},
{lat: 43.240401000, lng: 5.638141000},
{lat: 43.240342000, lng: 5.638303000},
{lat: 43.240309000, lng: 5.638491000},
{lat: 43.239646000, lng: 5.641627000},
{lat: 43.239626000, lng: 5.641752000},
{lat: 43.239587000, lng: 5.641950000},
{lat: 43.239573000, lng: 5.642139000},
{lat: 43.239593000, lng: 5.642309000},
{lat: 43.239626000, lng: 5.642480000},
{lat: 43.239652000, lng: 5.642597000},
{lat: 43.239672000, lng: 5.642723000},
{lat: 43.239692000, lng: 5.642866000},
{lat: 43.239698000, lng: 5.642992000},
{lat: 43.239711000, lng: 5.643127000},
{lat: 43.239724000, lng: 5.643253000},
{lat: 43.239731000, lng: 5.643387000},
{lat: 43.239698000, lng: 5.643513000},
{lat: 43.239692000, lng: 5.643684000},
{lat: 43.239698000, lng: 5.643810000},
{lat: 43.239685000, lng: 5.643962000},
{lat: 43.239678000, lng: 5.644151000},
{lat: 43.239698000, lng: 5.644331000},
{lat: 43.239206000, lng: 5.646531000},
{lat: 43.239140000, lng: 5.646621000},
{lat: 43.239028000, lng: 5.646801000},
{lat: 43.238923000, lng: 5.646954000},
{lat: 43.238812000, lng: 5.647097000},
{lat: 43.238700000, lng: 5.647232000},
{lat: 43.238601000, lng: 5.647385000},
{lat: 43.238509000, lng: 5.647564000},
{lat: 43.238398000, lng: 5.647753000},
{lat: 43.238293000, lng: 5.647933000},
{lat: 43.238234000, lng: 5.648130000},
{lat: 43.238188000, lng: 5.648319000},
{lat: 43.238155000, lng: 5.648508000},
{lat: 43.236854000, lng: 5.653314000},
{lat: 43.236822000, lng: 5.653457000},
{lat: 43.236782000, lng: 5.653610000},
{lat: 43.236644000, lng: 5.653646000},
{lat: 43.236664000, lng: 5.653772000},
{lat: 43.236539000, lng: 5.653700000},
{lat: 43.236454000, lng: 5.653619000},
{lat: 43.236362000, lng: 5.653520000},
{lat: 43.236303000, lng: 5.653395000},
{lat: 43.236250000, lng: 5.653251000},
{lat: 43.236217000, lng: 5.653107000},
{lat: 43.236171000, lng: 5.652990000},
{lat: 43.236132000, lng: 5.652829000},
{lat: 43.236119000, lng: 5.652649000},
{lat: 43.236112000, lng: 5.652514000},
{lat: 43.236073000, lng: 5.652236000},
{lat: 43.235074000, lng: 5.650619000},
{lat: 43.234982000, lng: 5.650511000},
{lat: 43.234864000, lng: 5.650439000},
{lat: 43.234785000, lng: 5.650313000},
{lat: 43.234739000, lng: 5.650179000},
{lat: 43.234700000, lng: 5.650044000},
{lat: 43.234661000, lng: 5.649927000},
{lat: 43.234588000, lng: 5.649846000},
{lat: 43.234536000, lng: 5.649738000},
{lat: 43.233741000, lng: 5.647654000},
{lat: 43.233656000, lng: 5.647538000},
{lat: 43.233564000, lng: 5.647439000},
{lat: 43.233485000, lng: 5.647331000},
{lat: 43.233413000, lng: 5.647250000},
{lat: 43.233334000, lng: 5.647160000},
{lat: 43.233262000, lng: 5.647070000},
{lat: 43.233216000, lng: 5.646918000},
{lat: 43.233183000, lng: 5.646801000},
{lat: 43.233124000, lng: 5.646675000},
{lat: 43.233038000, lng: 5.646540000},
{lat: 43.232979000, lng: 5.646388000},
{lat: 43.232276000, lng: 5.644214000},
{lat: 43.232198000, lng: 5.644106000},
{lat: 43.232092000, lng: 5.644025000},
{lat: 43.232033000, lng: 5.643926000},
{lat: 43.231961000, lng: 5.643765000},
{lat: 43.231895000, lng: 5.643630000},
{lat: 43.231863000, lng: 5.643486000},
{lat: 43.231817000, lng: 5.643378000},
{lat: 43.231757000, lng: 5.643118000},
{lat: 43.231718000, lng: 5.642983000},
{lat: 43.231672000, lng: 5.642776000},
{lat: 43.231620000, lng: 5.642651000},
{lat: 43.231547000, lng: 5.642498000},
{lat: 43.231501000, lng: 5.642363000},
{lat: 43.231449000, lng: 5.642193000},
{lat: 43.231422000, lng: 5.642049000},
{lat: 43.231377000, lng: 5.641941000},
{lat: 43.229826000, lng: 5.640144000},
{lat: 43.229780000, lng: 5.640019000},
{lat: 43.229761000, lng: 5.639875000},
{lat: 43.229708000, lng: 5.639749000},
{lat: 43.229662000, lng: 5.639641000},
{lat: 43.229616000, lng: 5.639534000},
{lat: 43.228677000, lng: 5.639875000},
{lat: 43.228644000, lng: 5.639992000},
{lat: 43.228578000, lng: 5.639884000},
{lat: 43.228539000, lng: 5.639740000},
{lat: 43.228519000, lng: 5.639614000},
{lat: 43.228467000, lng: 5.639471000},
{lat: 43.228414000, lng: 5.639345000},
{lat: 43.228342000, lng: 5.639246000},
{lat: 43.228289000, lng: 5.639111000},
{lat: 43.228250000, lng: 5.638995000},
{lat: 43.227508000, lng: 5.637656000},
{lat: 43.227429000, lng: 5.637575000},
{lat: 43.227330000, lng: 5.637467000},
{lat: 43.227238000, lng: 5.637387000},
{lat: 43.227146000, lng: 5.637288000},
{lat: 43.227067000, lng: 5.637216000},
{lat: 43.226969000, lng: 5.637099000},
{lat: 43.226890000, lng: 5.636982000},
{lat: 43.226831000, lng: 5.636848000},
{lat: 43.226792000, lng: 5.636686000},
{lat: 43.226772000, lng: 5.636533000},
{lat: 43.226759000, lng: 5.636398000},
{lat: 43.226726000, lng: 5.636282000},
{lat: 43.226706000, lng: 5.636156000},
{lat: 43.226660000, lng: 5.636030000},
{lat: 43.226608000, lng: 5.635877000},
{lat: 43.226581000, lng: 5.635716000},
{lat: 43.226496000, lng: 5.635626000},
{lat: 43.226404000, lng: 5.635608000},
{lat: 43.226299000, lng: 5.635545000},
{lat: 43.225340000, lng: 5.633623000},
{lat: 43.225254000, lng: 5.633551000},
{lat: 43.225169000, lng: 5.633434000},
{lat: 43.225103000, lng: 5.633344000},
{lat: 43.225018000, lng: 5.633263000},
{lat: 43.224926000, lng: 5.633182000},
{lat: 43.224860000, lng: 5.633039000},
{lat: 43.224762000, lng: 5.632958000},
{lat: 43.224663000, lng: 5.632886000},
{lat: 43.224571000, lng: 5.632832000},
{lat: 43.224453000, lng: 5.632796000},
{lat: 43.224354000, lng: 5.632778000},
{lat: 43.224256000, lng: 5.632742000},
{lat: 43.224124000, lng: 5.632715000},
{lat: 43.224013000, lng: 5.632697000},
{lat: 43.223218000, lng: 5.630434000},
{lat: 43.223192000, lng: 5.630317000},
{lat: 43.223172000, lng: 5.630191000},
{lat: 43.223159000, lng: 5.630056000},
{lat: 43.223159000, lng: 5.629886000},
{lat: 43.223139000, lng: 5.629760000},
{lat: 43.223126000, lng: 5.629571000},
{lat: 43.223113000, lng: 5.629427000},
{lat: 43.223080000, lng: 5.629302000},
{lat: 43.223027000, lng: 5.629203000},
{lat: 43.222949000, lng: 5.629068000},
{lat: 43.222876000, lng: 5.628951000},
{lat: 43.222797000, lng: 5.628835000},
{lat: 43.222719000, lng: 5.628691000},
{lat: 43.220892000, lng: 5.625475000},
{lat: 43.220735000, lng: 5.625448000},
{lat: 43.220616000, lng: 5.625466000},
{lat: 43.220485000, lng: 5.625511000},
{lat: 43.220367000, lng: 5.625529000},
{lat: 43.220242000, lng: 5.625538000},
{lat: 43.220097000, lng: 5.625547000},
{lat: 43.219979000, lng: 5.625529000},
{lat: 43.219703000, lng: 5.624846000},
{lat: 43.219828000, lng: 5.624837000},
{lat: 43.219959000, lng: 5.624828000},
{lat: 43.220065000, lng: 5.624801000},
{lat: 43.220156000, lng: 5.624765000},
{lat: 43.220262000, lng: 5.624747000},
{lat: 43.220367000, lng: 5.624648000},
{lat: 43.220465000, lng: 5.624577000},
{lat: 43.220597000, lng: 5.624559000},
{lat: 43.220715000, lng: 5.624541000},
{lat: 43.220833000, lng: 5.624460000},
{lat: 43.220905000, lng: 5.624388000},
{lat: 43.221011000, lng: 5.624253000},
{lat: 43.221135000, lng: 5.624199000},
{lat: 43.221254000, lng: 5.624154000},
{lat: 43.221332000, lng: 5.624091000},
{lat: 43.219723000, lng: 5.623930000},
{lat: 43.219598000, lng: 5.623921000},
{lat: 43.219473000, lng: 5.623858000},
{lat: 43.219348000, lng: 5.623831000},
{lat: 43.219250000, lng: 5.623714000},
{lat: 43.219178000, lng: 5.623624000},
{lat: 43.219105000, lng: 5.623544000},
{lat: 43.219013000, lng: 5.623337000},
{lat: 43.218921000, lng: 5.623256000},
{lat: 43.218856000, lng: 5.623166000},
{lat: 43.217601000, lng: 5.622645000},
{lat: 43.217476000, lng: 5.622609000},
{lat: 43.217345000, lng: 5.622672000},
{lat: 43.217239000, lng: 5.622726000},
{lat: 43.217128000, lng: 5.622771000},
{lat: 43.217016000, lng: 5.622825000},
{lat: 43.216891000, lng: 5.622861000},
{lat: 43.216780000, lng: 5.622906000},
{lat: 43.216674000, lng: 5.622951000},
{lat: 43.216504000, lng: 5.623049000},
{lat: 43.216372000, lng: 5.623112000},];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: path[1],
    mapTypeId: 'terrain'
  });

  // Create an ElevationService.
  var elevator = new google.maps.ElevationService;

  // Draw the path, using the Visualization API and the Elevation service.
  displayPathElevation(path, elevator, map);
}

function displayPathElevation(path, elevator, map) {
  // Display a polyline of the elevation path.
  new google.maps.Polyline({
    path: path,
    strokeColor: '#0000CC',
    opacity: 0.4,
    map: map
  });

  // Create a PathElevationRequest object using this array.
  // Ask for 256 samples along that path.
  // Initiate the path request.
  elevator.getElevationAlongPath({
    'path': path,
    'samples': 512
  }, plotElevation);
}

// Takes an array of ElevationResult objects, draws the path on the map
// and plots the elevation profile on a Visualization API ColumnChart.
function plotElevation(elevations, status) {
  var chartDiv = document.getElementById('elevation_chart');
  if (status !== google.maps.ElevationStatus.OK) {
    // Show the error code inside the chartDiv.
    chartDiv.innerHTML = 'Cannot show elevation: request failed because ' +
        status;
    return;
  }
  // Create a new chart in the elevation_chart DIV.
  var chart = new google.visualization.ColumnChart(chartDiv);

  // Extract the data from which to populate the chart.
  // Because the samples are equidistant, the 'Sample'
  // column here does double duty as distance along the
  // X axis.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Sample');
  data.addColumn('number', 'Elevation');
  for (var i = 0; i < elevations.length; i++) {
    data.addRow(['', elevations[i].elevation]);
  }

  // Draw the chart using the data within its DIV.
  chart.draw(data, {
    height: 150,
    legend: 'none',
    titleY: 'Elevation (m)'
  });
}

	
	var polyline = new google.maps.Polyline({
		path: points,
		strokeColor: curColor,
		strokeWeight: 3,
		strokeOpacity: .6,
		map: map
	});