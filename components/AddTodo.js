import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

function AddTodo({onInsert}) {
  const [text, setText] = useState('');

  const onPress = () => {
    var space = /\s/g; // 공백체크
    inputText = text.replace(space, ""); // 입력값에서 공백 제거

    if(text == "" || inputText.length < 1){
      alert('할일을 입력하세요.')
    } else{
      onInsert(text);
      setText('');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요."
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.buttonStyle}>
          <Image source={require('../assets/icons/add_white/add_white.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#ff8a65',
    borderRadius: 24,
  },
});

export default AddTodo;