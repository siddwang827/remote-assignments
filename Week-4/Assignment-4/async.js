function delayedResultPromise(n1, n2, delayTime) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n1 + n2), delayTime)
    })
}
delayedResultPromise(4, 5, 3000).then(console.log)



async function main() {
    const delayResult = await delayedResultPromise(4, 5, 3000)
    console.log(delayResult)
}

main()