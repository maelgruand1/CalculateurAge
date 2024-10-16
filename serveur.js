const req = new Request(`${BASE_URL}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": credentials.name,
        "email": credentials.email,
        "password": credentials.password,
      }),
    });
const response = await fetch(req).catch(e=>{console.warn(e); return null;});
if(response) {
    //rest of your code
}
