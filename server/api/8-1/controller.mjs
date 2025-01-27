const post8_1 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "success" }))
   }

   const get8_1 = (req, res) => {
    res.send(
        JSON.stringify({
            "code": "HC42-9811",
            "name": "情報太郎",
        }),
    )
   }   
   export const q8_1Controller = {
    post8_1,
    get8_1,
   }
   