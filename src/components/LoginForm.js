import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Card, Button } from 'react-native-elements'
import firebase from 'firebase'; 

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      email: '',
      password: '',
    };
  }

  logIn = () => {
    let { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res);
    }).catch(err => {
      console.log(err);
      this.setState({ error: true, password: '' })
    }) 
  }

  renderValidation = () => {
    if(this.state.error) {
      return (
        <FormValidationMessage>Adresse email ou mot de passe incorrect</FormValidationMessage>
      )
    }

    return;
  }

  render() {
    return (
      <ScrollView>
        <Card 
          title="Se connecter"
        >
          <View>
            <FormLabel>Adresse email</FormLabel>
            <FormInput
              keyboardType="email-address"
              placeholder='email@email.com'
              value={this.state.email} 
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View>
            <FormLabel>Mot de passe</FormLabel>
            <FormInput
              keyboardType="default"
              secureTextEntry
              placeholder='Entrez votre mot de passe'
              value={this.state.password}
              onChangeText={password => this.setState({ password })} 
            />
          </View>
          { this.renderValidation() }
          <Button
            title="Se connecter"
            onPress={() => this.logIn()}
            backgroundColor="#3478f6"
          />
        </Card>
        <Card
          title="Pas encore de compte ?"
        >
          <Button
            title="S'inscrire"
            onPress={() => this.logIn()}
          />
        </Card>
      </ScrollView>
    );
  }
}
