import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import paypallogo from './Images/paypallogo.png';
import Paper from 'material-ui/Paper';
import paypal from './Images/paypal.png'

const paperStyle = {
  color: 'rgba(0, 0, 0, 0.87)',
  backgroundColor: 'rgb(255, 255, 255)',
  boxSizing: 'border-box',
  fontFamily: 'Roboto, sans-serif',
  borderRadius: '0px',
  height: '350px',
  width: '290px',
  marginTop: '61px',
  //marginBottom: '100px',
    position: 'relative',
  marginLeft: '100px'
};

const styleCardMedia = {
  height: '170px',
};

const styleCardHeaderText = {
  backgroundColor: 'white',
  marginTop: '40px',
  paddingRight: '0px',
};

const styleCardHeaderTitle ={
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '25px',
};

const styleAvatar = {
  border : '3px solid white'
};

const styleLabel = {
  color: '#657786',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '.02em',
    lineHeight: '16px',
    textTransform: 'capitalize',
    
};

const styleCardActions = {
  padding: '0px'
};

const ProfileC = () => (
  //<Paper style={paperStyle}>
  <Card style ={paperStyle}>
    <CardMedia style ={styleCardMedia}>
      <img src={paypal} alt="" />
    </CardMedia>
    <CardHeader textStyle={styleCardHeaderText} titleStyle={styleCardHeaderTitle}
      title="Company"
      subtitle="Online Payment Systems"
      avatar = {<Avatar src={paypallogo} size={70} style={styleAvatar}/>}
    />
    <CardActions style={styleCardActions}>
      
    </CardActions>
  </Card>
  //</Paper>
);

export default ProfileC;