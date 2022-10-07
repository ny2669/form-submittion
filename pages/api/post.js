
export default function handler(req, res) { 

   

   
if(req.method === 'POST'){

  const reqPayLoad = req.body.payLoad;

  const newAvatar = {

    id: Date.now(),
    text: reqPayLoad
  }

  return res.status(201).json({newAvatar})

 

}





  }