/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

import { composition } from "./modules/math/composition";
import { division } from "./modules/math/division";
import { multiplication } from "./modules/math/multiplication";
import { substraction } from "./modules/math/subtraction";
import { five, four, one, three, two } from "./modules/numbers/numbers";

export let a = composition(one, four);
export let b = division(four, two);
export let c = substraction(three, two);
export let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
