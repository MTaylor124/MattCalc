import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
export default class MattCalc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      display: "",
      lastNum: 0,
      validFirstEntry: true,
      containsDecimal: false,
      clearOnNextNumber: false,
      debug: ""
    }
  }
  checkValidity = () => {
    const testNum = this.state.display.toString()
    if (testNum.length < 10) {
      this.setState({ validFirstEntry: true })
    } else {
      this.setState({ validFirstEntry: false })
    }
  }
  checkDecimal = () => {
    if (!this.state.containsDecimal) {

    } else {

    }
  }

  onUpdateScreen = (num) => {
    const returnnum = ("" + this.state.display + num)
    this.setState({ display: returnnum })
  }
  onClearScreen = () => {
    this.setState({ display: '', debug: 'on clear screen works'})
  }


  onNumPress = num => {
    this.checkValidity()

    // if (this.state.display !== '') {
    //   this.setState({ lastNum: })
    // }

    if (this.state.validFirstEntry && this.state.clearOnNextNumber) {
        const returnnum = ("" + num)
        this.setState({ display: returnnum, clearOnNextNumber: false })
      } else {
        const returnnum = ("" + this.state.display + num)
            this.setState({ display: returnnum })
      }
}



  onPlus = () => {
    // if there is no previous number entry
    if (!this.state.lastNum) {
      this.setState({ debug: "works" })
      const toLastNumber = parseFloat(this.state.display)
      // save current number as last num and clear screen
      this.setState({ lastNum: toLastNumber, clearOnNextNumber: true })
    } else {
      const newAddition = parseFloat(this.state.display)
      const newTotal = (this.state.lastNum + newAddition)
      this.setState({ debug: "added", display: newTotal, clearOnNextNumber: true, lastNum: newTotal})
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <View><Text>{this.state.debug}</Text></View>
      <View style={styles.numberscreen}>
        <Text style={styles.numscreen2}>{this.state.display}</Text>
      </View>
      <View style={styles.middlerow}>
          <View style={styles.numboard}>
            <View style={styles.numrow}>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(7)}
                >7</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(8)}
                >8</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(9)}
                >9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numrow}>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(4)}
                >4</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(5)}
                >5</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(6)}
                >6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numrow}>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(1)}
                >1</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(2)}
                >2</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(3)}
                >3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numlastrow}>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(0)}
                >0</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                style={styles.nums}
                onPress={() => this.onNumPress(".")}
                >.</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.operatorboard}>
              <TouchableOpacity>
                <Text
                style={styles.operators}
                onPress={() => this.onPlus()}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                style={styles.operators}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                style={styles.operators}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                style={styles.operators}>*</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.enterclearrow}>
            <TouchableOpacity>
              <Text
              style={styles.enterclear}
              onPress={() => {
                this.setState({ display: "" })
              }}>clear</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
              style={styles.enterclear}
              onPress={() => {
                this.setState({ display: "", lastNum: 0 })
              }}>CE</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
              style={styles.enterclear}>Enter</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  enterclearrow: {
    flexDirection: 'row'
  },
  enterclear: {
    backgroundColor: 'teal',
    borderWidth: 2,
    borderColor: 'gray',
    color: 'white',
    borderRadius: 50,
    fontSize: 30,
    padding: 18,
    margin: 5
  },
  numscreen2: {
    fontSize: 50,
    color: 'white'
  },
  numberscreen: {
    backgroundColor: 'teal',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    color: 'white',
    width: '90%',
    height: '10%',
    borderRadius: 50
  },
  middlerow: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numboard: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  nums: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 50,
    fontSize: 40,
    padding: 25,
    color: 'white',
    backgroundColor: 'teal',
    margin: 2
  },
  numrow: {
    flexDirection: 'row'
  },
  numlastrow: {
    flexDirection: 'row',
  },
  operatorboard: {
    flexDirection: 'column'
  },
  operators: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 50,
    fontSize: 40,
    padding: 25,
    color: 'white',
    backgroundColor: 'teal',
    margin: 2
  }
});
