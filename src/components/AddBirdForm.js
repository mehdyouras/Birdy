import React, { Component } from 'react';
import { View, Text, ScrollView, CheckBox } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Card, Button } from 'react-native-elements'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      
    };
  }

  renderValidation = () => {
    if(this.state.error) {
      return (
        <FormValidationMessage>Une erreur s'est produite</FormValidationMessage>
      )
    }

    return;
  }

  render() {
    return (
      <ScrollView>
        <Card 
          title="Ajouter une prise"
        >
          <View>
            <FormLabel>Comment a-t-il été capturé ?</FormLabel>
            <FormInput
              keyboardType="default"
              placeholder='au nid, avec filet, etc'
              value={this.state.catchType} 
              onChangeText={catchType => this.setState({ catchType })}
            />
          </View>
          <View>
            <FormLabel>Quand a-t-il été capturé ?</FormLabel>
            <FormInput
              keyboardType="default"
              placeholder='##/##/## ##:##'
              value={this.state.catchTime} 
              onChangeText={catchTime => this.setState({ catchTime })}
            />
          </View>
          <View>
            <FormLabel>Où a-t-il été capturé ?</FormLabel>
            <FormInput
              keyboardType="default"
              placeholder='## ##'
              value={this.state.catchLocation} 
              onChangeText={catchLocation => this.setState({ catchLocation })}
            />
          </View>
          <View>
            <CheckBox
              title='Sagit-il dune reprise ?'
              checked={this.state.isAlreadyCaught}
              onPress={() => this.setState({checked: !this.state.isAlreadyCaught})}
            />
          </View>
          <View>
            <FormLabel>Quel est le numéro de bague ?</FormLabel>
            <FormInput
              keyboardType="default"
              placeholder='########'
              value={this.state.birdBand} 
              onChangeText={birdBand => this.setState({ birdBand })}
            />
          </View>
          <View>
            <FormLabel>Quel est son nom latin ?</FormLabel>
            <FormInput
              keyboardType="default"
              placeholder='Columba'
              value={this.state.birdSciName} 
              onChangeText={birdSciName => this.setState({ birdSciName })}
            />
          </View>
          <View>
            <FormLabel>Quel type de bague le scientifique doit-il utiliser ?</FormLabel>
            <FormInput
              keyboardType="default"
              placeholder='Chiffré'
              value={this.state.bandType} 
              onChangeText={bandType => this.setState({ bandType })}
            />
          </View>
          <View>
            <FormLabel>Quel numéro (série) de bague ?</FormLabel>
            <FormInput
              keyboardType="numeric"
              placeholder='######'
              value={this.state.birdBand} 
              onChangeText={birdBand => this.setState({ birdBand })}
            />
          </View>
          <View>
            <FormLabel>Quelle est la longueur alaire de l’oiseau ? (en cm)</FormLabel>
            <FormInput
              keyboardType="decimal-pad"
              placeholder="17cm"
              value={this.state.birdWingLength} 
              onChangeText={birdWingLength => this.setState({ birdWingLength })}
            />
          </View>
          <View>
            <FormLabel>Quel est le poid de l’oiseau ? (en kg)</FormLabel>
            <FormInput
              keyboardType="decimal-pad"
              placeholder="1,2kg"
              value={this.state.birdWeight} 
              onChangeText={birdWeight => this.setState({ birdWeight })}
            />
          </View>
          <View>
            <FormLabel>Quelle est l'adiposité de l’oiseau ?</FormLabel>
            <FormInput
              keyboardType="decimal-pad"
              placeholder="20%"
              value={this.state.birdAdiposity} 
              onChangeText={birdAdiposity => this.setState({ birdAdiposity })}
            />
          </View>
          <View>
            <FormLabel>Quel est le sexe de l’oiseau ?</FormLabel>
            <FormInput
              keyboardType="default"
              placeholder="Femelle"
              value={this.state.birdSex} 
              onChangeText={birdSex => this.setState({ birdSex })}
            />
          </View>
          <View>
            <FormLabel>Quel est l'âge de l’oiseau ?</FormLabel>
            <FormInput
              keyboardType="default"
              placeholder="2 ans"
              value={this.state.birdAge} 
              onChangeText={birdAge => this.setState({ birdAge })}
            />
          </View>
          { this.renderValidation() }
          <Button
            title="Ajouter"
            backgroundColor="#3478f6"
          />
        </Card>
      </ScrollView>
    );
  }
}
