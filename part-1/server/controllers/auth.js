const bcrypt = require('bcryptjs');

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      
      const { username, password } = req.body
      console.log('username: ',username);
      console.log(users);
      const salt = bcrypt.genSaltSync(5);
      const passHash = bcrypt.hashSync(password, salt); 
      for (let i = 0; i < users.length; i++) {
        if (username === users[i].username){
          // console.log(users[i]);
            let matched = bcrypt.compareSync(password, users[i].password);
            if (matched){
              const secureLogin = {...users[i]};
              delete secureLogin.password;
              console.log('hfds', secureLogin);
              return res.status(200).send(secureLogin);
            }
          }
        // if (users[i].username === username && users[i].password === password) {
        //   res.status(200).send(users[i])
        // }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        const { username, email, firstName, lastName, password } = req.body;

        const salt = bcrypt.genSaltSync(5);
        const passHash = bcrypt.hashSync(password, salt);

        const newRegister = {
          username,
          email,
          firstName,
          lastName,
          password: passHash
        }
        console.log(newRegister)
        users.push(newRegister)
        res.status(200).send(newRegister);
    }
}