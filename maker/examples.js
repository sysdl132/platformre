var exampleLevels=[
  [[],
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @",
    "@@@@@@@@@@@@@@@@@@@        eeeeeeee@@@      +@",
    "@@@@@@@@@@@@@@@@@@@        effffffe@@@      @@",
    "@@@@@@@@@@@@@@@@@@@        @@@@@@@e@@@      @@",
    "@#########@@@L             @@@@@L  R@@      @@",
    "@###eeee##@@@@>eee<vw      @@@@@L  R@@      @@",
    "@##e    ee@@@@#eeeR@w     p@@@@@L  R@@      @@",
    "@#e       @@@@Leee#@w      @@@@@L  R@@      @@",
    "@e  f^@ww#@@@@#eeeR@w      @@@@@L  R@@      @@",
    "@   #@@&ww@@@@L   R@w      @@@@@L  R@@      @@",
    "@   #@@ww#@@@@L    Raw# # #@@@@@L  R@@      @@",
    "@    @@&ww@@@@L&  R@ww# # #@@@@@L  R@@      @@",
    "@^   @@www@@@@L    Rww# # #@@@@@L  R@@      @@",
    "@#   @@w&w@@@@L   R@ww# # #@@@@@L  R@@      @@",
    "@    @@##w@@@@L  &@@ww# # #@@@@@L  R@@      @@",
    "@   ^@@www@@@@L   R@ww# # #@@@@@L  R@@      @@",
    "@   #@@www@@@@L    Rww# # #@@@@@L  R@@      @@",
    "@    @@w&w@@@@L&  R@ww# # #@@@@@L  R@@      @@",
    "@    @@w##@@@@L    Rww# # #@@@@@L  R@@      @@",
    "@^   @wwww@@@@L   R@ww# # #@@@@@L  R@@      @@",
    "@#   @ww##@@@@L  &@@ww# # #@@@@@L  R@@      @@",
    "@    #    @####   R@ww# # #@       R@@      @@",
    "@    #   #L       #@ww# # #@aaaa<  R## Ciiii@@",
    "@    #            #@a@#p#p#@@@@@@      #@@@@@@",
    "@v^^^@Cv*<><>*v^BB@@@@@@@@@@@@@@@@@>####@@@@@@"
  ],"Untitled-0"," Steven",
  [[],
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    "@**              @        @ ####@",
    "@**              @      @;@+####@",
    "@**  @@@@@@@@@@;;       @@ +    @",
    "@**           @@@@ii@@@ @@ +aaa @",
    "@**           @@@   @@@ @@  ### @",
    "@**p@@>>>@m   @@@  t@@@ @@  ### @",
    "@**@@@@@@@@   @@@  @@@@p@@      @",
    "@  ########   @@@  @        ### @",
    "@  ########   *ww  @        ### @",
    "@             *ww  @        ### @",
    "@@@aa######@pp@@@ii@oo@@@@@@@@@p@"
  ],"Untitled-0"," Zach",
  [[],
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    "@   *******    ss  #### wwww@    @g    @",
    "@   wwwwwww        #### @@@w@ @;;@g    @",
    "@   w#####w           # @+@w@ @***g    @",
    "@   wwwwwww    vv     # @+@w@ @***g    @",
    "@   ww####w    ##       @ @w@ @***g    @",
    "@   wwwwwww    ##       @ @ww @***g    @",
    "@   w#####w    ##       @ @@@i@***g    @",
    "@   wwwwwww    ##       @ ********g    @",
    "@ >>*******^^^^##ggg&ggp@         g    @",
    "@@@@@@@@@@@@@@@@@@@@@@@@@p@@@@@@@@@@@@@@"
  ],"Untitled-1"," Zach",
  [[],
    "ááááááááááááááá+á",
    "áááááááááááááááíá",
    "á      L   L   yá",
    "á      L >   **tá",
    "á      óy>>>&   á",
    "á  Lúóóóyý      á",
    "L    >>>        á",
    "áa>>Báááááááááááá"
  ],"Recursive Death"," Sean",
  [[],
    "@@@@@",
    "Ly  g",
    "ýy>;ý",
    "ýyágý",
    "ýyágý",
    "ýyágý",
    "ýyágý",
    "ýyágý",
    "ýyágý",
    "ýyágý",
    "@yágý",
    "@ ágý",
    "@&á+@"
  ],"Slammer"," Sean",
    [[],
    "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    "+ááááááá      u u u   uuuuuuuu@",
    "+ááááááá      u   u u uuuuuuuu@",
    "+             u u u    u u u u@",
    "+íí  í í @úúú@uuuuuuuuuuuuuuuu@",
    "@@@@@@@@@@@ó@@@@@@@@@@@@@@@@@ @",
    "L    L    á á               q @",
    "L  L L L                    q @",
    "L  L   L á á á                @",
    "BBBB>>B@@@@@@@@@@@@@@@>>>#a#<@@"
  ],"Untitled-0"," ANONYMOUS",
  [[],
    "************",
    "*yyyyyyyy*+*",
    "*yyyiyyyy*y*",
    "*yyyyyyyy*y*",
    "*yyyyyyyy*y*",
    "*yyyyyyyy*y*",
    "*yyyyyyyy*y*",
    "*yyyyyyyy*y*",
    "*yyyyyyyy*y*",
    "********p***"
  ],"Teh Bleu Levle"," Sean",
  [[{},"Welcome to the factory"],
    "`||||||||`",
    "LR||LLRee+",
    "LeeR||ReRR",
    "LBeee|eeeR",
    "LReLeeeReR",
    "LeeeLReBeR",
    "LeReeeBeeR",
    "LeBR|eeeRR",
    "LeRLBRLeeR",
    "`0BBBBBBB`"
  ],"Factoyr"," Sean",
];
var loc=window.location.pathname.slice(window.location.pathname.lastIndexOf('/',window.location.pathname.lastIndexOf('/')-1),window.location.pathname.lastIndexOf('/'));
if (loc=="/platformre"||loc=="/maker") {
  var vroom="";
  for (var i=0;i<exampleLevels.length;i+=3) {
    vroom+='<li onclick="example('+(i/3)+');">'+exampleLevels[i+1]+' by '+exampleLevels[i+2]+'</li>';
  }
  document.querySelector("#EXAMPLES").innerHTML+=vroom;
}
/* MADE BY SEAN */
