//------ str-length and at ------//
const first = 'Life, the universe and everything' ;
console.log(first.length,first[3]);
//------ str-slice ------//
const slice = 'Life, the universe and everything' ;
console.log(/* slice.slice(5,18) *//* slice.slice(5) *//* slice.slice(-10) */slice.slice(-15,-10));
//------ str-subString and substr -------//
const subStr = 'Life, the universe and everything' ;
console.log(/* subStr.substring(6, 18) *//* subStr.substr(6, 13) *//* subStr.substring(6) */subStr.substr(-10));
//------ str-replace ------//
const replace = 'Life, the universe and everything. This universe axis the people life' ;
console.log(replace.replace(/* "universe","world" *//* /universe/i,"world" *//universe/g,"world"));
//----- str-replaceAll -----//
const replaceAll = 'If life, the universe and everything. This universe axis the people life' ;
console.log(replaceAll.replaceAll(/* "life","your life" *//life/g,"your life"));
//----- str-uppercase-lowercase------//
const uppercase = 'If LIFE, the universe and everything. This universe axis the people life' ;
console.log(uppercase/* .toUpperCase() */.toLowerCase());
//----- str-concat -----//
const concat = 'If LIFE, the universe and everything. This universe axis the people life' ;
console.log(concat.concat(" ","Thank You"));
//----- trim-trimstart-trimend -----//
const trim = "  Hello World.  ";
console.log(trim);
console.log(/* trim.trim() *//* trim.trimStart() */trim.trimEnd());
//----- padsart-padend -----//
const pad="5";
console.log(pad/* .padStart(6,"hello") */.padEnd(6,"hello"));
//----- to-string -----//
const num=5;
console.log(num.toString(),Number(num));
//----- split -----//
const split = 'If LIFE, the universe and everything. This universe axis the people life|LIFE' ;
console.log(split.split(/* "|" *//* "," */" "));
//----- indexOf and lastIndexOf -----//
const index = 'If LIFE, the universe and everything. This universe axis the people life' ;
console.log(index/* .indexOf("the") *//* .lastIndexOf("the") *//* .indexOf("the",20) */.lastIndexOf("the",20));
//----- search -----//
const search = 'If LIFE, the universe and everything. This universe axis the people life';
console.log(search/* .search("axis") */.search(/axis/));
//----- match-matchall -----//
const match = 'Life, the universe and everything. This universe axis the people life' ;
console.log(match.match(/* "the" *//* /the/ *//the/g));
/* console.log(match.matchAll("universe")); */ //------- doubt -------//
//----- includes -----//
const includes = 'Life, the universe and everything. This universe axis the people life' ;
console.log(includes.includes(/* "the" */"the",50));
//----- startswith-endswith -----//
const starts = 'Life, the universe and everything. This universe axis the people life' ;
console.log(starts/* .startsWith("Life") */.endsWith("life"));


