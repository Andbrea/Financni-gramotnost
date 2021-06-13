import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Str from './Str';
import './style.css';

const Dospělí = () => {
  return (
    <>
      <Switch>
        <Route exact={true} path="/dospeli">
          <Str
            title="Finanční gramotnost"
            path="../../assets/img/dospeli-img/FinGramo.jpg"
            className={'obrazecek'}
            altName="Dospělí"
            text="Finanční gramotnost je soubor znalostí a dovedností, které člověku umožňují porozumět financím  (chcete-li jiný termín: svět peněz.) Správně s nimi zacházet v různých životních situacích a také zabezpečit sebe i svoji rodinu. 
            Každý z nás má nějaké znalosti. I přesto je velmi důležité se nadále vzdělávat a rozšiřovat si své vědomosti. Jen tak si zajistíme, že se nám vyhnou jisté nepříjemnosti, které na nás občas číhají.
            Stále váháte a nevíte, co si pod pojmem finanční gramotnosti představit? Je to jednoduché, uvedeme Vám pár příkladů – denní nákup potravin, řešení rodinného rozpočtu od příjmu až po výdaje, pracovní smlouva, pojistné smlouvy…… a takto bychom mohli dále pokračovat. Nyní již máte reálnou představu o námi zmíněném pojmu.
            Finančně gramotný občan se orientuje v problematice peněz a cen a je schopen odpovědně spravovat osobní/rodinný rozpočet, včetně správy finančních aktiv a finančních závazků s ohledem na měnící se životní situace.
            "
          />
        </Route>
        <Route path="/dospeli/bankovkyamince">
          <Str
            title="Bankovky a mince"
            path="../../assets/img/dospeli-img/penize.jpg"
            className={'obrazecek'}
            text="Nyní se seznámíme s penězi, které dělíme na papírové (bankovky) a kovové (mince). Mezi kovové mince patří:  1 Kč , 2 Kč, 5 Kč, 10 Kč, 20 Kč, 50 Kč. Bankovky jsou v hodnotách:  100 Kč, 200 Kč, 500 Kč, 1000 Kč, 2000 Kč, 5000 Kč. 
          Zkuste si prohlédnout  jak mince tak i bankovky. Naleznete na nich ornamenty, znaky, portréty známých osobností, ochranné prvky, značky pro nevidomé. 
          Pokládáte si otázku: „Kdo jsou lidé na bankovnkách?“  Jsou to známé osobnosti, které jsou historicky významné  pro Českou republiku. Asi tušíte, že není na škodu si připomenout jejich jména:
          100 Kč 	- Karel IV. (symbol vzdělání - Karlova Univerzita)
          200 Kč	- Jan Amos Komenský (symbol vzdělání – pedagog – učebnice)
          500 Kč – Božena Němcová (česká spisovatelka, kontrast nelehkého života s romantikou)
          1000 Kč – František Palacký (český politik a historik, Kroměříž – sbírka mincí a medailí)
          2000 Kč	 - Ema Destinnová  (operní pěvkyně – hudba)
          5000 Kč – Tomáš Garrigue Masaryk (1. Československý prezident, pražské památky). 
          "
          />
        </Route>

        <Route path="/dospeli/bankovniucet">
          <Str
            title="Založení bankovního účtu"
            path="../../assets/img/dospeli-img/BankaAja.jpg"
            className={'obrazecek'}
            text="Bankovní účet představuje bezpečné uložení Vámi uložených peněžních prostředků, za které Vám banka ručí. Díky účtu můžete provádět bezhotovostní platby z účtu na účet nebo platby přes internet. 
            Základní podmínkou pro zřízení osobního bankovního účtu je dosažení věku 18 let a doložení dvou dokladů totožnosti. Tím prvním je občanský průkaz, druhý pak může být cestovní pas, rodný list, řidičský průkaz či kartička pojištěnce. 
            Jestliže žádá o účet cizinec, musí doložit cestovní pas + další osobní doklad. V případě založení studentského účtu, pak banka vyžaduje potvrzení o studiu. 
            Dalším krokem je vložení první částky na účet."
          />
        </Route>

        <Route path="/dospeli/platebnikarta">
          <Str
            title="Platební karty"
            path="../../assets/img/dospeli-img/PlatKar.jpg"
            className={'obrazecek'}
            text="Jsou malé plastové karty určené k bezhotovostním platbám. Nejčastěji jsou vydávány bankou fyzickým i právnickým osobám. První platební karta v Československu byla použita v roce 1988.  
            Z pohledu držitele platební karta usnadňuje placení bez nutnosti mít u sebe jakoukoliv finanční hotovost. Mohou s ní být spojeny i další služby a výhody.
            Největší společnosti, které vydávají platební karty jsou: Diners Club, Visa, MasterCard, American Express, JCB, China UnionPay atd.
            Po celé České republice jsou rozmístěny bankomaty, které vlastní banka. Bankomat je samoobslužné zařízení, které vydává držitelům platebních karet peněžní hotovost a nově dokonce i umožňuje další služby. 
            "
          />
        </Route>

        <Route path="/dospeli/studiumverzusprace">
          <Str
            title="Studium versus práce"
            path="../../assets/img/dospeli-img/AcoBudeDal.jpg"
            className={'obrazecek'}
            text="Každý máme možnost studovat neomezeně. V České republice je velké množství státních škol, které nejsou zpoplatněné a je také možnost využít stipendia. Samozřejmě pokud máte zájem o soukromou školu, je potřeba počítat s vysokými měsíčními náklady, které rapidně zatíží rodinný rozpočet!  Je na zvážení každého, zda vystuduje střední školu či učiliště a nad to i jazykovou školu případně vysokou školu. Doporučujeme Vám vystudovat dva různé obory, které Vám zajistí širší možnost uplatnění.
            Jestliže máte již dostudováno a těšíte se do práce, protože se chcete osamostatnit od rodičů, tak si pořádně rozmyslete své budoucí kroky! Vstupem do pracovního sektoru se Vám změní celý Váš svět. Musíte si řádně rozmýšlet Váše kroky. V práci Vás čeká celá řada nových zkušeností a povinností. Musíte si hlídat spoustu informací a umět si je vyhledat sami. Velká výhoda je, pokud se můžete zeptat rodiču a čerpat z jejich zkušeností a letité praxe. 
            Pomoc při hledání práce Vám může nabídnout pracovní úřad, Vaši známí či internet. 
            "
          />
        </Route>

        <Route path="/dospeli/prvniprace">
          <Str
            title="První práce"
            path="../../assets/img/dospeli-img/PrvniPrace.jpg"
            className={'obrazecek'}
            text="Máte tedy za sebou školní docházku a už se těšíte do práce. Je dobře být nadšený a plný energie. Čekají Vás různé pohovory a jednání s Vaším budoucím zaměstnavatelem. Hned na začátku si vše ujasněte, co očekáváte od svého zaměstnavatele a jakou chcete práci. Tuto domluvu je dobré mít sepsanou v pracovní smlouvě, kde se vše specifikuje od délky pracovní doby až po Vaši výplatu. NIKDY NIKDE NEPRACUJTE BEZ PRACOVNÍ SMLOVY!
            Váš budoucí zaměstnavatel Vám dal svoji důvěru a nyní je na Vás se poprat s příchozími výzvami! Nebudeme Vám lhát, že vše je vždy jen příjemné a lehké. 
            V novém prostředí si budete muset zvyknout. Máte kolem sebe nové tváře (kolegy). Získáváte zkušenosti a praxi. Pokud se Vám nedaří  tak nezoufejte. Každá zkušenost je pro Vás přínosem i když to tak ze začátku nevypadá. 
            "
          />
        </Route>

        <Route path="/dospeli/vaseprvnivyplata">
          <Str
            title="Vaše první výplata"
            path="../../assets/img/dospeli-img/financniPlan.jpg"
            className={'obrazecek'}
            text="Svoji první výplatu dostanete, jakmile odpracujete pro svého zaměstnavatele určitý počet pracovních dnů. Vaše výplata Vám bude zaslána následující měsíc. Je tedy nutné počítat s nějakým časovým posunem tz. že je velmi dobrá praxe neutrácet peníze, které zatím nemám na svém bankovním účtě! Jestliže peníze utratíte dříve než je máte, může se Vám lehce stát, že s penězi pak nevýjdete do další výplaty. 
            Z Vaši výplaty se strhávájí peníze na sociální pojištění, zdravotní pojištění.  V neposlední řadě je také Vaše výplata zdaněna.  Zdaněnou částku z výplaty si bere stát, který dále s touto sumou hospodaří. 
            K čemu slouží sociální pojištění? Je to druh finančního pojištění, které slouží k zajištění důstojných podmínek pro život všech občanů a to v reakci na nepříznivé sociální události. Těmi může být nemoc, invalidita, nezaměstnanost, chudoba či důchod.
            Zdravotní pojištění pro změnu slouží jako podpora pro případ nemoci, kdy se pojištěnci hradí potřebná zdravotní péče v rozsahu stanoveném zákonem. 
            "
          />
        </Route>

        <Route path="/dospeli/dobrarada">
          <Str
            title="Dobrá rada"
            path="../../assets/img/dospeli-img/Premysleni.jpg"
            className={'obrazecek'}
            text="I z malého platu můžete začít šetřit! Máme pro Vás dobrou radu, jak chytře rozdělit svoje peníze. Vaši výplatu si rozdělíte v poměru 7:2:1. To znamená, že 70% z Vaší výplaty půjde na nutné výdaje – platba za bydlení, různé poplatky, nákup potravin, drogerie. Druhá část, tedy 20 % z Vaší výplaty jsou peníze, které byste měli využít jako finanční rezervu pro případ nenadálé situace například nefunkčního počítače. Zbylých 10% je finanční částka, kterou můžete utratit dle vlastního uvážení za cokoliv po čem toužíte!
            "
          />
        </Route>

        <Route path="/dospeli/bydleniaplatby">
          <Str
            title="Bydlení a různé platby"
            path="../../assets/img/dospeli-img/Rozpocet.jpg"
            className={'obrazecek'}
            text="Teď nám doopravdy začínají starosti. Už máme svoji první práci a nyní chcete řešit své bydlení. Pokud se dohodnete s rodiči, že budete nadále bydlet s nimi a oni akceptují Vaši přítomnost, tak máte napůl vyhráno. Vaše náklady na bydlení a ostatní poplatky budou nižší. Je dobrým zvykem rodičům přispívat na chod domácnosti. Jen tak se naučíte, že nemáte celou výplatu jen pro sebe! Toto je správná cesta, jak hospodařit se svým rozpočtem!
            Jestliže se rozhodnete, že se chcete osamostatnit a najít si pronájem, tak se připravte, že Vás to bude něco stát. V začátcích to bude velmi náročné a budete doslova muset počítat s každou korunou! Už budete muset platit za nájem bytu, spotřebu vody, plynu, elektřiny, za používání internetu a nákup drogistického zboží. Poplatky za používání televize, rádia a za odpad.  Další velkou položkou ve Vašich výdajích je nákup potravin. Zřejmě jste vyděšeni, co vše Vás čeká! Ale nebojte se, i naši rodiče se umění hospodařit s penězi museli naučit a zvládli to.
            "
          />
        </Route>

        <Route path="/dospeli/reklamaapravda">
          <Str
            title="Reklamy a pravda"
            path="../../assets/img/dospeli-img/budoucnost.jpg"
            className={'obrazecek'}
            text="Velmi důležité je si uvědomit, že reklama vznikla kvůli tomu, aby prodejce mohl prezentovat své výrobky a služby. Ne vždy je reklama pravdivá. Je na zvážení každého z nás, zda podlehneme kouzlu (manipulace) či ne! 
            Jsou firmy, které se snaží za každou cenu prodat cokoliv a kdykoliv. Abyste si ušetřili pád a bolestné zjištění, že jste byli napáleni, zjistěte si napřed co nejvíce informací o produktu či službě, která je nabízena v dotyčné reklamě. 
            Ideální je zadat si recenze na internetu a přečíst si názor jiných, kteří již měli možnost zhodnotit prezentované výrobky a služby v dotyčné reklamě.
            "
          />
        </Route>

        <Route path="/dospeli/pujckaadluhy">
          <Str
            title="Půjčky a dluhy"
            path="../../assets/img/dospeli-img/UzRozumim.jpg"
            className={'obrazecek'}
            text="V tomto případě bychom Vás chtěli varovat. Musíte být obezřetní při výběru půjčky (úvěru). Každá půjčka se platí v pravidelných měsíčních splátkách. O tuto částku se Vám sníží Váš měšíční rozpočet. Při nevhodně zvolené půjčce se Vám může lehce stát, že nebude schopni splácet a dostanete se do finanční tísně!
            Doporučili bychom Vám, postupně si na danou věc odkládat určitý finanční obnos (abyste si ji mohli pořídit), než si vzít nevhodný úvěr.           
            "
          />
        </Route>
      </Switch>
    </>
  );
};

export default Dospělí;
