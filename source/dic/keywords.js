var dic={}; var subs={}; var filters={};

subs.adj=["normal","ness"];
filters.adj=["appearance","nationality","emotion","weather"];
filters.adv=["sexy","emotion"];
subs.color=["ish"];
filters.color=["primary","secondary"];
filters.country=["asia","middleeast","mediterranean","europe","southamerica","oceania","northamerica","africa","centralamerica","caribbean","eurasia"];
subs.name=["abbr"];
filters.name=["male"];
subs.noun=["singular","plural"];
filters.noun=["body","hole","person","sex","weapon","animal","tool","food","drug","article","fruit","container","furniture","instrument","plant","shape","ball","surface","long","round","clothes","vehicle","insect"];
subs.sound=["singular","plural"];
subs.place=["singular","plural"];
filters.place=["building","indoor","natural","outdoor"];
filters.prefix=["position","quantity","scale","anatomy"];
filters.prepos=["space","time"];
subs.pron=["obj","nom","self","poss","s"];
filters.pron=["male","female"];
subs.quality=["property","more","less","est"];
filters.quality=["physical","human"];
subs.rel=["singular","plural"];
filters.rel=["male","female","neutral"];
filters.substance=["liquid"];
filters.timeadv=["time","past","present","frequency"];
subs.timenoun=["singular","plural"];
filters.timenoun=["timeofday","dayofweek","month","holiday","unit"];
subs.unit=["singular","plural","abbr"];
filters.unit=["length","small","factor","large","weight","volume","pressure","energy","potential","capacitance","current","power","inductance"];
subs.verbimg=["normal","ing","ed","s","er"];
subs.say=["simple","ing","ed","s","er","pp","noun"];
subs.verb=["simple","ing","ed","s","er","pp","noun"];
filters.verb=["transitive","walk","intransitive","sex","pose","eat","liquid","motion","insert","violent","political","legal","move"];
var valid_keys=["activity", "adj", "adv", "color", "conj", "country", "emo", "em", "x", "face", "name", "greet", "surname", "noun", "sound", "title", "place", "prefix", "prepos", "pron", "quality", "rel", "sconj", "substance", "timeadv", "timenoun", "unit", "verbimg", "say", "verb", "vocal", "with", "yn"];
