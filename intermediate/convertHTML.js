/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Convert HTML Entities

  instructions:

  Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
  in a string to their corresponding HTML entities.

*/

function convertHTML(str) {
  // &colon;&rpar;  
  for(let i of str) {
    switch(i) {
      case '&':
        str = str.replace(i, '&amp;');
        break;
      case '<':
        str = str.replace(i, '&lt;');
        break;
      case '>':
        str = str.replace(i, '&gt;');
        break;
      case '"':
        str = str.replace(i, '&quot;');
        break;
      case '\'':
        str = str.replace(i, '&apos;');
        break;
    }
  }
  return str;
}

// some testing
console.log(convertHTML("Dolce & Gabbana")); // should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Sixty > twelve")); // should return Sixty &​gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); // should return Stuff in &​quot;quotation marks&​quot;.
console.log(convertHTML("Shindler's List")); // should return Shindler&​apos;s List.
console.log(convertHTML("<>")); // should return &​lt;&​gt;.
console.log(convertHTML("abc")); // should return abc.