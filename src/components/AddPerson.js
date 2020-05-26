import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

function AddPerson(props) {
  return (
    <View>
      <Text>Add person screen</Text>
    </View>
  );
}

AddPerson.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name={'plus'} size={50} color={tintColor} />
  ),
};

export default connect(null, actions)(AddPerson);
