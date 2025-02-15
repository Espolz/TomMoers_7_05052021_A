import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '../utils/button/Button'
import ButtonLarge from '../utils/button/Button';
import TextFieldsOutlined from '../utils/button/InputPassword';
import { TextField } from '@material-ui/core';
import InputPassword from '../utils/button/InputPassword';
import './signup.scss'
import { useHistory } from 'react-router-dom';



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #fefefe',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  // input: {
  //   marginTop: 150,
  // },

}));

export default function SimpleModal({authValues, handleAuthChange, setAuthValues, text, color, variant}) {
  const history = useHistory();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const actionSignUp = e => {
    e.preventDefault();

    fetch('http://localhost:5000/accounts', {
      method: 'POST',
      headers: {
      'Content-type': 'application/json'
      },
      body: JSON.stringify(authValues)

    }).then(() => {
      handleClose();
      history.push('/Forum')
      setAuthValues({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
      });
    })
  }

  const body = (
    // <div style={modalStyle} className={classes.paper}  >
    <div className={classes.paper + ' ' + 'signup' }>
      
      <h2 id="simple-modal-title">Sign Up</h2>
      <hr className="signup--hr"/>
      <div className="signup__wrapper">
            {/* <form action="" className="auth__form"> */}
              <TextField
                className={classes.input}
                // coupler les 2 classes?
                // className="signup__wrapper--input"
                label="first-name" variant="outlined" 
                id='first-name' margin='dense'  
                type="text" 
                name="firstName" 
                className="form__inputs--input" 
                placeholder="Enter your first name"
                value= {authValues.firstName} 
                onChange={handleAuthChange}
                size="small" 
              />

              <TextField
                className="signup__wrapper--input"
                label="last-name" variant="outlined" 
                size="small" margin='dense'  
                id='last-name' 
                type="text" 
                name="lastName" 
                className="form__inputs--input" 
                placeholder="Enter your last name"
                value= {authValues.lastName}
                onChange={handleAuthChange}
              />

              <TextField
                className="signup__wrapper--input"
                label="Email" variant="outlined" 
                size="small" margin='dense'  
                id='email' 
                type="email" 
                name="email" 
                className="form__inputs--input" 
                placeholder="Enter your email"
                value= {authValues.email}
                onChange={handleAuthChange}
              />

              {/* <TextField
                className="signup__wrapper--input"
                label="Password" variant="outlined" 
                size="small" margin='dense'  
                id='password'  
                type="password" 
                name="password" 
                className="auth__inputs--input" 
                placeholder="Enter your password"
                value= {authValues.password}
                onChange={handleAuthChange}
              /> */}

              <InputPassword 
                htmlFor='password2'
                id='password'
                name='password'
                text='Password'
                
                authValues={authValues.password} 
                handleAuthChange={handleAuthChange}
                // setAuthValues={setAuthValues}
                labelWidth={80}   
              />

              <InputPassword 
                htmlFor='password2'
                id='password2'
                name='password2'
                text='Confirm password'
                
                authValues={authValues.password2} 
                handleAuthChange={handleAuthChange}
                // setAuthValues={setAuthValues}
                labelWidth={140}   
              />

              <div className="signup__wrapper--btn">
                <ButtonLarge className={classes.signupBtn} color='primary' text='Sign Up' onClick={actionSignUp}/>
              </div>
              
                
            {/* </form> */}
            
            
        </div>

    </div>
  );

  return (
    <div>
      <div className="signin__wrapper__right__form--signup">
        <Button variant={variant} color={color}  type="button" onClick={handleOpen} text={text} />
      </div>

      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
