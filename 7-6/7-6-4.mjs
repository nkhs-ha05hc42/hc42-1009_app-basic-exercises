const promiseSetTimeout = (timeout) =>
    new Promise((resolve) => {
    setTimeout(() => resolve(), timeout)
    })
   const promiseTestA = async () => {
    await promiseSetTimeout(3000)
    return await Promise.resolve("test1")
   }
   const promiseTestB = async () => {
    await promiseSetTimeout(2500)
    return await Promise.resolve("test2")
   }
   const promiseA = async () => {
    const [result1, result2] = await Promise.all([promiseTestA(), promiseTestB()])
    console.log("New" + result1, "New" + result2, new Date())
   }
   console.log("start", new Date())
   promiseA()
   console.log("end", new Date())
   