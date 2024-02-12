import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { Button } from "react-native"
import { styles } from "./CSS/Css"
import objTic from "./JSON/TicTacToe.json"
import { Alert } from "react-native"
import NavigationBar from "react-native-navbar"
import { Vibration } from "react-native"

export const TicTacToe = () => {
    const[ticTac,setticTac] = useState(objTic)
    const[data,setData] = useState('⭕')
    const[undoId,setUndoId] = useState('')
    const[hide,setHide] = useState(true)
    let rowObj = []
    let orowObj = []
    let trowObj = []
    let rrowObj = []
    let lrowObj = []
    let erowObj = []
    let frowObj = []
    let growObj = []

    function handleOnclick(index) {
      // Alert.alert('handleOnclick',index)
      setUndoId(index)
      setHide(false)
      if (data == '❌'){
        setData('⭕')
        setticTac((old) => {
          if(old.some((res) => (res.position == index))){
            return old.map((oldResult) => {
              if(oldResult.position == index){
                // Alert.alert('Inside O',index)
                  return {"position": index,
                          "value": '⭕',
                          "action": true}
              }else{
                return oldResult
              }
          })
          }
        })
      }else{
        setData('❌')
        setticTac((old) => {
          if(old.some((res) => (res.position == index))){
            return old.map((oldResult) => {
              if(oldResult.position == index){
                // Alert.alert('Inside X',index)
                  return {"position": index,
                          "value": '❌',
                          "action": true}
              }else{
                return oldResult
              }
          })
          }
        })
      }
    }

    function handleUndo(index) {
      setHide(true)
      setticTac((old) => {
        if(old.some((res) => (res.position == index))){
          return old.map((oldResult) => {
            if(oldResult.position == index){
              // Alert.alert('Inside X',index)
                return {"position": index,
                        "value": '     ',
                        "action": false}
            }else{
              return oldResult
            }
        })
        }
      })
      if(data == '❌'){
        setData('⭕')
      }else{
        setData('❌')
      }
    }

    function handleReset() {
      setticTac(objTic)
      setData('⭕')
      setHide(true)
    }

    useEffect(() => {
      ticTac.filter((fil) => {
        return fil.position == '0' || fil.position == '1' || fil.position == '2'
      }).forEach((fe) => {
        const existingItem = rowObj.find((item) => item.value === fe.value)
        if(existingItem){
          existingItem.value = fe.value
        }else{
          rowObj.push(fe.value)
        }
      })

      ticTac.filter((fil) => {
        return fil.position == '3' || fil.position == '4' || fil.position == '5'
      }).forEach((fe) => {
        const AexistingItem = orowObj.find((item) => item.value === fe.value)
        if(AexistingItem){
          AexistingItem.value = fe.value
        }else{
          orowObj.push(fe.value)
        }
      })

      ticTac.filter((fil) => {
        return fil.position == '6' || fil.position == '7' || fil.position == '8'
      }).forEach((fe) => {
        const BexistingItem = trowObj.find((item) => item.value === fe.value)
        if(BexistingItem){
          BexistingItem.value = fe.value
        }else{
          trowObj.push(fe.value)
        }
      })

      ticTac.filter((fil) => {
        return fil.position == '0' || fil.position == '4' || fil.position == '8'
      }).forEach((fe) => {
        const CexistingItem = lrowObj.find((item) => item.value === fe.value)
        if(CexistingItem){
          CexistingItem.value = fe.value
        }else{
          lrowObj.push(fe.value)
        }
      })

      ticTac.filter((fil) => {
        return fil.position == '2' || fil.position == '4' || fil.position == '6'
      }).forEach((fe) => {
        const DexistingItem = rrowObj.find((item) => item.value === fe.value)
        if(DexistingItem){
          DexistingItem.value = fe.value
        }else{
          rrowObj.push(fe.value)
        }
      })

      ticTac.filter((fil) => {
        return fil.position == '0' || fil.position == '3' || fil.position == '6'
      }).forEach((fe) => {
        const EexistingItem = erowObj.find((item) => item.value === fe.value)
        if(EexistingItem){
          EexistingItem.value = fe.value
        }else{
          erowObj.push(fe.value)
        }
      })

      ticTac.filter((fil) => {
        return fil.position == '1' || fil.position == '4' || fil.position == '7'
      }).forEach((fe) => {
        const FexistingItem = frowObj.find((item) => item.value === fe.value)
        if(FexistingItem){
          FexistingItem.value = fe.value
        }else{
          frowObj.push(fe.value)
        }
      })

      ticTac.filter((fil) => {
        return fil.position == '2' || fil.position == '5' || fil.position == '8'
      }).forEach((fe) => {
        const GexistingItem = growObj.find((item) => item.value === fe.value)
        if(GexistingItem){
          GexistingItem.value = fe.value
        }else{
          growObj.push(fe.value)
        }
      })

      if (rowObj.length == 3){
        const aValidation = rowObj.every((value, index, arr) => value === arr[0])
        if(rowObj[0] == '     ' && rowObj[1] == '     ' && rowObj[2] == '     '){
          
        }else{
          if (aValidation == true){
            Alert.alert('Game Over!!!',`The Winner🏆 is ${data}`,[{text: 'OK', onPress: () => {}}])
            setticTac(objTic)
            setData('⭕')
            setHide(true)
          }
        }
      }
      if (orowObj.length == 3){
        const bValidation = orowObj.every((value, index, arr) => value === arr[0])
        if(orowObj[0] == '     ' && orowObj[1] == '     ' && orowObj[2] == '     '){
          
        }else{
          if (bValidation == true){
            Alert.alert('Game Over!!!',`The Winner🏆 is ${data}`,[{text: 'OK', onPress: () => {}}])
            setticTac(objTic)
            setData('⭕')
            setHide(true)
          }
        }
      }
      if (trowObj.length == 3){
        const cValidation = trowObj.every((value, index, arr) => value === arr[0])
        if(trowObj[0] == '     ' && trowObj[1] == '     ' && trowObj[2] == '     '){
          
        }else{
          if (cValidation == true){
            Alert.alert('Game Over!!!',`The Winner🏆 is ${data}`,[{text: 'OK', onPress: () => {}}])
            setticTac(objTic)
            setData('⭕')
            setHide(true)
          }
        }
      }
      if (lrowObj.length == 3){
        const dValidation = lrowObj.every((value, index, arr) => value === arr[0])
        if(lrowObj[0] == '     ' && lrowObj[1] == '     ' && lrowObj[2] == '     '){
          
        }else{
          if (dValidation == true){
            Alert.alert('Game Over!!!',`The Winner🏆 is ${data}`,[{text: 'OK', onPress: () => {}}])
            setticTac(objTic)
            setData('⭕')
            setHide(true)
          }
        }
      }
      if (rrowObj.length == 3){
        const eValidation = rrowObj.every((value, index, arr) => value === arr[0])
        if(rrowObj[0] == '     ' && rrowObj[1] == '     ' && rrowObj[2] == '     '){
          
        }else{
          if (eValidation == true){
            Alert.alert('Game Over!!!',`The Winner🏆 is ${data}`,[{text: 'OK', onPress: () => {}}])
            setticTac(objTic)
            setData('⭕')
            setHide(true)
          }
        }
      }
      if (erowObj.length == 3){
        const fValidation = erowObj.every((value, index, arr) => value === arr[0])
        if(erowObj[0] == '     ' && erowObj[1] == '     ' && erowObj[2] == '     '){
          
        }else{
          if (fValidation == true){
            Alert.alert('Game Over!!!',`The Winner🏆 is ${data}`,[{text: 'OK', onPress: () => {}}])
            setticTac(objTic)
            setData('⭕')
            setHide(true)
          }
        }
      }
      if (frowObj.length == 3){
        const gValidation = frowObj.every((value, index, arr) => value === arr[0])
        if(frowObj[0] == '     ' && frowObj[1] == '     ' && frowObj[2] == '     '){
          
        }else{
          if (gValidation == true){
            Alert.alert('Game Over!!!',`The Winner🏆 is ${data}`,[{text: 'OK', onPress: () => {}}])
            setticTac(objTic)
            setData('⭕')
            setHide(true)
          }
        }
      }
      if (growObj.length == 3){
        const hValidation = growObj.every((value, index, arr) => value === arr[0])
        if(growObj[0] == '     ' && growObj[1] == '     ' && growObj[2] == '     '){
          
        }else{
          if (hValidation == true){
            Alert.alert('Game Over!!!',`The Winner🏆 is ${data}`,[{text: 'OK', onPress: () => {}}])
            setticTac(objTic)
            setData('⭕')
            setHide(true)
          }
        }
      }
      if (ticTac.some(details => (details.value == '     ')) != true){
        Alert.alert('Game Over!!!',`Match Draw.`,[{text: 'OK', onPress: () => {}}])
        setticTac(objTic)
        setData('⭕')
        setHide(true)
      }
    },[data,ticTac])

  return <>
    <View style={styles.tictac}>
      <View style={styles.tictacRow}>
      {
        ticTac.filter((fil) =>{
          return fil.position == '0' || fil.position == '1' || fil.position == '2'
        }).map((res) => {
          return<>
            <TicTacBtn title={res.value} index={res.position} handleOnclick={handleOnclick} action={res.action}/><Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          </>
        })
      }
      </View>
      <View style={styles.tictacRow}>
      {
        ticTac.filter((fil) =>{
          return fil.position == '3' || fil.position == '4' || fil.position == '5'
        }).map((res) => {
          return<>
            <TicTacBtn title={res.value} index={res.position} handleOnclick={handleOnclick} action={res.action}/><Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          </>
        })
      }
      </View>
      <View style={styles.tictacRow}>
      {
        ticTac.filter((fil) =>{
          return fil.position == '6' || fil.position == '7' || fil.position == '8'
        }).map((res) => {
          return<>
            <TicTacBtn title={res.value} index={res.position} handleOnclick={handleOnclick} action={res.action}/><Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          </>
        })
      }
      </View>
      <View style={styles.tixtacR}>
        {!hide ? <><TicTacUndo title="Undo" index={undoId} handleUndo={handleUndo}/><Text>&nbsp;</Text><Text>&nbsp;</Text></> : <></>}
        <TicTacReset title="🔁" handleReset={handleReset}/>
      </View>
    </View>
  </>
}

export const TicTacBtn = (props) => {

  const handleOnPress = () => {
    props.handleOnclick(props.index)
    // Vibration.vibrate()
  }

  return <>
  {/* #841584 */}
    <Button title={props.title} onPress={handleOnPress} disabled={props.action} color={"#a764e7"} style={styles.tictacBtn} />
  </>
}

export const TicTacUndo = (props) => {

  const handleOnPress = () => {
    props.handleUndo(props.index)
  }

  return <>
    <Button title={props.title} onPress={handleOnPress} color={"#8fce00"}/>
  </>
}

export const TicTacReset = (props) => {

  const handleOnPress = () => {
    props.handleReset(true)
  }

  return <>
    <Button title={props.title} onPress={handleOnPress} color={"#fab14c"}/>
  </>
}

export const TNavBar = () =>{

  const titleVal = {
    title: 'Tic Tac Toe',
}

  const onRightClick = {
    title: '⚗️',
    handler: () => {Alert.alert('Devloper Information🔭','Syntax Error!!!')},
}
  return <><NavigationBar title={titleVal} tintColor="black" rightButton={onRightClick}></NavigationBar></>
}