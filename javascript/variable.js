// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
'use strict'


/*
    // 2. Variable
    // let (added in ES 6)
    // 값을 변경 할 수 있음 (mutable)
    // let name = 'jang';
    // console.log(name);
    // name = 'hello';
    // console.log(name);
 */

// Global Scope
let globalName = 'global name';

// Block scope
{
    let name = 'jang';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name) // return empty
console.log(globalName);
/*
    //var (don't ever use this!)
    //var hoisting (move declartion form bottom to top)  var 호이스팅 발생
    console.log(age);
    age = 4;
    console.log(age);
    var age;

    //block scope을 무시함
    {
        age  =4;
        var age;
    }
    console.log(age);
*/


/* 
    // 3. constants
    // const
    // 값을 변경 할 수 없음(immutable).
    // favor immutable data type always for a few reasons :
    //  - security 값을 변경 할 수 없기 때문에 보안에 유익
    //  - thread safety 안전한 쓰레드 처리
    //  - reduce human mistakes 협업자 간의 실수 방지
 */    
const daysInWeek = 7;
const maxNumber = 5;

/* 
    // 4. Variable types
    // primitive, single item : number, string, boolean, null, undefined, symbol
    // object, box container
    // function (first-class function)
    // first-class function이 지원된다는것은? : function도 다른 데이터 타입처럼 변수에 할당이 가능하고, 다른 함수에 인자로 전달이  가능하고, 함수에서 return type으로도 function을 return 할 수 있는것이 가능하다.
 */
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speical numberic values :  infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  // template literals  (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead  = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; // 선언 후 비어있는..
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined // 선언은 되었지만 비어있는지 어떤 값이 들어가 있는지 모름..
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, creatte unique identifiers for objects (고유한 식별자가 필요 할 때)
const symbol1 =  Symbol('id');
const symbol2 =  Symbol('id');
console.log(symbol1 === symbol2); // false
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
const gSymbol1 =  Symbol.for('id');
const gSymbol2 =  Symbol.for('id');
console.log(gSymbol1 === gSymbol2) // true

// object, real-life object, data structure
const jang = {name: 'jang', age: 41};
console.log(jang);
// jang = {}  => error
jang.name = 'jae-wan';
console.log(jang);


/* 
    // 5. Dynamic typing: dynamically typed language
*/
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // error