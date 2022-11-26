const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/days`


const create = async (dayData) => {
  // blogData will have a shape of:
//   {
//     "title": "string",
//     "category": "string",
//     "text": "string"
//   }
  try {
    // POST http://localhost:3001/api/blogs
    const res = await fetch(BASE_URL, {
      method: 'POST',
      // headers: {
      //   "Authorization": `Bearer ${tokenService.getToken()}`,
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify(dayData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  create
}