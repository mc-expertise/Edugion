const express = require('express');
const server = express();
const mongoose = require('mongoose');
server.use(express.json());
const cors = require('cors');
server.use(cors());
const bcrypt = require('bcryptjs');
server.set('view engine', 'ejs');
server.use(express.urlencoded({ extended: false }));

const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const JWT_SECRET =
  'dsfjgfdkjgoisdnasdoasmlfklsdv()sdflkslds[]dsfusdhfnkjdsvvoasca';
const mongoUrl =
  'mongodb+srv://chouati99:Test1234@cluster0.vmcwmtu.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('connected to database');
  })
  .catch((er) => {
    console.log(er);
  });

require('./userDetails');
const User = mongoose.model('UserInfo');

server.post('/register', async (req, res) => {
  const { AType, email, password, cpassword, country, year, gender } = req.body;
  const encryptedPw = await bcrypt.hash(password, 10);
  const encryptedCPw = await bcrypt.hash(cpassword, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ error: 'User Exists' });
    }

    await User.create({
      AType,
      email,
      password: encryptedPw,
      cpassword: encryptedCPw,
      country,
      year,
      gender,
    });
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

server.post('/loginuser', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.send({ error: 'User Not Found' });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: 10,
    });

    if (res.status(201)) {
      return res.json({ status: 'ok', data: token });
    } else {
      return res.json({ error: 'error' });
    }
  }
  res.json({ status: 'error', error: 'Invalid Password' });
});

server.post('/userdata', async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return 'token expired';
      }
      return res;
    });
    if (user == 'token expired') {
      return res.send({ status: 'error', data: 'token expired' });
    }
    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: 'ok', data: data });
      })
      .catch((error) => {
        res.send({ status: 'error', data: error });
      });
  } catch (error) {}
});

server.post('/forget-password', async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: 'User Not Exists !!' });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: '5m',
    });
    const link = `http://localhost:4000/reset-password/${oldUser._id}/${token}`;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'youremail@gmail.com',
        pass: 'password',
      },
    });

    var mailOptions = {
      from: 'youremail@gmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: 'Click Here:',
      link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
});

server.get('/reset-password/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: 'User Not Exist !' });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render('index', { email: verify.email, status: 'Not Verified' });
  } catch (error) {
    console.log(error);
    res.send('Not Verify');
  }
});

server.post('/reset-password/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: 'User Not Exist !' });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    res.json({ status: 'Password Updated' });
    res.render('index', { email: verify.email, status: 'verified' });
  } catch (error) {
    console.log(error);
    res.json({ status: 'Something Went Wrong' });
  }
});

server.listen(4000, () => {
  console.log('server started');
});
