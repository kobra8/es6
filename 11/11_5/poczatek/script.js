const typedArr = new Uint8Array([1, 2, 3, 4, 5, 48]);
const typedArr2 = new Float64Array([1.2, 2.5, 3, 4, 5, 48]);
console.log(typedArr);

for (const b of typedArr ) {
    console.log(b);
}
console.log(typedArr2);