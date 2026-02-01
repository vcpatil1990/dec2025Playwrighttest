const { test, expect } = require('@playwright/test')
var userid
test('Get Data[GET method]', async ({ request }) => {

    const response = await request.get("https://api.restful-api.dev/objects/13");

    console.log(await response.json());
    expect(response.status()).toBe(200);

})


test('Create Data[Post method]', async ({ request }) => {
    const response = await request.post("https://api.restful-api.dev/objects",
        {
            data: {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2000,
                    "price": 1849.00,
                    "CPU model": "Intel Core i10",
                    "Hard disk size": "1 TB"
                }
            }, headers: {
                "Accept": "Application/json"
            }
        });
    console.log(await response.json());
    expect(response.status()).toBe(200);
    var res = await response.json();
    userid = res.id;
    console.log(userid)

})
test('Update Data[put method]', async ({ request }) => {
    const response = await request.put("https://api.restful-api.dev/objects/"+"ff8081819782e69e019bcefff8ab702b",
        {
            data: {
                "name": "Vivo v50",
                "data": {
                    "year": 2050,
                    "price": 50000,
                    "CPU model": "Intel Core i15",
                    "Hard disk size": "5 TB",
                    "color":"red",
                    "city":"Pune",
                }
            }, headers: {
                "Accept": "Application/json"                                                                    
            }
        });
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test('Delete Data[Delete method]', async ({ request }) => {

    const response = await request.delete("https://api.restful-api.dev/objects/"+"ff8081819782e69e019bcefff8ab702b");

    //console.log(await response.json());
    expect(response.status()).toBe(200);

})