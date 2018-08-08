import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  config = {
    apiKey: "AIzaSyCenXPSzbPckEXM3K8Ykl-XbR-mHV90XEQ",
    authDomain: "ionicapp-cebf6.firebaseapp.com",
    databaseURL: "https://ionicapp-cebf6.firebaseio.com",
    projectId: "ionicapp-cebf6",
    storageBucket: "ionicapp-cebf6.appspot.com",
    messagingSenderId: "939794447505"
  };
  app=firebase.initializeApp(this.config)
  messaging = firebase.messaging()
  constructor() { }

  ngOnInit() {
    this.getPermission();
    this.receiveMessage();
  }
  getPermission() {
    this.messaging.requestPermission()
    .then(() => {
      console.log('Notification permission granted.');
      var token1=this.messaging.getToken();
      console.log(token1)
      return token1;
    })
    .then(token => {
      console.log(token)
      
    })
    .catch((err) => {
      console.log('Unable to get permission to notify.', err);
    });
  }
  receiveMessage() {
    this.messaging.onMessage((payload) => {
     console.log("Message received. ", payload);
   });

 }

}
