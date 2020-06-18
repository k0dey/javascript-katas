function equalSlices(total, recipients, slices) {
    
    let slicesNeeded = recipients * slices;
    if (recipients === 0) {
        return `There's nobody here, pal. It's all yours.`
    }
    else if (total >= slicesNeeded) {
        let remainingSlices = total % slicesNeeded;
        return `You can ABSOLUTELY give ${recipients} people ${slices} slices each, with ${remainingSlices} left over.`
    } else {
        let alternativeRemaining = total % recipients;
        let alternativeSlices = (total - alternativeRemaining) / recipients;
        return `That's a no go, bud. But you CAN do ${alternativeSlices} each, with ${alternativeRemaining} slices left over.`
    }
}

console.log(equalSlices(11, 5, 3)); // false
console.log(equalSlices(8, 3, 2)); // true
console.log(equalSlices(24, 12, 2)); // true
console.log(equalSlices(8, 3, 3)); // false 
console.log(equalSlices(8, 0, 3)); // true 
