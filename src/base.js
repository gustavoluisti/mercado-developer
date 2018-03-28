

const config = {
    apiKey: "AIzaSyADvfIUt_5liJ9qbosi_DAhXMQisNdZvI0",
    authDomain: "mercadodev-e4369.firebaseapp.com",
    databaseURL: "https://mercadodev-e4369.firebaseio.com",
    projectId: "mercadodev-e4369",
    storageBucket: "mercadodev-e4369.appspot.com",
    messagingSenderId: "1009979116282"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()

  export default base