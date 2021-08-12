import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles, palette } from '../styles/global';
import { Formik } from 'formik';

const form = { commodity: '', quantity: '', price: '' };
const handleSubmit = () => console.log('Handle submit pressed!');
const submitForm = values => console.log(values);

function CommodityScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Formik initialValues={form} onSubmit={value => submitForm(value)}>
          {props => (
            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.labelInput}>Komoditas:</Text>
                <TextInput style={styles.textInput} value={props.values.commodity} onChangeText={props.handleChange('commodity')} />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.labelInput}>Jumlah:</Text>
                <TextInput style={styles.textInput} keyboardType='number-pad' value={props.values.quantity} onChangeText={props.handleChange('quantity')} />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.labelInput}>Harga:</Text>
                <TextInput style={styles.textInput} keyboardType='number-pad' value={props.values.price} onChangeText={props.handleChange('price')} />
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                  <Text style={styles.buttonContent}>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CommodityScreen;

const styles = StyleSheet.create({
  form: {
    flex: 1
  },
  inputGroup: {
    marginVertical: 10
  },
  labelInput: { ...globalStyles.defaultText, marginVertical: 10 },
  textInput: {
    ...globalStyles.defaultText,
    borderColor: palette.dark1,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 350
  },
  button: {
    backgroundColor: palette.dark1,
    borderRadius: 10,
    marginVertical: 20,
    padding: 15,
    alignItems: 'center'
  },
  buttonContent: {
    ...globalStyles.defaultText,
    color: '#FFF'
  }
});
