const objectArray6_5_5 = [
    {
    key: "A",
    value: "中山",
    },
    {
    key: "B",
    value: "小澤",
    },
    {
    key: "C",
    value: "前澤"
    }
    ]
    const objectArray6_6_5 = new Map(objectArray6_5_5.map(object => [object.key, object.value]))
    for (const [key, value] of objectArray6_6_5) {
    console.log(key, value)
    }
    