export function merge(
    collection1: number[],
    collection2: number[],
    collection3: number[]
): number[] {
    const ascCollection3: number[] = [];
    for (let i = collection3.length - 1; i >= 0; i--) {
        ascCollection3.push(collection3[i]);
    }

    let i = 0,
        j = 0,
        k = 0;
    const result: number[] = [];

    while (i < collection1.length || j < collection2.length || k < ascCollection3.length) {
        const candidate1 = i < collection1.length ? collection1[i] : Infinity;
        const candidate2 = j < collection2.length ? collection2[j] : Infinity;
        const candidate3 = k < ascCollection3.length ? ascCollection3[k] : Infinity;

        if (candidate1 <= candidate2 && candidate1 <= candidate3) {
            result.push(candidate1);
            i++;
        } else if (candidate2 <= candidate1 && candidate2 <= candidate3) {
            result.push(candidate2);
            j++;
        } else {
            result.push(candidate3);
            k++;
        }
    }

    return result;
}